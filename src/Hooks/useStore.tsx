import { useContext } from 'react';
import { rootStoreContext } from '../MobX';
import { enableLogging } from 'mobx-logger';

const environment = import.meta.env;

if (environment.MODE === 'development') {
	enableLogging();
}

export const useStore = () => useContext(rootStoreContext);
