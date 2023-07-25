import React from 'react'
import { Form, Button } from "react-bootstrap";

const QueryForm = () => {
  return (
    <>
    <h2 style={{textAlign: 'center', color:"#003087e6"}}>Please Write To us For Any Query</h2>
    <Form className='mx-5 p-3' style={{border: "2px solid #003087e6", borderRadius: '2rem'}}>
      <Form.Group className="mb-3" controlId="parentName">
        <Form.Label>Parent Name</Form.Label>
        <Form.Control type="text" placeholder="Enter parent's name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="studentName">
        <Form.Label>Student Name</Form.Label>
        <Form.Control type="text" placeholder="Enter student's name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="rollNumber">
        <Form.Label>Roll Number</Form.Label>
        <Form.Control type="text" placeholder="Enter roll number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="class">
        <Form.Label>Class</Form.Label>
        <Form.Control type="text" placeholder="Enter class" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="section">
        <Form.Label>Section</Form.Label>
        <Form.Control type="text" placeholder="Enter section" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="section">
        <Form.Label>Write Query here</Form.Label>
        <Form.Control type="text" placeholder="Write Query" />
      </Form.Group>

      <Button variant="danger" type="submit">
        Submit
      </Button>
    </Form>
    </>
  )
}

export default QueryForm