let todo = [];

let req = prompt("Enter your request");


while(true) {
    if(req == "quit") {
        console.log("Quitting To do");
        break;
    }

    if(req == "add") {
        let task = prompt("enter the task you want to add");
        todo.push(task);
    } else if(req == "list") {
        console.log("---------------");
        for(let i = 0; i < todo.length; i++) {
            console.log(`${i}. ${todo[i]}`);
        }
        console.log("---------------");
    } else if(req == "delete") {
        let idx = prompt("please enter the index of task u want to delete");
        todo.splice(idx, 1);
    } else {
        console.log("wrong request");
    }

    req = prompt("Enter your request");
}