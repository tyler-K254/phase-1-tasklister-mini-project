document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) =>{
    e.preventDefault()
    buildTaskDes(e.target.new_task_description.value)
    form.reset();

  })
});

function buildTaskDes(taskDes){
  console.log(taskDes)
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', function handleDelet(e){
    e.target.parentNode.remove()
  })
  btn.textContent = 'x'
  p.textContent = taskDes + " "
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p)
}