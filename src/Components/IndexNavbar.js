import React from "react"
import { Navbar, Nav, Row, NavItem, Col, NavbarText } from "reactstrap"

export const IndexNavbar = () => {
  
  return (
    <Navbar color="dark" dark expand="md">
      <Nav>
        <Row>
          <Col>
            <NavItem>
              <NavbarText color="bg-danger">Made by Joe Whiteaker</NavbarText>
            </NavItem>
          </Col>
        </Row>
      </Nav>
    </Navbar>
  )
}

export default IndexNavbar
