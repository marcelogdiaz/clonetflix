import React from "react";
import { Carousel } from "react-bootstrap";

const MainFilm = ({film}) => {
    return (
        <section>
        <div className="section_content">
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