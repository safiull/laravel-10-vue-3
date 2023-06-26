<template>
    <div class="row mx-2 justify-content-center">
        <div class="col-sm-12 col-md-6">
            <nav aria-label="Page navigation">
                <ul class="pagination pagination-sm">
                    <li
                        class="page-item prev"
                        @click="changePage(currentPage - 1)"
                        v-if="currentPage > 1"
                    >
                        <a class="page-link" href="javascript:void(0);"
                            ><i class="tf-icon bx bx-chevrons-left"></i
                        ></a>
                    </li>
                    <li
                        class="page-item"
                        v-for="page in pages"
                        :key="page"
                        @click="changePage(page)"
                        :class="{ active: page === currentPage }"
                    >
                        <a class="page-link" href="javascript:void(0);">{{ page }}</a>
                    </li>
                    <li
                        class="page-item next"
                        @click="changePage(currentPage + 1)"
                        v-if="currentPage < totalPages"
                    >
                        <a class="page-link" href="javascript:void(0);"
                            ><i class="tf-icon bx bx-chevrons-right"></i
                        ></a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import { ref, computed, watch } from "vue";

export default {
    props: {
        totalPages: {
            type: Number,
            required: true,
        },
    },
    emits: ["page-change"],
    setup(props, { emit }) {
        const currentPage = ref(1);

        const pages = computed(() => {
            const pagesArr = [];
            for (let i = 1; i <= props.totalPages; i++) {
                pagesArr.push(i);
            }
            return pagesArr;
        });

        const changePage = (page) => {
            currentPage.value = page;
            emit("page-change", page);
        };

        // Reset current page when total pages change
        watch(
            () => props.totalPages,
            () => {
                currentPage.value = 1;
            }
        );

        return {
            currentPage,
            pages,
            changePage,
        };
    },
};
</script>

<style>
.pagination {
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.pagination button {
    padding: 5px 10px;
    margin: 0 5px;
    border: none;
    background-color: #f2f2f2;
    cursor: pointer;
}

.pagination button.active {
    background-color: #999;
    color: #fff;
}
</style>
