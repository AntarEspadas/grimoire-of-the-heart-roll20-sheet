<script lang="ts">
	import LabeledInput from '$lib/LabeledInput.svelte';
	import { getContext } from './PersonaPage.svelte';

	const { attr } = getContext();
</script>

<div class="header">
	<LabeledInput i18n="name" name="Name" attribute={attr('persona_name')} labelClass="end" />
	<LabeledInput i18n="arcana" name="Arcana" attribute={attr('arcana')} labelClass="end" />
	<LabeledInput i18n="level-short" name="Lv" attribute={attr('persona_level')} labelClass="end" />
	<LabeledInput
		i18n="spirit-points-short"
		name="SP"
		attribute={attr('spell_points')}
		labelClass="end"
	/>

	<LabeledInput
		i18n="natural-skill"
		name="Natural Skill"
		attribute={attr('natural_skill')}
		component="text-area"
	/>
</div>

<style lang="scss">
	.header {
		width: 100%;
		height: 85%;
		padding: 10px;
		padding-bottom: 20px;
		display: grid;
		gap: 5px;
		grid-template-columns: 50px 4fr 60px 4fr 30px 1fr 30px 1fr;
		grid-template-rows: auto auto 1fr;
		grid-template-areas:
			'name-label name arcana-label arcana lv-label lv sp-label sp'
			'natural-skill-label natural-skill-label natural-skill-label natural-skill-label natural-skill-label natural-skill-label natural-skill-label natural-skill-label'
			'natural-skill natural-skill natural-skill natural-skill natural-skill natural-skill natural-skill natural-skill';

		:global(.label.end) {
			justify-content: end;
		}
	}
</style>
