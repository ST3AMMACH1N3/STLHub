const db = require("../models");

module.exports = {
    create: function(contentType, body) {
        return db[contentType].create(body);
    },

    delete: function(contentType, title) {
        return db[contentType].findOneAndDelete({ title });
    },

    edit: function(contentType, title, key, value) {
        return db[contentType].findOneAndUpdate({ title }, { [key]: value });
    },

    findOne: function(contentType, title) {
        return db[contentType].findOne({ title });
    },

    findAll: function(contentType) {
        return db[contentType].find();
    },

    findById: function(contentType, id) {
        return db[contentType].findById(id);
    }
};