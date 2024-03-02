import { styled } from "solid-styled-components";

const SCStart = styled("div")`
  display: grid;
  place-items: center;
  min-height: 100vh;

  .container {
    --x: 0;
    --y: -100px;
    --time-scale: 2;
    background: linear-gradient(rgb(52, 74, 186, 0.9), rgb(0, 20, 121, 0.9));
    box-shadow: inset 0 -8px 0 4px #140e66, inset 0 6px 0 9px #2463ff;
    border-radius: 72px;
    width: 595px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 58px;
    position: relative;
    padding-top: 130px;

    .logo {
      position: absolute;
      bottom: 425px;
      left: 50%;
      transform: translate(-50%);

      @media screen and (max-width: 600px) {
        width: 265px;
        bottom: 400px;
      }
    }

    @media screen and (max-width: 600px) {
      width: 325px;
      height: 481px;
      border-radius: 48px;
      gap: 55px;
      padding-top: 140px;
    }
  }
`;

export default SCStart;
