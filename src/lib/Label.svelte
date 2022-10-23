<script lang="ts">
	export let style: string | undefined = undefined;

	export let element = 'p';

	export let i18n: string | null;
	export let i18nVars: string | undefined = undefined;

	let className = '';

	export { className as class };
</script>

<div {style} class="label {className}">
	<svelte:element this={element} data-i18n={i18n} data-i18n-vars={i18nVars}>
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

	div > *
		color: white
		font-weight: 900
		margin: 0
</style>
