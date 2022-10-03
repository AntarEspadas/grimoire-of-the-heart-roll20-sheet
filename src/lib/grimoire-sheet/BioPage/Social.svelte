<script lang="ts">
	import Label from '$lib/Label.svelte';
	import LabeledInput from '../../LabeledInput.svelte';
</script>

<div class="social">
	<Label element="h5" i18n="social">Social</Label>

	<div class="grid">
		<LabeledInput i18n="relationship" name="relationship" />
		<LabeledInput i18n="languages" name="languages" />
		<LabeledInput i18n="aliases" name="allies" />
		<LabeledInput i18n="rivals" name="rivals" />
		<LabeledInput i18n="fame" name="fame" />
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
