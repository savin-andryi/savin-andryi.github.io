import jsonMixin from "./json.mixin";

export default {
    data: function () {
        return {
           imageList:[]
        }
    },
    mounted() {
        jsonMixin.methods.getJsonData('/jsons/images.json').then((responce) => {
           this.imageList = responce.data;
        })
    }
}