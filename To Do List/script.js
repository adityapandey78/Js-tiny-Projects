document.addEventListener('DOMContentLoaded',()=>{
    const form=document.getElementById('todo-form');
    const input=document.getElementById('todo-input');
    const list=document.getElementById('todo-list');

    form.addEventListener('submit',(e)=>{
        e.preventDefault();//ye submit hone ke just baad  reload hone se rokega
        if (input.value.trim()){
        addTodoItem(input.value.trim());//makes sure that only valied inputs gets into it
        input.value=''; //use add krne ke bnaad todo ki value ko NULL kr de rha hai
        }

    });

    function addTodoItem(task){
        const li=document.createElement('li');
        li.className= 'todo-item';// adding the todo-item class to the newly created list
        li.innerHTML=
       ` <span>${task}</span>
        <button class="delete">Delete</button>`;//ise inner HTML me push kr diya and ek Delete button me bhi

        li.querySelector('span').addEventListener('click',()=>{
            li.querySelector('span').classList.toggle('completed');
            //li.querySelector('span').setAttribute('class','completed');
            console.log("clicked");
            
           
        });

        // Remove the list item when the delete button is clicked
        li.querySelector('.delete').addEventListener('click',()=>{
            list.removeChild(li);
        });
        
        list.appendChild(li);
    }
})