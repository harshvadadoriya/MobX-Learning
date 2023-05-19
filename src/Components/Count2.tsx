import { useStore } from '../Hooks/useStore';
import { observer } from 'mobx-react-lite';

export const Count2 = observer(() => {
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
			<div>Count: {countStore.getCountValue}</div>
			<button onClick={onDecrement}>-</button>
			<button onClick={onIncrement}>+</button>
		</>
	);
});
