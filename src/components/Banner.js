import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome To My Portfolio</span>
            <h1>
              {`Hi i am skyIsMagenta`}
              <span className="wrap"> Web Developer</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              alias nulla similique dicta molestiae labore accusamus recusandae
              temporibus quis fugiat distinctio incidunt ducimus, placeat
              assumenda veniam quisquam. Id, itaque quae?
            </p>
            <button onClick={() => console.log("connect")}>
              Let's Connect
              <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} className="Header Img" alt="Header" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
