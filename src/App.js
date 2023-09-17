import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Appl() {
  return (
    <div className="App">
        <div className="container">
      <Form>
          <Form.Group className='mb-3' controlId='basicEmail'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control type='email' placeholder='Enter Email' />
              <Form.Text className='text-muted'>
                  we will never share email with you
              </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
              Submit
          </Button>
          {/*<Button className={}></Button>*/}
      </Form>
    </div>
    </div>
  );
}

export default Appl;
