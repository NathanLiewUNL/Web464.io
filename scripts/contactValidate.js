function contactValidate(contactFormObj){
    
    var email = contactFormObj.email.value;
    var name = contactFormObj.name.value;
    var phone = contactFormObj.phone.value;
    var emailOK,nameOK,phoneOK,ratingOK,feedbackOK;
   
    ratingOK=ratingValid();
    nameOK= nameValid(name);
    emailOK = emailValid(email);
    phoneOK= phoneValid(phone);
    feedbackOK= feedbackValid();
   

    return ratingOK,emailOK&nameOK&phoneOK&feedbackOK;
}

function nameValid(name)
{
    var letters = /^[A-Za-z]+$/;
    if (name == ""){
        alert("Error: Please input a name.");
        return false;
    }else if (!name.match(letters)){
        alert("Error: Only letters allowed for name");
        return false;

    }
    return true;
}


function emailValid(address)
{ 
    var mnlen = 3;
    var mxlen = 30;
    var p = address.search(/.+@.+/);  
    if (p == 0 ){
        
        if(address.length> mxlen ){ 
            alert("Error:Email should be less than " +mxlen+ " characters.");
            return false;
        }
        return true;

   }else{
        alert("Error: Invalid e-mail address.");
        return false;
    }
}

function phoneValid(phone)
{
    if (phone == "" || isNaN(phone)) {
        alert("Error:Please enter a valid phone number.");
        
       return false;
    }else {
    
      return true;
      }

}


function feedbackValid() {
    let x = document.forms["classForm"]["fname"].value;
    if (x == "") {
      alert("Error Feedback must be filled out");
      return false;
    }else{
        return true;
    }
  }



function ratingValid() {

    var radios = document.getElementsByName("rate");
    var radios = document.getElementsByName("rate");
    var formValid = false;

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) alert("Erro:Must select rating option");
    return formValid;

  }


  