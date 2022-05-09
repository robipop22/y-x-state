import { Book } from '../../interfaces';

export interface BooksMachineContext {
  books: Book[];
}

export type BooksMachineEvent = { type: 'FETCH_BOOKS' } | { type: 'RESET' };
