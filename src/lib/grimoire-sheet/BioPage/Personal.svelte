<script lang="ts">
	import Label from '$lib/Label.svelte';
	import LabeledInput from './LabeledInput.svelte';
</script>

<div class="personal">
	<Label element="h5" i18n="personal-information">Personal</Label>

	<div class="grid">
		<LabeledInput i18n="fears" name="Fears" />
		<LabeledInput i18n="ambition" name="Ambition" />
		<LabeledInput i18n="dream" name="Dream" />
		<LabeledInput i18n="philosophy" name="Philosophy" />
	</div>
</div>

<style lang="scss">
	.personal {
		padding: 10px;
	}

	.grid {
		display: grid;
		gap: 5px;
		grid-template-columns: 90px 1fr;
		grid-template-areas:
			'fears-label fears'
			'ambition-label ambition'
			'dream-label dream'
			'philosophy-label philosophy';
	}
</style>
