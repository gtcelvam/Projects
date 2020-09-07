const reviews =[{
    id:1,
    name:"Susan Smith",
    job:"Web Developer",
    img:"https://cdn.pixabay.com/photo/2018/07/25/08/58/business-3560916__340.jpg",
    text:"The greatest glory in living lies not in never falling, but in rising every time we fall"
},
{
    id:2,
    name:"Rober willson",
    job:"Engineer",
    img:"https://media.istockphoto.com/photos/businessmen-handshake-in-the-office-picture-id1178385556?b=1&k=6&m=1178385556&s=170667a&w=0&h=cdBheUUmLxx6mOwewbS79UnpOzsXsapvle8pGoviGN8=",
    text:"The way to get started is to quit talking and begin doing"},
{
    id:3,
    name:"Andrea jameria",
    job:"Web Developer",
    img:"https://cdn.pixabay.com/photo/2017/02/16/12/12/business-woman-2071342__340.jpg",
    text:"If life were predictable it would cease to be life, and be without flavor"
},
{
    id:4,
    name:"Thamarai Selvan",
    job:"Software Developer",
    img:"https://cdn.pixabay.com/photo/2017/07/31/11/31/laptop-2557468__340.jpg",
    text:"Your time is limited, so don't waste it living someone else's life"
}]

const image =  document.getElementById("person-img");
const author =  document.getElementById("author");
const job =  document.getElementById("job");
const info =  document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const NextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentitem = 0;

window.addEventListener("DOMContentLoaded",function(){
    showperson(currentitem);
})

function showperson(person){
    const item = reviews[person];
    image.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

NextBtn.addEventListener("click",function(){
    currentitem++;
    if(currentitem>reviews.length-1){
        currentitem=0;
    }
    showperson(currentitem);
})

prevBtn.addEventListener("click",function(){
    currentitem--;
    if(currentitem<0){
        currentitem=reviews.length-1;
    }
    showperson(currentitem);
})

randomBtn.addEventListener("click",function(){
    currentitem = Math.floor(Math.random()*reviews.length)
    showperson(currentitem);
    console.log(currentitem);
})