import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;

`;

export const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 15px;
    margin-top: 60px;
`;

export const Card = styled.div`
    background: #e2e2e2;
    width: 250px;
    height: 290px;
    margin: 10px auto;
    border-radius: 18%;
    overflow: hidden;
    box-shadow: 1px 5px 15px 5px rgba(0, 0, 0, 0.5);
    transition: all 1s;
:hover {
      transform: rotateY(20deg);     
  }
`;

export const Photo = styled.img`
    width: 100%;
    height: 238px;
    background-color: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: all 1s;
:hover {
      height: 210px;
     
  }
`;

export const Title = styled.h2`
    padding: 8px;
    justify-content: center;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 17px;
    color: black;
    text-shadow: 0px 0px 2px black
`;
 
