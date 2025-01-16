import { currency } from '@/context/constants'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ActionBox = () => {
  return (
    <section className="py-5 counter-section bg-dark bg-shape">
      <Container>
        <Row className="align-items-center g-4">
          <Col lg={3}>
            <div className="d-flex align-items-center gap-4">
              {/* <h2 className="fw-bold text-white mb-0">✔</h2> */}
              <p className="mb-0 text-white f-16">Prime Locations: Conveniently located in urban developments for easy access.</p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="d-flex align-items-center gap-4">
              {/* <h2 className="fw-bold text-white mb-0">✔</h2> */}
              <p className="mb-0 text-white f-16">Affordable Excellence: High-quality, budget-friendly accommodations.</p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="d-flex align-items-center gap-4">
              {/* <h2 className="fw-bold text-white mb-0">✔</h2> */}
              <p className="mb-0 text-white f-16">Innovation: Modern amenities and practical features tailored for dynamic lifestyles.</p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="d-flex align-items-center gap-4">
              {/* <h2 className="fw-bold text-white mb-0">✔</h2> */}
              <p className="mb-0 text-white f-16">Growth-Oriented: Scalable, sustainable, and focused on long-term success.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ActionBox
