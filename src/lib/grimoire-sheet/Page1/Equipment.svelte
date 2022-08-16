<script>
	import { Container, Row, Col } from 'svelte-materialify';
	import ChippedTextField from '$lib/ChippedTextField.svelte';
</script>

<Container>
	<Row dense>
		<Col class="col-4 pb-0">
			<p>Weapon</p>
		</Col>
		<Col class="col-2 pb-0">
			<p>Damage</p>
		</Col>
		<Col class="col-2 pb-0">
			<p>Reach</p>
		</Col>
		<Col class="col-2 pb-0">
			<p>Effect</p>
		</Col>
	</Row>
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
		<Col class="col-4 pb-0">
			<p>Armor</p>
		</Col>
		<Col class="col-2 pb-0">
			<p>Dmg Red</p>
		</Col>
		<Col class="pb-0">
			<p>Effect</p>
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
			<p>Accessory</p>
		</Col>
		<Col class="pb-0">
			<p>Effect</p>
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

<style lang="sass">
    p
        color: white
        font-weight: 900
        margin: 0
</style>
