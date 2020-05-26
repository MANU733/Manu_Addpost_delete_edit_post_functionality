import React from 'react';
class Jestclass extends React.Component{
    constructor()
    {
        super()
        {
            this.state={
                inputText:''

            }
        }
    }

    handlechange=(e)=>{
      this.setState({inputText:e.target.value})
    }
    // submit=(e)=>{
    //     e.preventDefault()
    // }
    render()
    {
        return(
            <>
            <p>{this.props.title}</p>
              <form >
                  <input 
                  type="text"
                  onChange={(e)=>this.handlechange(e)}
                  />
                  <button type="submit">Submit</button>
              </form>
            </>
        )
    }
}

export default Jestclass;