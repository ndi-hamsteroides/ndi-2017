// routes/index.js
const noteRoutes = require('./note_routes');
const userApi = require('./user_api');
const eventApi = require('./event_api');
const userEventApi = require('./userevent_api');
const categoryApi = require('./category_api');
const infoApi = require('./info_api');
const infocategoryApi = require('./infocategory_api');

module.exports = function(app, db) {
  noteRoutes(app, db);
  userApi(app,db);
  eventApi(app,db);
  userEventApi(app,db);
  categoryApi(app,db);
  infoApi(app,db);
  infocategoryApi(app,db);
  // Other route groups could go here, in the future
};