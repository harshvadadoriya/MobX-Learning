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

	return (
		<>
			<div>Count: {countStore.getCountValue}</div>
			<button onClick={onDecrement}>-</button>
			<button onClick={onIncrement}>+</button>
		</>
	);
});
