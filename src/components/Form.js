import React from 'react';

function Form(props){
    return(
        <div className="container">
            <form className="formtag">
                <input type="text" value={props.search} placeholder="Search" onChange={props.handleInputChange} onSubmit={props.handleSubmit} className="remove"></input>
            </form>

    </div>
    )
  
}
export default Form;