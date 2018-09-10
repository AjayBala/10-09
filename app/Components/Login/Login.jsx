import React from 'react';
import './Login.scss';
import LoginPage from './LoginPage/LoginPage';
import LoginOtp from './LoginOtp/LoginOtp';
import LoginOtpVerify from './LoginOtpVerify/LoginOtpVerify';
import history from '../../history';

const steps = [{ id: 0 }, { id: 1 }, { id: 2 }];
class Login extends React.Component {
    constructor() {
        super();
        this.state = ({ currentStep: steps[0] });
    }

  nextPage = () => {
      const { currentStep } = this.state;
      this.setState({ currentStep: steps[currentStep.id + 1] });
  }

  previousPage = () => {
      const { currentStep } = this.state;
      this.setState({ currentStep: steps[currentStep.id - 1] });
  }

  onSubmit = (values) => {
      history.push('./home');
      console.log('final submit', values);
  }

  closeModel = () => {
      history.push('./home');
  }

  render() {
      const { currentStep } = this.state;
      return (
          <div>
              {currentStep.id === 0
                && (
                    <LoginPage
                        onSubmit={this.nextPage}/>
                )}
              {currentStep.id === 1
                && (
                    <LoginOtp
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage} />
                )}
              {currentStep.id === 2
                && (
                    <LoginOtpVerify
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage} />
                )}
          </div>

      );
  }
}

export default Login;