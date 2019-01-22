<template>
   <div class="main-home-component-wrapper">
       <div class="home-header-wrapper">
           <div class="content-align home-header">
               <div class="home-header-left-side">
                   <h1 class="title is-home-header-title">{{ homeHeader.title }}</h1>
                   <p class="home-header-text">{{ homeHeader.text1 }} </p>
                   <p class="home-header-text">{{ homeHeader.text2 }}</p>
                   <about-base-button class="button-reset" class-modificator="button-grey"
                                      inner-text="See Our Work"></about-base-button>
               </div>
               <div class="home-header-right-side">
                   <img src="/img/home-monitor.png" alt="monitor">
               </div>
           </div>
           <div class="content-align home-slider-switchers-container">
               <slider-button modificator="is-active-home-slider-button"></slider-button>
               <slider-button modificator="is-home-slider-button"></slider-button>
               <slider-button modificator="is-home-slider-button"></slider-button>
               <slider-button modificator="is-home-slider-button"></slider-button>
           </div>
       </div>
       <div class="content-align">
           <div class="home-short-describe-wrapper">
               <div class="short-describe-item" v-for="elem in featuredBlocks">
                   <h3 class="short-describe-header">{{ elem.title }}</h3>
                   <p class="first-describe-paragraph">{{ elem.text1 }}</p>
                   <p class="second-describe-paragraph">{{ elem.text2 }}</p>
                   <div class="bottom-border is-short-describe-border"></div>
                   <a class="is-short-describe-link" href="#">Read More</a>
               </div>
           </div>
           <div class="content-align home-slider-switchers-container is-image-switchers">
               <slider-button modificator="is-active-portfolio-slider-button"></slider-button>
               <slider-button modificator="is-portfolio-slider-button"></slider-button>
               <slider-button modificator="is-portfolio-slider-button"></slider-button>
           </div>
           <h3 class="title">Recent Work</h3>
           <div class="bottom-border"></div>
           <div class="content-wrapper">
               <div class="subheader-description-text">
                   <p class="first-describe-paragraph">Lorem ipsum dolor sit amet, omnis euismod indoctum mel.</p>
                   <p class="second-describe-paragraph">Lorem ipsum dolor sit amet, omnis euismod indoctum mel ei, mel erat ancillae eloquent iam id. Movet facete sea cu, deleniti adipiscing id eum. Mel alia consul constituto ex, no his inani reformidans accommoda re. Et eos viderer appellantur, ferri inimicus an ius, ne inermis deseruisse ius.</p>
               </div>
               <div class="subheader-description-image-wrapper">
                   <portfolio-image-item v-for="(elem, index) in imageList" v-bind:data="elem" v-if="index < 6"
                                         v-bind:key="elem.src" :show-tags="false"></portfolio-image-item>
               </div>
           </div>
       </div>
   </div>
</template>


<script>
    import './_main-home-component.scss'

    import AboutBaseButton from "../main-about-component/about-base-button/about-base-button";
    import SliderButton from "../slider-button/slider-button";
    import jsonMixin from "../../mixins/json.mixin";
    import imagesHolder from "../../mixins/images-holder.mixin";
    import PortfolioImageItem
        from "../main-portfolio-component/portfolio-image-container/portfolio-image-item/portfolio-image-item";

    export default {
        name: "main-home-component",
        mixins: [jsonMixin, imagesHolder],
        components: {PortfolioImageItem, SliderButton, AboutBaseButton},
        data: function () {
            return {
                homeHeader: {
                    title: 'Portfolio Website Theme: Perfect for Anyone',
                    text1:
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.',
                    text2: 'Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.'
                },
                featuredBlocks: []
            }
        },
        mounted () {
            jsonMixin.methods.getJsonData('/jsons/featured_blocks.json').then((response) => {
                this.featuredBlocks = response.data;
            })
        }
    }
</script>

