import { connect } from 'react-redux';
import { addPost,deleteaction} from '../action/user.js';
import Createusers from '../components/users/createUsers/index.js';

export const mapStateToProps = state => ({
    inputTextName: state.inputTextName
});

export const mapsDispatchToProps = dispatch => ({
    addPost:(userName)=>dispatch(addPost(userName)),
    
});

export default connect(mapStateToProps, mapsDispatchToProps)(Createusers);