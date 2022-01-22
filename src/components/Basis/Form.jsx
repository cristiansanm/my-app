import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import './../assets/scss/Form.scss'
import { Box, Button } from '@mui/material';
import SnackBar from '../UICommonComponents/SnackBar';

const useStyles = makeStyles({
    inputs: {
      width: '300px',
    },
    boxes__span:{
        marginTop: 10,
    }
  });

const Form = () => {
  const classes = useStyles();
  const [fruit, setFruit] = useState('');
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState('');
  const [isSent, setIsSent] = useState(false);
  const handleClose = () =>{
      setOpen(false);
  }
  const [message, setMessage] = useState('Default Message');
  const [type, setType] = useState('success');
  const [fruitList, setFruitList] = useState([])
  const handleChangeFruit = (event) => {
      setFruit(event.target.value);
  }
  const handleChangeDescription = (event) => {
      setDescription(event.target.value);
  }
  const confirmData = (fruta, descrip) => {
    if(!fruta.trim()){
        setIsSent(false);
        setOpen(true);
        setType('error');
        setMessage('Formulario fruta vacío');
        return;
    }
    if(!descrip.trim()){
        setOpen(true);
        setType('error');
        setMessage('Formulario descripción vacío');
        setIsSent(false);
        return;
    }
    setFruitList([
        ...fruitList,
        {id: fruitList.length + 1, fruit, description}
    ])
    setIsSent(true)
    setOpen(true);
    setType('success');
    setMessage('Enviado correctamente');
  }
  const submitData = (event) => {
    event.preventDefault();
    confirmData(fruit, description);
    event.target.reset();
    setFruit('')
    setDescription('');
  }
  return (
    <div className="form__container">
        <form onSubmit={submitData}>
            <h1>Form</h1>
            <Box component="span">
                <TextField
                    type='text'
                    id="fruit"
                    label="Fruta"
                    value={fruit}
                    onChange={handleChangeFruit}
                    className={classes.inputs}
                />
            </Box>
            <Box className={classes.boxes__span} component="span">
                <TextField
                type='text'
                id='description'
                label='Descripción'
                value={description}
                onChange={handleChangeDescription}
                className={classes.inputs}/>
            </Box>
            <Button sx={{marginTop: '10px'}} variant="contained" color="error" type="submit">Enviar Datos</Button>
        </form>
        <div>
            {(isSent) ? (
                <div>
                    <ul>
                        {fruitList.map((item, index) => 
                            <li key={index}>{`Lista id: ${item.id}, Fruta: ${item.fruit}, Descripción: ${item.description}`}</li>
                        )}
                    </ul>
            </div>): (<span>No data</span>)}
        </div>
        <SnackBar 
          open={open} 
          handleClose={handleClose}
          type={type}
          message={message}/>
    </div>
);
};

export default Form;
