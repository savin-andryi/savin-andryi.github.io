<template>
    <img v-bind:src="source" alt="logo">
</template>

<script>
    export default {
        name: "logo",
        props: ['source']
    }
</script>
