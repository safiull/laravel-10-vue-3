<script setup>
const props = defineProps(['name'])

console.log(props.name)
</script>

<template>
    <div class="w-full max-w-xs">
        <form class="bg-white rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="username"
                >
                    Select Division {{ name }}
                </label>
                <select name="" id="" class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="1">Dhaka</option>
                    <option value="1">Rangpur</option>
                    <option value="1">Khulna</option>
                    <option value="1">Barishal</option>
                </select>
            </div>
            <div class="mb-6">
                <label
                    class="block text-gray-700 text-sm font-bold mb-2"
                    for="password"
                >
                    Select Districts
                </label>
                <select name="" id="" class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline">
                    <option value="1">Narayanganj</option>
                    <option value="1">Dhaka</option>
                    <option value="1">Kishorganj</option>
                    <option value="1">Cumilla</option>
                </select>
            </div>

            <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-dark py-2 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
            </div>
        </form>
    </div>
</template>
