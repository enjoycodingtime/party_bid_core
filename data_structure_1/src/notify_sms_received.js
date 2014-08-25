function notify_sms_received(sms_json){
	// var activities = sign_up.get_storage();
	//     current_activity = localStorage.current_activity,
	//     name = sms_json.messages[0].message.substr(2,8),
	//     phone = sms_json.messages[0].phone;
	// activities = _(activities).map(function(activity){
	// 	if (activity.name === current_activity){
	// 		activity.sign_ups.push({'name':sms_json.messages[0].message.substr(2,8),'phone':sms_json.messages[0].phone});
	// 	}
	// 	return activity;
	// });
	// sign_up.set_storage(activities);
	var name = sms_json.messages[0].message.substr(2,8),
	    phone = sms_json.messages[0].phone;
    var activity = new sign_up(name,phone);
    activity.save_sign_up();
}