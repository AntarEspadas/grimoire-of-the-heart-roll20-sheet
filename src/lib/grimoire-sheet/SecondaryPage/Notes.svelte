<script lang="ts">
	import ChippedTextArea from '$lib/ChippedTextArea.svelte';
	import Label from '$lib/Label.svelte';
</script>

<div class="notes">
	<Label i18n="notes" element="h1">Notes</Label>
	<ChippedTextArea name="atr_notes" />
</div>

<style lang="sass">
	.notes
		height: 100%
		padding: 10px
		display: grid
		gap: 5px
		grid-template-rows: auto 1fr

		:global(.chipped-textarea)
			--chip-size: 15px
</style>
