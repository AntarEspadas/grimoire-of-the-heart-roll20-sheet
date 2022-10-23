<script lang="ts">
	import LabeledInput from '../../LabeledInput.svelte';
</script>

<div class="header">
	<LabeledInput i18n="character" name="Character" attribute="attr_character_name" />

	<LabeledInput i18n="birthday" name="Birthday" />

	<LabeledInput i18n="age" name="Age" />

	<LabeledInput i18n="aliases" name="Aliases" />

	<LabeledInput i18n="arcana" name="Arcana" />

	<LabeledInput i18n="astral-sign" name="Sign" />
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
