import React from 'react';
import Modal from '../../customComponent/modal/index.js';
import { Paper } from '@material-ui/core';

class Users extends React.Component {

    constructor(props) {
        super(props)
        this.reference = React.createRef();
        this.state = {
            isEdit: false,
            username: (this.props.inputTextName.map(v => v.username)),
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

        return (
            <>
                <Modal />

                {this.props.inputTextName.length === 0 ? "" :
                    <Paper elevation={3} className="outerDivision">
                        <div className="tableName">Name</div>

                        <div className="tableAction">Action</div>
                    </Paper>
                }

                {
                    this.props.inputTextName.map(name => {
                        return (
                            <>
                                <div className="useName" >
                                    <p className="nameList">
                                        {
                                            this.state.id === name.id && this.state.isEdit ?
                                                (<><input
                                                    type="text"
                                                    name="russian"
                                                    defaultValue={name.username}
                                                    ref={this.reference}
                                                    className="editInput" />
                                                    <button onClick={this.noUpdate} className="buttonX">x</button>
                                                    <button onClick={() => this.onSave(name.id)} className="buttonSave">save</button></>)
                                                : name.username
                                        }
                                    </p>
                                    <button onClick={() => this.editTheText(name.id)} className="edit">Edit</button>
                                    <button onClick={() => this.props.deleteaction(name.id)} className="delete">Delete</button>
                                </div>
                            </>
                        )
                    }


                    )
                }
            </>
        )
    }
}
export default Users;