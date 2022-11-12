import React from "react";
import styled from "styled-components";

export default function MainBanner() {
  return (
    <>
      <MainBannerDiv style={{ backgroundImage: "url(Images/girl-landscape.jpg)" }}>
        <MainBannerText>
          <p>Spring</p>
          <p>Collections</p>
          <p>Available Now</p>
        </MainBannerText>
      </MainBannerDiv>
    </>
  );
}
const MainBannerDiv = styled.div`
position: relative;
  width: 100%;
  height: 75vh;
  background-size: cover;
  baclgound-repeat: no-repeat;
  clip-path: polygon(50% 15%, 35% 0, 0 0, 0 100%, 100% 100%, 100% 0, 65% 0);
`;
const MainBannerText = styled.div`
position : absolute;
top : 20%;
left : 10%;
  p:first-of-type {
    font-weight: 900;
    font-size: 10rem;
    line-height : 65px;
    color : grey;
  };
  p:nth-of-type(2) {
    font-weight: 300;
    font-size: 6.5rem;
  };
  p:last-of-type {
    font-weight: 100;
    font-size: 4rem;
    line-height : 10px;
  }
`;
