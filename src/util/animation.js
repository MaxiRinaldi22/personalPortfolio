import ScrollReveal from "scrollreveal";

export default function animation() {
  ScrollReveal().reveal(".left-animation", {
    origin: "left",
    distance: "80%",
    duration: 1000,
    delay: 200,
  });

  ScrollReveal().reveal(".right-animation", {
    origin: "right",
    distance: "80%",
    duration: 1500,
    delay: 200,
  });
  ScrollReveal().reveal(".top-animation", {
    origin: "top",
    distance: "150%",
    duration: 1500,
    delay: 100,
  });

  ScrollReveal().reveal(".bottom-animation", {
    origin: "bottom",
    distance: "150%",
    duration: 1500,
    delay: 200,
  });
}
