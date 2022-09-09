<script lang="ts">
	import { TextField } from 'svelte-materialify';
	import ChippedDiv from './ChippedDiv.svelte';
	import { Corner } from './ChippedDiv.svelte';

	export let chipSize: number;

	export let w: string | undefined = undefined;
	export let h: string | undefined = undefined;

	export let disabled = false;
	export let name: string;
	export let type = 'text';
	export let fontSize: string | undefined = undefined;
	export let placeholder: string | undefined = undefined;
	export let value: string = '';
	export let i18n: string | undefined = undefined;

	export let corner: Corner = Corner.topRight;

	let className: string | undefined = undefined;
	export { className as class };

	$: fontSizeStyle = fontSize ? `font-size: ${fontSize}` : undefined;

	$: cssClass = disabled ? '' : 'chipped-input ';
</script>

<ChippedDiv {w} h={h ?? '33.2px'} {chipSize} {corner} class="{cssClass}{className}">
	{#if disabled}
		<div style={fontSizeStyle}>
			<span {name} data-i18n={i18n}>
				{value ?? ''}
			</span>
		</div>
	{:else}
		<input
			data-i18n={i18n}
			{type}
			{name}
			{value}
			{disabled}
			{placeholder}
			style={fontSizeStyle}
			class="chipped-input"
		/>
	{/if}
</ChippedDiv>

<style lang="sass">
    div
        width: 100%
        height: 100%
        display: flex
        align-items: center
        justify-content: center

    input.chipped-input.chipped-input
        all: unset
        text-align: center
        max-height: unset
        height: 100%
        width: 100%
        padding: 0
        -moz-appearance: textfield

    :global
        div.chipped-input
            position: relative
        div.chipped-input::after, div.chipped-input::before
            content: ""
            position: absolute
            width: 100%
            left: 0
            bottom: 0
            transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1)
        div.chipped-input::after
            transform: scaleX(0)
            border: 1px solid black
        div.chipped-input::before
            opacity: 0.3
            bottom: 0px
            border-style: solid
            border-color: black
            border-width: thin 0 0
        div.chipped-input:hover::before
            opacity: 1
        div.chipped-input:focus-within::after
            transform: scaleX(100%)

    // :global(.chipped-text-field)
    // 	height: 100%
    // :global(.chipped-text-field.chipped-text-field.chipped-text-field input)
    // 	text-align: center
    // 	max-height: unset
    // 	width: 100%
    // 	height: 100%
    // 	padding: 0
    // 	-moz-appearance: textfield

    :global(.chipped-text-field.chipped-text-field.chipped-text-field input::-webkit-outer-spin-button)
        margin: 0
        -webkit-appearance: none

    :global(input::-webkit-outer-spin-button, input::-webkit-inner-spin-button)
        -webkit-appearance: none
        margin: 0

    // :global(.chipped-text-field .s-input__control)
    // 	height: calc( 100% - 0.5px )
    // :global(.chipped-text-field .s-input__slot)
    // 	margin: 0
    // :global(.chipped-text-field .s-text-field__wrapper)
    // 	height: 100%
    // :global(.chipped-text-field .s-text-field__input)
    // 	height: 100%
</style>
