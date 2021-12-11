

function showModal(){
    $("#myModal").modal('show');
};
function closeModal(){
    $("#myModal").modal('hide');
};

function validateAndSubmitModal( ){
    var modalText = document.getElementById("modalText");
    var modalEmail= document.getElementById("modalEmail");

    try{
        if (modalText.value == "") throw "Name must be filled!";
        if (modalEmail.value == "") throw "Email must be filled!";

    }
    catch(err) {
        alert(err);
        modalText.focus();
        return false;
    }

    var nameformat = /^[A-Za-z]+\s*[A-Za-z]*$/;
    var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(!modalText.value.match(nameformat))
    {
        alert("Invalid name.Only english alphabets allowed");
        modalText.focus();
        return false;   
    }

    if(!modalEmail.value.match(mailformat))
    {
        alert("Invalid email address.");
        modalEmail.focus();
        return false;
    }


    alert("Thanks for subscribing to our newslwtter!");
    closeModal();
    return true;
}

$(document).ready(function(){
    showModal();
});