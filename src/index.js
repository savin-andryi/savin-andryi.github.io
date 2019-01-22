import Vue from 'vue';
import MainContent from './views/main-content';


import router from './router';

new Vue({
    el: '#mainContent',
    router,
    template: '<MainContent/>',
    components: { MainContent }
});

