function Activity(activity_name){
this.activity_name = activity_name;
};
Activity.prototype.create = function() {
	var activity = {
		id:localStorage.activity_id_generator,
		name:this.activity_name,
	};
var activities = JSON.parse(localStorage['activities']);
var activity_ids = JSON.parse(localStorage.activity_ids);
var id = localStorage.activity_id_generator;
activities[id] = activity;
activity_ids.push(id);
localStorage.activities = JSON.stringify(activities);
localStorage.activity_ids = JSON.stringify(activity_ids);
localStorage.current_activity= id;
localStorage.activity_id_generator = parseInt(localStorage.activity_id_generator)+1;
};
