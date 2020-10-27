import React from 'react';
import ReactDom from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{
    
    constructor(props){
        super(props);
        this.state={lat: null,errorMessage: ''};
    }
    componentDidMount(){
        console.log("My Component was rendered to the screen");
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude})
            ,(err) => this.setState({ errorMessage:err.message })
        );
    }

    componentDidUpdate(){
        console.log("My Component was updated!!!!");
    }
    render(){
       if(this.state.errorMessage && !this.state.lat){
           return <div>Error : {this.state.errorMessage}</div>;
       }
       if(!this.state.errorMessage && this.state.lat){
           return <SeasonDisplay lat={this.state.lat}/>;
       }
       return <Spinner/>;

    }
}

ReactDom.render(<App/>,document.querySelector('#root'));
