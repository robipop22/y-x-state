import { useState, useEffect } from 'react';

import { Book } from '../interfaces/';

type ExpectedResponse = Book[];

type ExpectedState = Book[] | null;

interface useAsyncDataProps {
	fetchFn: (paramsOfFetch: any) => Promise<ExpectedResponse>;
	paramsOfFetch: any;
	loadOnMount?: boolean;
	clearDataOnLoad?: boolean;
}

const useAsyncData = ({ loadOnMount = false, clearDataOnLoad = false, fetchFn, paramsOfFetch }: useAsyncDataProps) => {
	const [data, setData] = useState<ExpectedState>(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const loadData = async () => {
		setIsLoading(true);
		setError(null);
		if (clearDataOnLoad === true) {
			setData(null);
		}

		try {
			const resp: any = await fetchFn(paramsOfFetch);
			if (!resp.error) {
				setData(resp);
			} else {
				setError(resp.error);
			}
			setIsLoading(false);
		} catch (e: any) {
			setError(e);
			setIsLoading(false);
		}
	};

	useEffect(() => {
		if (loadOnMount) {
			loadData();
		}
	}, []);

	// Return the state and the load function to the component
	return { data, isLoading, error, loadData };
};

export default useAsyncData;
