import React from 'react';
import { connect } from 'react-redux';

const Input = (props) => {
    let content = null;
    if (props.success) {
        content= (<div>
            <form data-test="form-input">
                <input
                    type="text"
                />
                <button type="button">submit</button>
            </form>
        </div>)
    }
    else {
        content= (<div>congrats component</div>)
    }
    return content;
}

const mapStateToProps = (state) => {
    return {
        success: state.success
    }
}

export default connect(mapStateToProps, null)(Input);