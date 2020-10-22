# LearnReact

# REACT.JS

<font size="11">The App function of React is a Component and it is used to produce JSX and handles user events. JSX tell react that which content is a DOM element of HTML and can be shown on screen. Also, JSX can be used to show another react component.

React Flow
1.	At first the webpage invokes the react application and the application responds with a index.html file.
2.	The index.html calls the index.js file at first and here 
ReactDOM.render(<App/>, getElementbyID(“root”) is used. The first argument <App/> is used to tell react to call the App component and get all the JSX used there. The second argument is used to mention the place where the JSX output will be rendered. By default the call will go in index.html.
3.	The index.html has script tags and for that the web page again makes a request to the application to retrieve the JavaScript files that are referenced in the script tag. The react application accumulates all JavaScript files into a special JavaScript file known as  bundle.js, which is returned to the browser.

React : Knows how to work with components(reconciler)
ReactDOM : Knows how to take set of instructions on what we want to show and turn it into html.

useState : Function for working with React’s state system. State is used to keep track of data that is changed over time and it is used for updating the HTML on the screen.


A react component is a Function or Class that produces HTML to show the user using JSX and handles feedbacks from the user using event handlers.

Any Browser never understands a JSX file so tools like “Bable” translate it to a javascript code.

Difference between JSX and HTML

- Custom styling is different. 
HTML : <div style= “background-color: red”></div>
JSX :	<div style= {{backgroundColor: ‘red’}}></div>
Styling is done as javascript objects.

- Assigning a class is done by using className
- JSX can reference a javascript variable.

Three main tenets of react application:
-	Component Nesting
-	Component Reusability
-	Component Configuration
</font>
