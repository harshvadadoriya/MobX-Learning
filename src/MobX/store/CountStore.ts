import { action, computed, makeObservable, observable } from 'mobx';
import { IRootStore } from './RootStore';

export class CountStore {
	count = 1;
	rootStore: IRootStore;

	constructor(rootStore: IRootStore) {
		makeObservable(this, {
			count: observable,
			increment: action,
			decrement: action,
			getCountValue: computed,
		});
		this.rootStore = rootStore;
	}
	increment = () => {
		this.count++;
	};
	decrement = () => {
		this.count--;
	};

	get getCountValue() {
		console.log('Computing derived value...');
		return this.count * 2;
	}
}
