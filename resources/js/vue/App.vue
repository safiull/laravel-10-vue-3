<script setup>
import Sidebar from './components/layouts/sidebar.vue'
import Navbar from './components/layouts/navbar.vue'
import Footer from './components/layouts/footer.vue'
</script>

<template>
    <div class="layout-wrapper layout-content-navbar" id="app">
        <div class="layout-container">
            <Sidebar />

            <div class="layout-page">
                <Navbar />

                <div class="content-wrapper">

                    <div class="container-xxl flex-grow-1 container-p-y">
                        <div class="row">
                            <router-view></router-view>
                        </div>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>

        <div class="layout-overlay layout-menu-toggle"></div>
    </div>
</template>
