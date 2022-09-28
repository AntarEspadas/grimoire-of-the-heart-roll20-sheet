<script lang="ts">
	import { key } from './TabView.svelte';
	import type { Context } from './TabView.svelte';
	import { getContext } from 'svelte';
	import { Button } from 'svelte-materialify';

	export let style = '';

	export let toggleAttribute: string | undefined = undefined;

	const context = getContext<Context>(key);
	const index = context.getTabButtonIndex();
	const currentIndex = context.currentIndex;

	const type = 'action' as any;
</script>

{#if toggleAttribute}
	<input class="toggle-tab" type="hidden" name={toggleAttribute} value="0" />
{/if}

<span>
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
</span>

<style lang="sass">
	input.toggle-tab + *
		display: inline-flex

	input.toggle-tab[value='0'] + *
		display: none
</style>
