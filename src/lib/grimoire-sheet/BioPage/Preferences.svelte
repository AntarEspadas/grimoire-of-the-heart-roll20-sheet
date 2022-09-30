<script lang="ts">
	import Label from '$lib/Label.svelte';
	import LabeledInput from './LabeledInput.svelte';
</script>

<div class="preferences">
	<Label element="h5" i18n="preferences">Preferences</Label>

	<div class="grid">
		<LabeledInput i18n="food" name="Food" />
		<LabeledInput i18n="music" name="Music" />
		<LabeledInput i18n="television" name="Television" />
		<LabeledInput i18n="literature" name="Literature" />
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
