
function render(node) {

  
    if (typeof node === "string" || typeof node === "number") {
        return document.createTextNode(node);
    }


    const element = document.createElement(node.type);


    if (node.attributes) {

        for (const [key, value] of Object.entries(node.attributes)) {

            element.setAttribute(key, value);

        }
    }


    if (node.events) {

        for (const [event, handler] of Object.entries(node.events)) {

            element.addEventListener(event, handler);

        }
    }


    if (node.children) {

        node.children.forEach(child => {

            element.appendChild(
                render(child)
            );

        });

    }


    return element;
}



let todos = [

    {
        id: 1,
        title: "Learn React",
        description: "Understand components and state",
        deadline: "Today"
    },

    {
        id: 2,
        title: "Build Tornado",
        description: "Build my own rendering system",
        deadline: "Tomorrow"
    }

];




let nextId = 3;




function TodoComponent(todo) {

    return {

        type: "div",

        attributes: {
            class: "todo-wrapper"
        },

        children: [


            {
                type: "div",

                attributes: {
                    class: "todo-card"
                },

                children: [


                    {
                        type: "div",

                        attributes: {
                            class: "todo-header"
                        },

                        children: [

                            {
                                type: "h4",

                                children: [
                                    todo.title
                                ]

                            }

                        ]

                    },

                    {
                        type: "div",

                        attributes: {
                            class: "todo-content"
                        },

                        children: [

                            {
                                type: "p",

                                children: [
                                    todo.description
                                ]

                            },

                            {
                                type: "p",

                                children: [
                                    `Deadline: ${todo.deadline}`
                                ]

                            }

                        ]

                    }

                ]

            },


          

            {
                type: "div",

                attributes: {
                    class: "buttons"
                },

                children: [

                  

                    {
                        type: "button",

                        attributes: {
                            class: "button",
                            id: "edit"
                        },

                        children: [
                            "Edit"
                        ],

                        events: {

                            click: () => {

                                editTodo(todo.id);

                            }

                        }

                    },

                    {
                        type: "button",

                        attributes: {
                            class: "button",
                            id: "delete"
                        },

                        children: [
                            "Delete"
                        ],

                        events: {

                            click: () => {

                                deleteTodo(todo.id);

                            }

                        }

                    }

                ]

            }

        ]

    };
}




function TodoList() {

    return todos.map(todo => {

        return TodoComponent(todo);

    });

}




function renderTodos() {

    const container =
        document.getElementById("todoContainer");



    container.innerHTML = "";

    const todoComponents = TodoList();


 

    todoComponents.forEach(component => {

        const element = render(component);

        container.appendChild(element);

    });

}



function addTodo() {

    const input =
        document.getElementById("todoInput");


    const title =
        input.value.trim();


    if (title === "") {

        alert("Please enter a task.");

        return;

    }


    const newTodo = {

        id: nextId++,

        title: title,

        description: "Description goes here....",

        deadline: "Not specified"

    };


    todos.push(newTodo);



    renderTodos();


    input.value = "";

}




function deleteTodo(id) {

    todos = todos.filter(todo => {

        return todo.id !== id;

    });




    renderTodos();

}




function editTodo(id) {

    const todo = todos.find(todo => {

        return todo.id === id;

    });


    if (!todo) {
        return;
    }


    const newTitle =
        prompt("Edit task:", todo.title);


    if (newTitle === null) {
        return;
    }


    const trimmedTitle =
        newTitle.trim();


    if (trimmedTitle === "") {
        return;
    }


    todo.title = trimmedTitle;


    renderTodos();

}



function clearTodos() {

    todos = [];


  

    renderTodos();

}




document
    .getElementById("add")
    .addEventListener("click", addTodo);


document
    .getElementById("clear")
    .addEventListener("click", clearTodos);




renderTodos();