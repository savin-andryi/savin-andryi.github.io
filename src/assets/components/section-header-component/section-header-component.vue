<template>
    <div v-bind:class="classType">
        <h1 class="title" v-bind:class="classModificator">
            {{ header }}
        </h1>
        <div class="bottom-border" v-show="showBorder"></div>
        <p class="first-paragraph">
            {{ paragraph }}
        </p>
        <p v-show="showParagraph2">
            {{ paragraph2 }}
        </p>
    </div>
</template>

<script>
    import "./_section-header-component.scss"

    export default {
        name: "section-header-component",
        props: {
            classType: {
                type: String
            },
            header: {
                type: String
            },
            showBorder: {
                type: Boolean,
                default: true
            },
            showParagraph2: {
                type: Boolean,
                default: false
            },
            paragraph: {},
            paragraph2: {},
            classModificator: {}
        }
    }
</script>
