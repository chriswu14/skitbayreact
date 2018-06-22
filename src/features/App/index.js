import { connect } from 'react-redux';
import App from '../../components/App';
import { actions } from '../App/reducer';

export default connect(
    state => ({
        isLoading: state.app.loading
    }),
    dispatch => ({
        onButtonClick: dispatch(actions.startLoading())
    })
)(App);