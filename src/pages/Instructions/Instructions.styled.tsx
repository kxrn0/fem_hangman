import { styled } from "solid-styled-components";

const SCInstructions = styled("div")`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  padding: 80px 115px;

  .head {
    --y: -25vh;
    --time-scale: 2;
  }

  .instructions {
    display: flex;
    gap: 32px;

    > * {
      &:first-child {
        .content {
          &.anime-exit {
            animation-delay: 0s;

            @media screen and (max-width: 1250px) {
              animation-delay: 0s;
            }
          }

          @media screen and (max-width: 1250px) {
            animation-delay: 0s;
          }
        }
      }

      &:nth-child(2) {
        .content {
          animation-delay: var(--duration);

          &.anime-exit {
            animation-delay: calc(var(--duration) * var(--time-scale) / 3);

            @media screen and (max-width: 1250px) {
              animation-delay: 0s;
            }
          }

          @media screen and (max-width: 1250px) {
            --x: 50vw;

            animation-delay: 0s;
          }
        }
      }

      &:last-child {
        .content {
          animation-delay: calc(2 * var(--duration));

          &.anime-exit {
            animation-delay: calc(2 * var(--duration) * var(--time-scale) / 3);

            @media screen and (max-width: 1250px) {
              animation-delay: 0s;
            }
          }

          @media screen and (max-width: 1250px) {
            animation-delay: 0s;
          }
        }
      }

      .content {
        --x: -50vw;
        --time-scale: 3;

        &.anime-exit {
          --time-scale: 2;

          animation-duration: calc(var(--duration) * var(--time-scale) / 3);

          @media screen and (max-width: 1250px) {
            animation-duration: calc(var(--duration) * var(--time-scale));
          }
        }
      }
    }

    @media screen and (max-width: 1250px) {
      flex-direction: column;
      gap: 24px;
    }
  }

  @media screen and (max-width: 1000px) {
    gap: 100px;
    padding: 60px 40px;
  }

  @media screen and (max-width: 600px) {
    gap: 80px;
    padding: 32px 26px;
  }
`;

export default SCInstructions;
