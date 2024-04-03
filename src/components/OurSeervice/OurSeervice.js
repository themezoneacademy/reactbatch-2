import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import icon1 from '../../asset/images/icon1.jpeg';
import icon2 from '../../asset/images/icon2.jpeg';
import icon3 from '../../asset/images/icon3.jpeg';

class OurSeervice extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h2 className='text-center '>Our Service</h2>
                    <Row>
                        <Col lg={4} md={6} sm={12}>

                            <Card >
                               <img src={icon1} alt="" /> 
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>

                        </Col> 




                        <Col>
                            <Card >
                            <img src={icon2} alt="" /> 
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>


                        </Col>





                        <Col>

                            <Card >
                            <img src={icon3} alt=""  /> 
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>

                        </Col>



                    </Row>




                </Container>





            </Fragment>
        );
    }
}

export default OurSeervice;