import React from "react";
import "./Blog.css";
const Blog = () => {
  return (
    <div>
      <div className="blog-header">
        <h2>Blog section</h2>
      </div>
      <div className="blog-container">
        <div className="blog-catagory">
          <h3>How does react work</h3>
          <p>
            ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties
            or props. It's possible to have as many components as necessary without cluttering your code.
          </p>
        </div>
        <div className="blog-catagory">
          <h3>Props vs State</h3>
          <p>
            <h4>State</h4>
            The state is an updatable structure that is used to contain data or information about the component and can change over time. The change in state can happen as a response to user action or
            system event. It is the heart of the react component which determines the behavior of the component and how it will render. A state must be kept as simple as possible. It represents the
            component's local state or information. It can only be accessed or modified inside the component or by the component directly.
            <h4>Props</h4>
            Props are read-only components. It is an object which stores the value of attributes of a tag and work similar to the HTML attributes. It allows passing data from one component to other
            components. It is similar to function arguments and can be passed to the component the same way as arguments passed in a function. Props are immutable so we cannot modify the props from
            inside the component.
          </p>
        </div>
        <div className="blog-catagory">
          <h3>Uses of useEffect</h3>
          <p>
            <h4>1. Running on state change: validating input field</h4>
            Validating an input while it's receiving characters is another great application for useEffect. Whilst the input is being stored in a state using useState, the validation takes place every
            time the input changes, giving immediate feedback to the user. We could add a setTimeout() function to check the input field after some time, to delay the checking on each user keystroke,
            and we would need to clear that timer by using the clearTimeout() function in the return statement of the useEffect hook. A similar example of this is implemented in the useEffect
            animation trigger, further ahead.
          </p>
          <p>
            <h4>2. Running on state change: live filtering</h4>
            Validating an input while it's receiving characters is another great application for useEffect. Whilst the input is being stored in a state using useState, the validation takes place every
            time the input changes, giving immediate feedback to the user. We could add a setTimeout() function to check the input field after some time, to delay the checking on each user keystroke,
            and we would need to clear that timer by using the clearTimeout() function in the return statement of the useEffect hook. A similar example of this is implemented in the useEffect
            animation trigger, further ahead.
          </p>
          <p>
            <h4>3. Running on state change: trigger animation on new array value</h4>
            We can use the useEffect hook to trigger an animation on a shopping cart as a side effect of adding a new product to it. In this case, we'll need a state to handle the cart items, and
            another state to handle the animation trigger. As we are using a timer inside the useEffect, It is a good practice to clear it before it gets set again by using the return statement of the
            useEffect, which gets executed before the main body of the useEffect hook gets evaluated (except for the first render).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
