<script lang="ts">
	import { TextField } from 'svelte-materialify';
	import ChippedDiv from './ChippedDiv.svelte';
	import { Corner } from './ChippedDiv.svelte';

	export let chipSize: number;

	export let w: string | undefined = undefined;
	export let h: string | undefined = undefined;
	export let bgColor = 'white';

	export let disabled = false;
	export let value: string | undefined = undefined;
	export let name: string;
	export let type = 'text';
	export let fontSize: string | undefined = undefined;

	export let corner = Corner.topRight;
</script>

<ChippedDiv {w} h={h ?? '33.2px'} {bgColor} {chipSize} {corner}>
	<TextField
		{name}
		{type}
		{value}
		{disabled}
		class="chipped-text-field"
		style="font-size: {fontSize}"
	/>
</ChippedDiv>

<style lang="sass">
	:global(.chipped-text-field)
		height: 100%
	:global(.chipped-text-field.chipped-text-field.chipped-text-field input)
		text-align: center
		max-height: unset
		width: 100%
		height: 100%
		padding: 0
		-moz-appearance: textfield

	:global(.chipped-text-field.chipped-text-field.chipped-text-field input::-webkit-outer-spin-button)
		margin: 0
		-webkit-appearance: none

	:global(input::-webkit-outer-spin-button, input::-webkit-inner-spin-button)
		-webkit-appearance: none
		margin: 0

	:global(.chipped-text-field .s-input__control)
		height: calc( 100% - 0.5px )
	:global(.chipped-text-field .s-input__slot)
		margin: 0
	:global(.chipped-text-field .s-text-field__wrapper)
		height: 100%
	:global(.chipped-text-field .s-text-field__input)
		height: 100%
</style>
