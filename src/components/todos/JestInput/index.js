import React from 'react';
import { connect } from 'react-redux';
import {resetgame} from '../../../action/secretword'

const Input = (props) => {

    const handleSubmit=(e)=>{
        e.preventDefault()
        props.loadSpinner()
    }
    let content = null;
    if (props.success) {
        content= (<div>
            <form data-test="form-input" onSubmit={(e)=>handleSubmit(e)}>
                <input
                    type="text"
                />
                <button 
                type="button"
                >submit</button>
            </form>
        </div>)
    }
    else {
        content= (<div>congrats component</div>)
    }
    return content;
}

export const mapStateToProps = (state) => {
    return {
        success: state.success
    }
}

export const mapsDispatchToProps = (dispatch) => {
    return {
        resetgame:()=>dispatch(resetgame())
        
    }
}

export default connect(mapStateToProps,mapsDispatchToProps )(Input);