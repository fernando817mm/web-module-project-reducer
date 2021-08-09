# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code executes for each step.
* The user presses the 1 button.
* The addOneHandler reaches into /actions
* Identifies its type as ADD_ONE
* Reaches to /reducers and runs its matching case
...

* TotalDisplay shows the total plus 1.
