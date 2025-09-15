const input=document.getElementById('task-input')
const addBtn=document.getElementById('add-btn')
const tasksList=document.getElementById('tasks')
const clearCompleted=document.getElementById('clear-completed')
const clearAll=document.getElementById('clear-all')
let tasks=JSON.parse(localStorage.getItem('tasks')||'[]')
function save(){localStorage.setItem('tasks',JSON.stringify(tasks))}
function render(){tasksList.innerHTML=''
tasks.forEach((t,i)=>{const li=document.createElement('li');li.className='task';const left=document.createElement('div');left.className='left';const chk=document.createElement('input');chk.type='checkbox';chk.checked=t.done;chk.addEventListener('change',()=>{tasks[i].done=chk.checked;save();render()});const span=document.createElement('div');span.className='text';span.textContent=t.text;left.appendChild(chk);left.appendChild(span);const del=document.createElement('button');del.textContent='Delete';del.addEventListener('click',()=>{tasks.splice(i,1);save();render()});li.appendChild(left);li.appendChild(del);tasksList.appendChild(li)})}
addBtn.addEventListener('click',()=>{const v=input.value.trim();if(!v) return;tasks.unshift({text:v,done:false});input.value='';save();render()})
input.addEventListener('keydown',e=>{if(e.key==='Enter') addBtn.click()})
clearCompleted.addEventListener('click',()=>{tasks=tasks.filter(t=>!t.done);save();render()})
clearAll.addEventListener('click',()=>{tasks=[];save();render()})
render()