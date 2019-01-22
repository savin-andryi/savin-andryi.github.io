<template>
    <div>
        <div class="portfolio-image-container-wrapper">
            <template  v-for="(elem, index) in filteredImages">
                <portfolio-image-item v-bind:data="elem"></portfolio-image-item>
                <div class="bottom-border is-portfolio-border" v-if="(index+1)%4 == 0"></div>
            </template>
        </div>
        <div class="portfolio-slider-switchers-container">
            <slider-button modificator="is-active-portfolio-slider-button"></slider-button>
            <slider-button modificator="is-portfolio-slider-button"></slider-button>
            <slider-button modificator="is-portfolio-slider-button"></slider-button>
        </div>
    </div>
</template>

<script>
    import "./_portfolio-image-container.scss"
    import PortfolioImageItem from "./portfolio-image-item/portfolio-image-item";
    import SliderButton from "../../slider-button/slider-button";

    export default {
        name: "portfolio-image-container",
        components: {SliderButton, PortfolioImageItem},
        props: ["data", 'filters'],
        computed: {
            filteredImages: function() {
                var self = this;
                if (self.filters.length == 0) {
                    return self.data;
                }

                return self.data.filter(function(el) {
                    for(var i = 0, il = el.tags.length; i< il;i++) {
                        var tag = el.tags[i].toLowerCase();

                        if(self.filters.indexOf(tag) >= 0) {
                            return true;
                        }
                    }
                    return false;
                });
            }
        }
    }
</script>
