<template>
    <wrapper-component class-type="main">
        <div class="portfolio">
            <h1 class="title">Portfolio</h1>
            <div class="bottom-border"></div>
            <portfolio-filter v-bind:filters="filters" v-bind:data="filters"></portfolio-filter>
            <portfolio-image-container v-bind:data="imageList" v-bind:filters="filters"></portfolio-image-container>
        </div>
    </wrapper-component>
</template>

<script>
    import WrapperComponent from "../wrapper-component/wrapper-component";
    import PortfolioFilter from "./portfolio-filter/portfolio-filter";
    import PortfolioImageContainer from "./portfolio-image-container/portfolio-image-container";
    import imagesHolderMixin from "../../mixins/images-holder.mixin";

    export default {
        name: "main-portfolio-component",
        mixins: [imagesHolderMixin],
        components: {PortfolioImageContainer, PortfolioFilter, WrapperComponent},
        data: function () {
            return {
                filters: []
            }
        }
    }
</script>
