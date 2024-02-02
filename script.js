var div1 = document.getElementById("div1");

div1.style.width = '100%';
div1.style.display = 'flex';
div1.style.justifyContent = 'center';
div1.style.alignItems = 'center';
div1.style.flexDirection = 'column';

var nav = document.createElement("nav");

nav.style.width = '90%';

div1.appendChild(nav);

var div2 = document.createElement("div");

div2.style.display = 'flex';
div2.style.width = '100%';
div2.style.justifyContent = 'space-between';
div2.style.alignItems = 'center';

nav.appendChild(div2);

var image = document.createElement("img");

image.setAttribute('src', 'Group 1.png');

div2.appendChild(image);

var links_div = document.createElement("div");

links_div.style.display = 'flex';

links_div.style.width = '35%';

links_div.style.justifyContent = 'space-between';

div2.appendChild(links_div);


var link1 = document.createElement("a");

link1.innerText = "Home";

link1.setAttribute('href', '#');

link1.style.color = 'black';

link1.style.textDecoration = 'none';

link1.style.fontSize = '16px';

link1.style.fontFamily = 'Tahoma';

links_div.appendChild(link1);

var link2 = document.createElement("a");

link2.innerText = "About Us";

link2.setAttribute('href', 'About Us');

link2.style.color = 'black';

link2.style.textDecoration = 'none';

link2.style.fontSize = '16px';

link2.style.fontFamily = 'Tahoma';

links_div.appendChild(link2);


var link3 = document.createElement("a");

link3.innerText = "Blog";

link3.setAttribute('href', 'Blog');

link3.style.color = 'black';

link3.style.textDecoration = 'none';

link3.style.fontSize = '16px';

link3.style.fontFamily = 'Tahoma';

links_div.appendChild(link3);


var link4 = document.createElement("a");

link4.innerText = "Contact Us";

link4.setAttribute('href', 'Contact Us');

link4.style.color = 'black';

link4.style.textDecoration = 'none';

link4.style.fontSize = '16px';

link4.style.fontFamily = 'Tahoma';

links_div.appendChild(link4);

// var button = document.createElement("a");

// button.innerText = "Connect Now";

// button.style.fontFamily = 'monospace';

// button.style.fontSize = '18px';

// button.style.border = '1px solid blue';

// button.style.padding = '10px 40px';

// button.style.color = 'white';

// button.style.backgroundColor = '#0057FF';

// button.setAttribute('href', 'Connect Now');

// button.style.textDecoration = 'none';

// div2.appendChild(button);

var hamburger = document.getElementById("hamburger");

hamburger.style.display = 'none';

div2.appendChild(hamburger);

var div3 = document.createElement("div");

div3.style.width = '90%';

div3.style.marginTop = '50px';

div3.style.display = 'flex';

div1.appendChild(div3);

var div4 = document.createElement("div");

var text1 = document.createElement("p");

text1.innerText = "Why Wait to Connect with your favourite People?";

text1.style.fontSize = '46px';

text1.style.color = '#003FB9';

text1.style.fontWeight = '700';

text1.style.fontFamily = 'monospace';

text1.style.width = '100%';

text1.style.lineHeight = '57px';

div4.appendChild(text1);

var text2 = document.createElement("p");

text2.innerText = "Now its easy to join your friends & family with ka-net. Download and connect seemlessly with anyone around the world.";

text2.style.fontSize = '30px';

text2.style.color = '#555555';

text2.style.width = '75%';

text2.style.lineHeight = '38px';

div4.appendChild(text2);

var div6 = document.createElement("div");

div4.appendChild(div6);

div6.style.marginTop = '60px';

var div11 = document.createElement("div");

var button2 = document.createElement("a");

button2.innerText = "Download Now";

button2.style.fontFamily = 'monospace';

button2.style.fontSize = '18px';

button2.style.border = '1px solid #000000';

button2.style.padding = '10px 40px';

button2.style.color = 'white';

button2.style.backgroundColor = '#000000';

button2.setAttribute('href', 'Download Now');

button2.style.textDecoration = 'none';

div11.appendChild(button2);

var images = document.createElement("img");

images.setAttribute = ('src', 'Vector2.png');

div6.appendChild(images);

div3.appendChild(div4);

var div5 = document.createElement("div");

div3.appendChild(div5);

var imagen = document.createElement("img");

imagen.setAttribute('src', 'Group 276.png');

div5.appendChild(imagen);

var div7 = document.createElement("div");

div1.appendChild(div7);

div7.style.width = '90%';

div7.style.display = 'flex';

div7.style.justifyContent = 'space-between';

div7.style.marginTop = '30px';

var div8 = document.createElement("div");

div7.appendChild(div8);

div8.style.display = 'flex';

div8.style.alignItems = 'center';

var div9 = document.createElement("div");

div7.appendChild(div9);

div9.style.display = 'flex';

div9.style.alignItems = 'center';

var div10 = document.createElement("div");

div7.appendChild(div10);

div10.style.display = 'flex';

div10.style.alignItems = 'center';

var text3 = document.createElement("p");

text3.innerText = "2M+";

text3.style.fontSize = '56px';

text3.style.fontWeight = '700';

text3.style.fontFamily = 'monospace';

text3.style.color = '#7870FF';

div8.appendChild(text3);

var text4 = document.createElement("p");

text4.innerText = "Active Users";

text4.style.fontSize = '40px';

text4.style.fontWeight = '700';

text4.style.fontFamily = 'monospace';

text4.style.color = '#CECBFF';

text4.style.marginLeft = '10px';

div8.appendChild(text4);



var text5 = document.createElement("p");

text5.innerText = "38K+";

text5.style.fontSize = '56px';

text5.style.fontWeight = '700';

text5.style.fontFamily = 'monospace';

text5.style.color = '#FF6363';

div9.appendChild(text5);

var text6 = document.createElement("p");

text6.innerText = "Services";

text6.style.fontSize = '40px';

text6.style.fontWeight = '700';

text6.style.fontFamily = 'monospace';

text6.style.color = '#FFD7D7';

text6.style.marginLeft = '10px';

div9.appendChild(text6);



var text7 = document.createElement("p");

text7.innerText = "90K+";

text7.style.fontSize = '56px';

text7.style.fontWeight = '700';

text7.style.fontFamily = 'monospace';

text7.style.color = '#12E300';

div10.appendChild(text7);

var text8 = document.createElement("p");

text8.innerText = "Reviews";

text8.style.fontSize = '40px';

text8.style.fontWeight = '700';

text8.style.fontFamily = 'monospace';

text8.style.color = '#C7FFBE';

text8.style.marginLeft = '10px';

div10.appendChild(text8);


//Making this web responsive


//Hamburger Responsive

var myjsmedia = (hamburger) => {
    if(hamburger.matches) {
        var hamburger = document.getElementById("hamburger");

        hamburger.style.display = 'block';

        div2.appendChild(hamburger);
    } else{
        var hamburger = document.getElementById("hamburger");

        hamburger.style.display = 'none';

        div2.appendChild(hamburger);
    }
}


var hamburger = window.matchMedia("(max-width: 1024px)");

myjsmedia(hamburger);

hamburger.addEventListener("change", myjsmedia);


//Nav links Responsive

var myjsmedia = (button) => {
    if(button.matches) {
        var button = document.createElement("a");

        button.style.display = 'none';
    } else{
        var button = document.createElement("a");

        button.innerText = "Connect Now";
        
        button.style.fontFamily = 'monospace';
        
        button.style.fontSize = '18px';
        
        button.style.border = '1px solid blue';
        
        button.style.padding = '10px 40px';
        
        button.style.color = 'white';
        
        button.style.backgroundColor = '#0057FF';
        
        button.setAttribute('href', 'Connect Now');
        
        button.style.textDecoration = 'none';
        
        div2.appendChild(button);

        button.style.display = 'block';
    }
}


var button = window.matchMedia("(max-width: 1024px)");

myjsmedia(button);

button.addEventListener("change", myjsmedia);