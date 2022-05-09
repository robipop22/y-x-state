import { createMachine, assign } from 'xstate';

import { getBooks } from '../../client';

import { BooksMachineContext, BooksMachineEvent } from './types';

const booksMachine = createMachine<BooksMachineContext, BooksMachineEvent>({
  id: 'books',
  initial: 'fetchingData',
  context: {
    books: [],
  },
  states: {
    fetchingData: {
      invoke: {
        src: getBooks,
        onDone: {
          target: 'idle',
          actions: assign({
            books: (_, event) => event.data,
          }),
        },
        onError: {
          target: 'failed',
        },
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
      on: { RESET: { target: 'fetchingData' } },
    },
  },
});
export default booksMachine;
