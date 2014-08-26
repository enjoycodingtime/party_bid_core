function bid(name){
this.name = name;
};
var create_new_bid = function(activity_name) {
	var current_activity = _.findWhere(sign_up.get_storage(),{'name':activity_name}),
	    activities = sign_up.get_storage();	
	var bid_information = {
		'name':"竞价"+(current_activity.bids.length+1),
		'biddings':[]
	};
	activities = _(activities).map(function(activity){
		if (activity.name === activity_name){
			activity.bids.push(bid_information);
		}
		return activity;
	});
	sign_up.set_storage(activities);
};