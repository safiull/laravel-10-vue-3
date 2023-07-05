<template>
    <div class="row">
        <div class="col-12">
            <div class="row justify-content-between mb-1">
                <div class="col">
                    <h5>Dashboard / Categories List</h5>
                </div>
                <div class="col text-end">
                    <router-link
                        :to="{ name: 'categories.create' }"
                        class="btn btn-sm btn-primary"
                        ><i class="bx bx-plus-circle"></i> Add New</router-link
                    >
                </div>
            </div>
            <div class="card">
                <h5 class="card-header">Categories List</h5>
                <div class="table-responsive text-nowrap">
                    <table class="table pb-5">
                        <thead class="table-light">
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody class="table-border-bottom-0">
                            <tr
                                v-for="category in categoriesStore.categories"
                                :key="category.id"
                            >
                                <td>
                                    <i
                                        class="fab fa-angular fa-lg text-danger me-3"
                                    ></i>
                                    <strong>{{ category.name }}</strong>
                                </td>
                                <td>{{ category.description }}</td>
                                <td>
                                    <span
                                        v-if="category.status == 1"
                                        class="badge bg-label-primary me-1"
                                        >Active</span
                                    >
                                    <span
                                        v-if="category.status == 0"
                                        class="badge bg-label-danger me-1"
                                        >InActive</span
                                    >
                                </td>
                                <td>
                                    <div class="dropdown">
                                        <button
                                            type="button"
                                            class="btn p-0 dropdown-toggle hide-arrow"
                                            data-bs-toggle="dropdown"
                                        >
                                            <i
                                                class="bx bx-dots-vertical-rounded"
                                            ></i>
                                        </button>
                                        <div class="dropdown-menu">
                                            <router-link
                                                class="dropdown-item"
                                                :to="{
                                                    name: 'categories.edit',
                                                    params: { id: category.id },
                                                }"
                                                ><i
                                                    class="bx bx-edit-alt me-1"
                                                ></i>
                                                Edit</router-link
                                            >
                                            <a
                                                @click="deleteItem(category.id)"
                                                class="dropdown-item"
                                                href="javascript:void(0);"
                                                ><i
                                                    class="bx bx-trash me-1"
                                                ></i>
                                                Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Pagination
                    :total-pages="categoriesStore.totalPages"
                    @page-change="fetchData"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from "vue";
import Pagination from "./../pagination.vue";
import { useCategoriesStore } from "@/stores/CategoriesStore";

const categoriesStore = useCategoriesStore();

const fetchData = (page) => {
    clientApi
        .get("/api/categories", {
            params: { page },
        })
        .then((res) => {
            categoriesStore.categories = res.data.data;
            categoriesStore.totalPages = res.data.last_page;
        });
};

onMounted(() => {
    if (categoriesStore.categories.length === 0) {
        fetchData(categoriesStore.currentPage);
    }
});

function deleteItem(id) {
    clientApi.delete(`/api/categories/${id}`).then((res) => {
        categoriesStore.categories = categoriesStore.categories.filter((category) =>
            category.id !== id
        );
    });
}
</script>
