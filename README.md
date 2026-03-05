1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- getElementById : Get a single element by "id" : Returns a single "DOM Element"
- getElementByClassName : Get all elements with a specific class : Return a "Array"
- querySelector : Returns first matching element.
- querySelectorAll : Returns NodeList of all matches

2.How do you create and insert a new element into the DOM?

- const element = document.createElement("div")
  element.textContent = "Hello"
  document.body.appendChild(element)

3. What is Event Bubbling? And how does it work?

- Event Bubbling is when an event starts from the last target element and then propagates upward through its parent elements until it reaches the document root.

- For example : Clicking a <button> inside a <div> triggers the button’s click handler first, then the <div>’s handler, then <body>, and continues up the DOM tree.

4. What is Event Delegation in JavaScript? Why is it useful?

- Event Delegation is a technique of attaching a single event listener to a parent element instead of each child,
 and then using the event’s target to handle actions on the specific child that was interacted with.
- Usefulness:
  1.Less Memory
  2.Work for dynamic elements also
  3.Simpler Code
  
5. What is the difference between preventDefault() and stopPropagation() methods?

- preventDefault(): stops the browser action.
- stopPropagation(): stops the event from reaching other elements.
