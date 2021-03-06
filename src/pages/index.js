import React from "react"

import styled from 'styled-components'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaBeer } from 'react-icons/fa';
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Restaurant website<FaBeer /></h1>
    <ButtonWrapper>
      Submit
    </ButtonWrapper>
  </Layout>
)
const ButtonWrapper = styled.button`
   background-color: red;
   color: white;
   padding: 5px;
   width: 100%;
`
export default IndexPage
