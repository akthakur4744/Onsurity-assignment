import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import * as StaticText from '../../data/constant';

import Nav from '../nav';
import Image from '../image';
import Card from '../card';
import Form from '../form';


const Layout = () => {
    return (
        <div className="App">
            <Nav />
            <Container className='containerMargin'>
                <div>
                    <h1>{StaticText.headingText}</h1>
                    <h4>{StaticText.headingSupportingText}</h4>
                </div>
                <Row className='form-padding'>
                    <Col className='form-style'>
                        <Form />
                    </Col>
                    <Col>
                        <Image />
                    </Col>
                </Row>
                <Row >
                    <div className='form-padding alignDiv'>
                        <h2>{StaticText.easierText}</h2>
                    </div>
                    <Card />
                </Row>
            </Container>
        </div>
    );
}

export default Layout;
