import React from 'react';
import {
    CardImg,
    Card
} from 'reactstrap';
import Image from '../../assets/LadyWithPhone.png'

const Example = (props) => {
    return (
        <div>
            <Card className='img-border'>
                <CardImg top width="100%" src={Image} alt="Lady with Phone" />
            </Card>
        </div>
    );
};

export default Example;