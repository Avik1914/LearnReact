import React from 'react';
//component 
const Spinner = (props) =>{
    return (
        
            <div class="ui active dimmer">
                <div class="ui big text loader">
                    {props.message}
                </div>
            </div>
    );
};
//Props default configs
Spinner.defaultProps={
    message: 'Loading...'
};
export default Spinner;
