gsap.registerPlugin(ScrollTrigger);

gsap.to(".parent-three h1", {
  transform: "translate(-140%)",
  scrollTrigger: {
    trigger: ".parent-three ",
    scroller: "body",
    markers: true,
    start: "top 0%", // যখন trigger এর top, viewport এর 80% জায়গায় আসে
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});
