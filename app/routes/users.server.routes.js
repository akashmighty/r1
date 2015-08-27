var users = require('/home/renuka/MEANProjects/r1/app/controllers/users.server.controller.js');
module.exports = function(app) {
app.route('/users')
.post(users.create)
.get(users.list);
};
