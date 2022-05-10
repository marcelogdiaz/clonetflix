import React from "react";
import { Carousel,Button, Jumbotron } from "react-bootstrap";

const MainFilm = ({film}) => {
    return (
        <section>
        <div className="section_content">
          {/* <Jumbotron>
                  <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>
            <Button bsStyle="primary">Learn more</Button>
          </p>
            </Jumbotron> */}
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <button>Play</button>
                <button>Mi lista</button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>              
        </div>
      </section>
    );
}

export default MainFilm;