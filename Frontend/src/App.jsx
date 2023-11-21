import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home";
import EditBook from "../src/pages/EditBook"
import CreateBook from "../src/pages/CreateBook"
import DeleteBook from "../src/pages/DeleteBook"
import ShowBook from "../src/pages/ShowBook"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/Books/edit/:_id" element={<EditBook />} />
      <Route path="/Books/create" element={<CreateBook />} />
      <Route path="/Books/delete/:_id" element={<DeleteBook />} />
      <Route path="/Books/details/:_id" element={<ShowBook />} />
    </Routes>
  )
}

export default App;