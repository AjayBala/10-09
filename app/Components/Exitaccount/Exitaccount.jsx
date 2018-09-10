import React from 'react';
import { Field, reduxForm } from 'redux-form';
import history from '../../history';
import ModalPopup from '../Model/Model';
import {
    overstockHelpUrl,
    organizationInfo, overstockMailInfo,
} from '../../../Utils/Utils';
import './Exitaccount.scss';
import floatingLabelField from '../FloatingLabel/FloatingLabel';

export const validate = (values) => {
    const error = {};
    /* eslint max-len: ["error", { "ignoreRegExpLiterals": true }] */
    const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validEmail = emailPattern.test(values.email);

    if (!values.email) {
        error.email = 'Required';
    } else if (!validEmail) {
        error.email = 'Please Enter a Valid Email';
    }

    if (!values.password) {
        error.password = 'Required';
    }
    return error;
};



export class Exitaccount extends React.Component {
    constructor() {
        super();
        this.state = ({ checked: false });
        this.handleChange = this.handleChange.bind(this);
    }

  closeModel = () => {
      this.setState({
          open: false,
      });
  }

  handleChange() {
      const { checked } = this.state;
      this.setState({
          checked: !checked,
      });
  }


  render() {
      const { handleSubmit } = this.props;
      const { checked, open } = this.state;
      const handleSubmitForm = (values) => {
          console.log('values', values);
          this.setState({ open: true });
      };

      const ExistAccBtn = checked
          ? (
              <button
                  type="submit"
                  className="btnSignIn crteBtn"
                  onClick={this.handleSignIn}>
            Use Existing Account
              </button>
          )
          : (
              <button
                  type="submit"
                  className="btnSignIn crteBtn"
                  disabled>
Use Existing Account
              </button>
          );

      const CreateAccBtn = checked
          ? (
              <a
                  className="btnSignIn crteBtn"
                  onClick={() => history.push('/signup')}>
            Create Separate Account

              </a>
          )
          : (
              <a className="btnSignIn crteBtn disabled">
           Create Separate Account
              </a>
          );


      return (
          <div className="">
              <h1 className="title_h1">
               Sign up with existing Overstock.com account
              </h1>
              <div className="loginBoxWrap">
                  <div className="loginBox">
                      <form onSubmit={handleSubmit(handleSubmitForm)}>
                          <Field
                              name="email"
                              component={floatingLabelField}
                              label="Email"
                              placeholder="Email" />
                          <Field
                              name="password"
                              type="password"
                              component={floatingLabelField}
                              label="Password"
                              placeholder="Password" />
                          <div className="form-group">
                              <p
                                  className="termsTxt checkopt"
                                  htmlFor="term-condition" >
                                  <input
                                      type="checkbox"
                                      id="term-condition"
                                      name="term-condition"
                                      checked={checked}
                                      onChange={this.handleChange} />
I agree to user
                                  <a
                                      rel="noopener noreferrer"
                                      href={overstockHelpUrl}
                                      target="_blank">
Terms & Conditions
                                  </a>
                              </p>
                          </div>
                          <div className="form-group">
                              <h4 className="title_h4">Account Options</h4>
                              { ExistAccBtn }
                              <ModalPopup
                                  show={open}
                                  onHide={this.closeModel} />
                              <div className="recommendPadd">
                                  <h4 className="title_h5">
                                  Recommended if you

                                  </h4>
                                  <ul className="ListWrap">
                                      <li>
  Already use your Overstock account exclusively for business
                                      </li>
                                      <li>{organizationInfo}</li>
                                  </ul>
                              </div>
                          </div>

                          <div className="form-group">
                              { CreateAccBtn }
                              <div className="recommendPadd">
                                  <h4 className="title_h5">
                                  Recommended if you
                                  </h4>
                                  <ul className="ListWrap">
                                      <li>
  want to keep your businees and personal Overstock Activity Separate
                                      </li>
                                      <li>{overstockMailInfo}</li>
                                  </ul>
                              </div>
                          </div>

                          <div className="form-group">
                              <div className="forgotTxt">
Already a member of Overstock Professional?
                                  <a onClick={() => history.push('/')}>
                                   Sign In
                                  </a>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      );
  }
}
const ExitaccountPage = reduxForm({
    form: 'Exitaccount',
    validate,
})(Exitaccount);

export default ExitaccountPage;
