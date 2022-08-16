<script context="module" lang="ts" sheetworker>
	import '../lib/Tabs/TabsWorker';
</script>

<script>
	import { MaterialApp } from 'svelte-materialify';
	import { Tab, TabButton, TabView } from '$lib/Tabs';
	import Page1 from '$lib/grimoire-sheet/Page1/Page1.svelte';
	import Page2 from '$lib/grimoire-sheet/Page2/Page2.svelte';
</script>

<div>
	<MaterialApp>
		<TabView>
			<TabButton>Page 1</TabButton>
			<TabButton>Page 2</TabButton>
			<TabButton>Page 3</TabButton>
			<TabButton>Page 3</TabButton>

			<Tab>
				<Page1 />
			</Tab>
			<Tab>
				<Page2 />
			</Tab>
		</TabView>
	</MaterialApp>
</div>

<style lang="sass">

	// div
	// 	min-width: 340px

	// @media (min-width: 600px)
	// 	div
	// 		width: 850px

	// :global(.charactersheet div.repitem .itemcontrol)
	// 	z-index: 10

</style>
