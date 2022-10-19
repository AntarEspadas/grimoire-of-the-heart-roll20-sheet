<script lang="ts">
	import Label from '$lib/Label.svelte';
	import LabeledInput from '$lib/LabeledInput.svelte';

	import { getContext } from './PersonaPage.svelte';

	const { attr } = getContext();
</script>

<div class="bonuses">
	<Label style="grid-area: bonuses;" i18n="bonuses" element="h5">Bonuses</Label>
	<div class="grid">
		<LabeledInput i18n="strength-short" name="STR" attribute={attr('strength_bonus')} />
		<LabeledInput i18n="magic-short" name="MAG" attribute={attr('magic_bonus')} />
		<LabeledInput i18n="knowledge" name="Knowledge" attribute={attr('knowledge_bonus')} />
		<LabeledInput i18n="charm" name="Charm" attribute={attr('charm_bonus')} />

		<LabeledInput i18n="technique-short" name="TEC" attribute={attr('technique_bonus')} />
		<LabeledInput i18n="agility-short" name="AGI" attribute={attr('agility_bonus')} />
		<LabeledInput i18n="discipline" name="Discipline" attribute={attr('discipline_bonus')} />
		<LabeledInput i18n="expression" name="Expression" attribute={attr('expression_bonus')} />

		<LabeledInput i18n="vitality-short" name="VIT" attribute={attr('vitality_bonus')} />
		<LabeledInput i18n="luck-short" name="LCK" attribute={attr('luck_bonus')} />
		<LabeledInput i18n="empathy" name="Empathy" attribute={attr('empathy_bonus')} />
		<LabeledInput i18n="courage" name="Courage" attribute={attr('courage_bonus')} />
	</div>
</div>

<style lang="scss">
	.bonuses {
		padding: 0 10px 0 10px;
		.grid {
			display: grid;
			gap: 5px;
			grid-template-columns: 1fr 50px 1fr 50px 2.2fr 50px 2.2fr 50px;
			grid-template-areas:
				'str-label str mag-label mag knowledge-label knowledge charm-label charm'
				'tec-label tec agi-label agi discipline-label discipline expression-label expression'
				'vit-label vit lck-label lck empathy-label empathy courage-label courage';

			:global(.label) {
				justify-content: right;
			}

			:global(.chipped-input) {
				height: 30px;
			}
		}
	}
</style>
