<template>
    <textarea class="contact-form-control is-textarea">{{ textareaText }}</textarea>
</template>

<script>
    import "./_textarea-component.scss"

    export default {
        name: "textarea-component",
        data: function () {
            return {
                textareaText: 'Message'
            }
        }
    }
</script>
