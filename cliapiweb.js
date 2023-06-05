class Stack {
  constructor() {
    this._data = [];
  }
}
push(element)
{
  return this._data.push(element);
}

pop()
{
  return this._data.pop();
}

isEmpty()
{
  return!this._data.length;
}

getSize()
{
  return this._data.length;
}
const myStack=new Stack();

   // Add items to the stack
   myStack.push('apple');
   myStack.push('banana');
   myStack.push('cherry');

   console.log(`The current stack has ${myStack.getSize()} elements`);

   // Remove item from the stack
   let removedItem=myStack.pop();
   console.log(`${removedItem} was just removed`);

   // Check if the stack is empty
   if(!myStack.isEmpty()){
     console.log("The stack still has items");
   }else{
     console.log("The stack is now empty")
   }