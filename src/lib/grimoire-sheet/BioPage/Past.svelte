<script lang="ts">
	import Label from '$lib/Label.svelte';
	import LabeledInput from './LabeledInput.svelte';
</script>

<div class="past">
	<Label element="h5">Past</Label>
	<div class="grid">
		<LabeledInput name="Hometown" />
		<LabeledInput name="Parents/Guardians" />
		<LabeledInput component="text-area" name="Notable events" />
	</div>
</div>

<style lang="scss">
	.past {
		padding: 10px;
	}

	.grid {
		display: grid;
		gap: 10px;
		grid-template-columns: 90px 1fr;
		grid-template-rows: repeat(4, auto) 120px;
		grid-template-areas:
			'hometown-label hometown'
			'parents-guardians-label parents-guardians-label'
			'parents-guardians parents-guardians'
			'notable-events-label notable-events-label'
			'notable-events notable-events';
	}
</style>
