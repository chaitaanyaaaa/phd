// src/components/HeroSection.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-section">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col md={8}>
                        <h1>Welcome to PhD Assistance</h1>
                        <p>Your go-to platform for PhD support.</p>
                        <Button variant="primary" href="#">Learn more</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HeroSection;
