<script setup>
import Sidebar from './inc/sidebar.vue'
import Navbar from './inc/navbar.vue'
import Footer from './inc/footer.vue'
</script>

<template>
    <div class="layout-wrapper layout-content-navbar" id="app">
        <div class="layout-container">
            <Sidebar />

            <div class="layout-page">
                <Navbar />

                <div class="content-wrapper">

                    <div class="container-xxl flex-grow-1 container-p-y">
                        <router-view></router-view>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>

        <div class="layout-overlay layout-menu-toggle"></div>
    </div>
</template>
