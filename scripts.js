// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function () {
  let takeoff = document.getElementById("takeoff");
  let flightStatus = document.getElementById("flightStatus");
  let shuttleBackground = document.getElementById("shuttleBackground");
  let shuttleHeight = document.getElementById("spaceShuttleHeight");
  let landing = document.getElementById("landing");
  let missionAbort = document.getElementById("missionAbort");
  let up = document.getElementById("up");
  let down = document.getElementById("down");
  let right = document.getElementById("right");
  let left = document.getElementById("left");
  let rocket = document.getElementById("rocket");
  rocket.style.position = "relative";

  takeoff.addEventListener("click", function () {
    let response = window.confirm(
      "Confirm that the shuttle is ready for takeoff."
    );
    if (response) {
      flightStatus.innerHTML = "Shuttle in flight.";
      shuttleBackground.style.backgroundColor = "blue";
      shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
    }
  });

  landing.addEventListener("click", function () {
    window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = "green";
    shuttleHeight.innerHTML = 0;
  });

  missionAbort.addEventListener("click", function () {
    let response = window.confirm(
      "Confirm that you want to abort the mission."
    );
    if (response) {
      flightStatus.innerHTML = "Mission aborted.";
      shuttleBackground.style.backgroundColor = "red";
      shuttleHeight.innerHTML = 0;
    }
  });

  up.addEventListener("click", function () {
    let position = rocket.style.top.slice(0, rocket.style.top.length - 2);
    rocket.style.top = Number(position) - 10 + "px";
  });

  down.addEventListener("click", function () {
    let position = rocket.style.top.slice(0, rocket.style.top.length - 2);
    rocket.style.top = Number(position) + 10 + "px";
  });

  right.addEventListener("click", function () {
    let position = rocket.style.left.slice(0, rocket.style.left.length - 2);
    rocket.style.left = Number(position) + 10 + "px";
  });

  left.addEventListener("click", function () {
    let position = rocket.style.left.slice(0, rocket.style.left.length - 2);
    rocket.style.left = Number(position) - 10 + "px";
  });
});
