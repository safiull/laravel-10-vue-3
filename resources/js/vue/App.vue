<template>
    <h1>Hello world 111111111111. {{ name }}</h1>
    <Test name="Ms. Safiull" />
</template>

<script>
import Test from './test.vue'

export default {
    props: ['name'],
    components: {
        Test,
    },
};
</script>
