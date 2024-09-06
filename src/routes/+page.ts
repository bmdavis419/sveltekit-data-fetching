export const load = async ({ fetch, data }) => {
	const res = await fetch('https://api.sampleapis.com/csscolornames/colors');
	const extData = (await res.json()) as {
		id: number;
		name: string;
		hex: string;
	}[];
	const randomStrings = data.randomStrings;
	const sampleTodos = data.userTodos;
	return { sampleCSSColors: extData, sampleTodos, randomStrings };
};
