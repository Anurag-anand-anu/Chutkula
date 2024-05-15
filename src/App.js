import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Card, Container, Row, Col } from 'react-bootstrap';
import './App.css';

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://anurag-anand-anu.github.io/chutukla/chutkula.json');
        if (Array.isArray(response.data.jokes)) {
          setJokes(response.data.jokes);
        } else {
          console.error('Invalid response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching jokes:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <Navbar expand="lg">
        <Container>
          <Navbar.Brand>Chutkula</Navbar.Brand>
        </Container>
      </Navbar>
    <Container className="mt-5">
      <Row>
        {jokes.map(joke => (
          <Col key={joke.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{joke.type}</Card.Title>
                <Card.Text>
                  <strong>Setup:</strong> {joke.setup}
                  <br />
                  <strong>Punchline:</strong> {joke.punchline}
                  {joke.followup && <div><strong>Follow-up:</strong> {joke.followup}</div>}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    <footer>
    &copy; copyright by Anurag @2024
    </footer>
    
    </>
  );
}

export default App;
