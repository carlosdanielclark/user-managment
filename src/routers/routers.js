const express = require('express'); 
const router = express.Router();
const controller = require('../controllers/controllers.js');

//View Home
router.get('/', controller.home);
//View Form
router.get('/add', controller.add);
//View Edit
router.get('/edit/:id', controller.edit);
//View View
router.get('/view/:id', controller.view);

//Add user
router.post('/add', controller.add_user);
//Delete user
router.get('/delete/:id', controller.del_user);
//Search user
router.post('/', controller.search_user);
//Edit user
router.post('/edit/:id', controller.update_user);

module.exports = router; 