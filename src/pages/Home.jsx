import { Container, Button } from 'react-bootstrap'

function Home() {
  return (
    <div
      id="home"
      className="bg-primary text-light text-center"
      style={{ paddingTop: '120px', paddingBottom: '80px' }}
    >
      <Container>
        <h1>Kasam Vivek Reddy</h1>
        <h4 className="mt-2">B.Tech in Artificial Intelligence & Machine Learning</h4>

        <p className="mt-3">
          Aspiring Data Scientist | Machine Learning Enthusiast
        </p>

        <Button variant="light" className="mt-3">
          View My Skills
        </Button>
      </Container>
    </div>
  )
}

export default Home
