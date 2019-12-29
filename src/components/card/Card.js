import React from 'react';
import {
    Card, CardImg, CardText, CardBody
} from 'reactstrap';

const Example = (props) => {
    const {text,imageSrc} = props
    return (
        <div>
            <Card className="maxcardHeight">
                <CardImg center="true" height="100%" src={imageSrc} alt="Card image cap" />
                <CardBody>
                    <CardText>{text?text:'This is text'}</CardText>
                </CardBody>
            </Card>
        </div>
    );
};

export default Example;