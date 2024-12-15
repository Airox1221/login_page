function show_password() {
    var tbox_type = document.getElementById("login_pass").type ;
    var show_pass = document.getElementById("show_pass");
    if(tbox_type=="password") {
        document.getElementById("login_pass").type = "text";
        
        show_pass.style.backgroundColor = "#4d4d4d";
        show_pass.style.borderWidth = "3px";
        show_pass.style.borderColor = "#ffffff";
        show_pass.classList.toggle('show_pass:hover', true);

    }
    else {
        document.getElementById("login_pass").type = "password";
        show_pass.style.backgroundColor = "#ffffff";
        show_pass.style.borderColor = "#333333";
        show_pass.style.borderWidth = "2px";
        show_pass.classList.toggle('show_pass:hover', true);
    }
}