import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ActionBox = () => {
  return (
    <section className="py-5 counter-section bg-dark text-center text-md-start">
      <Container>
        <Row className="g-4">
          <Col lg={3} sm={6}>
            <div className="d-flex flex-column align-items-center align-items-md-start text-white">
              <div className="icon-box bg-primary d-flex justify-content-center align-items-center rounded-circle mb-4 shadow-lg p-3">
                <i className="bi bi-geo-alt-fill text-white fs-3"></i> {/* White icon */}
              </div>
              <h4 className="fw-bold text-white mb-2 fs-5">Prime Locations</h4>
              <p className="mb-0 text-white fs-6"> {/* White text */}
                Conveniently located in urban developments for easy access.
              </p>
            </div>
          </Col>
          <Col lg={3} sm={6}>
            <div className="d-flex flex-column align-items-center align-items-md-start text-white">
              <div className="icon-box bg-primary d-flex justify-content-center align-items-center rounded-circle mb-4 shadow-lg p-3">
                <i className="bi bi-wallet2 text-white fs-3"></i> {/* White icon */}
              </div>
              <h4 className="fw-bold text-white mb-2 fs-5">Affordable Excellence</h4>
              <p className="mb-0 text-white fs-6"> {/* White text */}
                High-quality, budget-friendly accommodations.
              </p>
            </div>
          </Col>
          <Col lg={3} sm={6}>
            <div className="d-flex flex-column align-items-center align-items-md-start text-white">
              <div className="icon-box bg-primary d-flex justify-content-center align-items-center rounded-circle mb-4 shadow-lg p-3">
                <i className="bi bi-lightbulb-fill text-white fs-3"></i> {/* White icon */}
              </div>
              <h4 className="fw-bold text-white mb-2 fs-5">Innovation</h4>
              <p className="mb-0 text-white fs-6"> {/* White text */}
                Modern amenities and practical features tailored for dynamic lifestyles.
              </p>
            </div>
          </Col>
          <Col lg={3} sm={6}>
            <div className="d-flex flex-column align-items-center align-items-md-start text-white">
              <div className="icon-box bg-primary d-flex justify-content-center align-items-center rounded-circle mb-4 shadow-lg p-3">
                <i className="bi bi-graph-up-arrow text-white fs-3"></i> {/* White icon */}
              </div>
              <h4 className="fw-bold text-white mb-2 fs-5">Growth-Oriented</h4>
              <p className="mb-0 text-white fs-6"> {/* White text */}
                Scalable, sustainable, and focused on long-term success.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ActionBox
