<script lang="ts">
	import { Container, Row, Col } from 'svelte-materialify';
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';
	import EditableField from '$lib/EditableField.svelte';
	import { types } from '$lib/values';
	import ChippedDiv from '$lib/ChippedDiv.svelte';
	import ChippedSelect from '$lib/ChippedSelect.svelte';

	const rollTemplate = `&{template:general} {{title=@{weapon_name}}} {{subtitle=@{weapon_damage_type} damage}} {{color=blue}} {{roll=[[@{weapon_damage}]]}}`;
	const chatTemplate = `&{template:general} {{weapon=@{weapon_name}}} {{damage=@{weapon_damage_display}}} {{reach=@{weapon_reach}}} {{type=@{weapon_damage_type}}} {{effect=@{weapon_effect}}}`;
</script>

<Container>
	<EditableField
		fieldName="main_weapon"
		hasRoll
		rollAttribute="attr_weapon_attack"
		{rollTemplate}
		{chatTemplate}
	>
		<Row dense>
			<Col class="col-4 pb-0">
				<Label>Weapon</Label>
			</Col>
			<Col class="col-2 pb-0">
				<Label>Damage</Label>
			</Col>
			<Col class="col-2 pb-0">
				<Label>Reach</Label>
			</Col>
			<Col class="col-2 pb-0">
				<Label>Effect</Label>
			</Col>
		</Row>
		<svelte:fragment slot="edit">
			<Row dense>
				<Col class="col-4 pt-0">
					<ChippedTextField name="attr_weapon_name" chipSize={7} />
				</Col>
				<Col class="col-2 pt-0">
					<ChippedTextField name="attr_weapon_damage" chipSize={7} />
				</Col>
				<Col class="col-2 pt-0">
					<ChippedTextField name="attr_weapon_reach" chipSize={7} />
				</Col>
				<Col class="pt-0">
					<ChippedTextField name="attr_weapon_effect" chipSize={7} />
				</Col>
			</Row>
			<Row dense>
				<Col class="col-4">
					<Label>Damage type</Label>
				</Col>
			</Row>
			<Row dense>
				<Col class="col-4">
					<ChippedSelect name="attr_weapon_damage_type">
						{#each types as type}
							<option value={type}>{type}</option>
						{/each}
					</ChippedSelect>
				</Col>
			</Row>
		</svelte:fragment>
		<Row dense slot="normal">
			<Col class="col-4 pt-0">
				<ChippedTextField name="attr_weapon_name" chipSize={7} disabled i18n="weapon-name" />
			</Col>
			<Col class="col-2 pt-0">
				<ChippedTextField name="attr_weapon_damage_display" chipSize={7} disabled />
			</Col>
			<Col class="col-2 pt-0">
				<ChippedTextField name="attr_weapon_reach" chipSize={7} disabled />
			</Col>
			<Col class="pt-0">
				<ChippedTextField name="attr_weapon_effect" chipSize={7} disabled />
			</Col>
		</Row>
	</EditableField>
	<Row dense>
		<Col class="col-4 pb-0">
			<Label>Armor</Label>
		</Col>
		<Col class="col-2 pb-0">
			<Label>Dmg Red</Label>
		</Col>
		<Col class="pb-0">
			<Label>Effect</Label>
		</Col>
	</Row>
	<Row dense>
		<Col class="col-4 pt-0">
			<ChippedTextField name="attr_armor_name" chipSize={7} />
		</Col>
		<Col class="col-2 pt-0">
			<ChippedTextField name="attr_armor_damage_reduction" chipSize={7} />
		</Col>
		<Col class="pt-0">
			<ChippedTextField name="attr_armor_effect" chipSize={7} />
		</Col>
	</Row>
	<Row dense>
		<Col class="col-4 pb-0">
			<Label>Accessory</Label>
		</Col>
		<Col class="pb-0">
			<Label>Effect</Label>
		</Col>
	</Row>
	<Row dense>
		<Col class="col-4 pt-0">
			<ChippedTextField name="attr_accessory_name" chipSize={7} />
		</Col>
		<Col class="pt-0">
			<ChippedTextField name="attr_accessory_effect" chipSize={7} />
		</Col>
	</Row>
</Container>
