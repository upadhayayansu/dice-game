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

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items
`;
const Button = styled.button`
  color: white;
  pad: 10px 18px;
  background-color: black;
  border-radius: 5px;
  min-width: 220px;
`;
