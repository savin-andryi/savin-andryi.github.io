<template>
    <ul class="list-control">
        <li class="menu-item" v-for="elem in navigation">
            <router-link class="menu-item-holder" :to="elem.src" href="#">
                {{ elem.item }}
            </router-link>
        </li>
    </ul>
</template>

<script>
    import "./_navigation.scss"

    export default {
        name: "navigation",
        data: () => ({
            navigation: [
                {
                    item: 'Home',
                    src: '/'
                },
                {
                    item: 'About',
                    src: '/about'
                },
                {
                    item: 'Portfolio',
                    src: '/porfolio'
                },
                {
                    item: 'Blog',
                    src: '/blog'
                },
                {
                    item: 'Archives',
                    src: '/archive'
                },
                {
                    item: 'Contact',
                    src: '/contact'
                }
            ]
        })
    }
</script>

