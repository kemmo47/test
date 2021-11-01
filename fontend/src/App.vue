<template>
    <div class="vuejs">
        <div class="row m-0 ">
            <div class="col-sm-1 p-0">
                <CompHeader />
            </div>
            <div class="col-sm-10 mt-4">
                <div class="container">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import CompHeader from "./components/share/head/CompHeader.vue"

    export default {
        name: "App",
        components: {
            CompHeader
        },
    };
</script>

<style>

</style>
