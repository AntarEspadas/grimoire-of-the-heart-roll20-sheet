<script lang="ts">
	import LabeledInput from '$lib/LabeledInput.svelte';

	const bgColor = 'white';

	const offset = '15px';
	const justify = 'end';
</script>

<div class="header">
	<LabeledInput i18n="character" name="Character" attribute="attr_character_name" />
	<LabeledInput i18n="character-class" name="Class" />
	<LabeledInput i18n="character-level" name="Level" />
	<LabeledInput i18n="arcana" name="Arcana" />
	<LabeledInput i18n="player" name="Player" />
</div>

<style lang="scss">
	.header {
		padding: 10px;
		display: grid;
		gap: 10px;
		grid-template-areas:
			'character-label character character character'
			'class-label class level-label level'
			'arcana-label arcana player-label player';
		:global(.label) {
			justify-content: end;
		}
	}

	@media (min-width: 600px) {
		.header {
			grid-template-columns: 70px 70px 60px 150px 60px 1fr;
			grid-template-areas:
				'character-label character character character class-label class'
				'level-label level arcana-label arcana player-label player';
		}
	}
</style>
