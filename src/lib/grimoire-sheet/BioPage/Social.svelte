<script lang="ts">
	import Label from '$lib/Label.svelte';
	import LabeledInput from './LabeledInput.svelte';
</script>

<div class="social">
	<Label element="h5">Social</Label>

	<div class="grid">
		<LabeledInput name="relationship" />
		<LabeledInput name="languages" />
		<LabeledInput name="allies" />
		<LabeledInput name="rivals" />
		<LabeledInput name="fame" />
	</div>
</div>

<style lang="scss">
	.social {
		padding: 10px;
	}

	.grid {
		display: grid;
		gap: 5px;
		grid-template-columns: 90px 1fr;
		grid-template-areas:
			'relationship-label relationship'
			'languages-label languages'
			'allies-label allies'
			'rivals-label rivals'
			'fame-label fame';
	}
</style>
