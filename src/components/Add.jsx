import React,{useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Add = () => {
  //  const [count,setCount]=useState(0);
  //let valueAdd=()=>{
   // setCount(count+1)}
   const[form,setform]=useState(
    {
        Name:'',
        Department:'',
        Contactno:'',
        Admissionno:''

    }
   )
   function valueAdd(){console.log(form)}
   function valueCap(e){
    setform({...form,[e.target.name]:e.target.value})


   }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" name='Name'variant="outlined"onChange={valueCap} />
      <TextField id="filled-basic" label="Department" name='Department' variant="outlined"onChange={valueCap} />
      <TextField id="standard-basic" label="Contactno" name='Contactno' variant="outlined"onChange={valueCap} />
      <TextField id="standard-basic" label="Admissionno" name='Admissionno' variant="outlined"onChange={valueCap} />
      <Button variant='outlined'color='success' onClick={valueAdd}>Done</Button><br />
      {/*<small>count is {count}</small>*/}

    </Box>
  )
}

export default Add