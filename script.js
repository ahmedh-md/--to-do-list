//DOM
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('task-submit');
const outputDiv = document.getElementById('output');
const containerDiv = document.getElementById('container');
const taskCounter = document.getElementById('task-counter');


//Functions
function addTask() {
 
  if(taskInput.value == "") {
        taskInputSelect();
      } else {
          //Store value of input, i.e. the task in variable
          const currentInput = taskInput.value;

          //Create new section
          const newSection = document.createElement('section');
        
          //create new div to contain (span) & (text)
          const newDiv = document.createElement('div');
          
          //create task number span
          const taskNumberSpan = document.createElement('span');
          let taskNumberSpanText = document.createTextNode(`Task ${outputDiv.childElementCount + 1}`);
          taskNumberSpan.appendChild(taskNumberSpanText);
          taskNumberSpan.setAttribute('id', 'task-number-span');
          newDiv.appendChild(taskNumberSpan);
        
          
          //add remove btn
          let removeBtn = document.createElement('button');
          let textOfBtn = document.createTextNode('Remove');
          removeBtn.appendChild(textOfBtn);
          removeBtn.setAttribute('id', 'remove-btn');
          newDiv.appendChild(removeBtn);
        
          //append newDiv to newSection
          newSection.appendChild(newDiv);
        
          //create task text
          const task = document.createElement('p');
          let taskText = document.createTextNode(`${currentInput}`);
          task.appendChild(taskText);
          task.setAttribute('id', 'task');
          newSection.appendChild(task);
          
          //append newDiv to outputDiv
          outputDiv.append(newSection);

          //Clear Text of input field
          taskInput.value = "";
      };
  
};

function removeTask(e) {
    if(e.target.id === "remove-btn") {
      // console.log(e.target.parentNode);
      e.target.parentNode.parentNode.remove();
    };
};

//Press enter when input is populated
function enterTaskInput(e) {
  if (e.key === "Enter") {
      if(taskInput.value == "") {
        taskInputSelect();
      } else {
        addTask();
      };
  };
};

//Press enter anywhere in the window to automatically select task input...
function taskInputSelect() {
    taskInput.select();
};


//Event Listeners
document.addEventListener('click', removeTask);
addTaskBtn.addEventListener('click', addTask);
document.addEventListener('keydown', enterTaskInput);
