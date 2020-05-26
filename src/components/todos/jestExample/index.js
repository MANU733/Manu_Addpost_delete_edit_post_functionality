import React from 'react';

const JestExample=(props)=>{
    const change=props.changeclass?"true":"false";
     if(props.success)
     {
         return(
             <div data-test="component-congrats" className={change}>
                 <div  data-test="component-message">
                     Congrats!
                 </div>
             </div>
         )
     }
     else 
     {
         return (
            <div data-test="component-congrats"/>
         )
     }
}
export default JestExample;