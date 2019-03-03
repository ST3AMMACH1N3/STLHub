const db = require('../models');

const site = {
    announcements: [],
    camps: [],
    shows: [],
    survivors: [],
    reservations: [],

    getMain: function() {
        let { announcements, camps, shows, survivors } = this;
        shows = shows.map(show => {
            delete show.reservations;
            return show;
        });
        return { announcements, camps, shows, survivors };
    },

    getShows: function() {
        let shows = this.shows.map(show => {
            delete show.reservations;
            return show;
        });
        return shows;
    },

    intialize: function() {
        console.log('Initializing...');
        this.loadContent();
        this.loadShows();
    },

    loadContent: function() {
        db.Announcement
            .find()
            .then(dbAnnouncements => {
                if (dbAnnouncements) {
                    this.announcements = dbAnnouncements;
                } else {
                    console.log('Announcements Failed to Load!');
                }
                return db.Camp.find();
            })
            .then(dbCamps => {
                if (dbCamps) {
                    this.camps = dbCamps;
                } else {
                    console.log('Camps Failed to Load!');
                }
                return db.Survivor.find();
            })
            .then(dbSurvivors => {
                if (dbSurvivors) {
                    this.survivors = dbSurvivors;
                    console.log(JSON.stringify(this, null, 2));
                } else {
                    console.log('Survivors Failed to Load!');
                }
            })
            .catch(err => console.log(err));
    },

    loadShows: function() {
        let tempShows = [];
        db.Show
            .find()
            .populate('reservations')
            .populate('seats')
            .then(dbShows => {
                if (!dbShows) {
                    console.log('Shows Failed to Load!');
                    return;
                }
                tempShows = dbShows;
                return db.Reservation
                    .find()
                    .populate('seats');
            })
            .then(dbReservations => {
                if (!dbReservations) {
                    console.log('Reservations Failed to Load!');
                    return;
                }
                this.reservations = dbReservations;
                this.shows = tempShows.map(show => {
                    show.reservations.map(reservation => {
                        return dbReservations.find(dbReservation => dbReservation._id === reservation);
                    });
                    return show;
                })
                console.log(JSON.stringify(this, null, 2));
            })
            .catch(err => console.log(err));
    }
}

site.intialize();

module.exports = site;