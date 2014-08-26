function bid(price,phone){
this.price = price;
this.phone = phone;
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
bid.prototype.save_bid = function() {
	var current_activity = localStorage.current_activity,
		current_bid = localStorage.current_bid,
		activities = sign_up.get_storage(),
		bid_name = bid.find_name(this.phone),
		bid_information = {
			'name':bid_name,
			'phone':this.phone,
			'price':this.price
		},
		self = this;
	var activity = _.findWhere(activities,{'name':current_activity});
	for(var i = 0;i<activity.bids.length;i++){
		if(activity.bids[i].name == current_bid){
			activity.bids[i].biddings.push(bid_information);
		}
	}
	activities = _.map(activities,function(list){
		if(list.name == current_activity){
			list = activity;
		}
		return list;
	});
	sign_up.set_storage(activities);

};
bid.find_name = function(phone){
	var activities = sign_up.get_storage(),
		current_activity = _.findWhere(activities,{'name':localStorage.current_activity});
	return _.findWhere(current_activity.sign_ups,{'phone':phone}).name;
};
bid.check_phone = function(phone){
	var activities = sign_up.get_storage(),
		current_activity = _.findWhere(activities,{'name':localStorage.current_activity});
	return _.findWhere(current_activity.sign_ups,{'phone':phone});
};
bid.check_repeat = function(phone){
	var activities = sign_up.get_storage(),
		current_activity = _.findWhere(activities,{'name':localStorage.current_activity}),
		current_bid = _.findWhere(current_activity.bids,{'name':localStorage.current_bid});
	return _.findWhere(current_bid.biddings,{'phone':phone});

};
