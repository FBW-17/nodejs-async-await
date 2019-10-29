# Async Exercise #7 - Async Await

## The Order System

### Task

Please create a file "order.js".

Within that file - Declare the following functions:

- createCustomer()

- sendEmail()

- processPayment()

- reserveItemsInStock()

All these functions should return a new Promise.

Call the resolve() Method and pass in a message. The message should just state what the function has just done.

Example for processPayment:
resolve("Processed the payment successfully").

Now simulate that the task in the promise will take 2 seconds to complete.

### Task - Part 2

Now we want to setup a function that processe a complete order, including all subtasks.

Write a function "order". It takes no parameters. Make it an async function using the async keyword.

Within the order function:

- Call the four order methods in sequence using await
- Store the result in a variable and output the result

Call your function order() at the bottom. 

Now run your script.

You should now see all the order operations in series, each one completing after 2 seconds.

The final output on the terminal should be kind of like this:

```
Created customer in the database successfully
Sent order confirmation to customer email successfully
Processed customer payment successfully
Reserved the product in stock succesfully
```

Works? Add, commit and push.

Well done and congrats!

You now have dealt with the most important asynchronous operations in JavaScript.

Now relax and enjoy your synchronous world again :-)
