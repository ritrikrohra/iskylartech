import React from "react";
import styled from "styled-components";
import * as Im from "react-icons/im";
import * as Md from "react-icons/md";

export default function CollageSection() {
  const carousell = [
    {
      image: "Images/Specs.jpg",
      text: "Lorem Ispum Dolor Sit Amet Consecuteur",
      price: "Rs.120",
    },
    {
      image: "Images/shoe.jpg",
      text: "Lorem Ispum Dolor Sit Amet Consecuteur",
      price: "Rs.120",
    },
    {
      image: "Images/watch.jpg",
      text: "Lorem Ispum Dolor Sit Amet Consecuteur",
      price: "Rs.120",
    },
    {
      image: "Images/purse.jpg",
      text: "Lorem Ispum Dolor Sit Amet Consecuteur",
      price: "Rs.120",
    },
  ];

  return (
    <>
      <ContainerDiv>
        <ClipPathDiv>
          <div>
            <i>
              <Im.ImAirplane />
            </i>
            <p>
              FREE SHIPPING
              <br /> <span>in order min Rs.200</span>{" "}
            </p>
          </div>
          <div>
            <i>
              <Im.ImClock />
            </i>
            <p>
              30-DAYS RETURNS
              <br /> <span>in order min Rs.200</span>{" "}
            </p>
          </div>
          <div>
            <i>
              <Md.MdSupport />
            </i>
            <p>
              24/7 SUPPORT
              <br /> <span>in order min Rs.200</span>{" "}
            </p>
          </div>
        </ClipPathDiv>
        <CollageWithGrid className="grid-container">
          <div style={{ backgroundImage: "url(Images/purse.jpg)" }}></div>
          <div
            style={{ backgroundImage: "url(Images/model-standing.jpg)" }}
          ></div>
          <div style={{ backgroundImage: "url(Images/shoe.jpg)" }}></div>
          <div style={{ backgroundImage: "url(Images/specs.jpg)" }}></div>
          <div style={{ backgroundImage: "url(Images/watch.jpg)" }}></div>
        </CollageWithGrid>
        <TextDiv>
          <p>20% OFF on all Bags and Accessories</p>
        </TextDiv>
        <CarousellDiv>
          {carousell.map((data, idx) => (
            <CarousellChild>
              <div style={{ backgroundImage: `url(${data.image})` }}></div>
              <div>
                <p>{data.text}</p>
              </div>
              <div>
                <p>{data.price}</p>
              </div>
            </CarousellChild>
          ))}
        </CarousellDiv>
      </ContainerDiv>
    </>
  );
}
const ContainerDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 1% 0;
`;
const ClipPathDiv = styled.div`
  width: 100%;
  display: flex;
  color: white;
  justify-content: space-between;
  padding: 1% 0;
  div {
    width: 32.5%;
    height: 100px;
    background-color: rgb(8, 110, 124);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    span {
      font-size: 1.25rem;
    }
    i {
      margin-right: 5%;
      font-size: 3rem;
    }
  }
  div:first-of-type {
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
    justify-content: left;
    padding: 0 5%;
  }
  div:nth-of-type(2) {
    clip-path: polygon(
      0 0,
      0 0,
      20% 50%,
      0 100%,
      0 100%,
      100% 100%,
      100% 100%,
      80% 50%,
      100% 0,
      100% 0
    );
    background-color: black;
  }
  div:last-of-type {
    clip-path: polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%);
    justify-content: right;
    padding: 0 5%;
  }
`;
const CollageWithGrid = styled.div`
  width: 100%;
  display: grid;
  gap: 10px;
  padding: 1% 0;
  div {
    height: 300px;
    background-size: 60%;
    background-position: center;
    background-repeat: no-repeat;
    border: 1px solid black;
  }
  div:nth-of-type(1) {
    grid-column: 1;
    grid-row: 1;
  }
  div:nth-of-type(2) {
    grid-column: 2;
    grid-row: 1 / span 2;
    height: auto;
    background-size: cover;
  }
  div:nth-of-type(3) {
    grid-column: 3;
    grid-row: 1;
  }
  div:nth-of-type(4) {
    grid-column: 1;
    grid-row: 2;
  }
  div:nth-of-type(5) {
    grid-column: 3;
    grid-row: 2;
  }
`;
const TextDiv = styled.div`
  width: 100%;
  text-align: center;
  padding : 1% 0;
  p {
    font-size: 4rem;
    font-weight: bolder;
  }
`;
const CarousellDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1% 0;
`;
const CarousellChild = styled.div`
width : 24%;
div{
    width : 100%;
}

div:first-of-type{
    position : relative;
    z-index : 1;
    height : 50vh;
    background-size : contain;
background-position : center;
background-repeat : no-repeat;
}
div:first-of-type:after{
    content : "20%";
    width : 50px;
    height : 50px;
    border-radius : 50px;
    display : flex;
    text-align : center;
    justify-content : center;
    align-items : center;
    background-color : red;
    position : absolute;
    top : 0;
    left : 0;
    z-index : 999;
}
div:nth-of-type(2){
    text-align : center;
    p{
        font-size : 1.5rem;
    } 
}
div:nth-of-type(3){
    text-align : center;
    p{
        font-size : 2rem;
        color : blue;
    } 
}
`;
