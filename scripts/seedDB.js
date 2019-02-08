const mongoose = require("mongoose");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/STLHub"
);

const adminController = require('../controllers/adminController');

adminController.createShow({ body: { title: 'Xanadu', date: new Date('1/1/2019/ 19:00'), price: 500 } }, { json: show => console.log(show) });
adminController.createContent({ body: { type: 'Camp', title: 'Trollapalooza', dates: 'Jun 11th-15th', description: 'Trollapalooza is an idea for a camp.', tuition: 9000 } }, { json: camp => console.log(camp) });
adminController.createContent({ body: { type: 'Camp', title: 'Pitched Perfect', dates: 'July 2nd-13th', description: 'Pitched perfect is also an idea for a camp.', tuition: 18000 } }, { json: camp => console.log(camp) });
adminController.createContent({ body: { type: 'Survivor', title: 'Asgard', dates: 'Jan 18th, 19th, 20th', tuition: 10000 } }, { json: survivor => console.log(survivor) });
adminController.createContent({ body: { type: 'Announcement', title: 'New Website!', description: 'Hey, we made a new website!!' } }, { json: announcement => console.log(announcement) });