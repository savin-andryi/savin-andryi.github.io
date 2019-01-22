<template>
    <wrapper-component class-type="main">
        <section class="archives-section">
            <section-header-component class-type="archives-descr" v-bind:header="contactUs.header"
                                      v-bind:paragraph="contactUs.text"
                                      v-bind:paragraph2="contactUs.text2" v-bind:show-paragraph2="true">

            </section-header-component>
            <form class="form-container" action="POST">
                <user-input-component placeholder-name="First Name"></user-input-component>
                <user-input-component placeholder-name="Last Name"></user-input-component>
                <user-input-component placeholder-name="Email Address"></user-input-component>
                <textarea-component></textarea-component>
                <user-input-component placeholder-name="Send" input-type="submit"
                                      modificator="is-submit-button" value="Send"></user-input-component>
            </form>
        </section>
        <aside-component></aside-component>
    </wrapper-component>
</template>

<script>
    import WrapperComponent from "../wrapper-component/wrapper-component";
    import SectionHeaderComponent from "../section-header-component/section-header-component";
    import UserInputComponent from "./user-input-component/user-input-component";
    import TextareaComponent from "./textarea-component/textarea-component";
    import AsideComponent from "../aside-component/aside-component";

    export default {
        name: "main-contact-component",
        components: {AsideComponent, TextareaComponent, UserInputComponent, SectionHeaderComponent, WrapperComponent},
        data: function () {
            return {
                contactUs: {
                    header: 'Contact Us',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.',
                    text2: 'Maecenas ipsum metus, semper hendrerit varius mattis, congue sit amet tellus. Aliquam ullamcorper dui sed magna posue re ut elementum enim rutrum. Nam mi erat, porta id ultrices nec, pellentesque vel nunc. Cras varius fermentum iaculis. Aenean sodales nibh non lectus tempor a interdum justo ultricies. Sed luctus dui nec nisl tempus faucibus sit amet et sem. Aenean augue sapien, sodales ac bibendum ut, pellentesque id eros.'
                },
            }
        }
    }
</script>
