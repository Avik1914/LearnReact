import React from 'react';

class ClockComponent extends React.Component{
    state={time:new Date().toLocaleTimeString()};
    componentDidMount(){
        setInterval(()=>{
            this.setState({time : new Date().toLocaleTimeString()});
        },1000);
    }
    render(){
        return <div>{this.state.time}</div>;
    }
}


export default ClockComponent;