import React from "react";
import { Card, CardGroup, Button } from "react-bootstrap";


const Cards = () => {
  return (
    <CardGroup style={{margin: "0 0.25rem",}}>
      <Card style={{backgroundColor: "#fab06b", margin: "1rem"}}>
        <Card.Body>
          <Card.Title>Homework Schedule</Card.Title>
          <Card.Text>
            Plan and organize your homework tasks with a schedule to stay on track.
          </Card.Text>
          <Button variant="danger">Check</Button>
        </Card.Body>
      </Card>
      <Card style={{backgroundColor: "#dafa82", margin: "1rem"}}>
        <Card.Body>
          <Card.Title>Homework Reminders</Card.Title>
          <Card.Text>
            Set reminders for important deadlines and never miss an assignment.
          </Card.Text>
          <Button variant="danger">Check</Button>
        </Card.Body>
      </Card>
      <Card style={{backgroundColor: "#cdf2fa", margin: "1rem"}}   >
        <Card.Body>
          <Card.Title>Homework Progress</Card.Title>
          <Card.Text>
            Track your homework progress and mark completed tasks for a sense of achievement.
          </Card.Text>
          <Button variant="danger">Check</Button>
        </Card.Body>
      </Card>
      <Card style={{backgroundColor: "pink", margin: "1rem"}}   >
        <Card.Body>
          <Card.Title>Homework Notification</Card.Title>
          <Card.Text>
          Stay Updated with Homework Notifications! and always check the streak of your child.
          </Card.Text>
          <Button variant="danger"></Button>
        </Card.Body>
      </Card>
    </CardGroup>
  )
}

export default Cards