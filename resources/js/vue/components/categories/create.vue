<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';
import { defineRule, Form, Field, ErrorMessage } from 'vee-validate';
import { required, min } from '@vee-validate/rules';
import { useCategoryStore } from './../../stores/categories';

// const categoryStore = useCategoryStore();

defineRule('required', required);
defineRule('min', min);

const router = useRouter()

const formData = ref({
    name: "",
    status: "",
    description: "",
});

function submitForm() {
    axios.post('/api/categories', formData.value)
    .then(res => {
        // categoryStore.addCategory(res.data);
        toastr.success(res.data)
        router.push('/categories');
    })
    .catch(error => {
        console.log(error)
        toastr.error(error.data)
    })
}

</script>

<template>
    <div class="row">
        <div class="col-12">
            <div class="row justify-content-between mb-1">
                <div class="col">
                    <h5>Dashboard / Add new category</h5>
                </div>
                <div class="col text-end">
                    <router-link
                        :to="{ name: 'categories.index' }"
                        class="btn btn-sm btn-primary"
                        ><i class="bx bx-list-ul"></i> View List</router-link
                    >
                </div>
            </div>
            <div class="card mb-4">
                <div
                    class="card-header d-flex justify-content-between align-items-center"
                >
                    <h5 class="mb-0">Add new category</h5>
                </div>
                <div class="card-body">
                    <Form @submit="submitForm()">
                        <div class="mb-3">
                            <label
                                class="form-label"
                                for="basic-default-fullname"
                                >Category name</label
                            >
                            <Field
                                rules="required|min:4"
                                type="text"
                                v-model="formData.name"
                                name="Name"
                                class="form-control"
                                id="basic-default-fullname"
                                placeholder="John Doe"
                            />
                            <ErrorMessage class="text-danger" name="Name" />
                        </div>

                        <div class="mb-3">
                            <label for="status">Status</label>
                            <select v-model="formData.status" id="status" class="form-control">
                                <option value="">Select Status</option>
                                <option value="1">Active</option>
                                <option value="0">InActive</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label
                                class="form-label"
                                for="basic-default-message"
                                >Description</label
                            >
                            <textarea
                                v-model="formData.description"
                                id="basic-default-message"
                                class="form-control"
                                placeholder="Hi, Do you have a moment to talk Joe?"
                            ></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary btn-sm text-end">
                            <i class="bx bx-save"></i> Save
                        </button>
                    </Form>
                </div>
            </div>
        </div>
    </div>
</template>
