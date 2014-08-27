function sign_up(name,phone){
	this.name = name;
	this.phone = phone;
}

sign_up.prototype.save_sign_up = function() {
	var self = this,
		current_activity_id = localStorage.current_activity_id,
		activities = get_storage(),
		sign_up_information = {
			'name':this.name,
			'phone':this.phone
		};
	activities[current_activity_id].sign_ups.push(sign_up_information);
	set_storage(activities);
};

sign_up.prototype.check_repeat = function() {
	var activities = get_storage(),
		self = this,
		current_activity = localStorage.current_activity_id;
	return _.findWhere(activities[current_activity].sign_ups,{'phone':self.phone});
};

var get_storage = function(){
	return JSON.parse(localStorage['activities']);
};

var set_storage = function(activities){
    localStorage['activities'] = JSON.stringify(activities);
};