<template>
    <p class="about-text-control" v-bind:class="classModificator">{{text}}</p>
</template>

<script>
    import "./_about-paragraph-component.scss"

    export default {
        name: "about-paragraph-component",
        props: {
            text: {},
            classModificator: {}
        }
    }
</script>

