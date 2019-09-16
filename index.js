window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#d3d160",
    "#0092f3",
    "#ff0062"
  ];

  //lets get going with the sound
  pads.forEach((pad, index) => {
    pad.addEventListener("click", function() {
      // reseting the time of track on click so it plays instantly, otherwise track has to finish first
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubbles(index);
    });
  });

  //create a function that makes bubbles
  const createBubbles = index => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    //removing the bubble once its made to avoid adding of unlimited bubbles to DOM
    bubble.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
