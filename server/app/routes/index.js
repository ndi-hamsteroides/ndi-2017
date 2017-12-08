// routes/index.js
const noteRoutes = require('./note_routes');
const userApi = require('./user_api');
const categoryApi = require('./category_api');
module.exports = function(app, db) {
  noteRoutes(app, db);
  userApi(app,db);
  categoryApi(app,db);
  // Other route groups could go here, in the future
};