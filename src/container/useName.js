import { connect } from 'react-redux';
import Users from '../components/users/index.js';
import { deleteaction ,nameChanged} from '../action/user.js';

const mapStateToProps = state => ({
    inputTextName: state.inputTextName,
});
const mapsDispatchToProps = dispatch => ({
   
    deleteaction:(id)=>dispatch(deleteaction(id)),
    nameChanged:(id,username)=>dispatch(nameChanged(id,username))
});

export default connect(mapStateToProps,mapsDispatchToProps)(Users);