/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction(){
  if (document.getElementById('same').checked){
    document.getElementById('billingName').value = document.getElementById('shippingName').value;
	document.getElementById('billingAddress').value = document.getElementById('shippingAddress').value;
	document.getElementById('billingAddress1').value = document.getElementById('shippingAddress1').value;
    document.getElementById('billingZip').value = document.getElementById('shippingZip').value;
	document.getElementById('billingCity').value = document.getElementById('shippingCity').value;
	document.getElementById('billingPhone').value = document.getElementById('shippingPhone').value;
	
	
  }
  else {
  	document.getElementById('billingName').value = '';
	document.getElementById('billingAddress').value = '';
	document.getElementById('billingAddress1').value = '';
    document.getElementById('billingZip').value = '';
	document.getElementById('billingCity').value = '';
	document.getElementById('billingPhone').value = '';
      // document.getElementById('billingName').removeAttribute('required');
      // document.getElementById('billingZip').removeAttribute('required');
 }
} 