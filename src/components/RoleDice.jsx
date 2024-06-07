import styled from "styled-components";
import { useState } from "react";

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  p {
    font-size: 24px;
  }

  .dice {
  }
`;

const RoleDice = ({ currentDice, roleDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img
          style={{ height: "80px" }}
          src={`/src/assets/${currentDice}.png`}
        />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;
