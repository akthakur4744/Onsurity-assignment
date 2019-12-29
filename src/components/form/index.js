import React,{useState} from 'react';
import { Button, Form, FormGroup , Input , Card } from 'reactstrap';
import Data from '../../data/data.json';

const Example = (props) => {
  const [brandValue,setbrandValue] = useState('');
  const [modelValue,setModelValue] = useState('');
  const [models,setModelsValue] = useState('');
  const [isSubmit,setSubmit] = useState(false);
  const [err,setErr] = useState({brand:null,model:null});
  let brand;
  if(Data){
    brand = [...new Set([...Data.devices.map(x=>x.brand)])];
  }

  const onValueChange=e=>{
    switch (e.target.name) {
      case 'brand':
        setbrandValue(e.target.value);
        setErr({...err,brand:null})
        let selectedModels = Data.devices.filter(x=>x.brand===e.target.value);
        setModelsValue(selectedModels); 
        break;
      case 'model':
        setModelValue(e.target.value);
        setErr({...err,model:null})
        break;    
      default:
        break;
    }
  }

  const onFormSubmit=(e)=>{
    e.preventDefault();
    let formStatus = validation();
    if(formStatus){
      console.log('Form Values:' ,brandValue,modelValue);
      setSubmit(true);
    }
  }

  const validation = ()=>{
    let tempErr={...err}
    let isValid=true;
    if(!brandValue){
      isValid=false;
      tempErr.brand='*Required'
    }
    if(!modelValue){
      isValid=false;
      tempErr.model='*Required'
    }
    setErr(tempErr)
    return isValid
  }

  return (
    <React.Fragment>
    {
      isSubmit
      ?
      <div>
        <h3>SUBMITTED</h3>
      </div>
      :
      <Card className = 'form-padding'>
      <Form onSubmit={onFormSubmit}>
        <FormGroup>
          <Input onChange={onValueChange} defaultValue="1" type="select" name="brand">
            <option value='1' disabled>Select Your Brand</option>
            {
              brand.map(brand=><option key={brand} value={brand}>{brand}</option>)
            }
          </Input>
          {err.brand && <span>{err.brand}</span>}
        </FormGroup>
        <FormGroup>
          <Input onChange={onValueChange} defaultValue="1" type="select" name="model">
            <option value='1' disabled>Select Your Model</option>
            {models && models.map(model=><option key={model.modelId} value={model.modelId}>{model.model}</option>)}
          </Input>
          {err.model && <span>{err.model}</span>}
        </FormGroup>
        <Button className="btnClr" >Get Insured</Button>
      </Form>
      </Card>
    }
    </React.Fragment>
  );
}

export default Example;