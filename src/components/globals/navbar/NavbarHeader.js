import React, { Component } from 'react'
import {Link} from 'gatsby'
import logo from '../../../images/logo.png'
import {FaAlignRight} from 'react-icons/fa'
import styled from 'styled-components'
export default class NavbarHeader extends Component {
  render() {
      const { handleNavbar} = this.props
    return (
      <HeaderWrapper>
          <Link to="/">
            <img src={logo} alt="logo website" width="150"/>
          </Link>
        <FaAlignRight 
         className="toggle-icon"
         
        />
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`