<template>
    <aside class="aside-component">
        <section-header-component class-type="aside-block" v-bind:header="aboutPortfolio.header"
                                  v-bind:paragraph="aboutPortfolio.text"></section-header-component>
        <aside-categories></aside-categories>
        <twitter-widget wrapper-class-name="aside-block" v-bind:show-border="true"></twitter-widget>
    </aside>
</template>

<script>

    import SectionHeaderComponent from "../section-header-component/section-header-component";
    import AsideCategories from "./aside-categories/aside-categories";
    import TwitterWidget from "../twitter-widget/twitter-widget";
    export default {
        name: "aside-component",
        components: {TwitterWidget, AsideCategories, SectionHeaderComponent},
        data: function () {
            return {
                aboutPortfolio: {
                    header: 'About Portfolio',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praese nt libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elemen tum imperdiet. Duis sagittis ipsum.'
                }
            }
        }
    }
</script>

