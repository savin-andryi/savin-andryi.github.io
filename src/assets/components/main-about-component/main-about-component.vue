<template>
    <wrapper-component class-type="main" class="is-about">
        <section class="about-section">
            <section-header-component class-type="about-component-header"
                                      v-bind:header="About.headerPart.header"
                                      v-bind:paragraph="About.headerPart.text">
            </section-header-component>
            <img class="about-user-pic" src="/img/user-pick.png" alt="user">
            <about-paragraph-component v-bind:text="About.textPart.paragraph"></about-paragraph-component>
            <about-paragraph-component v-bind:text="About.textPart.paragraph2"></about-paragraph-component>
            <about-paragraph-component v-bind:text="About.textPart.paragraph3"></about-paragraph-component>
            <about-paragraph-component text="D" class-modificator="is-initial"></about-paragraph-component>
            <about-paragraph-component v-bind:text="About.textPart.paragraph4"></about-paragraph-component>
            <div class="about-multiple-text-columns">
                <about-paragraph-component text="“" class-modificator="is-initial"
                                           class="is-quote"></about-paragraph-component>
                <about-paragraph-component v-bind:text="About.textPart.paragraph5"
                                           class-modificator="is-text-quote"></about-paragraph-component>
            </div>
            <div class="about-multiple-text-columns">
                <about-paragraph-component v-bind:text="About.textPart.paragraph6"
                                           class-modificator="double-columns"></about-paragraph-component>
                <about-paragraph-component v-bind:text="About.textPart.paragraph6"
                                           class-modificator="double-columns"></about-paragraph-component>
            </div>
            <div class="about-multiple-text-columns">
                <about-paragraph-component v-bind:text="About.textPart.paragraph7"
                                           class-modificator="triple-columns"></about-paragraph-component>
                <about-paragraph-component v-bind:text="About.textPart.paragraph7"
                                           class-modificator="triple-columns"></about-paragraph-component>
                <about-paragraph-component v-bind:text="About.textPart.paragraph7"
                                           class-modificator="triple-columns"></about-paragraph-component>
            </div>
            <div class="about-buttons">
                <about-base-button class-modificator="button-green"></about-base-button>
                <about-base-button class-modificator="button-grey"></about-base-button>
                <about-base-button class-modificator="button-blue"></about-base-button>
                <about-base-button class-modificator="button-yellow"></about-base-button>
                <about-base-button class-modificator="button-pink"></about-base-button>
                <about-base-button class-modificator="button-red"></about-base-button>
                <about-base-button class-modificator="button-light-blue"></about-base-button>
            </div>
            <about-alert-text class-modificator="is-alert-green"></about-alert-text>
            <about-alert-text class-modificator="is-alert-red"></about-alert-text>
            <about-alert-text class-modificator="is-alert-yellow"></about-alert-text>
            <about-alert-text class-modificator="is-alert-blue"></about-alert-text>
        </section>
        <aside-component></aside-component>
    </wrapper-component>
</template>

<script>
    import "./_main-about-component.scss"

    import WrapperComponent from "../wrapper-component/wrapper-component";
    import SectionHeaderComponent from "../section-header-component/section-header-component";
    import AboutParagraphComponent from "./about-paragraph-component/about-paragraph-component";
    import AboutBaseButton from "./about-base-button/about-base-button";
    import AboutAlertText from "./about-alert-text/about-alert-text";
    import AsideComponent from "../aside-component/aside-component";
    import jsonMixin from "../../mixins/json.mixin";

    export default {
        name: "main-about-component",
        components: {
            AsideComponent,
            AboutAlertText, AboutBaseButton, AboutParagraphComponent, SectionHeaderComponent, WrapperComponent},
        data: function () {
            return {
                About: {
                    headerPart:'',
                    textPart: ''
                }
            }
        },
        mounted() {
            jsonMixin.methods.getJsonData("/jsons/about.json").then((response) => {
                this.About = response.data;
            })
        }
    }
</script>
