import { For } from "solid-js";
import { usePageContext, pages } from "../../context/Page.tsx";
import iconBack from "../../assets/images/icon-back.svg";
import Sink from "../../components/Sink/Sink.tsx";
import Category from "./Category/Category.tsx";
import SCCategories from "./Categories.styled.tsx";

export default function Categories() {
  const [, pageObj] = usePageContext();
  const isCurrent = () => pages.categories.name === pageObj.page().name;
  const cats = [
    { name: "世界の国々", param: "countries" },
    { name: "歴史", param: "history" },
    { name: "医学", param: "medicine" },
    { name: "地理学", param: "geography" },
    { name: "漫画", param: "manga" },
    { name: "化学", param: "chemistry" },
  ];

  return (
    <SCCategories>
      <div class="head anime-enter" classList={{ "anime-exit": !isCurrent() }}>
        <Sink page={pages.start}>
          <div class="nav-button">
            <img src={iconBack} alt="back" />
            <div class="screen"></div>
            <div class="borders"></div>
          </div>
        </Sink>
        <div class="gradient-text fam-mouse fs-xl">
          <p class="shadow" aria-hidden="true">
            Pick a Category
          </p>
          <p class="text">Pick a Category</p>
        </div>
      </div>
      <div class="categories">
        <For each={cats}>
          {(cat, index) => <Category {...cat} index={`${index()}`} />}
        </For>
      </div>
    </SCCategories>
  );
}
