import React, { Component, Fragment } from 'react';
import { Container,Row,Col, Button } from 'react-bootstrap';
import '../../asset/css/style.css';
class TopHeader extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid className='topheader p-0' >
                    <div className='TopOverlay'>
                        <Container className='' >
                            <Row>
                                <Col className='text-center'>
                                    <div className='TopContainer'>
                                <h1 className='TopTitle'>Software Engineer</h1>
                                <h4 className='TopSubtitle'>Mobile and Web Solution</h4>
                                <Button variant="primary">Join With US</Button>{' '}
                                </div>

                                
                                </Col>

                            </Row>
                        </Container>
                    </div>

                </Container>



                
            </Fragment>
        );
    }
}

export default TopHeader;