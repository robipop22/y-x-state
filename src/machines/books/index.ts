import { createMachine, assign } from 'xstate';

import { getBooks } from '../../client';

import { BooksMachineContext, BooksMachineEvent } from './types';

const booksMachine = createMachine<BooksMachineContext, BooksMachineEvent>({
	context: { books: [] },
	id: 'books',
	initial: 'fetchingData',
	states: {
		fetchingData: {
			invoke: {
				src: getBooks,
				onDone: [
					{
						actions: assign({
							books: (_, event) => event.data,
						}),
						target: 'idle',
					},
				],
				onError: [
					{
						target: 'failed',
					},
				],
			},
		},
		idle: {
			on: {
				FETCH_BOOKS: {
					target: 'fetchingData',
				},
			},
		},
		failed: {
			on: {
				RESET: {
					target: 'fetchingData',
				},
			},
		},
	},
});
export default booksMachine;
