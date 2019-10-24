# Async Exercise #5 - Async Await

## Task - The Order System

### Task - Part 1

Please create a file "order.js".

Within that file - Declare the following functions:

- saveOrderToDatabase()

- sendEmailConfirmation()

- processPayment()

- reserveStockItem()

Within these functions - return a new Promise. 

Like so: `return new Promise((resolve, reject) => {...})`

Within the promise function:

Just call the resolve() Method. And pass in a message to it.
The message states what the function has done.

Example for processPayment:
Write something like this: resolve("Processed the payment successfully").

Now lets simulate that each task will take 2 seconds to complete:

Wrap the resolve() statement in the functions into a setTimetout call. The timeout should be 2 seconds

### Task - Part 2

Now we want to setup a function that processes a complete order.

Write a function "order". It takes no parameters.

Make it an async function (so state the keyword "async" in front of the parentheses, like so `const order = async() => ...`)

Within the order function:

- Call the four other methods in sequence
- Use the keyword await before each function call
- And store the result in a variable => like so: `let result = await saveOrderToDatabase()` => Do the same for the other three functions as well
- After each function call: Printout the result variable to the console.

Now call your function order() at the bottom to test the output.

You should now see all the order operations in series, each one completing after 2 seconds.

The final output on the terminal should be kind of like this:

```
Saved the order to the database successfully
Send order confirmation via Email successfully
Processed the customer payment successfully
Reserved the product in stock succesfully
```

Works? Add, commit and push.

Well done and congrats!

You now have dealt with the most important asynchronous operations in JavaScript.

Now relax and go back enjoy your synchronous world again :-)
