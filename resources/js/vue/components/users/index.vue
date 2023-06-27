<template>
    <h1 class="text-warning">I'm from the Users bro.</h1>
    <pre>{{ usersStore.users }}</pre>
</template>

<script setup>
import { useUsersStore } from '@/stores/UserStore'
const usersStore = useUsersStore();
</script>
