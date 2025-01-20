import avatar2 from '@/assets/images/team/avatar-2.jpg'
import avatar4 from '@/assets/images/team/avatar-4.jpg'
import avatar5 from '@/assets/images/team/avatar-5.jpg'
import avatar6 from '@/assets/images/team/avatar-6.jpg'
import avatar7 from '@/assets/images/team/avatar-7.jpg'
import avatar8 from '@/assets/images/team/avatar-8.jpg'
import avatar9 from '@/assets/images/team/avatar-9.jpg'
import IconifyIcon from '@/components/wrappers/IconifyIcon'
import Image from 'next/image'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { teamData } from '../data'
import Link from 'next/link'
import story from '@/assets/images/img2.jpg'

const OurStory = () => {
  const images = [avatar7, avatar6, avatar8, avatar9, avatar4, avatar2, avatar5]
  return (
    <section className="  section" id="story">
      <Container>
        <Row className="justify-content-between g-3">   
          <Col lg={6}>  
            <div className="img-part rounded"> 
              <Image
                src={story}
                alt="our-story"
                className="img-fluid rounded"
                style={{ maxHeight: '400px', objectFit: 'cover' }} // Adjust the maxHeight as needed
              />
            </div>
          </Col>

          <Col lg={5}>
            <p className="d-flex align-items-center mb-4">
              <span className="icon bg-primary rounded d-flex justify-content-center align-items-center">
                <IconifyIcon icon="tabler:users-group" className="text-white f-18" />
              </span>
              <IconifyIcon icon="tabler:line-dashed" className="text-primary fs-5" />
              <span className="badge bg-light border text-primary py-2 px-3 f-14">Our Story</span>
            </p>
            <h3 className="lh-base">Affordable Stays, Elevated Experiences</h3>
            <p className="text-muted mb-4">
              MyStay Motel was established to meet the growing demand for quality, affordable accommodations in Pakistan’s dynamic and evolving urban
              landscape. Leveraging the construction expertise of Victory Construction and the marketing strength of Maidaan Marketing, MyStay Motel merges
              cutting-edge designs with guest-focused solutions.
            </p>
            <p>
              The first location will feature thoughtfully designed accommodations, co-working spaces in collaboration with Workwise, and a rooftop
              dining experience, setting a new benchmark for hospitality in the region.
            </p>
            {/* <div className="user-team-price mb-4 mt-3  pb-2 pt-1">
              <ul>
                {images.map((item, idx) => {
                  return (
                    <li key={idx}>
                      <Image src={item} alt="image" className="rounded-circle" />
                    </li>
                  )
                })}
              </ul>
            </div> */}
            {/* <Button variant="primary">Talk With Team</Button> */}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default OurStory
