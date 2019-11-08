validateLogin = () => {
    let input = document.forms["login"]["username"].value;
    let psw = document.forms["login"]["password"].value;

    if(input.length < 3){
        window.alert("Username must be 3 or more alphanumeric characters.");
        input.focus();
        return false;
    }

    if(psw.length < 8) {
        window.alert("Password must be at least 8 characters long.");
        psw.focus();
        return false;
    }

    var myJSON = JSON.stringify(input);
    console.log(myJSON);
};