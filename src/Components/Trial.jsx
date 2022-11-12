import React from 'react'
import styled from 'styled-components'

export default function Trial() {
  return (
    <HeaderDiv>
        <div className='one' style={{width:"300px", height:"300px"}}>
        </div>
        <div className='two' style={{width:"300px", height:"300px"}}>
        </div>
        <div className='three' style={{width:"300px", height:"300px"}}>
        </div>
        <div className='four' style={{width:"300px", height:"300px"}}>
        </div>
    </HeaderDiv>
  )
}

const HeaderDiv = styled.header`
// .one{
//     background-color : blue;
//     clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
// }
// .two{
//     background-color : blue;
//     clip-path: polygon(0 0, 0 0, 20% 50%, 0 100%, 0 100%, 100% 100%, 100% 100%, 80% 50%, 100% 0, 100% 0);
// }
// .three{
//     background-color : blue;
//     clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
// }
.four{
    margin: 5px;
    background-color : blue;
    clip-path: polygon(50% 30%, 25% 0, 0 0, 0 100%, 100% 100%, 100% 0, 75% 0);
}
`
