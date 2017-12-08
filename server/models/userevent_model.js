'use strict';
class UserEvent {
	constructor(_id, id_user,id_event){
		this._id = _id;
		this.id_user = id_user;
		this.id_event = id_event;
	}
}

module.exports = UserEvent;