<script lang="ts">
	import ChippedTextArea from '$lib/ChippedTextArea.svelte';
	import Label from '$lib/Label.svelte';
</script>

<div class="notes">
	<Label i18n="notes" element="h5">Notes</Label>
	<ChippedTextArea chipSize={15} name="atr_notes" />
</div>

<style lang="sass">
	.notes
		height: 100%
		padding: 10px
		display: grid
		gap: 5px
		grid-template-rows: auto 1fr
</style>
