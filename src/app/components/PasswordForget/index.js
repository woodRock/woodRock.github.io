import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withFirebase } from '../../util/Firebase';
const PasswordForgetPage = () => (
  <div className="account twitter-style-border">
    <h1>Forgot your password</h1>
    <p>Enter your email address.</p>
    <PasswordForgetForm />
  </div>
);
const INITIAL_STATE = {
  email: '',
  error: null,
};
class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { email } = this.state;
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    const { email, error } = this.state;
    const isInvalid = email === '';
    return (
      <form onSubmit={this.onSubmit}>
        <p>
          <input
            name="email"
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
        </p>
        <p>
          <button disabled={isInvalid} type="submit">
            Search
          </button>
        </p>
        <div className="error-message">
          {error && <p>{error.message}</p>}
        </div>
      </form>
    );
  }
}
const PasswordForgetLink = () => (
  <p>
    <Link to='/pw-forget'>Forgot Password?</Link>
  </p>
);
export default PasswordForgetPage;
const PasswordForgetForm = withFirebase(PasswordForgetFormBase);
export { PasswordForgetForm, PasswordForgetLink };
