 const spanDate = document.querySelector('#date-tag');
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const btn = document.querySelector('#add-btn');
    const todoList = document.querySelector('#todo-list');
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const task = document.querySelector('#task-input');
    const task_count = document.querySelector('#task-count');
    const BtnClear = document.querySelector('#clear-btn');
    let count = 0;
    const updateCount = (() => {
      count = tasks.filter(t => t.completed === true).length;
      task_count.innerHTML = `${count} completed`;
    })
    // const PushCount =((state)=>{
    //     if(state)
    //     {
    //         count+=1;
    //     }
    //     else{
    //         count--;
    //     }
    //     task_count.innerHTML=`${count} completed`;
    // });
    const saveTasks = (() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    })
    const updateTasks = ((ID) => {
      tasks = tasks.filter(ts => {
        return ts.id != ID
      });
      saveTasks();
      rendertask();
    })
    const getFormattedDate = (date = new Date()) => {
      const day = days[date.getDay()];
      const month = months[date.getMonth()];
      return `${day} ${date.getDate()} ${month}`
    }
    spanDate.textContent = getFormattedDate();
    const rendertask = (() => {
      todoList.innerHTML = '';
      tasks.forEach((singletask) => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        const button = document.createElement('button');
        const dataId = `${singletask.id}`;
        checkbox.type = 'checkbox';
        checkbox.checked = singletask.completed;
        button.textContent = 'Delete';
        li.innerHTML = `${singletask.text}`;
        li.id = `${dataId}`;
        li.appendChild(checkbox);
        li.appendChild(button);
        todoList.appendChild(li);
        checkbox.addEventListener('click', () => {
          singletask.completed = !singletask.completed;
          // PushCount(singletask.completed);
          rendertask();
          saveTasks();
          updateCount();
        });
        if (checkbox.checked) {
          li.classList.add('done');
        }
        button.addEventListener("click", () => {
          li.remove();
          // if(checkbox.checked){
          //   singletask.completed=false;
          //   PushCount(singletask.completed);
          // }
          updateTasks(li.id);
          updateCount();
        });
      });
    })
    const taskpush = (() => {
      const newtask = {
        id: Date.now(),
        text: task.value,
        completed: false
      }

      tasks.push(newtask);
      saveTasks();
      rendertask();
    })
    const ClearArray = (() => {
      tasks = tasks.filter(ts => {
        return ts.completed === false;
      });
      updateCount();
      saveTasks();
      rendertask();
    })
    btn.addEventListener('click', () => {
      if (task.value !== '') {
        taskpush();
        task.value = "";
      } else {
        console.log('empty');
      }
    });
    BtnClear.addEventListener('click', () => {
      ClearArray();
    });
    rendertask();
    updateCount();
