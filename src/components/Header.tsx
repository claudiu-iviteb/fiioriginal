import React from 'react'
import { Link } from 'gatsby'

export default function Header() {
  return (
    <header className="header container">
      <Link to="/">
        <h3>
          Home
        </h3>
      </Link>
      <nav className="main-menu">
        <ul>
          <li>
            <Link
              to="/about/"
            >
              Despre
            </Link>
          </li>
          <li>
            <Link
              to="/blog/"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/contact/"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}
