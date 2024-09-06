<script lang="ts">
	const { data } = $props();

	$effect(() => {
		const getExtData = async () => {
			const res = await fetch('/api');
			const extData = (await res.json()) as {
				userTodos: {
					id: string | null;
					name: string;
					done: boolean;
				}[];
			};
			console.log('from page.svelte', extData);
		};
		getExtData();
	});
</script>

<h1>Welcome to SvelteKit</h1>

<a href="/sub">Sub Page Example</a>

<h3>Fake Layout Data</h3>
<p>{data.fakeLayoutData.toString()}</p>

<h3>Random Strings</h3>
{#await data.randomStrings}
	<p>LOADING STRINGS</p>
{:then randomStrings}
	<ul>
		{#each randomStrings as rStr}
			<li>{rStr}</li>
		{/each}
	</ul>
{/await}

<h3>Sample Todos</h3>
<ul>
	{#each data.sampleTodos as sTodo}
		<li>{sTodo.name} - {sTodo.done ? 'Completed' : 'Todo'}</li>
	{/each}
</ul>

<h3>Sample CSS Colors</h3>
<ul>
	{#each data.sampleCSSColors as sColor}
		<li style={`color: ${sColor.hex}`}>{sColor.name} - {sColor.hex}</li>
	{/each}
</ul>
