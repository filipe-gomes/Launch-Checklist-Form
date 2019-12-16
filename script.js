// Write your JavaScript code here!
window.addEventListener("load", function() {
   const launchForm = document.getElementById("launchForm");
   const requirements = document.getElementById("faultyItems")
   const pilotName = document.querySelector("input[name=pilotName]");
   const copilotName = document.querySelector("input[name=copilotName]");
   const fuelLevel = document.querySelector("input[name=fuelLevel]");
   const cargoMass = document.querySelector("input[name=cargoMass]");
   const pilotStatus = document.getElementById("pilotStatus");
   const copilotStatus = document.getElementById("copilotStatus");
   const fuelStatus = document.getElementById("fuelStatus");
   const cargoStatus = document.getElementById("cargoStatus");
   const launchStatus = document.getElementById("launchStatus");
   const missionTarget = document.getElementById("missionTarget");
   let planet = Math.floor((Math.random() * 10) % 6)
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(response => response.json().then(json =>
   missionTarget.innerHTML = `
   <h2>Mission Destination</h2>
   <ol>
      <li>Name: ${json[planet].name}</li>
      <li>Diameter: ${json[planet].diameter}</li>
      <li>Star: ${json[planet].star}</li>
      <li>Distance from Earth: ${json[planet].distance}</li>
      <li>Number of Moons: ${json[planet].moons}</li>
   </ol>
   <img src="${json[planet].image}">`
));
   launchForm.addEventListener("submit", function(event) {
      event.preventDefault()
      if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
         alert("All fields are required!")
         } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
         alert("Fuel Level and Cargo Mass values must be numbers")
         } else {
         requirements.style.visibility = "visible";
         pilotStatus.innerHTML = `Pilot ${pilotName.value} is Ready`;
         copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is Ready`;
         if (fuelLevel.value < 10000 || cargoMass.value > 10000) {
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
            if (fuelLevel.value < 10000) {
               fuelStatus.innerHTML = "Not enough fuel for a safe launch";
            } else {
               fuelStatus.innerHTML = "Fuel levels are safe for launch";
            }
            if (cargoMass.value > 10000) {
               cargoStatus.innerHTML = "Too much mass for the shuttle to take off";
            } else {
               cargoStatus.innerHTML = "Cargo mass safe for launch";
            }
         } else {
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";
            }
      }
   })
});
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
