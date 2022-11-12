import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <FooterDiv>
        <p>Footer</p>
    </FooterDiv>
  )
}
const FooterDiv = styled.footer`
text-align : center;
p{
  font-size : 4rem;
}
`
