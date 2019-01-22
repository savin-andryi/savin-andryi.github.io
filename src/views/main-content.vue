<template>
    <div>
        <the-header></the-header>
        <router-view></router-view>
        <the-footer></the-footer>
        <the-copyrights></the-copyrights>
    </div>
</template>

<script>
    import "./../assets/scss/fonts.scss"
    import "./main-content.scss"

    import TheHeader from "../assets/components/the-header/the-header";
    import TheFooter from "../assets/components/the-footer/the-footer";
    import TheCopyrights from "../assets/components/the-copyrights/the-copyrights";


    export default {
        name: "main-content",
        components: {
            TheCopyrights,
            TheFooter,
            TheHeader
        },
        data: () => ({

        }),
    }
</script>





