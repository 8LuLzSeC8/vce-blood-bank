var email = document.getElementById("reg-email");
var password = document.getElementById("reg-password");
var btnSubmit = document.getElementById("reg-submit");


btnSubmit.addEventListener("click",function(){
    var reg_email = email.value;
    var reg_password = password.value;

    console.log(reg_email);


    var auth = firebase.auth();

    var promise = auth.createUserWithEmailAndPassword(reg_email,reg_password).then(function(user){
        document.getElementById("demo").innerHTML = "Account registered! Verify your account.";
        var user = firebase.auth().currentUser;

        user.sendEmailVerification().then(function() {
         // Email sent.
        }).catch(function(error) {
        // An error happened.
        });
    });
    promise.catch(e => {
        document.getElementById("demo").innerHTML = "Please enter Valid data";
        alert(e.message);
    });
})