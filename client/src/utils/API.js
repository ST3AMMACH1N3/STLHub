import axios from "axios";

export default {
    getContent: function() {
        return axios.get('/api/content');
    },
    
    createAccount: function() {
        return axios.post('/api/createAccount');
    },

    login: function(data) {
        return axios.post('/api/login', data);
    }
};
