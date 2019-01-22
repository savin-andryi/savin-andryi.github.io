import axios from 'axios';

export default {
    methods: {
        getJsonData: function (data) {
           return axios
               .get(data);
        }
    }
}
