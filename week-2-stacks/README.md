### Instructions to Create a Stack Class Using an Array (Test-Driven Style)

1. **Create a File Called `stack.js`**:
   - Start by creating a new file named `stack.js` where you will define the `Stack` class.

2. **Create an Instance First**:
   - Before implementing any methods, create an instance of the `Stack` class to test it step by step.

3. **Define the `Stack` Class**:
   - Now, define the `Stack` class but keep it empty for now, except for the constructor.

   **Test**: Check if the `stack` object is created without errors.

4. **Implement the `push(element)` Method**:
   - Add the `push()` method to allow pushing elements to the stack.

   **Test**: Push elements into the stack and check the state of `stack.storage`.

5. **Implement the `pop()` Method**:
   - Add the `pop()` method to remove and return the top element from the stack.

   **Test**: Pop elements from the stack and check if they are removed correctly.

6. **Implement the `peek()` Method**:
   - Add the `peek()` method to return the top element without removing it.

   **Test**: Use `peek()` to check the top element without modifying the stack.

7. **Implement the `isEmpty()` Method**:
   - Add the `isEmpty()` method to check if the stack is empty.

   **Test**: Check whether the stack is empty using the `isEmpty()` method after pushing and popping elements.

By taking this test-driven approach, you will incrementally build the `Stack` class and verify its behavior at each step. Each method should be tested before moving on to the next one.