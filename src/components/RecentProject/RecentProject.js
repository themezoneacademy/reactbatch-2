import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import cardimg from '../../asset/images/cardimg.png';
class RecentProject extends Component {
    render() {
        return (
            <Fragment>
                <Container className='text-center'>
                    <h1 >Recent Project</h1>
                    <Row>
                        <Col sm={12} md={6} lg={4}>
                            <Card className='projectCard' >
                            <img src={cardimg} alt="" /> 
                                <Card.Body>
                                    <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                                    <Card.Text className='projectCardDesc'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>








                        <Col sm={12} md={6} lg={4}>
                            <Card className='projectCard' >
                            <img src={cardimg} alt="" />
                                <Card.Body>
                                    <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                                    <Card.Text className='projectCardDesc'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>





                        <Col sm={12} md={6} lg={4}>
                            <Card className='projectCard' >
                            <img src={cardimg} alt="" />
                                <Card.Body>
                                    <Card.Title className='projectCardTitle'>Card Title</Card.Title>
                                    <Card.Text className='projectCardDesc'>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>


                    </Row>





                </Container>

            </Fragment>
        );
    }
}

export default RecentProject;