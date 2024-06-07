import styled from "styled-components";

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 18px;
  gap: 10px;
  width: 200px;
  height: 44px;
  background-color: #000000;
  border-radius: 5px;
  color: white;
  align-items: center;

  &:hover {
    background-color: #6d6c6c;
  }
`;

// eslint-disable-next-line react/prop-types
const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div className="img">
        <img
          style={{ height: "400px", width: "350px" }}
          src="/src/assets/dices.jpg"
        />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;
