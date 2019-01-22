<template>
    <p class="about-alert-text-control" v-bind:class="classModificator">Alert Text</p>
</template>

<script>
    import "./_about-alert-text.scss"

    export default {
        name: "about-alert-text",
        props: {
            classModificator: {}
        }
    }
</script>
