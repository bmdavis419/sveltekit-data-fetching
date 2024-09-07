export const load = async ({ parent }) => {
	const { fakeLayoutData } = await parent();

	const fakeLayoutDataLength = fakeLayoutData.length;

	return { fakeLayoutDataLength };
};
