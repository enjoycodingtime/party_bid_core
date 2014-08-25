function sign_up(name,phone){
	this.name = name;
	this.phone = phone;
};
sign_up.prototype.save_sign_up = function() {
	var self = this;
	var activities = sign_up.get_storage();
	    current_activity = localStorage.current_activity,
	activities = _(activities).map(function(activity){
		if (activity.name === current_activity){
			activity.sign_ups.push({'name':self.name,'phone':self.phone});
		}
		return activity;
	});
	sign_up.set_storage(activities);
};
sign_up.get_storage = function(){
	return JSON.parse(localStorage['activities']);
};
sign_up.set_storage = function(activities){
    localStorage['activities'] = JSON.stringify(activities);
};