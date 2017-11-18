const express = require('express');
const controllers = require('../controllers');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test', controllers.tvController.getArray);
router.get('/test/:id', controllers.tvController.getById);
router.post('/test', controllers.tvController.postArray);
router.delete('/test/:id', controllers.tvController.deleteTVShow);
router.put('/test/:id', controllers.tvController.updateTVShow);
router.get('/c2', controllers.controller2.getArray2);

module.exports = router;
