import { styled } from "solid-styled-components";

const SCApp = styled("div")`
  --dark-navy: 38, 22, 118;
  --blue: 36, 98, 255;
  --dark-blue: 20, 14, 102;
  --light-blue: 60, 116, 255;
  --lighter-blue: 91, 138, 255;
  /* --very-light-blue: 113, 153, 255; */
  --pink: 254, 113, 254;
  --dark-pink: 198, 66, 251;
  --duration: 0.33s;

  .background {
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
    }
  }

  .fam-mouse {
    font-family: mouse;
  }

  .fam-nip {
    font-family: nip;
  }

  .fs-xl {
    font-size: 136px;
  }

  .fs-l {
    font-size: 88px;
  }

  .fs-m {
    font-size: 48px;
  }

  .fs-s {
    font-size: 32px;
  }

  .fs-body {
    font-size: 26px;
  }

  .bordered {
    --inner-shadow: red;
    --outer-shadow: green;
    box-shadow: inset 0 -2px 0 3px var(--outer-shadow),
      inset 0 1px 0 6px var(--inner-shadow);
  }

  .button-one,
  .button-two {
    --bg: red;
    --bg-hover: pink;
    background: var(--bg);
    color: white;
    padding: 12px 64px;
    border-radius: 40px;
    border: none;
    transition: background-color var(--duration);
    text-decoration: none;

    @media (hover: hover) {
      &:hover {
        background: var(--bg-hover);
      }
    }
  }

  .button-one {
    --bg: rgb(var(--blue));
    --bg-hover: rgb(var(--lighter-blue));
    --inner-shadow: rgb(var(--light-blue));
    --outer-shadow: rgb(var(--dark-blue));
  }

  .button-two {
    --bg: rgb(var(--pink));
    --bg-hover: rgb(229, 155, 254);
    --inner-shadow: rgb(var(--dark-pink));
    --outer-shadow: rgb(var(--dark-blue));
  }

  .playable-letter {
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
    }

    @media screen and (max-width: 700px) {
      font-size: 40px;
      width: 40px;
      height: 65px;
    }
  }

  .keyboard-letter {
    background: white;
    color: rgb(var(--dark-navy));
    width: 75px;
    height: 85px;
    font-size: 48px;
    border-radius: 24px;
    border: none;
    transition: opacity var(--duration), background-color var(--duration),
      color var(--duration);

    &:disabled {
      opacity: 0.25;
    }

    @media (hover: hover) {
      &:not(:disabled):hover {
        background: rgb(var(--blue));
        color: white;
      }
    }
  }
`;

export default SCApp;
