import { useMachine } from '@xstate/react';
import TrafficLight from 'react-trafficlight';

import trafficLightMachine from '../../machines/trafficLight';

const TrafficLightsScreen = () => {
	const [current, send] = useMachine(trafficLightMachine);

	return (
		<div className="flex flex-col items-center justify-center w-full mt-20">
			<TrafficLight
				RedOn={current.value === 'red' || current.value === 'redyellow'}
				YellowOn={current.value === 'yellow' || current.value === 'redyellow'}
				GreenOn={current.value === 'green'}
			/>

			<button
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
				onClick={() => send('NEXT')}>
				Next Light
			</button>
		</div>
	);
};

export default TrafficLightsScreen;
