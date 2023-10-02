import { useState } from "react";
import styled from "styled-components";

const NumberSelector = () => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState();
  console.log(selectedNumber);

  return (
    <NumberSelectorContainer>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => setSelectedNumber(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;
const NumberSelectorContainer = styled.div`
display: flex;
align-items: center;

  .flex {
    display: flex;
    gap: 24px;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-content: centre;
  font-size: 24px;
  font-weight: 700px;
  background-color: ${props == (props.isSelected ? "black" : "white")};
  color: ${props == (!props.isSelected ? "black" : "white")};
`;
