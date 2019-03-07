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

    loadReservation: function(id) {
        db.Reservation
            .findById(id)
            .populate('seats')
            .then(dbReservation => {
                if (!dbReservation) {
                    console.log('Reservation Failed to Load!');
                    return;
                }
                let resIndex = this.reservations.findIndex(reservation => reservation._id === dbReservation._id);
                if (resIndex !== -1) {
                    this.reservations[resIndex] = dbReservation;
                    return;
                }
                this.reservations.push(dbReservation);
            })
            .catch(err => console.log(err));
    },

    loadReservations: function() {
        db.Reservation
            .find()
            .populate('seats')
            .then(dbReservations => {
                if (!dbReservations) {
                    console.log('Reservations Failed to Load!');
                    return;
                }
                this.reservations = dbReservations;
            })
    },

    loadShow: function(id) {
        db.Show
            .findById(id)
            .populate('reservations')
            .populate('seats')
            .then(dbShow => {
                if (!dbShow) {
                    console.log('Show Failed to Load!');
                    return;
                }
                // console.log(dbShow);
                // console.log(id);
                let showIndex = this.shows.findIndex(show => show._id === dbShow._id);
                if (showIndex !== -1) {
                    this.shows[showIndex] = dbShow;
                    return;
                }
                this.shows.push(dbShow);
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