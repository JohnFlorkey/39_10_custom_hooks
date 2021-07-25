import axios from 'axios';
import { useState } from 'react';
import uuid from "uuid";

function useFlip() {
	const [flipState, setFlipState] = useState(true)
	const flip = () => {
		setFlipState(oldFlipState => !oldFlipState);
	}

	return [flipState, flip];
}

function useAxios(url) {
	const [data, setData] = useState([]);
	const getData = async () => {
		const response = await axios.get(url);
		setData(oldData => ([...oldData, { ...response.data, id: uuid() }]));
	};
	return [data, getData];
}

export { useFlip, useAxios };