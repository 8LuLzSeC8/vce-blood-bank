var user = document.getElementById("username");
var contact = document.getElementById("phone");
var group = document.getElementById("group");
var btnSubmit = document.getElementById("submit");
var email = document.getElementById("email");
var status = document.getElementById("status");

btnSubmit.addEventListener("click", function() {
    
    var u = user.value;
    var c = contact.value;
    var g = group.value;
    var e = email.value;
    console.log(e);
    if (u == "" || c == "" || g == "select blood group" || e == ""){
        alert("Enter Valid Data");
    }
    else if(c.toString().length <=9){
        alert("enter valid phone no");
    }
    else if(validateEmail(e)){
        alert("enter valid email");
    }
    else{

    var database = firebase.database();
    var A_positive = database.ref("A_positive");
    var A_negative = database.ref("A_negative");
    var B_positive = database.ref("B_positive");
    var B_negative = database.ref("B_negative");
    var AB_positive = database.ref("AB_positive");
    var AB_negative = database.ref("AB_negative");
    var O_positive = database.ref("O_positive");
    var O_negative = database.ref("O_negative");
    var rh_factor = database.ref("rh_factor");

    if (g=="A+ve"){
        A_positive.child(c).set({
            name : u,
            contact : c,
            group : g,
            Email : e
        });
    }
    if (g=="A-ve"){
        
        A_negative.child(c).set({
            name : u,
            contact : c,
            group : g,
            Email : e
        });
    }
    if (g=="B+ve"){
        
        B_positive.child(c).set({
            name : u,
            contact : c,
            group : g,
            Email : e
        });
    }
    if (g=="B-ve"){
        
        B_negative.child(c).set({
            name : u,
            contact : c,
            group : g,
            Email : e
        });
    }
    if (g=="AB+ve"){
        
        AB_positive.child(c).set({
            name : u,
            contact : c,
            group : g,
            Email : e
        });
    }
    if (g=="AB-ve"){
        
        AB_negative.child(c).set({
            name : u,
            contact : c,
            group : g,
            Email : e
        });
    }
    if (g=="O+ve"){
        
        O_positive.child(c).set({
            name : u,
            contact : c,
            group : g,
            Email : e
        });
    }
    if (g=="O-ve"){
        
        O_negative.child(c).set({
            name : u,
            contact : c,
            group : g,
            Email : e
        });
    }

    document.getElementById("demo").innerHTML = user.value + "'s data is registered.";
    }
})


 var auth = firebase.auth()
 status.addEventListener("click",function(){
     auth.signOut().then(function(){
         alert("signed out succefully");
         window.location.href = "index.html";
     })
 })
function validateEmail (emailAdress)
{
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regexEmail)) {
    return false; 
  } else {
    return true; 
  }
}
