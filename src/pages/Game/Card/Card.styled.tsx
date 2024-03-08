import { styled } from "solid-styled-components";

const SCCard = styled("div")`
  background: linear-gradient(rgb(52, 74, 186), rgb(0, 20, 121, 0.8));
  display: grid;
  place-items: center;
  border-radius: 70px;
  box-shadow: inset 0 -8px 0 4px #140e66, inset 0 6px 0 8px #2463ff;
  position: relative;
  padding: 120px 160px;
  padding-bottom: 70px;
  width: fit-content;

  .title {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 134px;
    line-height: 160px;
    letter-spacing: -7px;
    width: max-content;

    @media screen and (max-width: 600px) {
      font-size: 94px;
      line-height: 113px;
      letter-spacing: -5px;
    }
  }

  @media screen and (max-width: 600px) {
    padding: 105px 25px;
    padding-bottom: 90px;
    border-radius: 48px;
  }
`;

export default SCCard;
