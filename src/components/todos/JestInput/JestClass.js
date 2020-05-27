import React from 'react';
import { connect } from 'react-redux';
import {loadSpinner} from '../../../action/jestguessword';

class InputClass extends React.Component {

    constructor(props) {
        super(props)
        { 
            this.state={}
        }
    }
    handlesubmit=()=>{
        this.props.loadSpinner()
    }


    render() {
      
    
        let content = null;
        if (this.props.success) {
            content = (<div>
                <form data-test="form-input" onSubmit={this.handlesubmit}>
                    <input
                        type="text"
                    />
                    <button type="button">submit</button>
                </form>
            </div>)
        }
        else {
            content = (<div>congrats component</div>)
        }
        return content;
    }

}



const mapStateToProps = (state) => {
    return {
        success: state.success
    }
}

const mapsDispatchToProps=(dispatch)=>{
    return{
        loadSpinner:()=>dispatch(loadSpinner())
    }
}

export default connect(mapStateToProps, mapsDispatchToProps)(InputClass);