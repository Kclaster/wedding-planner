// This will hold the snippets
import React from 'react';
import { connect } from 'react-redux';
import Footer from '../Footer';
import '../../styles/Body.css'
import Header from '../Header';
import ScrollingPics from '../ScrollingPics';
import { Link } from 'react-router-dom';

import alyssaFourteen from '../../pics/Alyssa and Ryne/fourteen.jpg';
import { setHeight } from '../../actions'
import { main } from '../../articles/lorem';
import four from '../../pics/Karley and Chris/four.jpg';
import one from '../../pics/Karley and Chris/one.jpg';


class Body extends React.Component {
    render() {
        return (
        <div>
            <Header />
            <ScrollingPics />
            <div style={{ marginTop: this.props.height}} className="body-container">
                <div className="intro-container">
                    <h1>What is BackGround Weddings?</h1>
                    <p className="body-paragraph">
                        {main}
                    </p>
                </div>
                <div className="homeImageContainer">
                    <div className="scalingImage-container">
                        <h2>Service</h2>
                        <Link className="scalingImage" to="/Services">
                            <img className="scale" src={alyssaFourteen} alt="celebration line" />
                        </Link>
                    </div>
                    <div className="scalingImage-container">
                        <h2>Contact Me</h2>
                        <Link className="scalingImage" to="/Contact">
                            <img className="scale" src={one} alt="gazeebo"/>
                        </Link>
                    </div>
                    <div className="scalingImage-container">
                        <h2>Stories</h2>
                        <Link className="scalingImage" to="/Weddings">
                            <img className="scale" src={four} alt="couple holding eachother"/>
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        height: state.setHeight.height
    }
}

export default connect(mapStateToProps, { setHeight })(Body);