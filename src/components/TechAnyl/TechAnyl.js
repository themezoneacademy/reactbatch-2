import React, { Component, Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BarChart, XAxis, Bar, Tooltip } from 'recharts';
class TechAnyl extends Component {
    constructor() {
        super();
        this.state = {
            data: [
                { Technology: 'java', 'project': 100 },
                { Technology: 'Kotlin', 'project': 50 },
                { Technology: 'Sql', 'project': 40 },
                { Technology: 'Jquery', 'project': 60 },
                { Technology: 'Recat', 'project': 20 },
                { Technology: 'Php', 'project': 10 },
                { Technology: 'Angular', 'project': 90 },
            ]
        }
    }
    render() {
        var blue = "blue";
        return (
            <Fragment>
                <Container className='oness'>
                    <h4 className='text-center'>Techology Used</h4>
                    <Row p-150>
                        <Col lg={6} md={6} sm={12} >

                            <BarChart width={600} height={300} data={this.state.data}>
                                <XAxis dataKey="Technology" />
                                <Tooltip />
                                <Bar dataKey="project" fill={blue} />

                            </BarChart>

                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>

                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>

                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>


                        </Col>





                    </Row>



                </Container>



            </Fragment>
        );
    }
}

export default TechAnyl;