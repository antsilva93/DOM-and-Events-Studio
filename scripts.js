// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {
    let takeoff = document.getElementById("takeoff");
    let flightStatus = document.getElementById("flightStatus");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let landing = document.getElementById("landing");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let abort = document.getElementById("missionAbort");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let left = document.getElementById("left");
    let right = document.getElementById("right");
    let rocket = document.getElementById("rocket");
    let rocketPosX = 0;
    let rocketPosY = 0;
    let backgroundWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'));

    takeoff.addEventListener("click", function () {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            flightStatus.innerHTML = "Shuttle in Flight.";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = 10000;
        }
    });

    landing.addEventListener("click", function () {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = 0;
        rocketPosX = 0;
        rocket.style.marginLeft = rocketPosX + 'px';
        rocketPosY = 0;
        rocket.style.marginBottom = rocketPosY + 'px';
    });

    abort.addEventListener("click", function () {
        let response = window.confirm("Cofirm that you want to abort the mission");
        if (response) {
            flightStatus.innerHTML = "Mission Aborted";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
            rocketPosX = 0;
            rocket.style.marginLeft = rocketPosX + 'px';
            rocketPosY = 0;
            rocket.style.marginBottom = rocketPosY + 'px';
        }
    });

    up.addEventListener("click", function () {
        if (parseInt(shuttleHeight.innerHTML) < 250000) {
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + parseInt(10000);
        rocketPosY += 10;
        rocket.style.marginBottom = rocketPosY + 'px';
        }
    });

    down.addEventListener("click", function () {
        if (parseInt(shuttleHeight.innerHTML) <= 0) {
            window.alert("The shuttle is already on the ground!")
        } else {
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - parseInt(10000);
            rocketPosY -= 10;
            rocket.style.marginBottom = rocketPosY + 'px';
        }
    });

    left.addEventListener("click", function () {
        if (rocketPosX > -(backgroundWidth / 2 - 40)) {
        rocketPosX -= 10;
        rocket.style.marginLeft = rocketPosX + 'px';
        }
    });

    right.addEventListener("click", function () {
        if (rocketPosX < (backgroundWidth / 2 - 40)) {
        rocketPosX += 10;
        rocket.style.marginLeft = rocketPosX + 'px';
        }
    });

});