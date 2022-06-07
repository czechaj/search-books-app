import React, { useState } from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { useBooks } from "../../contexts/BooksContext";
function SearchArea() {
  const { getBooks } = useBooks();
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getBooks(text);
    setText("");
  };

  return (
    <InputGroup
      as={"form"}
      onSubmit={handleSubmit}
      className="w-50 mx-auto search-area"
    >
      <FormControl
        value={text}
        onChange={handleChange}
        className="bg-transparent text-light"
        placeholder="Search by title..."
      />
      <Button type="submit" variant="outline-light">
        Search
      </Button>
    </InputGroup>
  );
}

export default SearchArea;
