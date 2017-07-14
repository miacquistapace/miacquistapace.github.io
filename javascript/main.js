/*Checks user inout and mkaes sure it is satisfactory*/
function checkInput(){
  var userFirstName = document.getElementById('first-name-input').value;
  var userLastName = document.getElementById('last-name-input').value;
  var userEmail = document.getElementById('email-input').value;
  var userBody = document.getElementById('body-input').value;
  var userPhone = document.getElementById('tel-input').value;

  var firstLabel = document.getElementById('first-name-label');
  var lastLabel = document.getElementById('last-name-label');
  var emailLabel = document.getElementById('email-label');
  var bodyLabel = document.getElementById('body-label');

  var goodInput = true;

  /*Error traps for email input*/
  if(!userEmail.includes('@') || !userEmail.includes('.')){
    emailLabel.innerHTML =' Please double check your input!';
    emailLabel.style.color='red';
    goodInput = false;
  }
  else{
    emailLabel.innerHTML = 'Email' + "<sup>*</sup>";
    emailLabel.style.color='black';
  }

  /*Error traps if any required fields are empty*/
  if(userFirstName.trim() === ''){
    firstLabel.innerHTML =' Please double check your input!';
    firstLabel.style.color='red';
    goodInput = false;
  }
  else{
    firstLabel.innerHTML = 'First Name' + "<sup>*</sup>";
    firstLabel.style.color='black';
  }

  if(userLastName.trim() === ''){
    lastLabel.innerHTML =' Please double check your input!';
    lastLabel.style.color='red';
    goodInput = false;
  }
  else{
    lastLabel.innerHTML = 'Last Name' + "<sup>*</sup>";
    lastLabel.style.color='black';
  }

  if(userBody.trim() === ''){
    bodyLabel.innerHTML =' Please double check your input!';
    bodyLabel.style.color='red';
    goodInput = false;
  }
  else{
    bodyLabel.innerHTML = 'What can we help you with?' + "<sup>*</sup>";
    bodyLabel.style.color='black';
  }
  if (goodInput) submitData(userFirstName,userLastName,userEmail,userBody,userPhone);
}
/*Submits data to be stored on server(not yet implemented), dispalys a thank you and reloads the page*/
function submitData(userFirstName,userLastName,userEmail,userBody,userPhone){
  alert('Thank you ' + userFirstName + ' ' + userLastName + ' we will contact you at ' + userEmail);
  document.getElementById('submit-btn').innerHTML ='Thank You!';
  document.getElementById('submit-btn').style.backgroundColor = 'green';
  /*Reloads the page after 2 seconds*/
  setTimeout(function(){window.location.reload()}, 2000);
}

/*Changes the Icon on Buttons that expand*/
function changeIcon(button){
  if ($(button).attr('aria-expanded') === "false")
   $(button).find(".glyphicon").removeClass("glyphicon-chevron-right").addClass("glyphicon-chevron-down");
   else
     $(button).find(".glyphicon").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-right");
}

/*Checks if on mobile devicre and changes header size accordingly*/
$(window).resize(function() {
  alert('works');
if( $(window).width() < 960) {

   $('footer').style.height='250px';
}
}
