import styled from "styled-components";

const TotalScore = () => {
  return (
    <scoreContainer>
      <div>
        <h1>0</h1>
        <p>Total score</p>
      </div>
    </scoreContainer>
  );
};
export default TotalScore;

const scoreContainer = styled.div`
  max-width: 200px;
  background-color: red;
  text-align: center;
  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;
