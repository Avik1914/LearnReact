# LearnReact

# REACT.JS

<font size="11">The App function of React is a Component and it is used to produce JSX and handles user events. JSX tell react that which content is a DOM element of HTML and can be shown on screen. Also, JSX can be used to show another react component.

**React Flow**
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

**Component Nesting** is done when there is some repetitive task are needed to be performed which can be reused. In component nesting those types of task can be written as a separate react file with JSX commands and it can be used with to refer that repetitive task again and again.

For a react file to make available for others file to use it should exported explicitly and other files should import it giving its absolute path.

For example :- In Component the following command is written :- 
export default CommentDetail;

And in ParentFile where the Child Component is used 
import CommentDetail from './CommentDetail';

Single instance of App component (Parent Component) uses three instances of CommentDetail (Child Component).

Props is used for passing data from a parent component to a child component.


**Season App**

As we have used GeoLocation Service in the functional component of this project, we can see that the geolocation call takes some amount of time to retrieve the result , but unfortunately the JSX commands after that call gets rendered even before the previous step of geolocation call fetches the result.
Hence the functional component is not able to solve this problem. The class component will be used here.

Class Components
-	Must be a JavaScript class
-	Must extend React.component
-	Must define a render method that will return some jsx;

Rules of State
-	Only usable with class components
-	Prop is often get confused with state.
-	State is a JS object that contains some amount of data that is relevant to a component.
-	Updating state causes the component to instantly rerender.
-	State must be initialized when a component is created.
-	State can only be updated using the function ‘setState’;

Work Flow of the “Season” project

-	JS File Loaded by the Browser
-	Instance of App Component is Created
-	App components ‘constructor’ function gets called
-	State object is created and assigned to the ‘this.state’ property.
-	geolocation service is invoked
-	render() method of the App component is invoked. Render method is method that is defined in the super class React.component.
-	The App returns JSX, and it gets rendered to the page as HTML. At this time latitude is not populated in the state object.
-	After a while we get result from the geolocation service and the state object is update by the “setState” method.
-	Whenever the state object gets update react calls the render method again just to rerender the JSX.
-	Finally, the content of the screen gets updated with the latitude.

Lifecycle methods of React Components 
-	Constructor – Same as ComponentDidMount but not recommended to use.
-	Render – only used to return JSX
-	ComponentDidMount ->Immediately after the component gets rendered in the browser for the first time. Use for Data loading.
-	ComponentDidUpdate -> Whenever the state is updated, and the component is re-rendered then this lifecycle method is called. 
-	ComponentWillUnmount -> When we want that the component will no longer be re-rendered even when update is done. Best method to perform clean up tasks.

Instead of initializing the state in constructor we can directly initialize it outside but implicitly it gets defined in constructor only and Bable does this job of translating it to a constructor.


We can assign default values in the props variables by the following syntax :
Spinner.defaultProps={
    message: 'Loading...'
};
Spinner is the component name.
</font>
