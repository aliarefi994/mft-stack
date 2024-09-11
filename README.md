Stack Data Structure Implementation
This project implements a simple stack data structure in Node.js with logging using the chalk library for colorful output. The stack supports common operations such as push, pop, peek, clear, and length tracking.

Table of Contents
Prerequisites
Installation
Usage
Stack API
Example
Contributing
License
Prerequisites
Node.js installed on your machine (v14.0.0 or higher recommended).
Basic knowledge of Node.js and JavaScript.
Installation
Clone the repository or download the files:

bash
Copy code
git clone https://github.com/yourusername/stack-implementation.git
Navigate to the project folder:

bash
Copy code
cd stack-implementation
Install the dependencies:

bash
Copy code
npm install chalk
Usage
You can run the stack example with the provided test.js file.

Add your stack operations in test.js.
Run the program:
bash
Copy code
node test.js
You should see the stack operations logged to the console in color.

Stack API
The stack supports the following operations:

push(item)
Adds an item to the stack and logs the operation.

pop()
Removes and returns the top item from the stack. Logs the operation.

length()
Returns the current number of elements in the stack.

peek(index)
Returns the element at the specified index in the stack without removing it.

clear()
Removes all elements from the stack and resets its state.

print()
Logs the current contents of the stack.

Example
Here is an example of how you can use the stack:

js
Copy code
const stack = require('./')

stack.push('behrad')
stack.push('jafar')
stack.push('ali')

console.log(`length=${stack.length()}`)

console.log(stack.pop())  // ali
console.log(stack.pop())  // jafar

console.log(`length=${stack.length()}`)

console.log(stack.pop())  // behrad

console.log(`length=${stack.length()}`)

console.log(stack.pop())  // null (since stack is empty)

console.log('End')
console.log(stack.peek(1))  // null (index out of bounds)
console.log(stack.clear())  // stack cleared
console.log(stack.print())  // stack is empty
Contributing
Feel free to submit issues or pull requests to enhance this implementation.

License
This project is licensed under the MIT License.
