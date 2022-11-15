
let handleSubmit = document.getElementById("bttn");
let response = "Your message has been recorded successfully. Thank you."
let fullName = document.forms["contactform"]["fname"].value;
let phone = document.forms["contactform"]["phone"].value;
let email = document.forms["contactform"]["Email"].value;
let message = document.forms["contactform"]["message"].value;
let dtp = document.forms["contactform"]["dataprivacy"];
// let dtp = document.forms["contactform"]["dataprivacy"].value;

function myshowmy() {

    if(fullName === ""){
        alert("Fullname must be filled");
        }

    else if( phone === ""){
        alert("Phone number must be provided"); 
    }
    
    else if(email === ""){
        alert("Email must be provided");
            }
            
            else if(message === ""){
        alert("Please write your message");
            }

            else if(!dtp.checked){
        alert("Privacy must be checked");
        }
        
        else{
            alert(response);
        }
}