// -----------------------Modal1 for creating task----------------------
let overlay = document.getElementsByClassName("overlay");
// console.log(overlay);

let button = document.getElementById("add-task-button");
let modal = document.getElementsByClassName("modal")[0];

button.addEventListener("click", displayModal);

function displayModal() {
    modal.classList.remove("hidden");
    overlay[0].classList.remove("hidden");
}

let closeBtn = document.getElementById("btn-close-modal1");

closeBtn.addEventListener("click", hideModal);
overlay[0].addEventListener("click", hideModal);

function hideModal() {
    modal.classList.add("hidden");
    overlay[0].classList.add("hidden");
}
// ----------------Modal1 code ends-------------------------------



// -----------------------Add tasks in column--------------------------

let selectedOption = document.getElementById("status");
let taskContainer;
let createTaskBtn = document.getElementById("createtask");
let titleContent;
let descriptionContent;
let text;
let pTitle;
let pSubTasks;
let subTaskArray;
let subTaskCount=0;
let pText;
let column;
let todoCount=0;
let doingCount=0;
let span1, span2;



createTaskBtn.addEventListener("click", addTaskfunc);

function addTaskfunc() {
    subTaskCount=0;
    taskContainer = document.createElement("div");
    taskContainer.setAttribute("class", "task-Container");

    titleContent = document.getElementById("title");
    descriptionContent = document.getElementById("description");
    
    selectedOption = document.getElementById("status").value;

    if(selectedOption === "todo"){
        text = titleContent.value;
        titleContent = document.createTextNode(text);

        pTitle = document.createElement("p");
        pTitle.setAttribute("class", "taskTitle");
        pSubTasks = document.createElement("p");
        pSubTasks.setAttribute("class", "subTaskInfo");

        
        span1 = document.createElement("span");

        span1.setAttribute("class", "subTaskFinished");

        span2 = document.createElement("span");

        span2.setAttribute("class", "subTasksTotal");
        pText = document.createTextNode(" of ");
        pSubTasks.appendChild(span1);
        pSubTasks.appendChild(pText);
        pSubTasks.appendChild(span2);
        pText = document.createTextNode(" subtasks");
        pSubTasks.appendChild(pText);

        pTitle.appendChild(titleContent);
        taskContainer.appendChild(pTitle);
        taskContainer.appendChild(pSubTasks);

        column = document.getElementById("column1");

        column.appendChild(taskContainer);
        todoCount++;
        document.getElementById("todoCount").innerHTML = todoCount;

        subTaskArray = document.getElementsByClassName("sub-task-input-box");

        for(let i=0; i<subTaskArray.length; i++){
            if(subTaskArray[i].value != ""){
                subTaskCount++;
            }
        }

        document.getElementsByClassName("subTaskFinished")[todoCount-1].innerHTML = 0;
        document.getElementsByClassName("subTasksTotal")[todoCount-1].innerHTML = subTaskCount;

        hideModal();
    }

    else if(selectedOption === "doing"){

        text = titleContent.value;
        titleContent = document.createTextNode(text);

        pTitle = document.createElement("p");
        pTitle.setAttribute("class", "taskTitle");
        pSubTasks = document.createElement("p");
        pSubTasks.setAttribute("class", "subTaskInfo");

        
        span1 = document.createElement("span");
        span1.setAttribute("class", "subTaskFinished");

        span2 = document.createElement("span");
        span2.setAttribute("class", "subTasksTotal");

        pText = document.createTextNode(" of ");
        pSubTasks.appendChild(span1);
        pSubTasks.appendChild(pText);
        pSubTasks.appendChild(span2);
        pText = document.createTextNode(" subtasks");
        pSubTasks.appendChild(pText);

        pTitle.appendChild(titleContent);
        taskContainer.appendChild(pTitle);
        taskContainer.appendChild(pSubTasks);

        column = document.getElementById("column1");

        column.appendChild(taskContainer);

        doingCount++;
        document.getElementById("doingCount").innerHTML = doingCount;

        subTaskArray = document.getElementsByClassName("sub-task-input-box");

        for(let i=0; i<subTaskArray.length; i++){
            if(subTaskArray[i].value != ""){
                subTaskCount++;
            }
        }

        // document.getElementsByClassName("subTaskFinished")[todoCount-1].innerHTML = 0;
        document.getElementsByClassName("subTasksTotal")[todoCount-1].innerHTML = subTaskCount;

        hideModal();
    }
}

//---------------------------Add tasks function ends------------------------------        




// -------------------------Add subtasks in task-----------------------------------

let subTaskBtn = document.getElementById("addsubtask");
let subTaskInput;
let subTaskDiv;
let subtaskContainer;
let closeBtnSubTask;
let subTaskSpanId;

subTaskBtn.addEventListener("click", addsubtaskfunc);

function addsubtaskfunc() {
    subTaskInput = document.createElement("input");
    subTaskInput.setAttribute("class", "sub-task-input-box");

    subTaskDiv = document.createElement("div");
    subtaskContainer = document.getElementById("subtasks");

    closeBtnSubTask = document.createElement("span");
    subTaskSpanId = "btn-close" + subTaskCount;
    closeBtnSubTask.setAttribute("id", subTaskSpanId);
    closeBtnSubTask.setAttribute("class", "closeButton");
    closeBtnSubTask.innerHTML = "&times;";

    subTaskDiv.appendChild(subTaskInput);
    subTaskDiv.appendChild(closeBtnSubTask);
    subtaskContainer.appendChild(subTaskDiv); 
}

// ---------------------------Add subtask function ends--------------------------





//----------------------- Modal2 for creating new board---------------------

let modal2 = document.getElementsByClassName("modal2")[0];
let newBoardButton = document.getElementById("list-items");

newBoardButton.addEventListener("click", displayBoardModal);

function displayBoardModal() {
    modal2.classList.remove("hidden");
    overlay[1].classList.remove("hidden");
}


let closeBtn2 = document.getElementById("btn-close-modal2");

closeBtn2.addEventListener("click", hideBoardModal);
overlay[1].addEventListener("click", hideBoardModal);

function hideBoardModal() {
    modal2.classList.add("hidden");
    overlay[1].classList.add("hidden");
}

// ------------------------Modal2 code ends------------------------------




// --------------Create new board function starts---------------

let createBtn = document.getElementById("createboard");
let boardValue;
let boardText;
let kanbanlist;
let listItem;
let listItem0;
let itag;
let boardCount=0;
let countSpan;


createBtn.addEventListener("click", createBoard);

function createBoard () {

    boardValue = document.getElementById("title2").value;

    boardText = document.createTextNode(boardValue);


    kanbanlist = document.getElementById("kanban-list");
    listItem = document.createElement("li");

    listItem0 = document.getElementById("list-items");

    itag = document.createElement("i");
    itag.setAttribute("class", "fa fa-regular fa fa-list-ul");
    

    listItem.appendChild(itag);
    listItem.appendChild(boardText);
    listItem.setAttribute("class", "new-item");

    // listItem.setAttribute("id", count);

    kanbanlist.insertBefore(listItem, listItem0);
    
    boardCount++;

    countSpan = document.getElementsByClassName("boardCount")[0];
    countSpan.innerHTML = boardCount;

    hideBoardModal();

    saveBoardAPI();
}

// --------------Create new board function ends---------------



//--------------------------------------Boards API code starts---------------------------------------
let boardData;
let boardArray = [];
let jsonArray;
let key;

// -----------------------------------save boards locally---------------------------------------------

function saveBoardAPI() {
    boardData = {};

    localStorage.setItem("Board Count", JSON.stringify(boardCount)); //solo variable


    boardData["board" + boardCount] = boardValue;

    boardArray.push(boardData);

    jsonArray = JSON.stringify(boardArray);

    localStorage.setItem("boards", jsonArray);

    if(window.localStorage.length > 0){
        insertHeading();
    }

}
// ---------------------------------save board function ends---------------------------------------




// ------------------------------------fetch saved boards----------------------------------------------


function fetchData() {

    if(window.localStorage.length === 0){
        document.getElementById("top-row").innerHTML = "";
        return;
    }

    boardArray = JSON.parse(localStorage.getItem("boards"));
    createBoard2();
}

// -------------------------------------------fetch function ends---------------------------------------------




// -------------------------------------------create boards 2 using local data-----------------------------------


let boardObj;

function createBoard2() {

    let boardObj = {};

    kanbanlist = document.getElementById("kanban-list");
    listItem0 = document.getElementById("list-items");
    // boardCount = localStorage.getItem("Board Count");


    for(let i=0; i<boardCount; i++){

        key = "board" + (i+1);

        boardObj = boardArray[i]; 


        boardText = document.createTextNode(boardObj.key);

        listItem = document.createElement("li");
        listItem.setAttribute("class", "new-item");
        listItem.setAttribute("id", i+1);

        itag = document.createElement("i");
        itag.setAttribute("class", "fa fa-regular fa fa-list-ul");


        listItem.appendChild(itag);
        listItem.appendChild(boardText);
    
        listItem.setAttribute("onclick", "insertHeading(this.id)");

        kanbanlist.insertBefore(listItem, listItem0);
    }

    countSpan = document.getElementsByClassName("boardCount")[0];
    countSpan.innerHTML = boardCount;

    saveBoardAPI();
}


//--------------------------------------create board ends------------------------


// localStorage.clear();

// console.log(boardObj);


function insertHeading (id) {
    boardObj = boardArray[0];
    document.getElementById("top-row").innerHTML = boardObj["board1"];
}

// --------------Modal3 for editing subtasks-------------------


let modal3 = document.getElementsByClassName("modal3")[0];
let taskContainerArr;

function checkSubtasks() {
    taskContainerArr = document.getElementsByClassName("task-Container");
}


function displayTaskModal() {
    modal3.classList.remove("hidden");
    overlay[2].classList.remove("hidden");
}

let closeBtn3 = document.getElementById("btn-close-modal3");

closeBtn3.addEventListener("click", hideTaskModal);
overlay[2].addEventListener("click", hideTaskModal);

function hideTaskModal() {
    modal3.classList.add("hidden");
    overlay[2].classList.add("hidden");
}


// ----------------------Modal3 code ends---------------------------




