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

function useAxios(baseUrl) {
	const [data, setData] = useState([]);

	const addData = async (additionalUrlPath="") => {
		console.log(additionalUrlPath);
		const completeUrl = additionalUrlPath ? `${baseUrl}${additionalUrlPath}` : baseUrl;
		console.log(completeUrl);
		const response = await axios.get(completeUrl);
		setData(data => ([...data, { ...response.data, id: uuid() }]));
	};

	return [data, addData];
}

export { useFlip, useAxios };