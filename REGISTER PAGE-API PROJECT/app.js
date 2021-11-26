//API ADDRESS: https://reqres.in/

const username= document.getElementById("username");
const email=document.getElementById("email");
const rEmail = document.getElementById("re-email");
const password = document.getElementById("password");
const button = document.getElementById("button");

username.value= "Cevahir";
email.value="eve.holt@reqres.in";
rEmail.value="eve.holt@reqres.in";
password.value="pistol";
let punct = [".",",","/","=","%","#","*","-","+","$","&",";",":","?","!"];

button.addEventListener("click",()=>{
    // pass();
    user();
    validation();
    apiRegister();
});


// function pass (e){
//     e = password.value;
//     if(e===e.toLowerCase()){
//         alert("Password must be included Camel Case!")
//     }else if (e===e.toUpperCase()){
//         alert("Password must be included Lower Case!")
//     }else if (!e.includes(Number)){
//         alert("Password must be contained at least 1 number!")
//     }else if (!(e in punct)){
//         alert("Password must be contained at least 1 punctuation!")
//     }
// }

//------------------USER-NAME -VALIDATION----------

function user(a){
    a =username.value;
    
    if(a===a.toLowerCase()){
        alert("Username must be included Camel Case!")
    }else if (a===a.toUpperCase()){
        alert("Username must be included Lower Case!")

    }
}


//-------------------E-MAIL VALIDATION------------
function validation(){
    if(email.value ===rEmail.value){
        return
    }else {
        alert("Unmatched e-mail. Please re-enter your email correctly!")
    }
}


//---------------------API REGISTER-----------------

    const apiRegister = async () => {
    const bodyData = {
        email : email.value,
        password : password.value
    }
    console.log(bodyData);
    console.log(JSON.stringify(bodyData));
    fetch("https://reqres.in/api/register", {  //
        method : "POST",
        body : JSON.stringify(bodyData),
        headers : {"Content-Type": "application/json"}
    })
    .then((response) => response.json())
    .then((jsonResponse) => {
        console.log(jsonResponse);
        console.log(jsonResponse.token);
        if (jsonResponse.token == undefined) {
            alert(jsonResponse.error);
        }
        else{
            localStorage.setItem("tokenKey", jsonResponse.token);
            localStorage.setItem("tokenKeyEncrypted", jsonResponse.token);
            // window.location.href = "userList.html";
        }
    })
    .catch((error)=>{
        alert(error);
    })
}

