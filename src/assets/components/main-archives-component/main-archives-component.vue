<template>
    <wrapper-component class-type="main">
        <section class="archives-section">
            <section-header-component class-type="archives-descr" :header="data.archivesDescr.header"
                                      :paragraph="data.archivesDescr.text">
            </section-header-component>
            <div class="archives-list">
                <main-article v-bind:title="data.lastPosts.header"
                              v-bind:list="data.lastPosts.postsList"></main-article>
                <div class="archives-right-column">
                    <main-article v-bind:title="data.archivesByMonth.header"
                                  v-bind:list="data.archivesByMonth.monthList"
                                  class-control="month-archives"></main-article>
                    <main-article v-bind:title="data.catArchives.header"
                                  v-bind:list="data.catArchives.categoryList"></main-article>
                </div>
            </div>
        </section>
        <aside-component></aside-component>
    </wrapper-component>
</template>

<script>
    import WrapperComponent from "../wrapper-component/wrapper-component";
    import SectionHeaderComponent from "../section-header-component/section-header-component";
    import MainArticle from "../main-article/main-article";
    import AsideComponent from "../aside-component/aside-component";
    import jsonMixin from "../../mixins/json.mixin";


    export default {
        name: "main-archives-component",
        components: {AsideComponent, MainArticle, SectionHeaderComponent, WrapperComponent},
        data: function () {
            return {
                data: {
                    archivesDescr: {},
                    lastPosts: {},
                    archivesByMonth: {},
                    catArchives: {}
                }
            }
        },
        mounted () {
            jsonMixin.methods.getJsonData("/jsons/archives.json").then((response) => {
                this.data = response.data;
            })
        }
    }
</script>

