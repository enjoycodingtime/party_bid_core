function notify_sms_received(sms_json){
	var name = sms_json.messages[0].message.substr(2,8),
	    phone = sms_json.messages[0].phone;
    var activity = new sign_up(name,phone);
    if(localStorage.is_signing_up == 'true' && !activity.check_repeat()){
    	activity.save_sign_up();
    }
}