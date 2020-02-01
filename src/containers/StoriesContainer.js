import React, { useEffect, useState } from 'react';
import { getStoryIds } from '../services/hnApi';

export const StoriesContainer = () => {
	const [storyIds, setStoryIds] = useState([]);

	useEffect(() => {
		getStoryIds().then(data => setStoryIds(data));
	}, []);

	return <p>{JSON.stringify(storyIds)}</p>;
};
