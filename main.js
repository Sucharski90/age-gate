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
// check if person is old enough to enter site
function howOld(){
    let myAge = getAge(getInfo());
    // change number below to change persons age
    if(myAge >= 21 && document.querySelector("#rememberMe").checked == true) {
        document.cookie = "age=passed; expires=Thu, 18 Dec 2040 12:00:00 UTC";
        let success = document.querySelector(".success-fail-message");
       let modal = document.querySelector("#myModal");
       modal.classList.add("faded");
       success.innerHTML ="Enjoy!";
    }else if(myAge >= 21) {
       let success = document.querySelector(".success-fail-message");
       let modal = document.querySelector("#myModal");
       modal.classList.add("faded");
       success.innerHTML ="Enjoy!";
    } else {
        let fail = document.querySelector(".success-fail-message");
        let modalBody = document.querySelector(".modal-content");
       fail.innerHTML ="Sorry I can not let you in";
        
    }
}


