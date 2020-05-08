import { connect } from 'react-redux';
import {guessedwordredux} from '../action/secretword';
import Gamedashboard from '../components/todos/gameDashboard'

const mapStateToProps=(state)=>{
return{
    guessword:state.guessedwordreducer,
    secretwordredux:state.secretReducer.secretword
}
}

const mapsDispatchToProps=(dispatch)=>{
    return{
        guessedwordredux:(guessedword)=>dispatch(guessedwordredux(guessedword))
    }
}
export default connect(mapStateToProps,mapsDispatchToProps)(Gamedashboard);