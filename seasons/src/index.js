import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


//Class based Component having a render method.
class App extends React.Component{
    
    constructor(props){
        super(props);
        this.state={lat: null,errorMessage: ''};
    }
    //lifecycle methods
    componentDidMount(){
        console.log("My Component was rendered to the screen");
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude})
            ,(err) => this.setState({ errorMessage:err.message })
        );
    }
    //lifecycle methods
    componentDidUpdate(){
        console.log("My Component was updated!!!!");
    }
    //helper function
    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error : {this.state.errorMessage}</div>;
        }
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>;
        }
        return <Spinner message="Please accept the location request"/>;
    }
    
    render(){
      return <div className="boarder red">{this.renderContent()}</div>
    }
}

ReactDom.render(<App/>,document.querySelector('#root'));

