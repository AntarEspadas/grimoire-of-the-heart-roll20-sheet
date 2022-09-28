<script lang="ts">
	import Label from '$lib/Label.svelte';
	import LabeledInput from './LabeledInput.svelte';
</script>

<div class="physical">
	<Label element="h5">Physical</Label>
	<div class="grid">
		<LabeledInput name="Height" />
		<LabeledInput name="Weight" />
		<LabeledInput name="Hair" />
		<LabeledInput name="Eyes" />
		<LabeledInput name="Piercing/Tattoos" />
		<LabeledInput name="Scars" />
		<LabeledInput name="Clothing" />
		<LabeledInput name="Build" />
	</div>
</div>

<style lang="scss">
	.physical {
		padding: 10px;
	}

	.grid {
		display: grid;
		gap: 5px;
		grid-template-areas:
			'height-label height . weight-label weight .'
			'hair-label hair hair hair hair hair'
			'eyes-label eyes eyes eyes eyes eyes'
			'piercing-tattoos-label piercing-tattoos-label piercing-tattoos-label piercing-tattoos-label piercing-tattoos-label piercing-tattoos-label'
			'piercing-tattoos piercing-tattoos piercing-tattoos piercing-tattoos piercing-tattoos piercing-tattoos'
			'scars-label scars-label scars-label scars-label scars-label scars-label'
			'scars scars scars scars scars scars'
			'clothing-label clothing clothing clothing clothing clothing'
			'build-label build build build build build';
	}
</style>
