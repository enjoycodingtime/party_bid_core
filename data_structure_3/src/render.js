var render_bids = function(current_activity){
	var bids = get_bids();
	return _.where(bids,{'activity_id':current_activity});
};
var render_biddings = function(current_activity,current_bid){
	var bids = get_bids();
	return _.where(bids,{'name':current_bid,'activity_id':current_activity})[0].biddings;
};
var render_sign_ups = function(current_activity){
	var sign_ups = get_storage();
	return _.where(sign_ups,{'activity_id':current_activity});
};