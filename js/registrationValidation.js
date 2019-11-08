validateRegistration = () => {
    let uname = document.forms["registration"]["username"].value();
    let psw = document.forms["registration"]["inputpsw"].value();
    let cpsw = document.forms["registration"]["inputcpsw"].value();

    if(uname.length < 3){
        window.alert("Username must be 3 or more alphanumeric characters.");
        uname.focus();
        return false;
    }

    if(!psw.match(/^(?=.*\d)(?=.*[a-z])(?=.*[/* -!@#$^&])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)){
        alert("Password must be at least 8 characters long, contain at least one number, one uppercase and one special character")
        psw.focus();
        return false;
    }

    if (psw !== cpsw) {
        alert ("\nPasswords did not match. Please try again.");
        return false;
    }

    let myJSON = JSON.stringify(uname);
    console.log(myJSON);
};