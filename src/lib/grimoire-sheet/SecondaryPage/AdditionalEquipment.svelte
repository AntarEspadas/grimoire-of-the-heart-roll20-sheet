<script lang="ts">
	import LabeledInput from '$lib/LabeledInput.svelte';
</script>

<div class="additional-equipment">
	<LabeledInput i18n="sidearm" name="Sidearm" />
	<LabeledInput i18n="damage" name="Damage" />
	<LabeledInput i18n="reach-range" name="Reach" />
	<LabeledInput i18n="effect" name="Effect" />

	<LabeledInput i18n="miscellaneous-gear" name="Misc Gear" />
</div>

<style lang="scss">
	.additional-equipment {
		padding: 10px;
		display: grid;
		gap: 5px;
		grid-template-columns: 5fr 2fr 2fr 3fr;
		grid-template-areas:
			'sidearm-label damage-label reach-label effect-label'
			'sidearm damage reach effect'
			'misc-gear-label misc-gear-label misc-gear-label misc-gear-label'
			'misc-gear misc-gear misc-gear misc-gear';
	}
</style>
