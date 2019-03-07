import axios from "axios";

export default {
    getContent: function() {
        return axios.get('/api/content');
    },
    
    createAccount: function() {
        return axios.post('/api/createAccount');
    },

    createReservation: function(data) {
        return axios.post('/api/reservation', data);
    },

    editReservation: function(data) {
        return axios.put('/api/reservation', data);
    },

    login: function(data) {
        return axios.post('/api/login', data);
    },

    logout: function() {
        return axios.post('/api/logout');
    },

    getCredentials: function() {
        return axios.get('/api/getCredentials');
    },

    getShows: function() {
        return axios.get('/api/shows');
    },

    getReservations: function() {
        return axios.get('/api/reservation');
    }
};
