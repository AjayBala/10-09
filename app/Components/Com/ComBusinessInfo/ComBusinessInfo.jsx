import React from 'react';
// import Stepper from 'react-stepper-horizontal';
import {
    Row, Col, Button, Tooltip,
} from 'react-bootstrap';
import './ComBusinessInfo.scss';
import SmallBusiness from './SmallBusiness/SmallBusiness';
import Corporation from './Corporation/Corporation';

const tooltip = (
    <Tooltip placement="bottom" id="CorpTooltip" >
        <h5> Recommended if you </h5>
        <p >
            <i className="fa fa-circle" aria-hidden="true" />
Make custom orders on items
        </p>
        <p>
            <i className="fa fa-circle" aria-hidden="true" />
Make bulk or frequent orders directly from your vendor
        </p>
    </Tooltip>
);

const tooltip1 = (
    <Tooltip placement="bottom" id="SmallTooltip">
        <h5> Recommended if you </h5>

        <p >
            <i className="fa fa-circle" aria-hidden="true" />
Already use your Overstock account exclusively for business
        </p>
        <p >
            <i className="fa fa-circle" aria-hidden="true" />
Need to buy products for your business a discounted rate
        </p>

    </Tooltip>
);

const ComBusinessInfo = (props) => {
    const { businessType, onBusinessTypeChange } = props;

    return (
        <div>
            <div className="HeaderTxtWrap">
                <Col lg={12} sm={12}>
                    <p className="HeaderTxt_ComBusiness"><b> Select the option that best describes your business </b></p>
                </Col>
            </div>
            <section className="MidContentWrap">
                <Row className="TabTxtWrap">
                    <Col lg={6} sm={6}>
                        <div className='comCustomBtnWrap'>
                            <input
                                className="comCustomRadioBtn"
                                type="radio"
                                name="ComRadio"
                                value="Corporate"
                                id="Corporate"
                                defaultChecked={businessType === 'Corporation'}
                                onClick={() => onBusinessTypeChange('Corporation')}/>
                            <Button
                                name="businessType"
                                className="buttonwrap"
                                htmlFor="Corporate">
                                <strong className="comOptionTxtWrap">Corporate </strong>
                                {' '}
                            </Button>
                            {tooltip}
                        </div>
                    </Col>
                    <Col lg={6} sm={6} className="smlBusinessBtn">
                        <div className='comCustomBtnWrap'>
                            <input
                                className="comCustomRadioBtn"
                                type="radio"
                                name="ComRadio"
                                value="Small Business"
                                id="SmallBusiness"
                                checked={businessType === 'Small Business'}
                                onClick={() => { onBusinessTypeChange('Small Business'); }}/>
                            <Button
                                name="businessType"
                                className="buttonwrap"
                                title="Recommended if you"
                                data-toggle="tooltip"
                                htmlFor="SmallBusiness">
                                <strong className="comOptionTxtWrap" >Small Business </strong>
                            </Button>
                            {tooltip1}
                        </div>
                    </Col>
                </Row>
            </section>
            <div className="formOutterWrap">
                {businessType === 'Corporation' && (
                    <Corporation
                        {...props}/>
                )}
                {businessType === 'Small Business' && (
                    <SmallBusiness
                        {...props}/>
                )}
            </div>
        </div>
    );
};

export default ComBusinessInfo;
