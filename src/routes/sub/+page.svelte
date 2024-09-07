<script lang="ts">
	const { data } = $props();
</script>

<h1>Sample sub page</h1>

<a href="/">Main Page Example</a>

<h3>Layout data</h3>

<p>{data.fakeLayoutData.toString()}</p>

<p>ARRAY LENGTH: {data.fakeLayoutDataLength}</p>
