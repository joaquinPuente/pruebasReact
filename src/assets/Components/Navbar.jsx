import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/">Inicio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/productos">Productos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Contacto</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Proximamente
        </Nav.Link>
      </Nav.Item>
    </Nav>

    </div>
  )
}

export default Navbar