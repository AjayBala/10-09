import React from 'react';
import Stepper from 'react-stepper-horizontal';
import { Row, Col, Grid } from 'react-bootstrap';
import './Com.scss';
import ComBusinessInfo from './ComBusinessInfo/ComBusinessInfo';
import QuickVerify from './Quickverify/Quickverify';
import ShoppingPreference from '../ShoppingPreference/ShoppingPreference';
import history from '../../history';

const steps = [{ title: 'Business Information', id: 0 }, { title: 'Quick Verify', id: 1 }, { title: 'Shopping Preferences', id: 2 }];
class Com extends React.Component {
    constructor() {
        super();
        this.state = { currentStep: steps[0], businessType: 'Corporation' };
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
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
          // this.setState({ isModalAppear: true })
          console.log('final submit', values);
      }

      closeModel = () => {
          history.push('./home');
      }

      businessTypeChange = (type) => {
          this.setState({ businessType: type });
      }

      render() {
          const { currentStep, businessType } = this.state;
          return (
              <Grid fluid >
                  <Row className="insideHeaderWrap" >
                      <Col lg={3} md={4} sm={4}>
                          <h1 className="titleTxt_1">{currentStep.title}</h1>
                      </Col>
                      <Col lg={6} md={8} sm={8} className="stepProgressWrap" >
                          <Stepper
                              className="step-progress"
                              steps={steps}
                              activeStep={currentStep.id}
                              activeColor="#000"
                              completeColor="#000"
                              defaultTitleColor="#000"
                              completeTitleOpacity="1"
                              circleFontColor="transparent" />
                      </Col>
                  </Row>
                  <div>
                      {currentStep.id === 0
            && (
                <ComBusinessInfo
                    onSubmit={this.nextPage}
                    onBusinessTypeChange={this.businessTypeChange}
                    businessType={businessType}/>
            )}
                      {currentStep.id === 1
                         && (
                             <QuickVerify
                                 previousPage={this.previousPage}
                                 onSubmit={this.nextPage}/>
                         )}
                      {currentStep.id === 2
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
export default Com;
