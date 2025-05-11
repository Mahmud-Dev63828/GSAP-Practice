gsap.registerPlugin(ScrollTrigger);

gsap.to(".parent-three h1", {
  transform: "translate(-140%)",
  scrollTrigger: {
    trigger: ".parent-three h1",
    scroller: "body",
    markers: true,
  },
});
