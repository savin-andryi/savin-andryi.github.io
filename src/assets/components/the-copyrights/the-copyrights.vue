<template>
    <wrapper-component class-type="copyrights">
        <div class="copy-left-side">
            <div class="footer-image-container">
                <logo :source="logo"></logo>
            </div>
            <div class="copyrights-contacts">
                <p class="copyrights-text">
                    {{ footerContacts.text }}
                </p>
            </div>
        </div>
        <div class="copy-right-side">
            <p class="copyrights-text">
                Copyright 2012. Powered <a href="#">Wordpress Portfolio</a> Theme by <a href="#">Best PSD
                Freebies</a>
            </p>
        </div>
    </wrapper-component>
</template>

<script>
    import "./_the-copyrights.scss"

    import WrapperComponent from "../wrapper-component/wrapper-component";
    import Logo from "../the-header/logo/logo";
    export default {
        name: "the-copyrights",
        components: {Logo, WrapperComponent},
        data: function () {
            return {
                logo:'img/logo-grey.png',
                footerContacts: {
                    text: 'The Ultimate Portfolio Wordpress Theme on the Web t: (888) 842 - 8356 e: info@bestpsdfreebies.com'
                }
            }
        }
    }
</script>

