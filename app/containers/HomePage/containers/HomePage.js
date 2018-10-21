import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ReposList from 'components/ReposList';
import './style.scss';

export default class HomePage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };
  }

  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  onInputChange = event => {
    const input = event.target.value;
    this.setState({ input });
  };

  render() {
    const { loading, error, repos, quotations, loadQuotation } = this.props;
    const reposListProps = {
      loading,
      error,
      repos
    };
    const { input } = this.state;

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h2>Start your next react project in seconds</h2>
            <p>
              A minimal <i>React-Redux</i> boilerplate with all the best
              practices
            </p>
          </section>
          <button onClick={e => {
          this.props.history.push('/features')
        }}>Go to feature</button>
          <input type="text" onChange={this.onInputChange} value={input} />
          <button className="btn btn-primary" onClick={loadQuotation}>
            <i className="fa fa-address-card" /> Load me
          </button>
          <p>{JSON.stringify(quotations)}</p>
          <section>
            <h2>Try me!</h2>
            <form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="username">
                Show Github repositories by
                <span className="at-prefix">@</span>
                <input
                  id="username"
                  type="text"
                  placeholder="flexdinesh"
                  value={this.props.username}
                  onChange={this.props.onChangeUsername}
                />
              </label>
            </form>
            <ReposList {...reposListProps} />
          </section>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  repos: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  onSubmitForm: PropTypes.func,
  username: PropTypes.string
};
