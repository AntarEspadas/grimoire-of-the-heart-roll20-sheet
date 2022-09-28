<script lang="ts">
	import LabeledInput from './LabeledInput.svelte';
</script>

<div class="header">
	<LabeledInput name="Character" attribute="character_name" />

	<LabeledInput name="Birthday" />

	<LabeledInput name="Age" />

	<LabeledInput name="Aliases" />

	<LabeledInput name="Arcana" />

	<LabeledInput name="Sign" />
</div>

<style lang="scss">
	.header {
		padding: 10px;
		display: grid;
		gap: 10px;
		grid-template-areas:
			'character-label character character character character character character .'
			'aliases-label aliases aliases aliases aliases aliases aliases .'
			'birthday-label birthday birthday birthday age-label age age age'
			'arcana-label arcana arcana arcana sign-label sign sign sign';
	}
	@media (min-width: 600px) {
		.header {
			grid-template-areas:
				'character-label character character character birthday-label birthday age-label age . .'
				'aliases-label aliases arcana-label arcana sign-label sign . . . .';
		}
	}
</style>
