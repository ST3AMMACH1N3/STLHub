const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/STLHub"
);

const db = require('../models');

const adminController = require('../controllers/adminController');

adminController.createShow({ body: { title: 'Xanadu', date: new Date('1/1/2019/ 19:00'), price: 500 } }, { json: show => console.log(show) });
adminController.createContent({ body: { type: 'Camp', title: 'Trollapalooza', dates: 'Jun 11th-15th', description: 'Trollapalooza is an idea for a camp.', tuition: 9000 } }, { json: camp => console.log(camp) });
adminController.createContent({ body: { type: 'Camp', title: 'Pitched Perfect', dates: 'July 2nd-13th', description: 'Pitched perfect is also an idea for a camp.', tuition: 18000 } }, { json: camp => console.log(camp) });
adminController.createContent({ body: { type: 'Survivor', title: 'Asgard', dates: 'Jan 18th, 19th, 20th', tuition: 10000 } }, { json: survivor => console.log(survivor) });
adminController.createContent({ body: { type: 'Announcement', title: 'New Website!', description: 'Hey, we made a new website!!' } }, { json: announcement => console.log(announcement) });
db.User.create({ name: 'Ben Houston', email: 'admin@gmail.com', password: 'admin', admin: true}).then(data => console.log(data)).catch(err => console.log(err));
db.User.create({ name: 'Aria Houston', email: 'test@gmail.com', password: 'test'}).then(data => console.log(data)).catch(err => console.log(err));

//Images
//https://static.wixstatic.com/media/3c9dac_57b02779cd1a46a2823267f2c9008956~mv2_d_2048_1366_s_2.jpg/v1/fill/w_980,h_620,al_c,q_85,usm_0.66_1.00_0.01/3c9dac_57b02779cd1a46a2823267f2c9008956~mv2_d_2048_1366_s_2.webp
//https://static.wixstatic.com/media/3c9dac_499325623dda49b7b93d469c1d9b2d04~mv2.jpg/v1/fill/w_960,h_607,al_c,q_85/3c9dac_499325623dda49b7b93d469c1d9b2d04~mv2.webp
//https://static.wixstatic.com/media/3c9dac_19d5a038c4db4b8986c253f99960d69c~mv2.jpg/v1/fill/w_764,h_483,al_c,q_85/3c9dac_19d5a038c4db4b8986c253f99960d69c~mv2.webp