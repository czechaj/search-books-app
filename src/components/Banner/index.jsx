import React from "react";
import { Container } from "react-bootstrap";
import SearchArea from "../SearchArea";
function Banner() {
  return (
    <Container className="banner mw-100">
      <SearchArea />
    </Container>
  );
}

export default Banner;
