function bid(price,phone,name){
this.price = price;
this.phone = phone;
this.name = name;
};
var create_new_bid = function(activity_id) {
	var bids = get_bids(),
		bid_name = "竞价"+(bids.length+1),
		bid ={
			name:bid_name,
			activity_name:activity_id,
			biddings:[]
		}
	bids.push(bid);
	set_bids(bids);
};
bid.prototype.save_bid = function() {
	var current_activity = localStorage.current_activity,
		current_bid = localStorage.current_bid,
		bids = get_bids(),
		bid_information = {
				'name':this.name,
				'phone':this.phone,
				'price':this.price
			};
	for(var i = 0;i < bids.length;i++){
		if(bids[i].name == current_bid && bids[i].activity_name == current_activity){
			bids[i].biddings.push(bid_information);
		}
	}
	set_bids(bids);
};

bid.check_phone = function(phone){
	var sign_ups = get_storage();
	return _.findWhere(sign_ups,{'phone':phone});
};
bid.check_repeat = function(phone){
	var bids = get_bids();
		current_activity = localStorage.current_activity;
		current_bid = localStorage.current_bid;
	return _.findWhere((_.findWhere(bids,{'name':current_bid,'activity_name':current_activity})).biddings,{'phone':phone});
};
var get_bids = function(){
	return JSON.parse(localStorage['bids']);
};
var set_bids = function(bids){
	localStorage['bids'] = JSON.stringify(bids);
};
bid.find_name = function(phone){
	var sign_ups = get_storage(),
		current_activity = localStorage.current_activity;
	return _.findWhere(sign_ups,{phone:phone,activity_id:current_activity}).name;
};