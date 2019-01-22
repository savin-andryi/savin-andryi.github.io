<template>
    <div class="portfolio-image-container">
        <img class="portfolio-image-control" v-bind:src="data.src"
             alt="img" v-on:mouseenter="toggle">
        <template v-if="showTags">
            <h2 class="title is-portfolio-image-title">
                {{data.name}}
            </h2>
        </template>
        <div class="portfolio-image-tags-container" v-if="showTags">
            <img class="tag-icon" src="img/tag%20icon.png" alt="tag icon">
            <ul class="list-control">
                <li class="portfolio-image-tag-control" v-for="tag in data.tags">
                    {{ tag }}
                </li>
            </ul>
        </div>
        <div class="portfolio-image-modal" v-if="isModalVisible" v-on:mouseleave="toggle">
            <div class="portfolio-image-modal-scope-container">
                <img src="img/portfolio%20hover%20scope.png" alt="scope">
            </div>
            <div class="portfolio-image-modal-props-container">
                <div class="props-control">
                    <p>{{data.views}}</p>
                    <p>views</p>
                </div>
                <div class="props-control">
                    <p>{{data.likes}}</p>
                    <p>likes</p>
                </div>
                <div class="props-control">
                    <p>{{data.comments}}</p>
                    <p>comments</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "portfolio-image-item",
        props: {
            data: {},
            showTags: {
                default: true,
                type: Boolean
            }
        },
        methods:{
            toggle: function () {
                this.isModalVisible = !this.isModalVisible
            }
        },
        data: function () {
            return {
                isModalVisible: false,
            }
        }
    }
</script>

