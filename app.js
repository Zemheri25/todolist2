let todoinput = document.querySelector(".todo-input");
let todobutton = document.querySelector(".todo-button");
let tocontainer = document.querySelector(".to-container");
let todolist = document.querySelector(".todo-list");





todobutton.addEventListener("click", addingitem);
todolist.addEventListener("click", check1);
todolist.addEventListener("click", delete1)



function addingitem(event) {
    event.preventDefault();
    let div1 = document.createElement("div");
    div1.classList.add("todo");
    let checkbox = document.createElement("input");
    checkbox.classList.add("checkbox1")
    checkbox.type = "checkbox";
    checkbox.name = "checkbox1";
    checkbox.id = "div2";

    let label1 = document.createElement("label");
    label1.classList.add("label1")
    label1.htmlFor = "div2";
    label1.appendChild(document.createTextNode(`${todoinput.value}`));
    let deletebutton = document.createElement("button");
    deletebutton.innerHTML = "<i class='fa-solid fa-xmark'></i>";
    deletebutton.classList.add("deletebutton")

    div1.appendChild(checkbox);
    div1.appendChild(label1);
    div1.appendChild(deletebutton);

    todolist.appendChild(div1)

    todoinput.value = ""
}

function check1(event) {
    const item = event.target;
    const todo = item.parentElement;


    if(item.checked) {
        todo.classList.add("checked")
    } else {
        todo.classList.remove("checked")
    }
}

function delete1(event) {
    const item1 = event.target;
    
    if(item1.classList[0] == "fa-solid") {
        const todo1 = item1.parentElement;
        const todo2 = todo1.parentElement;
        todo2.remove();
    }

    
}
        
        

