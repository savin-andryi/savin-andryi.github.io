<template>
    <div v-bind:class="classControl">
        <h2 class="title">
            {{ title }}
        </h2>
        <div>
            <ul class="list-control">
                <li class="list-elem-control" v-for="elem in list">
                    <a href="#" class="article-list-link"> {{"- " + elem }} </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "main-article",
        props: {
            title: "",
            list: {},
            classControl: ""
        }
    }
</script>
