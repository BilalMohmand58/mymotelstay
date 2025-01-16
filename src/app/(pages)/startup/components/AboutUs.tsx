import Image from 'next/image'
import React from 'react'
import about from '@/assets/images/about.png'
import avatar1 from '@/assets/images/team/avatar-1.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import { Col, Container, Row } from 'react-bootstrap'

const AboutUs = () => {
  return (
    <section className=" section pb-lg-0" id="about">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} >
            <p className="d-flex align-items-center mb-4">
              <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                <IconifyIcon icon="tabler:info-circle" className="text-white f-18" />
              </span>
              <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
              <span className="badge bg-light border text-primary py-2 px-3 f-14">About Us </span>
            </p>
            <h3 className="lh-base">Welcome to MyStayMotel</h3>
            <p className="text-muted">
              At MyStayMotel, we believe hospitality is more than just providing a place to stay—it’s about creating experiences that seamlessly
              combine comfort, convenience, and affordability. As part of the Maidaan Group of Companies, MyStayMotel redefines hospitality by
              offering modern, budget-friendly accommodations tailored to meet the needs of travelers, professionals, and families.
            </p>
            <p>
              Our facilities integrate thoughtful design and functionality, providing everything from well-appointed rooms and co-working spaces to
              dining options and recreational areas. Conveniently located in vibrant urban developments, MyStayMotel ensures accessibility and a
              welcoming atmosphere for all guests.
            </p>
            <div className="main-link">
              <a href="#contact" className="text-primary fs-6 fw-medium text-decoration-underline link-offset-3">
                Learn More <IconifyIcon icon="tabler:arrow-narrow-right" className="align-middle" />
              </a>
            </div>
            {/* <div className="user-detail border-start mt-5 ps-4">
              <p className="fs-6 text-muted fw-medium">
                &quot; The many integrations that can be linked really help me see data from other tools I also use. &quot;
              </p>
              <div className="d-flex align-items-center gap-3 mt-4">
                <Image src={avatar1} alt="avatar1" className="rounded-circle" width={40} height={40} />
                <div>
                  <p className="m-0 text-dark fs-6">Clayton N. Ziegler</p>
                  <p className="m-0 f-14 text-muted">Service manager @Skywave</p>
                </div>
              </div>
            </div> */}
          </Col>
          <Col lg={6} className="d-none d-lg-block">
  <div className="img-part">
    <Image
      src={about}
      alt="about"
      className="img-fluid img-lg-margin"
      style={{ width: '90%', height: 'auto' }}
    />
  </div>
</Col>




        </Row>
      </Container>
    </section>
  )
}

export default AboutUs
