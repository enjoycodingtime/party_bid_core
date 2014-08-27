function bid(price,phone){
this.price = price;
this.phone = phone;
};
var create_new_bid = function(activity_id) {
	var activities = get_storage(),
		bid_name = "竞价"+(activities[activity_id].bids.length+1);
	activities[activity_id].bids.push(bid_name);
	activities[activity_id].biddings[bid_name] = [];
	set_storage(activities);
};
bid.prototype.save_bid = function() {
	var current_activity = localStorage.current_activity_id,
		current_bid = localStorage.current_bid,
		activities = get_storage(),
		bid_information = {
			'phone':this.phone,
			'price':this.price
		};
	activities[current_activity].biddings[current_bid].push(bid_information),
	set_storage(activities);
};

bid.check_phone = function(phone){
	var activities = get_storage(),
		current_activity = localStorage.current_activity_id;
	return _.findWhere(activities[current_activity].sign_ups,{'phone':phone});
};
bid.check_repeat = function(phone){
	var activities = get_storage(),
		current_activity = localStorage.current_activity_id;
		current_bid = localStorage.current_bid;
	return _.findWhere(activities[current_activity].biddings[current_bid],{'phone':phone});
};
