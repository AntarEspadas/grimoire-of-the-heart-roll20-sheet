<script lang="ts">
	import { key } from './TabView.svelte';
	import type { Context } from './TabView.svelte';
	import { getContext } from 'svelte';
	import { Button } from 'svelte-materialify';

	export let style = '';

	const context = getContext<Context>(key);
	const index = context.getTabButtonIndex();
	const currentIndex = context.currentIndex;

	const type = 'action' as any;
</script>

<Button
	on:click={() => currentIndex.set(String(index))}
	{type}
	filled
	rounded
	name="act_tabs_switch_button"
	value={index}
	{style}
>
	<slot />
</Button>
