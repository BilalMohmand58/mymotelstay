import IconifyIcon from '@/components/wrappers/IconifyIcon'
import React from 'react'
import { servicesData } from '../data'
import { splitArray } from '@/utils/array'
import { Col, Container, Row } from 'react-bootstrap'

const Services = () => {
  const services = servicesData || []
  const chunk_size = 3
  const servicesChunks = splitArray(services, chunk_size)

  return (
    <section className="section" id="services">
      <Container>
        <Row className="justify-content-center">
          <Col lg={7}>
            <div className="title text-center mb-5">
              <p className="d-flex align-items-center justify-content-center mb-4">
                <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                  <IconifyIcon icon="tabler:devices-cog" className="text-white f-18" />
                </span>
                <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
                <span className="badge bg-light border text-primary py-2 px-3 f-14">Our Services </span>
              </p>
              <h3>Feel at Home, Wherever You Go</h3>
              <p className="text-muted">
                At MyStay Motel, we believe hospitality is more than just providing a place to stay—it’s about creating experiences that seamlessly
                combine comfort, convenience, and affordability.{' '}
              </p>
            </div>
          </Col>
        </Row>
        {(servicesChunks || []).map((chunk, chunkIdx) => (
          <Row key={`chunk-${chunkIdx}`}>
            {(chunk || []).map((item) => (
              <Col lg={4} className="position-relative" key={item.title || item.icon}>
                <div className="busi-services-box p-4 bg-white mt-5">
                  {item.icon && (
                    <div className="busi-services-icon">
                      <i className="fs-3 text-white bg-primary">
                        <IconifyIcon icon={item.icon} />
                      </i>
                    </div>
                  )}
                  <div className="busi-services-desc">
                    {item.title && <h5 className="mb-4 f-18">{item.title}</h5>}
                    {item.description && (
                      <p className="text-muted mb-0">
                        {Array.isArray(item.description)
                          ? item.description.map((desc: string, i: number) => <li key={i}>{desc}</li>) // Explicitly typing 'desc' as string
                          : item.description}
                      </p>
                    )}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        ))}
      </Container>
    </section>
  )
}

export default Services
