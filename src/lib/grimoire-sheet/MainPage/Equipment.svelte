<script lang="ts">
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';
	import EditableField from '$lib/EditableField.svelte';
	import { types, typesi18n } from '$lib/values';
	import ChippedSelect from '$lib/ChippedSelect.svelte';
	import LabeledInput from '$lib/LabeledInput.svelte';

	const rollTemplate = `&{template:general} {{title=@{weapon_name}}} {{subtitle=@{weapon_damage_type} damage}} {{color=blue}} {{roll=[[@{weapon_damage}]]}}`;
	const chatTemplate = `&{template:general} {{weapon=@{weapon_name}}} {{damage=@{weapon_damage_display}}} {{reach=@{weapon_reach}}} {{type=@{weapon_damage_type}}} {{effect=@{weapon_effect}}}`;

	const t = types.map((type, i) => [type, typesi18n[i]]);
</script>

<div class="equipment">
	<EditableField
		fieldName="main_weapon"
		hasRoll
		rollAttribute="attr_weapon_attack"
		display="grid"
		{rollTemplate}
		{chatTemplate}
	>
		<div class="always">
			<Label i18n="weapon">Weapon</Label>
			<Label i18n="damage">Damage</Label>
			<Label i18n="reach-range">Reach</Label>
			<Label i18n="effect">Effect</Label>
		</div>

		<svelte:fragment slot="edit">
			<ChippedTextField name="attr_weapon_name" />
			<ChippedTextField name="attr_weapon_damage" />
			<ChippedTextField name="attr_weapon_reach" />
			<ChippedTextField name="attr_weapon_effect" />

			<Label i18n="damage-type" style="grid-row: 2;">Damage type</Label>

			<ChippedSelect name="attr_weapon_damage_type">
				{#each t as [type, i18n]}
					<option data-i18n={i18n} value={type}>{type}</option>
				{/each}
			</ChippedSelect>
		</svelte:fragment>

		<svelte:fragment slot="normal">
			<ChippedTextField name="attr_weapon_name" disabled i18n="weapon-name" />
			<ChippedTextField name="attr_weapon_damage_display" disabled />
			<ChippedTextField name="attr_weapon_reach" disabled />
			<ChippedTextField name="attr_weapon_effect" disabled />
		</svelte:fragment>
	</EditableField>

	<LabeledInput i18n="armor" name="Armor" />
	<LabeledInput i18n="damage-reduction-short-short" name="Dmg red" />
	<LabeledInput i18n="effect" name="armor-effect" />

	<LabeledInput i18n="accessory" name="Accessory" />
	<LabeledInput i18n="effect" name="accessory-effect" />
</div>

<style lang="scss">
	.equipment {
		--cols: 4fr 2fr 2fr 4fr;
		--gap: 5px;

		padding: 10px;
		display: grid;
		gap: var(--gap);
		grid-template-columns: var(--cols);
		grid-template-areas:
			'weapon weapon weapon weapon'
			'damage-type-label . . .'
			'damage-type . . .'
			'armor-label dmg-red-label armor-effect-label armor-effect-label'
			'armor dmg-red armor-effect armor-effect'
			'accessory-label accessory-effect-label accessory-effect-label accessory-effect-label'
			'accessory accessory-effect accessory-effect accessory-effect';

		:global(.editable-field) {
			grid-area: weapon;
		}

		:global(.editable-field .edit) {
			gap: var(--gap);
			grid-template-columns: var(--cols);
			grid-template-rows: repeat(3, auto);

			:global(.chipped-select) {
				grid-row: 3;
			}
		}

		:global(.editable-field .normal) {
			gap: var(--gap);
			grid-template-columns: var(--cols);
		}

		.always {
			display: grid;
			gap: var(--gap);
			grid-template-columns: var(--cols);
		}
	}
</style>
