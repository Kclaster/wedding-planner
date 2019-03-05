import React from 'react';
import { connect } from 'react-redux';

import { setHeight } from '../actions';
import one from '../pics/general/mainPage/one.jpg'
import three from '../pics/general/mainPage/three.jpg'
import four from '../pics/general/mainPage/four.jpg'
import five from '../pics/general/mainPage/five.jpg'
import '../styles/ScrollingPics.css';


class ScrollingPics extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }

    pics = [one, three, four, five];


    componentDidMount() {
        window.addEventListener("resize", this.setHeight);
        //mess with height of scroll
        this.imageRef.current.addEventListener('load', this.setHeight);
        this.images = document.querySelectorAll(".scroll");
        this.current = 0;
        setInterval(() => {
            for (let i = 0; i < this.pics.length; i++) {
                this.images[i].style.opacity = 0;
            }
            this.current = (this.current !== this.images.length - 1) ? this.current + 1 : 0;
            this.images[this.current].style.opacity = 1;        
        }, 4500)
    }

    additionalHeight = (height) => {
        if (height >= 1050) {
            return 80
        } else if (height >= 850) {
            return 100;
        } else if (height < 870 && height >= 550) {
            return 120
        } else if (height < 550 && height >= 350) {
            return 140;
        } else {
            return 150;
        }
    }

    setHeight = () => {
        if (this.imageRef.current) {
        const height = this.imageRef.current.clientHeight;
        this.props.setHeight(height + this.additionalHeight(height));
        };

    }


    componentWillMount() {
        const images = document.querySelectorAll(".scroll");
        images.forEach(function (cur) {
            cur.style.opacity = 1;
        });
    };

    render() {
        return (
            <div className="scroll-conatiner">
                <img ref={this.imageRef}  className="scroll" src={one} alt="ten"></img>
                <img className="scroll" src={three} alt="three"></img>
                <img className="scroll" src={four} alt="three"></img>
                <img className="scroll" src={five} alt="three"></img>
            </div>
        )
    }
}


export default connect(null, { setHeight })(ScrollingPics);
