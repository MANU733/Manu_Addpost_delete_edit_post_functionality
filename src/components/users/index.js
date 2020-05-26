import React from 'react';
import Modal from '../../customComponent/modal/index.js';
import { Paper } from '@material-ui/core';
import { get } from 'lodash';
// import Jestclass from './Jestclasscomponent';
// import JestFunc from './JestFunctional';

class Users extends React.Component {

    constructor(props) {
        super(props)
        this.reference = React.createRef();
        const inputTextNameload = get(this.props, 'inputTextName', []);
        this.state = {
            isEdit: false,
            username: (inputTextNameload.map(v => v.username)),
            id: null
        }
    }

    editTheText = (id) => {
        this.setState({
            id: id,
            isEdit: true
        })
    }

    noUpdate = () => {
        this.setState({ isEdit: false })
    }

    onSave = (id) => {

        this.setState({
            username: this.reference.current.value,
            isEdit: false
        })
        this.props.nameChanged(id, this.reference.current.value)
    }

    render() {
        const inputTextNameload = get(this.props, 'inputTextName', []);
        return (
            <>
                <div data-test='Empty-cart'>
                    <Modal />

                    {inputTextNameload.length ? "" :
                        (<Paper elevation={3} className="outerDivision" data-test="sagar">
                            <div className="tableName">Name</div>

                            <div className="tableAction">Action</div>
                        </Paper>)
                    }

                    {
                        inputTextNameload.map(name => {
                            return (
                                <div data-test="manu">
                                    <div className="useName" value="sagar">
                                        <p className="nameList">
                                            {
                                                this.state.id === name.id && this.state.isEdit ?
                                                    (<><input
                                                        type="text"
                                                        name="russian"
                                                        defaultValue={name.username}
                                                        ref={this.reference}
                                                        data-test="editbutton"
                                                        className="editInput" />
                                                        <button onClick={this.noUpdate} className="buttonX">x</button>
                                                        <button onClick={() => this.onSave(name.id)} className="buttonSave">save</button></>)
                                                    : name.username
                                            }
                                        </p>
                                        <button onClick={() => this.editTheText(name.id)} className="edit" >Edit</button>
                                        <button onClick={() => this.props.deleteaction(name.id)} className="delete" >Delete</button>
                                    </div>
                                </div>
                            )
                        }


                        )
                    }
                </div>
                <>
                {/* <Jestclass title="Jest"/>
                <JestFunc title="Jests"/> */}
                </>
            </>
        )
    }
}
export default Users;