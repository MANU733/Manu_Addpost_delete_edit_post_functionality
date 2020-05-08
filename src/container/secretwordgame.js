import Todo from '../components/todos/index.js';
import { connect } from 'react-redux';
import {storeSecretWordaction} from '../action/secretword';

const mapStateToProps=(state)=>{
return{
    secretwordredux:state.secretReducer.secretword
}
}

const mapsDispatchToProps=(dispatch)=>{
    return{
        secretWord:(secretword)=>dispatch(storeSecretWordaction(secretword))
    }
}
export default connect(mapStateToProps,mapsDispatchToProps)(Todo);