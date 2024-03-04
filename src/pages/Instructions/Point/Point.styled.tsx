import { styled } from "solid-styled-components";

const SCPoint = styled("div")`
  /* background-color: yellow; */

  .content {
    background-color: white;
    font-family: mouse;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    width: 385px;
    height: 550px;
    padding: 60px 50px;
    text-align: center;
    border-radius: 40px;

    .fs-l {
      color: rgb(var(--blue));

      @media screen and (max-width: 1250px) {
        grid-row: 1 / 3;
        grid-column: 1 / 2;
      }

      @media screen and (max-width: 700px) {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
      }
    }

    .fs-m {
      color: rgb(var(--dark-navy));

      @media screen and (max-width: 700px) {
        width: 225px;
      }
    }

    .fs-body {
      color: rgb(var(--lavender));
      width: 250px;

      @media screen and (max-width: 1250px) {
        width: 100%;
      }

      @media screen and (max-width: 700px) {
        grid-column: 1 / 3;
      }
    }

    @media screen and (max-width: 1250px) {
      display: grid;
      grid-template-rows: auto auto;
      grid-template-columns: auto auto;
      row-gap: 16px;
      column-gap: 40px;
      text-align: start;
      width: 680px;
      height: auto;
      padding: 32px 40px;
    }

    @media screen and (max-width: 700px) {
      width: 325px;
      row-gap: 16px;
      column-gap: 16px;
      padding: 32px;
      border-radius: 20px;
    }
  }
`;

export default SCPoint;
