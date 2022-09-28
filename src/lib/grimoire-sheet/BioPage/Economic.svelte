<script lang="ts">
	import Label from '$lib/Label.svelte';
	import LabeledInput from './LabeledInput.svelte';
</script>

<div class="economic">
	<Label element="h5">Economic</Label>

	<div class="grid">
		<LabeledInput name="Financial situation" />
		<LabeledInput name="housing" />
	</div>
</div>

<style lang="scss">
	.economic {
		padding: 10px;
	}

	.grid {
		display: grid;
		gap: 5px;
		grid-template-columns: 80px 2fr;
		grid-template-areas:
			'financial-situation-label financial-situation'
			'housing-label housing';
	}
</style>
