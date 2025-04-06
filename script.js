let count=0;
function addtodo(){
    if(document.getElementById("inp").value==""){
       
        return;
    }
const x=document.getElementById("inp");
console.log(x.value);
const text=document.createElement("div");
text.innerHTML=x.value;
text.setAttribute("class","tasks")
text.setAttribute("id",++count);
const donebtn=document.createElement("button");
donebtn.innerHTML="done";
donebtn.setAttribute("class","donebtn");
donebtn.setAttribute("onclick",`donetodo(${count})`);
text.appendChild(donebtn);
const parent=document.getElementById("tasklist");
parent.appendChild(text);
x.value="";
updateProgressBar()}
function donetodo(id){
    const task=document.getElementById(id);
    const donetask = task.cloneNode(true);
    donetask.style.textDecoration="line-through";
    
    
    task.remove();
    donetask.querySelector(".donebtn").remove();
    document.getElementById("Donelist").appendChild(donetask);
    
    updateProgressBar()
}

function updateProgressBar() {
    const tasks = document.querySelectorAll("#tasklist .tasks").length;
    const doneTasks = document.querySelectorAll("#Donelist .tasks").length;
    const totalTasks = tasks + doneTasks;
    const progress = document.getElementById("progress");
    const percentage = (doneTasks / totalTasks) * 100;
    progress.style.width = `${percentage}%`;
    numbers=document.getElementById("numbers")

numbers.innerHTML=`${tasks}/${totalTasks}`;
}