import { Container, Row, Col, Badge } from 'react-bootstrap'

function About() {
  return (
    <Container
      id="about"
      className="mt-5"
      style={{ paddingTop: '80px' }}
    >
      <h2 className="text-primary mb-3">About Me</h2>

      <p>
        I am <strong>Kasam Vivek Reddy</strong>, currently pursuing
        B.Tech in Artificial Intelligence and Machine Learning.
        I am passionate about Data Science and Machine Learning
        and enjoy building intelligent, data-driven applications.
      </p>

      <Row className="mt-4">
        <Col>
          <h4>Skills</h4>

          <Badge bg="secondary" className="me-2 mb-2">Python</Badge>
          <Badge bg="secondary" className="me-2 mb-2">Machine Learning</Badge>
          <Badge bg="secondary" className="me-2 mb-2">Data Science</Badge>
          <Badge bg="secondary" className="me-2 mb-2">React JS</Badge>
        </Col>
      </Row>
    </Container>
  )
}

export default About
