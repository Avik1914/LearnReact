import React from 'react';

class SearchBar extends React.Component{
    /*onInputChange(event){
        console.log(event.target.value);
    }*/
    //Below code will result in error
   /* onFormSubmit(event){
        event.preventDefault();   
        console.log(this.state.term);
    }*/
    onFormSubmit=event =>{
        event.preventDefault();
        this.props.whenSubmit(this.state.term);
    }
    state={term: ''};
    render(){
        return (  
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input type='text' 
                            value ={this.state.term} 
                            onChange={(e)=>this.setState({term: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;