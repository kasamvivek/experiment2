import { Container } from 'react-bootstrap'

function Contact() {
  return (
    <Container
      id="contact"
      className="mt-5 mb-5"
      style={{ paddingTop: '80px' }}
    >
      <h2 className="text-primary mb-3">Contact</h2>

      <p>
        <strong>Name:</strong> Kasam Vivek Reddy
      </p>
      <p>
        <strong>Email:</strong> kasamvivek@example.com
      </p>
      <p>
        <strong>Field:</strong> AI & ML | Data Science
      </p>
    </Container>
  )
}

export default Contact
