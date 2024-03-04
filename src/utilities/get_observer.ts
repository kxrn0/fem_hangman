export default function get_observer(
  element: HTMLElement,
  set_isVisible: (isVisible: boolean) => void,
  threshold: number,
  toggle: boolean
) {
  const observer = new IntersectionObserver(
    (entries) => {
      const target = entries[0];

      console.log({ target });
      console.log(target.isIntersecting);

      if (target.isIntersecting) set_isVisible(true);
      else if (toggle) set_isVisible(false);
    },
    { threshold }
  );

  observer.observe(element);

  return observer;
}
