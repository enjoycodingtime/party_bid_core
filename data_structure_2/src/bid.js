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