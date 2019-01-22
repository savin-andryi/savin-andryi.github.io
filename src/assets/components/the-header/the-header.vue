<template>
    <wrapper-component class-type="header-component">
        <logo :source="logo"></logo>
        <div class="menu-and-form-container">
            <navigation></navigation>
            <search-field></search-field>
        </div>
    </wrapper-component>
</template>

<script>
    import WrapperComponent from "../wrapper-component/wrapper-component";
    import Logo from "./logo/logo";
    import Navigation from "./navigation/navigation";
    import SearchField from "./search-field/search-field";
    export default {
        name: "the-header",
        components: {SearchField, Navigation, Logo, WrapperComponent},
        data: () => ({
            logo: 'img/logo.png'
        })
    }
</script>

<style scoped>

</style>