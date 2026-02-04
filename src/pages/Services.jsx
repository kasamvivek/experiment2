import { Container, Row, Col, Card } from 'react-bootstrap'

function Services() {
  return (
    <Container
      id="services"
      className="mt-5"
      style={{ paddingTop: '80px' }}
    >
      <h2 className="text-primary mb-4">Services</h2>

      <Row>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Data Science</Card.Title>
              <Card.Text>
                Data analysis, visualization, and extracting meaningful
                insights from data.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Machine Learning</Card.Title>
              <Card.Text>
                Building, training, and evaluating machine learning models
                for real-world problems.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <Card.Title>Web Development</Card.Title>
              <Card.Text>
                Developing modern and responsive web applications
                using React JS and Bootstrap.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Services
