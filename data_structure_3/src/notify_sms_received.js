function notify_sms_received(sms_json){
	if(sms_json.messages[0].message.search(/bm/i) == 0){
		var name = sms_json.messages[0].message.substr(2,8),
	    	phone = sms_json.messages[0].phone;
    	var activity = new sign_up(name,phone);
    	if(localStorage.is_signing_up == 'true' && !activity.check_repeat()){
    		activity.save_sign_up();
   		 }
	}else if(sms_json.messages[0].message.search(/jj/i) == 0 && bid.check_phone(sms_json.messages[0].phone) && !bid.check_repeat(sms_json.messages[0].phone)){
		var price = sms_json.messages[0].message.substr(2,8),
			phone = sms_json.messages[0].phone,
			name = bid.find_name(phone);
		var bidding = new bid(price,phone,name);
		if(localStorage.is_bidding == 'true'){
			bidding.save_bid();
		}
	}
	
}