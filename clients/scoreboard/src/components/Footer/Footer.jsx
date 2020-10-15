import React from "react";
import { Navbar } from "react-bootstrap";

import '../Footer/footer.scss'

const Footer = (props) => {
  return <Navbar bg="primary" fixed="bottom" variant="footer">{props.content}</Navbar>;
};
export default Footer;
