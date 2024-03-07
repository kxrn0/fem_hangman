import { styled } from "solid-styled-components";

const SCGame = styled("div")`
min-height: 100vh;
  position: relative;

  .navbar {
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 60px 112px;

    .left {
      display: flex;
      align-items: center;
      gap: 57px;

      .menu-button {
        background: linear-gradient(#fe71fe, #7199ff);
        width: 94px;
        height: 94px;
        display: grid;
        place-items: center;
        box-shadow: inset 0 -6px 0 7px rgb(157, 45, 245, 0.25);
        border-radius: 100%;
        border: none;
      }

      .fs-l {
        @media screen and (max-width: 1000px) {
          font-size: 48px;
        }

        @media screen and (max-width: 600px) {
          font-size: 40px;
        }
      }

      @media screen and (max-width: 1000px) {
        gap: 32px;
      }

      @media screen and (max-width: 650px) {
        gap: 16px;
      }
    }

    .right {
      display: flex;
      align-items: center;
      gap: 40px;

      .heart {
        @media screen and (max-width: 650px) {
          width: 26px;
        }
      }

      .bar {
        background-color: white;
        width: 240px;
        height: 32px;
        display: flex;
        align-items: center;
        padding: 0 11px;
        border-radius: 100px;

        &::after {
          background-color: rgb(var(--dark-navy));
          content: "";
          display: block;
          width: var(--health);
          height: 13px;
          border-radius: inherit;
          transition: width var(--duration);

          @media screen and (max-width: 650px) {
            height: 8px;
          }
        }

        @media screen and (max-width: 1000px) {
          width: 160px;
        }

        @media screen and (max-width: 650px) {
          width: 60px;
          height: 16px;
          padding: 0 4px;
        }
      }

      @media screen and (max-width: 650px) {
        gap: 16px;
      }
    }

    @media screen and (max-width: 1000px) {
      padding: 60px 44px;
    }

    @media screen and (max-width: 650px) {
      padding: 45px 25px;
    }
  }

  .letters {
    padding: 30px 115px;
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;

    .letter {
      --inner-shadow: rgb(var(--light-blue));
      --outer-shadow: rgb(var(--dark-blue));
      background: rgb(var(--blue));
      color: white;
      width: 115px;
      height: 130px;
      opacity: 0.25;
      display: grid;
      place-items: center;
      border-radius: 40px;
      font-size: 88px;
      transition: background-color var(--duration), opacity var(--duration);

      &.guessed {
        background-color: rgb(var(--blue));
        opacity: 1;
      }

      @media screen and (max-width: 1000px) {
        font-size: 64px;
        width: 90px;
        height: 115px;
        border-radius: 32px;
      }

      @media screen and (max-width: 700px) {
        font-size: 40px;
        width: 40px;
        height: 65px;
        border-radius: 12px;
      }
    }

    @media screen and (max-width: 1000px) {
      padding: 50px 44px;
      gap: 12px;
    }

    @media screen and (max-width: 700px) {
      gap: 8px;
    }
  }

  .keyboard {
    

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
    padding: 90px 135px;
  }

  .menu-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 34px;
  }
`;

export default SCGame;
