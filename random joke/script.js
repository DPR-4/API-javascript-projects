let djoke=document.querySelector("#djoke");
let button=document.querySelector("button");

let url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,political,racist,sexist,explicit&type=single"


function getdata()
{fetch(url)
.then((data)=>data.json())
.then((d)=>{
    //console.log(d.joke);
    djoke.textContent=`${d.joke}`
})}



button.addEventListener("click",()=>{
    getdata();
})