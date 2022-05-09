import { createMachine } from 'xstate';

import { TrafficLightsEvent } from './types';

const lightTrafficMachine = createMachine<{}, TrafficLightsEvent>({
  id: 'trafficLights',
  initial: 'red',
  states: {
    red: {
      on: { NEXT: 'redyellow' },
    },
    redyellow: {
      on: { NEXT: 'green' },
    },
    green: {
      on: { NEXT: 'yellow' },
    },
    yellow: {
      on: { NEXT: 'red' },
    },
  },
});

export default lightTrafficMachine;
