<template>
    <div v-bind:class="wrapperClassName">
        <h2 class="title" v-bind:class="titleClassModificator">
            {{ twitterWidget.header }}
        </h2>
        <div class="bottom-border" v-show="showBorder"></div>
        <ul class="list-control is-widget-list">
            <li class="list-elem-control is-widget" v-for="elem in twitterWidget.posts">
                @<a href="#" class="username-timestamp-color">{{ elem.username }}</a> {{ elem.text }}
                <p class="widget-timestamp-container"><span class="username-timestamp-color">{{ elem.timestamp }}</span></p>
            </li>
        </ul>

        <p>
            Follow @<a href="#" class="username-timestamp-color">{{ twitterWidget.follow }}</a>
        </p>
    </div>
</template>

<script>
    import "./_twitter-widget.scss";
    import jsonMixin from "../../mixins/json.mixin";

    export default {
        name: "twitter-widget",
        props: {
            wrapperClassName: {
                type: String
            },
            titleClassModificator: {
                type: String
            },
            showBorder: {
                type: Boolean,
                default: false
            },
        },
        data: function () {
            return {
                twitterWidget: {}
            }
        },
        mounted() {
            jsonMixin.methods.getJsonData("/jsons/twitter_widget.json").then((response) => {
                this.twitterWidget = response.data;
            })
        }
    }
</script>

