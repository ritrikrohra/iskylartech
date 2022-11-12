import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return (
    <HeaderDiv>
    <p>Header</p>
    </HeaderDiv>
  )
}
const HeaderDiv = styled.header`
text-align : center;
p{
  font-size : 4rem;
}
`