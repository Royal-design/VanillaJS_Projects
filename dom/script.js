/*let val;
val = document;
val = document.all[1];
val = document.URL;
val  = document.forms[0].action;
val = document.links;
val = document.links[0].classList;
val = document.scripts;
val = document.scripts[0].getAttribute('src');
let scripts = document.scripts;
let scriptsArr = Array.from(scripts);
scriptsArr.forEach(function(script){
    console.log(script.getAttribute('src'));
})
val = document.id
console.log(val);


console.log(document.getElementById('task-name').id);
document.getElementById('task-name').style.color = 'white';
document.getElementById('task-name').style.background = 'red';
document.getElementById('task-name').style.padding = '1rem';

document.querySelector('li:nth-child(odd)').style.color = 'red';
var list = document.querySelectorAll('li');
list[2].textContent = 'bola'
console.log(list);
console.log(list[0]);


var list2 = document.querySelector('ul').getElementsByClassName('task-item');
console.log(list2);

var lis = document.getElementsByTagName('li');
console.log(lis);


lis = Array.from(lis)
lis.reverse()


lis.forEach( function(li, index){
console.log(li.className);
li.textContent =`${index}: hello`
li.style.color ='blue'
})


var items = document.querySelectorAll('ul.task-list li.task-item')
items.forEach( function(day, index){
    console.log(day);
    day.textContent =`${index}: ope`
    
    })
    console.log(items);

    var liOdd = document.querySelectorAll('li:nth-child(odd)');
    var liEven = document.querySelectorAll('li:nth-child(even)');
    liOdd.forEach(function(li){
        li.style.background = 'grey'
        li.style.color = 'black'
    })
    for (let i = 0; i < liEven.length; i++) {
       liEven[i].style.background = 'green'
        
    }

    let val;
    const listt = document.querySelector('ul.task-list');
    const listItem = document.querySelector('li.task-item:first-child');

    val = listItem;
    val = listt.childNodes;

    val = listt.children[3].children.id = 'test-link';
    val = listt.firstElementChild;
    val = listt.childElementCount;
    val = listItem.parentNode;
    
    console.log(val);
    
    

    /*const li = document.createElement('li');
    li.classList = 'header-tag'
    li.id = 'header'
    li.setAttribute('title', 'new')
    li.appendChild(document.createTextNode('his'))
    document.querySelector('ul.task-list').appendChild(li);

    const link = document.createElement('a');
    link.className = 'task-remove';
    link.innerHTML = '<i class="task-icon icon-arrows-remove"></i>';
    li.appendChild(link)

    console.log(li);*/

    

    

    
const newHead = document.createElement('h1');
newHead.className = 'task-head';
newHead.appendChild(document.createTextNode('TASK-LIST'))

const oldHead = document.querySelector('.task-heading');
const parenthead = document.querySelector('.task-content-1');
parenthead.replaceChild(newHead, oldHead)
newHead.style.marginBottom = '4rem'
console.log(newHead);


/*document.querySelector('.task-submit--clear').addEventListener('click', onClick)
    const newList = document.createElement('li');
    newList.className = 'task-item';
    newList.appendChild(document.createTextNode('New List'));
    const newLink = document.createElement('a');
    newLink.className = 'task-remove';
    newLink.innerHTML = '<i class="task-icon icon-arrows-remove"></i>';
    document.querySelector('ul.task-list').appendChild(newList);
    newList.appendChild(newLink);
function onClick(e) {
    let val;
    val = e;
    val = e.type;
    val = e.clientY; 
    
    console.log(val);
}


   
document.querySelector('.task-submit--clear').addEventListener('click', 
function(e){
    console.log('hello world');
    e.preventDefault();
})

document.querySelector('.task-submit--clear').addEventListener('click', onClick);
function onClick(e) {
    //console.log('clicked');
    let val;
    val = e;
    e.target.innerText = 'Hello';
    console.log(e);
    
}
const clearBtn = document.querySelector('.task-submit--clear');
const card = document.querySelector('.container');
const headings = document.querySelector('h2');

//clearBtn.addEventListener('click', runEvent);
//clearBtn.addEventListener('dblclick', runEvent);
//clearBtn.addEventListener('mousedown', runEvent);
//clearBtn.addEventListener('mouseleave', runEvent);
card.addEventListener('mousemove', runEvent)

function runEvent(e) {
    console.log(`Event Type: ${e.type}`);

    headings.textContent =`MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 10)`;
}

const form = document.querySelector('form');
const input = document.getElementById('new task');
const heading = document.querySelector('h2')
//form.addEventListener('submit', runEvent);
//input.addEventListener('cut', runEvent);
//input.addEventListener('blur', runEvent);
//input.addEventListener('focus', runEvent);
//input.addEventListener('paste', runEvent);
input.addEventListener('input', runEvent);


input.value =''
function runEvent(e) {
    console.log(`Event Type: ${e.type}`);
    //console.log(input.value);
    //console.log(e.target.value);
    //heading.innerText = e.target.value
}*/
const form = document.querySelector('form');
const input = document.getElementById('new task');
const heading = document.querySelector('h2')

input.addEventListener('keydown', runEvent);
function runEvent(e) {
    console.log(`Event Type: ${e.type}`);
    heading.innerText = e.target.value;
}



document.querySelector('.btn').addEventListener('click', onClick);
function onClick(e) {
   const list = document.createElement('li');
   list.className = 'task-item';
   list.appendChild(document.createTextNode('List item'));
   const link = document.createElement('a');
   link.style.float = 'right'
   link.className = 'task-remove';
   link.innerHTML = '<i class="task-icon icon-arrows-remove"></i>';
   document.querySelector('ul.task-list').appendChild(list);
   list.appendChild(link)
}
document.addEventListener('click', deleteItem);
function deleteItem(e) {
    if (e.target.parentElement.classList.contains('task-remove')) {
        e.target.parentElement.parentElement.remove();
    }
}

localStorage.setItem('name', 'peter');
localStorage.setItem('age', '25')
sessionStorage.setItem('name', 'john');
//localStorage.removeItem('name');

const name = localStorage.getItem('name')
const age = localStorage.getItem('age')
console.log(name, age);

document.querySelector('form').addEventListener('submit', function(e){

    e.preventDefault();
    const task = document.getElementById('new task').value;

    let tasks;
    if (localStorage.getItem('tasks') === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(task)
    localStorage.setItem('tasks', JSON.stringify(tasks));
    
    
    alert('task is saved')
})