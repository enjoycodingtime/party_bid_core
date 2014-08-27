var transform_bids_to_view_model = function(current_activity){
	var activities = get_storage();
	return activities[current_activity].bids;
};
var transform_biddings_to_view_model = function(current_activity,current_bid){
	var activities = get_storage();
	var result = activities[current_activity].biddings[current_bid];
	_.sortBy(result,'price');
	_.groupBy(result,'price');
	return _.find(_.groupBy(result,'price'),function(num){
		return num.length == 1;
	});
};
var render_sign_ups = function(current_activity){
	var activities = get_storage();
	var activity = _.findWhere(activities,{'name':current_activity});
	return activity.sign_ups;
};