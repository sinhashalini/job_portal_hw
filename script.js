

function showModal(){
    $("#myModal").modal('show');
};
function closeModal(){
    $("#myModal").modal('hide');
};
function displayTime(){
    var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
   
  document.getElementById("current_time").innerHTML = dateTime + ' ' + daylist[day];
 
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

function animate(obj, initVal, lastVal, duration) {

    let startTime = null;

    //get the current timestamp and assign it to the currentTime variable
    let currentTime = Date.now();

    //pass the current timestamp to the step function
    const step = (currentTime ) => {

        //if the start time is null, assign the current time to startTime
        if (!startTime) {
              startTime = currentTime ;
        }

        //calculate the value to be used in calculating the number to be displayed
        const progress = Math.min((currentTime  - startTime) / duration, 1);

        //calculate what to be displayed using the value gotten above
        obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

        //checking to make sure the counter does not exceed the last value (lastVal)
        if (progress < 1) {
              window.requestAnimationFrame(step);
        }
        else{
              window.cancelAnimationFrame(window.requestAnimationFrame(step));
        }
    };

    //start animating
    window.requestAnimationFrame(step);
}
function displayAnimatedCounter() {
    let text1 = document.getElementById('maxjobs');
    let text2 = document.getElementById('maxcandidates');
    let text3 = document.getElementById('maxjobsfound');

    animate(text1, 0, 907, 2000);
    animate(text2, 0, 4320, 2000);
    animate(text3, 100, 12112, 2000);
}

$(document).ready(function(){
    showModal();
    displayTime();
    displayAnimatedCounter();
});


