<script lang="ts">
	import Label from '$lib/Label.svelte';
	import LabeledInput from './LabeledInput.svelte';
</script>

<div class="preferences">
	<Label element="h5">Preferences</Label>

	<div class="grid">
		<LabeledInput name="Food" />
		<LabeledInput name="Music" />
		<LabeledInput name="Television" />
		<LabeledInput name="Literature" />
	</div>
</div>

<style lang="scss">
	.preferences {
		padding: 10px;
	}

	.grid {
		display: grid;
		gap: 5px;
		grid-template-columns: 80px 1fr;
		grid-template-areas:
			'food-label food'
			'music-label music'
			'television-label television'
			'literature-label literature';
	}
</style>
