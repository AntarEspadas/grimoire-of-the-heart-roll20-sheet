<script lang="ts">
	export let color = 'white';
	export let margin = '0';
	export let fontWeight = '900';

	export let offset = '';

	export let style = '';

	export let element = 'p';

	export let i18n: string | null;
	export let i18nVars: string | undefined = undefined;

	let className = '';

	export { className as class };

	$: transform = offset ? `transform: translateX(${offset});` : '';
</script>

<div {style} class="label {className}">
	<svelte:element
		this={element}
		data-i18n={i18n}
		data-i18n-vars={i18nVars}
		style="color: {color}; font-weight: {fontWeight}; margin: {margin}; {transform}"
	>
		<slot />
	</svelte:element>
</div>

<style lang="sass">
	div
		width: 100%
		height: 100%
		padding: 2px
		display: flex
		align-items: center
		align-items: center
		justify-content: start
</style>
