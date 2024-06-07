import styled from "styled-components";

const ScoreContainer = styled.div`
  max-width: 150px;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 80px;
  }
  p {
    font-size: 24px;
    font-weight: 500px;
  }
`;

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;
