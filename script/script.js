onload = function(){
    let list = localStorage.getItem("tarefas") 
    document.getElementById("resultado").innerHTML=list
    document.getElementById("tarefas").value=""
}


var array = []

function elementId(){
    var timestamp = new Date();

        var id = timestamp.getHours().toString() +
        timestamp.getMinutes().toString() +
        timestamp.getSeconds().toString() +
        timestamp.getMilliseconds().toString(); 
        return id
}

function calcular(){
    var tarefas = document.getElementById("tarefas").value

    var object = {
        data: elementId(),
        object2 : {
            task: tarefas
        }
    }
    array.push(object)
    updateScreen();
}

function updateScreen(){
    var list = "<ul>"
    array.forEach((object => {
        list += "<li  data-object2" + object.data+">"+ object.object2.task+ "</li>"
        list += "<button class=but1 onclick=deleteTask(this) data-object2="+object.data +">X</button>"
    }));
    "</ul>"
    document.getElementById("resultado").innerHTML=list
    document.getElementById("tarefas").value=""

    localStorage.setItem("tarefas", list)
}

function deleteTask(element){
    array = array.filter(object=>object.data != element.getAttribute("data-object2"))
    updateScreen()
}