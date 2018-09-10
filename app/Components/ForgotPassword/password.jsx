import React from 'react';
import { Grid } from 'react-bootstrap';
import './password.scss';
import SendEmail from './SendEmail/SendEmail';
import ForgotPasswordReverify from './ForgotPasswordReverify/ForgotPasswordReverify';
import history from '../../history';

const steps = [{ id: 0 }, { id: 1 }];
class Password extends React.Component {
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
                <SendEmail
                    onSubmit={this.nextPage}/>
            )}
            {currentStep.id === 1
            && (
                <ForgotPasswordReverify
                    previousPage={this.previousPage}
                    onSubmit={this.onSubmit} />
            )}
        </div>
        
      );
  }
}

export default Password;
