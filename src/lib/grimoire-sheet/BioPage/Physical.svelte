<script lang="ts">
	import Label from '$lib/Label.svelte';
	import LabeledInput from '../../LabeledInput.svelte';
</script>

<div class="physical">
	<Label element="h5" i18n="physical">Physical</Label>
	<div class="grid">
		<LabeledInput i18n="height" name="Height" />
		<LabeledInput i18n="weight" name="Weight" />
		<LabeledInput i18n="hair" name="Hair" />
		<LabeledInput i18n="eyes" name="Eyes" />
		<LabeledInput i18n="piercing-tattoos" name="Piercing/Tattoos" />
		<LabeledInput i18n="scars" name="Scars" />
		<LabeledInput i18n="clothing" name="Clothing" />
		<LabeledInput i18n="physical-build" name="Build" />
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
