<script lang="ts">
	import ChippedCheckbox from '$lib/ChippedCheckbox.svelte';

	import ChippedDiv from '$lib/ChippedDiv.svelte';
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';

	import EditableField from '$lib/EditableField.svelte';

	import { getContext } from './PersonaPage.svelte';
	import LabeledInput from '$lib/LabeledInput.svelte';

	const { attr, getName } = getContext();

	const bgColor = '#FB6674';

	const rollTemplate = `&{template:general} {{title=@{${getName(
		'_spell_name'
	)}}}} {{subtitle=@{${getName('_spell_type')}}}} {{color=red}} {{roll=[[@{${getName(
		'_spell_roll'
	)}}]]}}`;
	const chatTemplate = `&{template:general} {{title=@{${getName(
		'_spell_name'
	)}}}} {{type=@{${getName('_spell_type')}}}} {{tier=@{${getName(
		'_spell_tier'
	)}}}} {{categories=@{${getName('_spell_categories')}}}} {{effect=@{${getName(
		'_spell_effect'
	)}}}} {{time=@{${getName('_spell_time')}}}} {{duration=@{${getName(
		'_spell_duration'
	)}}}} {{color=red}}`;
</script>

<fieldset class="repeating_{getName('skills')}">
	<EditableField
		hasRoll
		rollAttribute={attr('_spell_roll')}
		{rollTemplate}
		{chatTemplate}
		class="mb-3"
	>
		<ChippedDiv
			chipSize={30}
			h="fit-content"
			w="100%"
			{bgColor}
			class="d-flex flex-column flex-sm-row"
			slot="edit"
		>
			<div class="edit">
				<LabeledInput i18n="magic-spell" name="Spell" attribute={attr('_spell_name')} />
				<LabeledInput i18n="dice-roll" name="Roll" attribute={attr('_spell_roll')} />
				<LabeledInput i18n="type" name="Type" attribute={attr('_spell_type')} />
				<LabeledInput i18n="tier" name="Tier" attribute={attr('_spell_tier')} />
				<LabeledInput i18n="categories" name="Categories" attribute={attr('_spell_categories')} />
				<Label i18n="uses-max" style="grid-area: uses-max-label;">Uses / Max</Label>
				<ChippedTextField style="grid-area: uses" chipSize={7} name={attr('_spell_uses')} />
				<ChippedTextField
					style="grid-area: uses-max"
					chipSize={7}
					name={attr('_spell_uses', '_max')}
				/>
				<LabeledInput i18n="repress" name="Repress" attribute={attr('_spell_repress')} />
				<LabeledInput i18n="target" name="Target" attribute={attr('_spell_target')} />
				<LabeledInput i18n="time" name="Time" attribute={attr('_spell_time')} />
				<LabeledInput i18n="duration" name="Duration" attribute={attr('_spell_duration')} />
				<LabeledInput
					i18n="effect"
					name="Effect"
					attribute={attr('_spell_effect')}
					component="text-area"
					chipSize={20}
				/>
			</div>
		</ChippedDiv>
		<ChippedDiv chipSize={30} h="fit-content" w="100%" {bgColor} slot="normal">
			<div class="normal">
				<LabeledInput i18n="magic-spell" name="Spell" attribute={attr('_spell_name')} disabled />
				<LabeledInput i18n="dice-roll" name="Roll" attribute={attr('_spell_roll')} disabled />
				<LabeledInput i18n="tier" name="Tier" attribute={attr('_spell_tier')} disabled />
				<Label style="grid-area: repress-label;" i18n="repress">Repress</Label>
				<ChippedCheckbox style="grid-area: repress;" name={attr('_spell_repress')} value="1" />

				<Label i18n="uses-max" style="grid-area: uses-max-label;">Uses / Max</Label>
				<ChippedTextField style="grid-area: uses" chipSize={7} name={attr('_spell_uses')} />
				<ChippedTextField
					style="grid-area: uses-max"
					chipSize={7}
					name={attr('_spell_uses', '_max')}
					disabled
				/>
			</div>
		</ChippedDiv>
	</EditableField>
</fieldset>

<style lang="scss">
	.edit {
		width: 100%;
		padding: 10px;
		display: grid;
		gap: 5px;
		grid-template-columns: 3fr 1fr 20px repeat(4, 1fr);
		grid-template-areas:
			' spell-label spell-label . effect-label effect-label effect-label effect-label'
			'spell spell . effect effect effect effect'
			'roll-label roll-label . effect effect effect effect'
			'roll roll . effect effect effect effect'
			'type-label tier-label . effect effect effect effect'
			'type tier . effect effect effect effect'
			'categories-label categories-label . uses-max-label . . repress-label'
			'categories categories . uses uses-max . repress'
			'target-label target-label . time-label time-label duration-label duration-label'
			'target target . time time duration duration';
	}

	.normal {
		width: 100%;
		padding: 10px;
		display: grid;
		gap: 5px;
		grid-template-columns: 7fr 4fr repeat(5, 1fr);
		grid-template-areas:
			'spell-label roll-label tier-label repress-label repress-label uses-max-label uses-max-label'
			'spell roll tier repress . uses uses-max';
	}
</style>
