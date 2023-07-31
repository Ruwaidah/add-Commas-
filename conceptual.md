### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
 is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It’s used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components.


- What is Babel?
    is a JavaScript compiler that converts modern JavaScript code into a version compatible with all browsers. Babel enables React developers to use the latest JavaScript syntax in their components. Babel transpiles modern JavaScript for use in React components and all browsers.

- What is JSX?
    JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement()  and/or appendChild() methods.
    JSX converts HTML tags into react elements.

- How is a Component created in React?
    Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
    Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.

- What are some difference between state and props?
    Props are read-only. The state is both read and write. Props are used to pass data from one component to another

- What does "downward data flow" refer to in React?
    refers to the passing of data and/or functions via props from parent to child components. These props are passed down when a child component gets created.

- What is a controlled component?
     form data is handled by the component’s state. Forms are used to store information in a document section. The information from this form is typically sent to a server to perform an action.

- What is an uncontrolled component?
    the form data is handled by the DOM itself. “Uncontrolled” refers to the fact that these components are not controlled by React state. The values of the form elements are traditionally controlled by and stored on the DOM.

- What is the purpose of the `key` prop when rendering a list of components?
    used to identify which items have changed, updated, or deleted from the Lists. It is useful when a user alters the list. It helps react to determine which component to be re-rendered.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    React will optimize and not render as expected

- Describe useEffect.  What use cases is it used for in React components?
    The core principle of this hook is to let you perform side effects in your functional components. The useEffect hook is a smooth combination of React’s lifecycle methods like componentDidMount, componentDidUpdate and componentWillUnmount.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    React Hook that lets you reference a value that’s not needed for rendering, and it will not rerender the component if qthe ref value changed

- When would you use a ref? When wouldn't you use one?
     If you do not need to update UI, use useRef to store state variables

- What is a custom hook in React? When would you want to write one?
     a custom Hook is a function that starts with the word “use” and may call other Hook, when we have repeated code in more than one component we can create our own custom hook to ues it in more than one component.
