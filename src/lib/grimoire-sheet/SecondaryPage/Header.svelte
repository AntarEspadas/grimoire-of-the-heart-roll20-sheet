<script lang="ts">
	import Label from '$lib/Label.svelte';
	import LabeledInput from '$lib/LabeledInput.svelte';
</script>

<div class="header-top">
	<LabeledInput i18n="character" name="Character" attribute="attr_character_name" />
	<LabeledInput i18n="experience-short" name="Exp" attribute="attr_experience" />
	<LabeledInput i18n="occupation" name="Occupation" />
	<LabeledInput i18n="skill" name="Skill" />
	<LabeledInput i18n="resource-points-short" name="RP" attribute="attr_resource_points" />
</div>

<div class="header-bottom">
	<Label i18n="worked-blocks" style="grid-area: worked-blocks;">Worked Blocks</Label>

	<LabeledInput i18n="sunday-short" name="Sun" attribute="attr_sunday_block" />
	<LabeledInput i18n="monday-short" name="Mon" attribute="attr_monday_block" />
	<LabeledInput i18n="tuesday-short" name="Tue" attribute="attr_tuesday_block" />
	<LabeledInput i18n="resource-points-block-short" name="RP/Block" attribute="attr_rp_per_block" />
	<LabeledInput i18n="wednesday-short" name="Wed" attribute="attr_wednesday_block" />
	<LabeledInput i18n="thursday-short" name="Thu" attribute="attr_thursday_block" />
	<LabeledInput i18n="friday-short" name="Fri" attribute="attr_friday_block" />
	<LabeledInput i18n="saturday-short" name="Sat" attribute="attr_saturday_block" />
</div>

<style lang="scss">
	.header-top {
		padding: 10px;
		display: grid;
		gap: 20px;
		grid-template-columns: 90px 25% 40px 15% 50px 7% 1fr 10px;
		grid-template-areas:
			'character-label character character character exp-label exp exp .'
			'occupation-label occupation skill-label skill rp-label rp . .';

		:global(.label) {
			justify-content: end;
		}
	}
	.header-bottom {
		padding: 10px;
		display: grid;
		gap: 5px;
		column-gap: 5px;
		grid-template-columns: 60px 10% repeat(3, 40px 10%) 80px 1fr;
		grid-template-areas:
			'worked-blocks worked-blocks sun-label sun mon-label mon tue-label tue rp-block-label rp-block'
			'wed-label wed thu-label thu fri-label fri sat-label sat . .';

		:global(.label) {
			justify-content: end;
		}
	}
</style>
