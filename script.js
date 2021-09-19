var dog_pic = document.querySelector(".dog_pic");
var cat_pic = document.querySelector(".cat_pic");
var btn = document.querySelector(".btn");

// Displaying on load
document.addEventListener("DOMContentLoaded",display);

// Display on button click 
btn.addEventListener("click",display);


function display(){
    dogphoto();
    dogfact();
}

async function dogphoto(){
    try
    {
        let res = await fetch("https://dog.ceo/api/breeds/image/random");
        let data = await res.json();
        dog_pic.innerHTML="";
        let img= document.createElement("img");
        img.src=data.message;
        img.width="500";
        img.height="500";
        dog_pic.appendChild(img);
    }
    catch(err)
    {
        console.log(err.message)
    }
}

async function dogfact(){
    try{
        let res2 = await fetch("https://aws.random.cat/meow");
        let data2 = await res2.json();
        cat_pic.innerHTML="";
        let img= document.createElement("img");
        img.src=data2.file;
        img.width="500";
        img.height="500";
        cat_pic.appendChild(img);
    }
    catch(err)
    {
        console.log(err);
    }
}