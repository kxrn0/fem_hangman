import { styled } from "solid-styled-components";

const SCDialog = styled("div")`
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  pointer-events: none;
  opacity: 0;
  transition: opacity var(--duration);

  &.open {
    opacity: 1;
  }

  .backdrop {
    background-color: #12436588;
    position: absolute;
    inset: 0;
    pointer-events: none;

    &.open {
      pointer-events: all;
    }
  }

  .content {
    --y: 100vh;
    transform: translate(0, calc(-1 * var(--y)));
    visibility: hidden;
    position: relative;

    &:not(.open).mounted {
      animation: dialog-exit calc(2 * var(--duration)) forwards;

      @keyframes dialog-exit {
        from {
          transform: translate(0, 0);
          visibility: visible;
        }

        to {
          transform: translate(0, var(--y));
          visibility: hidden;
        }
      }
    }

    &.open {
      animation: dialog-enter calc(2 * var(--duration)) forwards;

      @keyframes dialog-enter {
        from {
          transform: translate(0, calc(-1 * var(--y)));
          visibility: hidden;
        }

        to {
          transform: translate(0, 0);
          visibility: visible;
          pointer-events: all;
        }
      }
    }
  }
`;

export default SCDialog;
