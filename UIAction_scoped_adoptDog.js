// client checked
//show insert unchecked
// list v3 compatible checked.
//onclick - adoptDog
//condition - current.status == 'active'

function adoptDog() {
	var email = prompt('Please enter email id');
	if(email != '') {
		var ga = new GlideAjax('fetchUtils');
		ga.addParam('sysparm_name','createEmailNotification');
		ga.addParam('sysparm_adoption_center', g_form.getValue('adoption_center'));
		ga.addParam('sysparm_adopter_email',email);
		ga.getXML(ajaxProcessor);
	}	else {
		alert('The email id you entered is not valid');
	}
}

function ajaxProcessor(answer) {
	alert('Thank you for your request. Someone will be in touch with you shortly.');
}