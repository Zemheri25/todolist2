let todoinput = document.querySelector(".todo-input");
let todobutton = document.querySelector(".todo-button");
let tocontainer = document.querySelector(".to-container");
let todolist = document.querySelector(".todo-list");
let div1 = document.querySelector("#div1");
let inputdiv = document.querySelector(".inputdiv");
let label1 = document.querySelector(".label1")


todobutton.addEventListener("click", addingitem);



function addingitem(event) {
    event.preventDefault();
    let div1 = document.createElement("div");
    div1.classList.add("inputdiv");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "checkbox1";
    checkbox.id = "div2";

    let label1 = document.createElement("label");
    label1.classList.add("label1")
    label1.htmlFor = "div2";
    label1.appendChild(document.createTextNode(`${todoinput.value}`));

    div1.appendChild(checkbox);
    div1.appendChild(label1);

    todolist.appendChild(div1)

    todoinput.value = ""
}




