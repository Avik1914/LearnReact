import React from 'react';

const Spinner = () =>{
    return (
        <div class="ui segment">
            <p></p>
            <div class="ui active dimmer">
                <div class="ui loader">
                    Loading...
                </div>
            </div>
        </div>
    );
};

export default Spinner;
