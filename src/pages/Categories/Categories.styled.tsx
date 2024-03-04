import { styled } from "solid-styled-components";

const SCCategories = styled("div")`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 155px;
  padding: 80px 115px;

  .head {
    --y: -25vh;
    --time-scale: 2;
  }

  .categories {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 32px;
    row-gap: 50px;

    .category {
      &:nth-child(even) {
        .category-button {
          @media screen and (max-width: 1250px) {
            --x: 50vw;
          }
        }
      }

      .category-button {
        --time-scale: 2;
        --x: -25vw;

        animation-delay: calc(var(--duration) * var(--index));

        &.anime-exit {
          animation-duration: calc(var(--duration) / 3);
          animation-delay: calc(var(--index) * var(--duration) / 3);
        }

        @media screen and (max-width: 1250px) {
          animation-delay: 0s;
        }
      }
    }

    @media screen and (max-width: 1250px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      column-gap: 32px;
      row-gap: 32px;
    }

    @media screen and (max-width: 700px) {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }

  @media screen and (max-width: 1000px) {
    padding: 60px 40px;
    gap: 100px;
  }

  @media screen and (max-width: 600px) {
    padding: 32px 26px;
    gap: 80px;
  }
`;

export default SCCategories;
