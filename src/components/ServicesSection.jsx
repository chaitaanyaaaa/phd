// src/components/ServicesSection.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ServicesSection.css';

function ServicesSection() {
    const services = [
        {
            title: "Service 1",
            description: "Description of Service 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: "fas fa-graduation-cap"
        },
        {
            title: "Service 2",
            description: "Description of Service 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: "fas fa-chalkboard-teacher"
        },
        {
            title: "Service 3",
            description: "Description of Service 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            icon: "fas fa-book-reader"
        }
    ];

    return (
        <section className="services-section">
            <Container>
                <h2 className="section-title">Our Services</h2>
                <Row>
                    {services.map((service, index) => (
                        <Col key={index} md={4}>
                            <Card className="service-card">
                                <Card.Body>
                                    <div className="service-icon">
                                        <i className={service.icon}></i>
                                    </div>
                                    <Card.Title>{service.title}</Card.Title>
                                    <Card.Text>{service.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default ServicesSection;
