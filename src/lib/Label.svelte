<script lang="ts">
	export let justify = 'start';
	export let color = 'white';
	export let margin = '0';
	export let fontWeight = '900';

	export let offset = '';

	export let style = '';

	export let element = 'p';

	export let i18n: string | undefined = undefined;

	$: transform = offset ? `transform: translateX(${offset});` : '';
</script>

<div
	style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: {justify}; {style}"
>
	<svelte:element
		this={element}
		data-i18n={i18n}
		style="color: {color}; font-weight: {fontWeight}; margin: {margin}; {transform}"
	>
		<slot />
	</svelte:element>
</div>
