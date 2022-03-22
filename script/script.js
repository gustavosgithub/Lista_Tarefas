var array = []

onload = function () {
    array = JSON.parse(localStorage.getItem("tarefas")) || []
    updateScreen()
}

function calcular(){
    var task = document.getElementById("tarefas").value
    let data = Date.now()
    var object = {
        data,
        task
        }
    
    array.push(object)
    updateScreen();
}

function updateScreen(){
    var list = "<ul>"
    array.forEach((object => {
        list += "<li  data= " + object.data +">"+ object.task+ "</li>"
        list += "<button class=but1 onclick=deleteTask(this) data="+ object.data +">X</button>"
    }));
    "</ul>"
    document.getElementById("resultado").innerHTML=list
    document.getElementById("tarefas").value=""

    localStorage.setItem("tarefas", JSON.stringify(array))
}

function deleteTask(element){
    array = array.filter(object=>object.data != element.getAttribute("data"))
    updateScreen()
}
