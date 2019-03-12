import axios from "axios";

export default { 
    createAccount: function(data) {
        return axios.post('/api/createAccount', data);
    },

    createContent: function(data) {
        return axios.post('/api/admin/content', data);
    },

    createReservation: function(data) {
        return axios.post('/api/reservation', data);
    },

    createShow: function(data) {
        return axios.post('/api/admin/show', data);
    },

    editContent: function(data) {
        return axios.put('/api/admin/content', data);
    },

    editReservation: function(data) {
        return axios.put('/api/reservation', data);
    },

    editShow: function(data) {
        return axios.put('/api/admin/show', data);
    },

    deleteContent: function(data) {
        return axios.delete('/api/admin/content', { data });
    },

    deleteShow: function(data) {
        return axios.delete('/api/admin/show', { data });
    },

    getContent: function() {
        return axios.get('/api/content');
    },

    getCredentials: function() {
        return axios.get('/api/getCredentials');
    },

    getShows: function() {
        return axios.get('/api/shows');
    },

    getReservations: function() {
        return axios.get('/api/reservation');
    },
    
    login: function(data) {
        return axios.post('/api/login', data);
    },

    logout: function() {
        return axios.post('/api/logout');
    },
};
