import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import pp from '../../assets/pp.png';

function coursel() {
  return (
    <Container>
      <Row>
        <Col>
          <img src={pp} alt=""/>
        </Col>
        <Col className='mt-5'>
          <p>Hi, I’m <b>Rizqi</b> and I’m a DevOps Engineer at <b>PT. Digital Nayaka Abhinaya.</b> My current focus is optimizing Cloud Computing. My background is in computer science. Before joining this team, I worked with big data to identify insights for our clients in the digital industry. I’m excited to work with you all to solve our clients’ biggest challenges!</p>
        </Col>
      </Row>
    </Container>
  );
}

export default coursel;