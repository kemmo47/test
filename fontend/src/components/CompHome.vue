<template>
    <div class="container">
        <h1 class="text-danger">Dashboard</h1>
        <h2>Name: {{$store.state.username}}</h2>
        <h3>Age: {{$store.state.age}}</h3>
        <div class="my-5">
            <div class="text-center">
                <img src="../assets/logo.png" alt="logo">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'comp_home',
}
</script>
