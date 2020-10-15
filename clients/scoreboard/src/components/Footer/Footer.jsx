import React from "react";
import { Navbar } from "react-bootstrap";

const Footer = (props) => {
  return <Navbar bg="primary" fixed="bottom" style={{ padding: "40px" }} >{props.content}</Navbar>;
};
export default Footer;
