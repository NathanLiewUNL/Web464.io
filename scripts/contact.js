function contactFormProcess()
{

    var contactFormObj = document.getElementById("classForm");
    if(contactValidate(contactFormObj)){
        alert("Form Submitted");
        console.log("Form Submitted")
    };
}

