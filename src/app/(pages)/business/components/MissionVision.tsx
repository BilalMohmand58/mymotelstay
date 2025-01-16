import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { Button, Card, CardBody, Col, Container, Row } from 'react-bootstrap'

const MissionVision = () => {
  return (
    <section className="section bg-light" id="features">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <div className="title text-center mb-5">
              <p className="d-flex align-items-center justify-content-center mb-4">
                <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                  <IconifyIcon icon="tabler:key" className="text-white f-18" />
                </span>
                <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
                <span className="badge bg-light border text-primary py-2 px-3 f-14">Why Choose Us</span>
              </p>
              <h3>Why Choose MyStay Motel?</h3>
              <p className="text-muted">
                Whether you’re a traveler exploring a new city, a professional seeking a workspace, or a family looking for a comfortable retreat,
                MyStay Motel offers:
              </p>
              <div className="d-flex justify-content-center align-items-center h-100">
  <ul className="list-unstyled ps-3 text-center">
    <li className="mb-2 d-flex align-items-center justify-content-center">
      <span className="me-2 text-primary">
        <IconifyIcon icon="tabler:check" />
      </span>
      Modern amenities for today’s travelers.
    </li>
    <li className="mb-2 d-flex align-items-center justify-content-center">
      <span className="me-2 text-primary">
        <IconifyIcon icon="tabler:check" />
      </span>
      Prime locations in vibrant mixed-use developments.
    </li>
    <li className="d-flex align-items-center justify-content-center">
      <span className="me-2 text-primary">
        <IconifyIcon icon="tabler:check" />
      </span>
      A team dedicated to exceptional service, ensuring every stay is memorable.
    </li>
  </ul>
</div>

            </div>
          </Col>
        </Row>
        <Row className="mt-4 g-3">
          {/* Adjusted column size to lg={6} to take up half the space */}
          <Col lg={6} xs={12}>
            <Card className="border-0">
              <CardBody>
                <span className="icon-bg bg-light text-primary rounded d-flex justify-content-center align-items-center flex-shrink-0">
                  <IconifyIcon icon="tabler:report-analytics" className="fs-3" />
                </span>
                <h5 className="my-3">Our Mission</h5>
                <p className="text-muted mb-4">
                  To provide affordable, high-quality accommodations that combine functionality, comfort, and innovation, redefining the hospitality
                  experience for travelers and communities.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col lg={6} xs={12}>
            <Card className="border-0">
              <CardBody>
                <span className="icon-bg bg-light text-primary rounded d-flex justify-content-center align-items-center flex-shrink-0">
                  <IconifyIcon icon="tabler:chart-pie" className="fs-3" />
                </span>
                <h5 className="my-3">Our Vision</h5>
                <p className="text-muted mb-4">
                  To become a leading name in hospitality, known for accessibility, affordability, and global standards, while expanding operations
                  internationally.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default MissionVision
