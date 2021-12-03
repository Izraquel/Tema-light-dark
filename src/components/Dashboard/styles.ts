import styled from "styled-components";

export const Container = styled.main`
  max-width: 500px;
  border-radius: 8px;
  margin: 0 auto ;
  

  background: ${(props) => props.theme.colors.primary};


  .card {
    display: block;
    align-items: center;
    justify-content: center;
    padding: 25px 25px;
  }
  /* .card:hover{
    transition: color 700ms;
    border-radius: 8px;

} */


  .profile {
    display: flex;
    padding: 15px;
  }

  .profile img{
    margin: 0 auto;
    width: 150px;
    border-radius: 50%;
    //border: 4px solid ${(props) => props.theme.colors.border};
  }

  .info {
    text-align: center;
    line-height: 26px;
  }
  .info h2 {
    font-weight: 800;
    padding: 0 0 20px 0;

  }
  .info p {
    font-weight: 500;
  
  }

`
