import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { BiPlusCircle } from "react-icons/bi";

function FormDinamis(props) {
  const addForm = () => {
    props.setElectric([
      ...props.electric,
      { electric_power: "", electric_hour: "" ,electric_kwh:"" ,electric_lost_factor:"" ,electric_pju:"" },
    ]);
  };

  const removeForm = (i) => {
    const newFormValue = [...props.electric];
    newFormValue.splice(i, 1);
    props.setElectric(newFormValue);
  };

  const handleChange = (event) => {
    // console.log(event.target.dataset.id)
    const updatedRates = [...props.electric];

    updatedRates[event.target.dataset.id][event.target.className.split(" ")[0]] = event.target.value;

    props.setElectric(updatedRates);
  };


  return (
    <Container>
      <div className="row  d-flex mt-5">
        {props.electric.map((row, index) => {
          const ePower = `electric_power-${index}`,
            eHour = `electric_hour-${index}`,
            eKwh =  `electric_kwh-${index}`,
            eLostFaktor = `electric_lost_factor-${index}`,
            wPju = `electric_pju-${index}`
            ;
          return (
            <div key={index}>
            {index? <hr/>:''}
              <div className="col-5 d-flex">
                <Form.Group
                  className="mb-3 col-9 m-2"
                  // controlId={`exampleForm.ControlInput1-${index}`}
                >
                  <Form.Label>POWER (KVA)</Form.Label>
                  <Form.Control
                    size="lg"
                    type="text"
                    name={ePower}
                    onChange={handleChange}
                    data-id={index}
                    id={ePower}
                    // value={row.nearby_name}
                    className="electric_power"
                  />
                </Form.Group>

                <Form.Group
                  className="mb-3 col-10 m-2"
                  // controlId={`exampleForm.ControlInput1-${index+}`}
                >
                  <Form.Label>HOURS</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    size="lg"
                    name={eHour}
                    data-id={index}
                    id={eHour}
                    value={row.electric_hour}
                    className="electric_hour ml-5"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 col-10 m-2"
                  // controlId={`exampleForm.ControlInput1-${index+}`}
                >
                  <Form.Label>(KWH)</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    size="lg"
                    name={eKwh}
                    data-id={index}
                    id={eKwh}
                    value={row.electric_kwh}
                    className="electric_kwh ml-5"
                  />
                </Form.Group>
                {index ? (
                  <Button className="mt-3" 
                  style={{
                    width: 20, 
                    fontSize: 12 ,
                    height: 30,
                    borderRadius: '80%',
                    paddingLeft: 6
                  }} 
                  variant="danger" 
                  onClick={() => removeForm(index)}>
                    X
                  </Button>
                ) : (
                  ""
                )}
              </div>
             <div className="d-flex">
             <Form.Group
                className="mb-3 col-6 m-2"
                // controlId={`exampleForm.ControlInput1-${index+}`}
              >
                <Form.Label>LOST FACTOR (%)</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  size="lg"
                  name={eLostFaktor}
                  data-id={index}
                  id={eLostFaktor}
                  value={row.electric_lost_factor}
                  className="electric_lost_factor ml-5"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 col-6 m-2"
                // controlId={`exampleForm.ControlInput1-${index+}`}
              >
                <Form.Label>PJU (%)</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  size="lg"
                  name={wPju}
                  data-id={index}
                  id={wPju}
                  value={row.electric_pju}
                  className="electric_pju ml-6"
                />
              </Form.Group>
             </div>
            </div>
          );
        })}
      </div>

      <Button variant="success" onClick={addForm}><BiPlusCircle/> Add</Button>
    </Container>
  );
}

export default FormDinamis;