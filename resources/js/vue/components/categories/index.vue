<template>
    <div class="row">
        <div class="col-12">
            <div class="row justify-content-between mb-1">
                <div class="col">
                    <h5>Dashboard / Categories List</h5>
                </div>
                <div class="col text-end">
                    <router-link :to="{ name: 'categories.create' }" class="btn btn-sm btn-primary"><i class='bx bx-plus-circle'></i> Add New</router-link>
                </div>
            </div>
            <div class="card">
                <h5 class="card-header">Categories List</h5>
                <div class="table-responsive text-nowrap">
                    <table class="table">
                        <thead class="table-light">
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody class="table-border-bottom-0">
                            <tr>
                                <td>
                                    <i
                                        class="fab fa-angular fa-lg text-danger me-3"
                                    ></i>
                                    <strong>Angular Project</strong>
                                </td>
                                <td>Albert Cook</td>
                                <td>
                                    <span class="badge bg-label-primary me-1"
                                        >Active</span
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
                                            <a
                                                class="dropdown-item"
                                                href="javascript:void(0);"
                                                ><i
                                                    class="bx bx-edit-alt me-1"
                                                ></i>
                                                Edit</a
                                            >
                                            <a
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
            </div>
        </div>
    </div>
</template>
