function Activity(activity_name){
this.activity_name = activity_name;
};
Activity.prototype.create = function() {
	var activity = {
		name:this.activity_name,
		sign_ups:[],
		bids:[]
	};
var activitys = JSON.parse(localStorage['activities'] || '[]');
activitys.unshift(activity);
localStorage['activities'] = JSON.stringify(activitys);
};
Activity.prototype.active = function() {
	localStorage.current_activity = this.activity_name;
};