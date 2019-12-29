import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import CardComponent from './Card';
import StaticText from '../../data/constant';

import SelectGif from '../../assets/SelectGIF.png'
import InsuredGif from '../../assets/InsuredGIF.png'
import DeviceGif from '../../assets/DeviceGIF.png'


const CardSeries = () => {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <CardComponent imageSrc={DeviceGif} text={StaticText.DeviceGifText} />
                    </Col>
                    <Col>
                        <CardComponent imageSrc={SelectGif} text={StaticText.SelectGifText} />
                    </Col>
                    <Col>
                        <CardComponent imageSrc={InsuredGif} text={StaticText.InsuredGifText} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default CardSeries;
