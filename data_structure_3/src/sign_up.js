function sign_up(name,phone){
	this.name = name;
	this.phone = phone;
}

sign_up.prototype.save_sign_up = function() {
	var current_activity_id = localStorage.current_activity_id,
		sign_ups = get_storage(),
		sign_up_information = {
			'name':this.name,
			'phone':this.phone,
			'activity_id':localStorage.current_activity
		};
	sign_ups.push(sign_up_information);
	set_storage(sign_ups);
};

sign_up.prototype.check_repeat = function() {
	var sign_ups = get_storage(),
		self = this;
	return _.findWhere(sign_ups,{'phone':self.phone});
};

var get_storage = function(){
	return JSON.parse(localStorage['sign_ups']);
};

var set_storage = function(sign_ups){
    localStorage['sign_ups'] = JSON.stringify(sign_ups);
};