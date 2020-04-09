import React from 'react';
import { InputBase } from '@material-ui/core';
import { Paper } from '@material-ui/core';


class Createusers extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            inputName: '',
            inputEmail: '',
            nameError:"",
            emailError:"",
            nameErrorValue:false,
            emailErrorvalue:false
        }
    }

    

    render() {
        const handleChangeEmail = (e) => {
            this.setState({
                inputEmail: e.target.value
            });
        }
        const handleChangeName = (e) => {
            this.setState({
                inputName: e.target.value
            });
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            if(this.state.inputName==="")
            {
                this.setState({nameError:"Please Enter the User Name",nameErrorValue:true})
            }
            else if(this.state.inputName.match(/^[0-9]*$/))
            {
                this.setState({nameError:"Please Enter valid Name",nameErrorValue:true})
            }
            else if(this.state.inputEmail==="")
            {
                this.setState({emailError:"Please Enter the Email Id",nameErrorValue:false,emailErrorvalue:true}) 
            }
            else{
            this.setState({spinner:true,nameErrorValue:false,emailErrorvalue:false})
            this.props.addPost({username:this.state.inputName,id:Math.random(),modalClose:true})
            }
        }
        return (
            <>
                <form onSubmit={handleSubmit}>
                    <Paper elevation={3} className="inputbaseouterdiv">
                        <InputBase
                            placeholder="Enter Name"
                            onChange={(e) => handleChangeName(e)}
                            helperText={this.state.nameError}
                        />
                    </Paper>
                    <p className="errorDisp">{this.state.nameErrorValue?this.state.nameError:""}</p>
                    <Paper elevation={3} className="inputbaseouterdiv">
                        <InputBase
                            placeholder="Enter Email"
                            onChange={(e) => handleChangeEmail(e)}
                        />
                    </Paper>
                    <p className="errorDisp">{this.state.emailErrorvalue?this.state.emailError:""}</p>
                    <button type="submit" className="addUser">Add users</button>
                </form>
            </>
        )
    }
}
export default Createusers;