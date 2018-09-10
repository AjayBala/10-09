import React from 'react';
import Stepper from 'react-stepper-horizontal';
import { Row, Col, Grid } from 'react-bootstrap';
import './GovtStyle.scss';
import GovtBusinessInfo from './GovtBusinessInfo/GovtBusinessInfo';
import ShoppingPreference from '../ShoppingPreference/ShoppingPreference';
import history from '../../history';

const steps = [{ title: 'Organization Information', id: 0 }, { title: 'Shopping Preferences', id: 1 }];
class Govt extends React.Component {
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
          <Grid fluid >
              <Row className="insideHeaderWrap" >
                  <Col lg={3} md={4} sm={4}>
                      <h1 className="titleTxt_1">{currentStep.title}</h1>
                  </Col>
                  <Col lg={6} md={8} sm={8} className="stepProgressWrap" >
                      <Stepper
                          steps={steps}
                          activeStep={currentStep.id}
                          activeColor="#000"
                          completeColor="#000"
                          circleFontColor="transparent" />
                  </Col>
              </Row>
              <div className="container">
                  {currentStep.id === 0
                  && (
                      <GovtBusinessInfo
                          onSubmit={this.nextPage}/>
                  )}
                  {currentStep.id === 1
                    && (
                        <ShoppingPreference
                            previousPage={this.previousPage}
                            onSubmit={this.onSubmit} />
                    )}
              </div>
          </Grid>
      );
  }
}

export default Govt;
