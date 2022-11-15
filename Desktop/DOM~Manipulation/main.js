let body = document.querySelector("body");
body.style.backgroundColor = "black"
// body.style.backgroundImage = "url(https://blog.bolt.eu/wp-content/uploads/2022/04/grocery-list-1024x536.jpg)"
document.body.style.backgroundRepeat = "repeat-y";
body.style.backgroundSize = "cover"
let title = document.getElementById("title");
title.style.color = "#023020";
body.style.color = "#ffffff"
 
let box= document.querySelector(".box");
box.style.margin = "15%";
box.style.marginLeft = "25%";
box.style.marginTop = "2%";
// box.backgroundColor = "rgb(6, 5, 5,0.75)";
box.style.backgroundImage = "url(https://images.pexels.com/photos/1395004/pexels-photo-1395004.jpeg?auto=compress&cs=tinysrgb&w=400)"
box.style.backgroundRepeat = "repeat-y"
box.style.backgroundSize = "cover"
box.style.width = '50%';
box.style.opacity = "0.9";
box.style.filter  = 'alpha(opacity=90)';
box.style.padding = '20px';
box.style.border = '1px solid';
box.style.borderStyle = 'none';
box.style.borderRadius = '15px';
box.style.boxShadow = '10px 10px 10px green';
 
let casing = document.querySelectorAll("h3").forEach(item =>
   item.innerHTML = item.textContent.toLocaleUpperCase())
 
 
let fruit = document.getElementById("fruitlist");
let tag = document.createElement("li");
let text = document.createTextNode("Pineapple");
tag.appendChild(text);
fruit.appendChild(tag);
 
let vegetable = document.getElementById("veglist");
let tagOne = document.createElement("li");
let textOne = document.createTextNode("Cabbage");
tagOne.appendChild(textOne);
vegetable.appendChild(tagOne);

// const addElement = document.createElement("li");
// addElement.appendChild(document.createTextNode("Pineapple"));
// document.querySelector("ul").appendChild(addElement);


// //Add one more vegetables to the vegetable lists
// let addvegetable=document.createElement("li");
// addvegetable.appendChild(document.createTextNode("Cabbage"));
// let Cabbage=document.getElementById("veglist").appendChild(addvegetable);






























// // document.body.style.background="silver"
// document.body.style.backgroundImage
// var change=document.getElementById("title");
// change.style.color="green"

// let title=document.querySelectorAll("h3").forEach(item=>item.innerHTML=item.textContent.toLocaleUpperCase())


// // Add one more fruits to the fruitlist
// const addElement = document.createElement("li");
// addElement.appendChild(document.createTextNode("Pineapple"));
// document.querySelector("ul").appendChild(addElement);


// // Add one more vegetables to the vegetable lists
// let addvegetable=document.createElement("li");
// addvegetable.appendChild(document.createTextNode("Cabbage"));
// let Cabbage=document.getElementById("veglist").appendChild(addvegetable);

// // Adding an image
// var img = document.createElement("img");
// img.src = "image/vegetables.jpeg";
// var div = document.getElementById("image");
// div.appendChild(img);
