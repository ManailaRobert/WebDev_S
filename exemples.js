//1.Adaugare elemente HTML
//Implementeaza interfata unui calculator de buzunar
//Interfata este reprezentata de un dreptungi cu 2 zone. 
//Prima zona se gaseste in partea de sus a dreptunghiului
//Zona de afisare. A doua zona (sectiune) se regaseste in partea de jos a dr si contine 20 de celule(butoane).

//entitati - actiuni(verbe) - conditii

//dreptungi
//zona 1 - afiseaza informatii - partea de sus
//zona 2 - Na -
//celule - NA -in zona 2 si numar celule = 20

//dreptunghi
const rectangle =  document.createElement("div");

rectangle.style.width ="350px";
rectangle.style.height = "500px";
rectangle.style.borderColor = "blue ";
rectangle.style.borderWidth = "3px";
rectangle.style.borderRadius = "15px";
rectangle.style.borderStyle = "solid";


const body = document.getElementsByTagName("body")[0];//un singur element

body.appendChild(rectangle);


//zona 1,2
const zona1 =  document.createElement("div");
const zona2 =  document.createElement("div");

zona1.style.width ="345px";
zona1.style.height = "145px";
zona1.style.borderColor = "red ";
zona1.style.borderWidth = "2px";
zona1.style.borderRadius = "15px";
zona1.style.borderStyle = "dashed";


zona2.style.width ="345px";
zona2.style.height = "345px";
zona2.style.borderColor = "green";
zona2.style.borderWidth = "2px";
zona2.style.borderRadius = "15px";
zona2.style.borderStyle = "dashed";
zona2.classList.add("container");

rectangle.appendChild(zona1);
rectangle.appendChild(zona2);


//display
const display = document.createElement("span");
display.innerText = "23131231";

zona1.appendChild(display)
//add buttons

//create button text
const buttonDisplay =[
    "CE",
    "C",
    "DEL",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "+/-",
    "0",
    ".",
    "="
];

//create 20 buttons
for(let i =0 ;i<20;i++)
{
    const button=createCalculatorButton(i,buttonDisplay[i])
    zona2.appendChild(button);
}


function compute(event){//onclick returneaza un obiect de tip event
    console.log(event);
}

//create button function
function createCalculatorButton(buttonId,buttonText)
{
    const button= document.createElement("button")
    button.innerText = buttonText;
    button.id = buttonId;
    button.onclick = compute;
    button.style.borderRadius = "20px";
    return button;
}



