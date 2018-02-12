// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];

// // Create a new task by adding to the arrays
// // A new task will be created as incomplete
// function newTask(title) {
//   taskTitles.push(title);
//   taskComplete.push(false);
// }

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// // DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed





// replace above code using Objects

// // create new tasks with required arguments title and description
// function newTask(title, description) {
//   const task = {
//     title: title,
//     description: description,
//     complete: false
//   };
//   return task;
// }

// // print out a specific tasks details

// function logTaskState(task) {
//   console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
// }

// // mark provided task as completed

// function completeTask(task) {
//   task.complete = true;
// }


// // Driver code
// const task1 = newTask("Clean Cat Litter", "Clean out box and add new litter");
// const task2 = newTask("Do Laundry", "Wash, fold, put away");
// const tasks = [task1, task2];

// logTaskState(task1);  // Clean Cat Litter has not been completed
// completeTask(task1);    // call complete task function on task1
// logTaskState(task1);  // Clean Cat Litter has been completed

// console.log("Tasks",tasks);


// now make this 'object' code Object Oriented using methods

function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
        console.log(`${task.title} has${task.complete ? " " : " not "}been completed`);
    },

    markComplete: function() {
      this.complete = true;
    }
  };
  return task;

}

const task1 = newTask("Clean Cat Litter", "Clean out box and add new litter");
const task2 = newTask("Do Laundry", "Wash, fold, put away");
const tasks = [task1, task2];

task1.logState();  // Clean Cat Litter has not been completed
task1.markComplete();
task1.logState();   // Clean Cat Litter has been completed

//  task1.title // access the object property like this
//  task1.markCompleted();  // access the method like this


