const db = require('../models');

const site = {
    announcements: [],
    camps: [],
    images: [],
    shows: [],
    survivors: [],
    reservations: [],

    getMain: function() {
        let { announcements, camps, images, shows, survivors } = this;
        shows = shows.map(show => {
            delete show.reservations;
            return show;
        });
        return { announcements, camps, images, shows, survivors };
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
                return db.Image.find();
            })
            .then(dbImages => {
                if (dbImages) {
                    this.images = dbImages;
                } else {
                    console.log('Images Failed to Load!');
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
                let resIndex = this.reservations.findIndex(reservation => {
                    let current = JSON.stringify(reservation._id);
                    let data = JSON.stringify(dbReservation._id);
                    return (current === data);
                });
                if (resIndex !== -1) {
                    console.log('Reservation Updated in Cache');
                    this.reservations[resIndex] = dbReservation;
                    return;
                }
                console.log('Reservation Added to Cache');
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

                let showIndex = this.shows.findIndex(show => JSON.stringify(show._id) === JSON.stringify(dbShow._id));
                if (showIndex !== -1) {
                    console.log('Show Updated in Cache');
                    this.shows[showIndex] = dbShow;
                    // console.log(JSON.stringify(this.shows[showIndex].seats));
                    return;
                }
                console.log('Show Added to Cache')
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