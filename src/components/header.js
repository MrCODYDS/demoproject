import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="inner-header">
            <div className="logo">
              <Link to="/">Home</Link>
            </div>
            <div className="navigation">
              <nav>
                <Link to="#about">About</Link>
                <Link to="#skills">Skills</Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
