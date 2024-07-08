import React, { useState } from "react";

//create your first component
const TrafficLight = () => {
	//create a state for the selected color
	const [selectedColor, setSelectedColor] = useState("");

	//function to select the traffic light color
	function isSelected(color) {
		let lights = document.querySelectorAll(".light");
		lights.forEach(light => {
			light.classList.remove("selected");
			light.classList.remove("opacity-100");
		});
		if (selectedColor === color) {
			setSelectedColor("");
		} else {
			setSelectedColor(color);
		}
	}

	function randomLight() {
		let lights = document.querySelectorAll(".light");
		lights.forEach(light => {
			light.classList.remove("selected");
			light.classList.remove("opacity-100");
			// lights.classList.add("opacity-75");
		});

		let random = Math.floor(Math.random() * lights.length);
		lights[random].classList.add("selected");
	}

	// change the color every 5s w/ interval
	setInterval(() => {
		randomLight();
	}, 5000);

	/* 	function purpleLight() {
			let trafficlight = document.getElementById("traffic-light");
			console.log(trafficlight);
	
			if (trafficlight.childElementCount >= 4) {
				alert("You already have this light.");
				return;
			}
	
			let purpleLightDOM = document.createElement("div");
			purpleLightDOM.classList.add(`"light", "purple", ${selectedColor === "yellow" ? "selected" : ""}`);
	
			trafficlight.appendChild(purpleLightDOM);
		}
	 */



	return (
		<div className="container d-flex align-items-center flex-column">
			<div id="traffic-light" className="border-2 bg-black p-4 rounded-3 gap-3 d-flex flex-column ">
				<div
					className={`light green ${selectedColor === "green" ? "selected" : ""}`}
					onClick={() => isSelected("green")}
				>
				</div>
				<div
					className={`light yellow ${selectedColor === "yellow" ? "selected" : ""}`}
					onClick={() => isSelected("yellow")}
				>
				</div>
				<div
					className={`light red ${selectedColor === "red" ? "selected" : ""}`}
					onClick={() => isSelected("red")}
				>
				</div>
			</div>

			<button className="btn btn-dark my-2" onClick={randomLight}>Random</button>
		</div>
		// <button className="btn btn-dark my-2" onClick={purpleLight}>Add ?????? light</button> 
	);
};

export default TrafficLight;
