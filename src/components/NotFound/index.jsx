import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
function NotFound() {
  const [show, setShow] = useState(true);
  return (
    <>
      <Alert show={show} variant="danger">
        <Alert.Heading>We can't find this book!</Alert.Heading>
        <p>Please try with different letters. Don't use 'ı, ö, ü' this time</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-dark">
            Close
          </Button>
        </div>
      </Alert>
    </>
  );
}

export default NotFound;
