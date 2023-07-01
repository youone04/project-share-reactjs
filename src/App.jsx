import { useState } from 'react'
import './App.css'
import { Button, Container } from 'react-bootstrap';
import FormDinamis from './components/FormDinamis';

function App() {
  const [electric, setElectric] = useState([
    {
      electric_power: "",
      electric_hour: "",
      electric_kwh: "",
      electric_lost_factor: "",
      electric_pju: "",
    },
  ]);

  const submit = () => {
    console.log(electric)
  }

  return (
    <>
    <Container>
      <FormDinamis electric={electric} setElectric={setElectric}/>
      <Button onClick={submit} className='mt-5' variant='primary'>SAVE</Button>
    </Container>
     
    </>
  )
}

export default App
