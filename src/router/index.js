import Vue from 'vue';
import VueRouter from 'vue-router';

import Contact from  '../views/contact/contact';
import About from '../views/about/about';
import Archive from '../views/archive/archive';
import Portfolio from '../views/portfolio/portfolio';
import Home from '../views/home/home';
import Blog from '../views/blog/blog';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/archive',
            component: Archive,
            name: 'Archive'
        },
        {
            path: '/about',
            component: About,
            name: 'About'
        },
        {
            path: '/contact',
            component: Contact,
            name: 'Contact'
        },
        {
            path: '/porfolio',
            component: Portfolio,
            name: 'Portfolio'
        },
        {
            path: '/',
            component: Home,
            name: 'Home'
        },
        {
            path: '/blog',
            component: Blog,
            name: 'Blog'
        },
    ]
});
