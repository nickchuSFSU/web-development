validateRegistration = () => {
    let input = document.forms["registration"]["username"].value;
    let psw = document.forms["registration"]["inputpsw"].value;
    let confirmpsw = document.forms["registration"]["inputcpsw"].value;
    var regex = /^(?=.*[0-9])(?=.*[*!@#$^&])[a-zA-Z0-9!@#$%^&*]{8,}$/;


    if(input.length < 3){
        window.alert("Username must be 3 or more alphanumeric characters.");
        input.focus();
        return false;
    }

    if(!regex.test(psw)){
        alert("Password must be at least 8 characters long, contain at least one number, one uppercase and one special character");
        psw.focus();
        return false;
    }

    if (psw !== confirmpsw) {
        alert ("\nPasswords did not match. Please try again.");
        return false;
    }

    let myJSON = JSON.stringify(input);
    console.log(myJSON);
};