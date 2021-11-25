const butDog = document.getElementById("but-dog");
const butCat = document.getElementById("but-cat");
const catResult = document.getElementById("cat-Result");
const dogResult= document.getElementById("dog-Result");


butCat.addEventListener("click",()=>{
    randomCat();

})


butDog.addEventListener("click",() =>{
    randomDog();
}
)


function randomCat(){
    fetch ("https://aws.random.cat/meow")  //fetching the url
    .then(res=>res.json())                 //converting to json
    .then(data=>{
         catResult.innerHTML=`<img src="${data.file}" alt="" id="cat">`
    })  
}

function randomDog(){
    fetch ("https://random.dog/woof.json")  //fetching the url
    .then(res=>res.json())                  //converting to json
    .then(data=>{
         dogResult.innerHTML=`<img src="${data.url}" alt="" id="dog">`
    })  
}