import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError
} from 'containers/App/selectors';
import { loadRepos } from '../App/actions';
import { changeUsername, doLoadQuotation } from './actions';
import { makeSelectUsername, makeSelectQuotations } from './selectors';
import reducer from './reducer';
import saga from './saga';
import HomePage from './containers/HomePage';

const mapDispatchToProps = dispatch => ({
  onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
  onSubmitForm: evt => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(loadRepos());
  },
  loadQuotation: evt => dispatch(doLoadQuotation())
});

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  quotations: makeSelectQuotations()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(HomePage);
