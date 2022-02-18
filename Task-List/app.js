//define our UI variables
const form=document.querySelector('#task-form');
const taskList=document.querySelector('.collection');
const clearBtn=document.querySelector('.clear-tasks');
const filter=document.querySelector('#filter');
const taskInput=document.querySelector('#task');

//load all event liseners
loadEventListeners();

//load all event listeners
function loadEventListeners(){
    //add task event
    form.addEventListener('submit',addTask);

}
//add task
function addTask(e){
    if(taskInput.value=== ''){
        alert('Add a task');
    }

    //create li element
const li=document.createElement('li');
//adding a class to the li element
li.className='collection-item';
//create text node and append to li
li.appendChild(document.createTextNode(taskInput.value));
//create new link element
const link=document.createElement('a');
//add class
link.className='delecte-item secondary-content';
//add icon html
link.innerHTML='<i class="fa fa-remove"></li>';
//append the link to li
li.appendChild(link);

//append the li to the ul
taskList.appendChild(li);

//clearInput
taskInput.value='';


    e.preventDefault();
}





