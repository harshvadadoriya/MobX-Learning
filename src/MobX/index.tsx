import { createContext } from 'react';
import { RootStore } from './store/RootStore';

export const rootStoreContext = createContext({
	RootStore: new RootStore(),
});
