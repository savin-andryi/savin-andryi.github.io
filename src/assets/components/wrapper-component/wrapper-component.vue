<template>
    <div v-bind:class="classType">
        <div class="content-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import "./_wrapper-component.scss"

    export default {
        name: "wrapper-component",
        props: ['classType']
    }
</script>
