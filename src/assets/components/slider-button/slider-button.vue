<template>
    <button class="slider-button-control" :class="modificator"></button>
</template>

<script>
    import './_slider-button.scss'

    export default {
        name: "slider-button",
        props: ['modificator']
    }
</script>

