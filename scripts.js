// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener('load',function(){
    let takeOffBtn = document.getElementById("takeoff");
    takeOffBtn.addEventListener("click",function(){
       let isReady =   window.confirm("Confirm that the shuttle is ready for takeoff.");

       if(isReady){

        let flightStatus = document.getElementById("flightStatus");
        flightStatus.innerText = "Shuttle in flight.";

         let shuttleFligh = document.getElementById("shuttleBackground");
         shuttleFligh.setAttribute("style", "background-color: blue");

         let shuttleHeight = document.getElementById("spaceShuttleHeight");
         shuttleHeight.innerText = "10000";
       }
    });

    let landingBtn = document.getElementById("landing");
    landingBtn.addEventListener("click",function(){
        window.alert("The shuttle is landing. Landing gear engaged.")

        let flightStatus = document.getElementById("flightStatus");
        flightStatus.innerText = "The shuttle has landed.";

        let shuttleFligh = document.getElementById("shuttleBackground");
        shuttleFligh.setAttribute("style", "background-color: green");


        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        shuttleHeight.innerText = "0";
    });


    let missionAbortBtn = document.getElementById("missionAbort");
     missionAbortBtn.addEventListener("click", function () {
       window.alert("Confirm that you want to abort the mission.");

       let flightStatus = document.getElementById("flightStatus");
       flightStatus.innerText = "Mission aborted.";

       let shuttleFligh = document.getElementById("shuttleBackground");
       shuttleFligh.setAttribute("style", "background-color: green");

       let shuttleHeight = document.getElementById("spaceShuttleHeight");
       shuttleHeight.innerText = "0";
     });


     let top = 0;
     let down = 0;
     let left = 0;
     let right = 0;

     let upBtn = document.getElementById("up");
     upBtn.addEventListener("click",function(){
     let shuttleHeight = document.getElementById("spaceShuttleHeight");  
     let shuttleHeightAmount = Number(shuttleHeight.innerText); 
     shuttleHeightAmount+=10000
     shuttleHeight.innerText = shuttleHeightAmount;

     top-= 10;
     if( top < 0){
         top = 0
     }
     document.getElementById("rocket").style.top = (top-10) + "px"


     });



      let downBtn = document.getElementById("down");
      downBtn.addEventListener("click", function () {
        let shuttleHeight = document.getElementById("spaceShuttleHeight");
        let shuttleHeightAmount = Number(shuttleHeight.innerText);
        shuttleHeightAmount -= 10000;
        shuttleHeight.innerText = shuttleHeightAmount;

        let heightOfBox = shuttleBackground.offsetHeight -75;
        if(heightOfBox < top){
            top = heightOfBox;
        }

         top += 10;
         document.getElementById("rocket").style.top = (top - 10) + "px";
      });



      let leftBtn = document.getElementById("left");
      leftBtn.addEventListener("click", function () {
        left -= 10;
        if(left < 10){
            left = 0;
        }
        document.getElementById("rocket").style.left = (left - 10) + "px";
      });

       let rightBtn = document.getElementById("right");
       rightBtn.addEventListener("click", function () {
        left += 10;

          let widthOfOfBox = shuttleBackground.offsetWidth - 75;
          if (widthOfOfBox < left) {
            top = widthOfOfBox;
          }

         
         document.getElementById("rocket").style.left = (left - 10) + "px";
       });


})
