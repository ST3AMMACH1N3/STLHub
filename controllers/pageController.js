const showController = require('./showController');
const contentController = require('./contentController');

module.exports = {
    findContent: function(req, res) {
        let content = {};
        contentController
            .findAll('Camp')
            .then(camps => {
                content['camps'] = camps;
                return contentController.findAll('Survivor')
            })
            .then(survivors => {
                content['survivors'] = survivors;
                return contentController.findAll('Announcement');
            })
            .then(announcements => {
                content['announcements'] = announcements;
                return showController.findAll();
            })
            .then(shows => {
                content['shows'] = shows;
                res.json(content);
            })
            .catch(err => {
                res.json(err)
            });
    }
}