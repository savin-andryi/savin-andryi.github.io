<template>
    <div class="aside-block">
        <h1 class="title">
            {{ categories.header }}
        </h1>
        <div class="bottom-border"></div>
        <ul class="list-control">
            <li class="list-elem-control" v-for="(elem, value) in categories.categoriesList">
                <a href="#" class="article-list-link">{{ elem.catName }} ({{ elem.catValue }})</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "aside-categories",
        data: function () {
            return {
                categories: {
                    header: 'Categories',
                    categoriesList: [
                        {catName: 'Video', catValue: 3},
                        {catName: 'Sports', catValue: 5},
                        {catName: 'Media', catValue: 2},
                        {catName: 'Entertainment', catValue: 7},
                        {catName: 'Life', catValue: 4},
                        {catName: 'Super Cool Stuff', catValue: 8},

                    ]
                }
            }
        }
    }
</script>

