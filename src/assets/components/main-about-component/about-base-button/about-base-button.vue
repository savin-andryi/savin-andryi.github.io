<template>
    <button class="button-control" v-bind:class="classModificator">{{ innerText }}</button>
</template>

<script>
    import "./_about-base-button.scss"

    export default {
        name: "about-base-button",
        props: {
            classModificator: {},
            innerText: {
                default: 'Button Text'
            }
        }
    }
</script>

