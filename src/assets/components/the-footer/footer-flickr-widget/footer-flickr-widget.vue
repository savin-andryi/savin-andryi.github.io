<template>
    <div class="footer-block">
        <h1 class="title is-footer">
            {{ flickrWidget.header }}
        </h1>
        <div class="flickr-image-container">
            <img class="flickr-image-control" v-for="elem in flickrWidget.widgetImgs"
                 v-bind:src="elem" alt="flickr image">
        </div>
    </div>
</template>

<script>
    export default {
        name: "footer-flickr-widget",
        data: function () {
            return {
                flickrWidget: {
                    header: 'Flickr Widget',
                    widgetImgs: [
                        'img/flicker-img.png',
                        'img/flicker-img.png',
                        'img/flicker-img.png',
                        'img/flicker-img.png',
                        'img/flicker-img.png',
                        'img/flicker-img.png',
                        'img/flicker-img.png',
                        'img/flicker-img.png'
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>