<template>
    <wrapper-component class-type="footer">
        <section-header-component class-type="footer-block" class-modificator="is-footer" v-bind:show-border="false"
                                  v-bind:header="aboutPortfolioFooter.header"
                                  v-bind:paragraph="aboutPortfolioFooter.text"
                                  v-bind:paragraph2="aboutPortfolioFooter.text2"
                                  v-bind:show-paragraph2="true"></section-header-component>
        <footer-recent-posts></footer-recent-posts>
        <twitter-widget wrapper-class-name="footer-block" title-class-modificator="is-footer"></twitter-widget>
        <footer-flickr-widget></footer-flickr-widget>
    </wrapper-component>
</template>

<script>
    import "./_the-footer.scss"

    import WrapperComponent from "../wrapper-component/wrapper-component";
    import FooterRecentPosts from "./footer-recent-posts/footer-recent-posts";
    import FooterFlickrWidget from "./footer-flickr-widget/footer-flickr-widget";
    import SectionHeaderComponent from "../section-header-component/section-header-component";
    import TwitterWidget from "../twitter-widget/twitter-widget";
    export default {
        name: "the-footer",
        components: {TwitterWidget, SectionHeaderComponent, FooterFlickrWidget, FooterRecentPosts, WrapperComponent},
        data: function () {
            return {
                aboutPortfolioFooter: {
                    header: 'About Porftolio',
                    text: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, persinioa inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor.',
                    text2: 'Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.'
                },
            }
        }
    }
</script>

