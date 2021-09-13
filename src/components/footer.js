import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/style.css";


function Footer() {
    return (
        <div>
            <Card>
    <Card.Body>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
      <Card.Text>
        <small className="text-muted">This is where the contact icons and links would be later</small>
        <small className="text-muted">This is where the contact icons and links would be later</small>
        <small className="text-muted">This is where the contact icons and links would be later</small>
        <small className="text-muted">This is where the contact icons and links would be later</small>
        <ul className="footer-list" >
          <li>
            <a href="/shop" >
              Shop
            </a>
          </li>
          <li>
            <a href="/cart" >
              Cart
            </a>
          </li>
        </ul>

      </Card.Text>
    </Card.Body>
  </Card>
        </div>
        
    )
}

export default Footer
