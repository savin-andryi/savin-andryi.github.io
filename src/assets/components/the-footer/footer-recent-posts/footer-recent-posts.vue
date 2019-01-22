<template>
    <div class="footer-block">
        <h1 class="title is-footer">
            {{ recentPosts.header }}
        </h1>
        <ul class="list-control">
            <li class="list-elem-control is-recent-posts" v-for="elem in recentPosts.postsList">
                {{ elem.post }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "footer-recent-posts",
        data: () => ({
            recentPosts: {
                header: 'Recent Posts',
                postsList: [
                    {post: 'Yastech Developments: The Best Web Design Company'},
                    {post: 'Best PSD Freebies: Amazing Design Resource & Inspiration'},
                    {post: 'Best PSD Freebies: Login Form'},
                    {post: 'Wedding Photography Shoot Takes & Tricks'}
                ]
            }
        })
    }
</script>

