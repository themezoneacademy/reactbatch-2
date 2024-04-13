import React, { Component } from 'react';
import { Fragment } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { FaCircleCheck } from "react-icons/fa6";

class TotalWork extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className='TotalWork p-0' >
                    <div className='TotalWorkOverlay '>
                        <Container className='text-center'>
                            <Row className='countsection'>
                                <Col lg={8} md={6} sm={12}>
                                    <Row>
                                        <Col>
                                            <h1 className='countnumber'>
                                                <CountUp start={0} end={100}>
                                                    {({ countUpRef, start }) => (
                                                        <div>
                                                            <VisibilitySensor onChange={start}>
                                                                <span ref={countUpRef} />
                                                            </VisibilitySensor>
                                                        </div>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className='countTitle'>Total Project</h4>

                                        </Col>


                                        <Col>
                                            <h1 className='countnumber'>
                                                <CountUp start={0} end={100}>
                                                    {({ countUpRef, start }) => (
                                                        <div>
                                                            <VisibilitySensor onChange={start}>
                                                                <span ref={countUpRef} />
                                                            </VisibilitySensor>
                                                        </div>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className='countTitle'>Total Project</h4>
                                        </Col>
                                    </Row>
                                </Col>



                                                              
                                <Col lg={4} md={6} sm={12}> 
                                <Card style={{ width: '18rem' }}>

                                        <Card.Body>
                                            <Card.Title>How I Work</Card.Title>
                                            <Card.Text>
                                                <p><FaCircleCheck   /> Hello Js Developer</p>
                                                <p><FaCircleCheck   /> Hello Js Developer</p>
                                                <p><FaCircleCheck   /> Hello Js Developer</p>
                                                
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>


                                </Col>
                               

                            </Row>



                        </Container>











                    </div>

                </Container>




            </Fragment>
        );
    }
}

export default TotalWork;