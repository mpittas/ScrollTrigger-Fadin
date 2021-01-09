//Register the plugin
gsap.registerPlugin(ScrollTrigger);

// Create the trigger
gsap.to('.text__inner', {
  scrollTrigger: {
    trigger: '.text__inner',
    // Remove markers (labels) from below
    markers: true,
    // Define start and end points
    start: '0 100%',
    end: '20% top',
    scrub: true
  },
  yoyo: true,
  repeat: 1,
  // This is the important part 
  // Animate CSS property
  backgroundImage: "linear-gradient(180deg, rgba(255, 255, 255, 1) 100%, rgba(240, 240, 240, 0) 200%)",
});