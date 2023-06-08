<template>
    <h1>Hello world 111111111111. {{ name }}</h1>
    <Test name="Md. Safiull Alam" />
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
