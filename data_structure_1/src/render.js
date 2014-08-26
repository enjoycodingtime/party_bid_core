var transform_bids_to_view_model = function(current_activity){
	var activities = sign_up.get_storage();
	return _.findWhere(activities,{'name':current_activity}).bids;
};
var transform_biddings_to_view_model = function(current_activity,current_bid){
	var activities = sign_up.get_storage();
	var activity = _.findWhere(activities,{'name':current_activity}).bids;
	var result = _.findWhere(activity,{'name':current_bid}).biddings;
	_.sortBy(result,'price');
	_.groupBy(result,'price');
	return _.find(_.groupBy(result,'price'),function(num){
		return num.length == 1;
	});
};
var render_sign_ups = function(current_activity){
	var activities = sign_up.get_storage();
	return _.findWhere(activities,{'name':current_activity}).sign_ups;
};