import React from "react";

const Day = (props: any) => {
	const date = () => {
		return "test";
	};
	const dateString = date();
	return (
		<main>
			<h1> {dateString}</h1>
			<p>Good morning! Here's your coding interview problem for today.</p>
			<p>This problem was asked by Amazon.</p>
			<p>Implement a bit array.</p>
			<p>
				A bit array is a space efficient array that holds a value of 1 or 0 at
				each index.
			</p>
			<p>init(size): initialize the array with size</p>
			<p>
				set(i, val): updates index at i with val where val is either 1 or 0.
			</p>
			<p>get(i): gets the value at index i.</p>
		</main>
	);
};

export default Day;
