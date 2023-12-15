import React, { useState } from "react";
import axios from 'axios';
import Nav from './nav';
import Container from '@material-ui/core/Container';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from '@material-ui/core/Icon';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Radio from "@material-ui/core/Radio";
import FormGroup from "@material-ui/core/FormGroup";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from "@material-ui/core/styles";
import RemoveIcon from '@material-ui/icons/Remove';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      background: '#FAEED2',
      margin: theme.spacing(1),
    }
  },
  button: {
    margin: theme.spacing(1),
    background: 'green',
  },
  fieldContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  removeButton: {
    marginTop: theme.spacing(1),
    flexDirection: "row",
    alignItems: "center",
  }
}));

function FormDY() {
  const classes = useStyles();
  const [inputFields, setInputFields] = useState([
    { type: 'text', label: 'FirstName', value: 'FirstName' },
    { type: 'text', label: 'Lastname', value: 'Lastname' },
  ]);

  const handleFieldChange = (index, event) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    setInputFields(values);
  };

  const addText = () => {
    setInputFields([...inputFields, { type: 'text', label: '', value: '' }]);
  };

  const addCheckbox = () => {
    setInputFields([...inputFields, { type: 'checkbox', label: '', value: '' }]);
  };

  const addSelect = () => {
    setInputFields([...inputFields, { type: 'select', label: '', value: '' }]);
  };

  const addRadio = () => {
    setInputFields([...inputFields, { type: 'radio', label: '', value: '' }]);
  };

  const removeField = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  return (
    <div className="App-bodyF">

    <Nav name="form" />

    <Container >
      
        <h1> Form!!!</h1>
        <form className={classes.root}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ display: 'flex', flexDirection: 'column', marginRight: '8px' }}>
              <Button variant="outlined" color="primary" style={{ background: 'green', color: 'white', marginBottom: '8px' }} onClick={addText} endIcon={<AddIcon />}>
                Add Text Field
              </Button>
              <Button variant="outlined" color="primary" style={{ background: 'green', color: 'white', marginBottom: '8px' }} onClick={addCheckbox} endIcon={<AddIcon />}>
                Add Checkbox
              </Button>
              <Button variant="outlined" color="primary" style={{ background: 'green', color: 'white', marginBottom: '8px' }} onClick={addSelect} endIcon={<AddIcon />}>
                Add Select
              </Button>
              <Button variant="outlined" color="primary" style={{ background: 'green', color: 'white', marginBottom: '8px' }} onClick={addRadio} endIcon={<AddIcon />}>
                Add Radio
              </Button>
              <Button variant="outlined" color="secondary" style={{ background: 'red', color: 'white', marginBottom: '8px' }} onClick={() => removeField(inputFields.length - 1)} endIcon={<RemoveIcon />}>
              Remove
            </Button>
            </div>
            {inputFields.map((field, index) => (
              <div key={index} className={classes.fieldContainer}>
                {field.type === 'text' && (
                  <>
                    <p>LastName</p>
                    <TextField
                      label={field.label}
                      variant='filled'
                      value={field.value}
                      onChange={(event) => handleFieldChange(index, event)}
                    />
                  </>
                )}
                       
                      
                 
            
                  {field.type === 'select' && (
                    <>
                      <p style={{background:'white',color: 'black '}}>Country</p>
                      <Select
                        value={field.value}
                        onChange={(event) => handleFieldChange(index, event)}
                      >
                        <MenuItem value="Tunisia" style={{background:'black',color: 'white'}}>Tunisia</MenuItem>
                        <MenuItem value="Gaza" style={{background:'black',color: 'white'}}>Gaza</MenuItem>
                        <MenuItem value="UAE"  style={{background:'black',color: 'white'}}>UAE</MenuItem>
                      </Select>
                    </>
                  )}
                        
                        {field.type === 'checkbox' && (
  <div>
    <p3>Center of interests</p3>
    <FormControl component="fieldset">
      <FormLabel component="legend">{field.label}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={field.value === 'sport'} onChange={(event) => handleFieldChange(index, event)} />}
          label="sport"
        />
        <FormControlLabel
          control={<Checkbox checked={field.value === 'art'} onChange={(event) => handleFieldChange(index, event)} />}
          label="arts"
        />
        <FormControlLabel
          control={<Checkbox checked={field.value === 'gaming'} onChange={(event) => handleFieldChange(index, event)} />}
          label="gaming"
        />
      </FormGroup>
    </FormControl>
  </div>
)}

                  {field.type === 'radio' && (
                    <>
                      <p3>Radio</p3>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">{field.label}</FormLabel>
                        <RadioGroup value={field.value} onChange={(event) => handleFieldChange(index, event)}>
                          <FormControlLabel value="Mela" control={<Radio />} label="Mela" />
                          <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        </RadioGroup>
                      </FormControl>
                    </>
                  )}
  
                 
              
  </div>
            ))}
          </div>

           
          
          

          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
            endIcon={<Icon>send</Icon>}
          >
            Send
          </Button>
        </form>
        </Container>

      </div>
  );
}

export default FormDY;