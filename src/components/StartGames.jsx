import styled from "styled-components";

const StartGames = () => {
  return (
    <Container>
      <div>
        <img src="/images/dices 1.png" />
      </div>
      <div>
        <h1>DICE GAME</h1>
        <Button>play Now</Button>
      </div>
    </Container>
  );
};

export default StartGames;

const Container = styled.div``;
const Button = styled.button`
  color: white;
  pad: 10px 18px;
  background-color: black;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0ms.4s background ease-in;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
