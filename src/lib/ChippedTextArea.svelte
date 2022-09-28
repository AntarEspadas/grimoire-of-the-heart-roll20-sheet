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

	export let style = '';

	let className: string | undefined = undefined;
	export { className as class };

	let cssClass = 'chipped-textarea';
</script>

<ChippedDiv class="{cssClass} {className}" {chipSize} {w} {h} {bgColor} {style}>
	<!-- <Textarea {placeholder} {name} noResize={!resizable} {rows} style="--height: calc({h} - 1px);" /> -->
	<textarea
		{placeholder}
		{name}
		{rows}
		style="resize: {resizable ? 'both' : 'none'};"
		class="chipped-textarea"
	/>
</ChippedDiv>

<style lang="sass">

    textarea.chipped-textarea.chipped-textarea
        all: unset
        max-height: unset
        height: 100%
        width: 100%
        padding: 0
        -moz-appearance: textfield

    :global
        div.chipped-textarea
            position: relative
        div.chipped-textarea::after, div.chipped-textarea::before
            content: ""
            position: absolute
            width: 100%
            left: 0
            bottom: 0
            transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1)
        div.chipped-textarea::after
            transform: scaleX(0)
            border: 1px solid black
        div.chipped-textarea::before
            opacity: 0.3
            bottom: 0px
            border-style: solid
            border-color: black
            border-width: thin 0 0
        div.chipped-textarea:hover::before
            opacity: 1
        div.chipped-textarea:focus-within::after
            transform: scaleX(100%)
</style>
