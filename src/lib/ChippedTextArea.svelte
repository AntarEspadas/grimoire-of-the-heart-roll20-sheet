<script lang="ts">
	import { Textarea } from 'svelte-materialify';
	import ChippedDiv from './ChippedDiv.svelte';

	export let chipSize: number;
	export let h: string | undefined = undefined;
	export let w: string | undefined = undefined;

	export let bgColor = 'white';

	export let rows: number | undefined = undefined;

	export let name: string;
	export let placeholder: string | undefined = undefined;

	export let resizable = false;

	let className: string | undefined = undefined;
	export { className as class };
</script>

<ChippedDiv class={className} {chipSize} {w} {h} {bgColor}>
	<Textarea {placeholder} {name} noResize={!resizable} {rows} style="--height: calc({h} - 1px);" />
</ChippedDiv>

<style lang="sass">
	:global(.s-text-field__input textarea)
		height: var(--height)
		margin: 0
		line-height: 20px

	:global(div.s-input__slot)
		margin: 0
</style>
