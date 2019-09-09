// checking for cookies
if (document.cookie.split(';').filter((item) => item.trim().startsWith('age=')).length) {
    console.log('passed')
    let modal = document.querySelector("#myModal");
    modal.classList.add("hide");
}
// get info from form
function getInfo() {
    let day = document.querySelector("#day").value
    let month = document.querySelector("#month").value
    let year = document.querySelector("#year").value
    let dob = year + "/" + month + "/" + day;
    return dob;
}
// figure out my age
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
// check if person is old enough to enter site if yes fade will be added to the modal and it will be removed from the site, if yes and remember me is checked a cookie will be created and saved as well as the fade class being added to the modal, if no then the user can not enter the site
function howOld(){
    // Change testAge value to change age to pass test
    let testAge = 21;
    let myAge = getAge(getInfo());
    let successFail = document.querySelector(".success-fail-message");
    let modal = document.querySelector("#myModal");
    // check users age and if remember me is clicked if yes create cookie and let user in
    if(myAge >= testAge && document.querySelector("#rememberMe").checked == true) {
        document.cookie = "age=passed; expires=Thu, 18 Dec 2040 12:00:00 UTC";
       modal.classList.add("faded");
       successFail.innerHTML ="Enjoy!";
    //    let user in if old enough but do not create cookie because remember me is not clicked
    }else if(myAge >= testAge) {
       modal.classList.add("faded");
       successFail.innerHTML ="Enjoy!";
    //    user is not old enough
    } else {
        successFail.innerHTML ="Sorry I can not let you in";
        
    }
}


