import React, { Fragment } from 'react';
import Background from '../../../assets/Images/home.png';
import ModalPopup from '../Model/SuccessPopup';

const bgStyle = {
    width: '100%',
    float: 'left',
};

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = ({ isModalAppear: true });
    }

    closeModel = () => {
        // history.push('./home');
        console.log('clicked');
        this.setState({ isModalAppear: false });
    }

    render() {
        const { isModalAppear } = this.state;
        return (
            <Fragment>
                <img src={Background} alt="home background" style={bgStyle} onClick={this.closeModel} id="bgImg"/>
                <div>
                    {isModalAppear && <ModalPopup show={isModalAppear} successignup={1} bodycontent="You have successfully created your Overstock Professional account." onHide={this.closeModel} />}
                </div>
            </Fragment>
        );
    }
}

export default HomePage;
