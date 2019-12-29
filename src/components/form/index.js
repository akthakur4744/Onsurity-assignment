import React from 'react';
import { Button, Form, FormGroup , Input , Card } from 'reactstrap';
import Data from '../../data/data.json';

const Example = (props) => {

  console.log(Data);
  let brand;
  if(Data){
    brand = [...new Set([...Data.devices.map(x=>x.brand)])];
  }
  return (
    <Card className = 'form-padding'>
    <Form>
      <FormGroup>
        <Input defaultValue="1" type="select" name="brand">
          <option value='1' disabled>Select Your Brand</option>
          {
            brand.map(brand=><option key={brand} value={brand}>{brand}</option>)
          }
        </Input>
      </FormGroup>
      <FormGroup>
        <Input defaultValue="1" type="select" name="model">
          <option value='1' disabled>Select Your Model</option>
          
        </Input>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    </Card>
  );
}

export default Example;