import { useStore } from '../Hooks/useStore';
import { observer } from 'mobx-react-lite';

export const Count = observer(() => {
	const {
		RootStore: { countStore },
	} = useStore();

	const onIncrement = () => {
		countStore.increment();
	};
	const onDecrement = () => {
		countStore.decrement();
	};

	console.log('Rendering Count component...');

	return (
		<>
			{/* <div>Count: {countStore.getCountValue}</div>
			<button onClick={onDecrement}>-</button>
			<button onClick={onIncrement}>+</button> */}
			<CountDisplay />
			<CountButton />
		</>
	);
});

// {countStore.count} -> The component will display the count value directly. However, the Count component will be re-rendered every time the count state changes, and the log statement Rendering Count component... will be printed to the console.
// {countStore.getCountValue} -> The component will still display the count value derived from 'count', but it will be accessed through the computed property. The computed property will only be re-evaluated when its dependencies (count) change. In this case, it will print the log statement Computing derived value... only when count changes, and not on every render of the Count component. MobX's dependency tracking ensures that only components relying on getCountValue are re-rendered when count changes.

export const CountDisplay = observer(() => {
	const {
		RootStore: { countStore },
	} = useStore();

	return <div>Count: {countStore.getCountValue}</div>;
});

export const CountButton = observer(() => {
	const {
		RootStore: { countStore },
	} = useStore();

	const onIncrement = () => {
		countStore.increment();
	};

	const onDecrement = () => {
		countStore.decrement();
	};

	return (
		<>
			<div>Count: {countStore.count}</div>
			<button onClick={onDecrement}>-</button>
			<button onClick={onIncrement}>+</button>
		</>
	);
});
