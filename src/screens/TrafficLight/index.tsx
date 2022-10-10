import { useState } from 'react';
import TrafficLight from 'react-trafficlight';

const TrafficLightsScreen = () => {
	const [trafficLight, setTrafficLight] = useState('green');

	const handleTrafficLightChange = () => {
		switch (trafficLight) {
			case 'green':
				setTrafficLight('yellow');
				break;
			case 'yellow':
				setTrafficLight('red');
				break;
			case 'red':
				setTrafficLight('green');
				break;

			default:
				break;
		}
	};

	return (
		<div className="flex flex-col items-center justify-center w-full mt-20">
			<TrafficLight
				RedOn={trafficLight === 'red'}
				YellowOn={trafficLight === 'yellow'}
				GreenOn={trafficLight === 'green'}
			/>

			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
				onClick={handleTrafficLightChange}>
				Next Light
			</button>
		</div>
	);
};

export default TrafficLightsScreen;
