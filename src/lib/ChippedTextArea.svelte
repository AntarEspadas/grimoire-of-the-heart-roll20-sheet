<script lang="ts">
	import { Textarea } from 'svelte-materialify';
	import ChippedDiv from './ChippedDiv.svelte';

	export let chipSize: number;
	export let h: string | undefined = undefined;
	export let w: string | undefined = undefined;

	export let bgColor = 'white';

	export let rows: number | undefined = undefined;

	export let name: string;
</script>

<ChippedDiv {chipSize} {h} {w} {bgColor}>
	<Textarea {name} noResize {rows} style="--height: calc({h} - 1px);" />
</ChippedDiv>

<style lang="sass">
	:global(.s-text-field__input textarea)
		height: var(--height)
		margin: 0
		line-height: 20px
</style>
