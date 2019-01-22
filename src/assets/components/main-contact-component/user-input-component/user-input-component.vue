<template>
    <input v-bind:type="inputType" class="contact-form-control" v-bind:class="modificator"
           v-bind:placeholder="placeholderName" v-bind:value="value">
</template>

<script>
    import "./_user-input-component.scss"

    export default {
        name: "user-input-component",
        props: {
            placeholderName: {
                type: String,
                default: 'Name'
            },
            inputType: {
                type: String,
                default: 'text'
            },
            modificator: {},
            value: {}
        }
    }
</script>

