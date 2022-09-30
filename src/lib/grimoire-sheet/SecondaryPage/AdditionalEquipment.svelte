<script lang="ts">
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';
	import { Container, Row, Col } from 'svelte-materialify';
</script>

<Container class="pt-0">
	<Row dense>
		<Col class="col-5">
			<Label i18n="sidearm">Sidearm</Label>
		</Col>
		<Col class="col-2">
			<Label i18n="damage">Damage</Label>
		</Col>
		<Col class="col-2">
			<Label i18n="reach-range">Reach</Label>
		</Col>
		<Col class="col-3">
			<Label i18n="effect">Effect</Label>
		</Col>
	</Row>
	<Row dense>
		<Col class="col-5">
			<ChippedTextField name="attr_sidearm_name" chipSize={7} />
		</Col>
		<Col class="col-2">
			<ChippedTextField name="attr_sidearm_damage" chipSize={7} />
		</Col>
		<Col class="col-2">
			<ChippedTextField name="attr_sidearm_reach" chipSize={7} />
		</Col>
		<Col class="col-3">
			<ChippedTextField name="attr_sidearm_effect" chipSize={7} />
		</Col>
	</Row>
	<Row dense>
		<Col>
			<Label i18n="miscellaneous-gear">Misc Gear</Label>
		</Col>
	</Row>
	<Row dense>
		<Col>
			<ChippedTextField name="attr_misc_gear" chipSize={7} />
		</Col>
	</Row>
</Container>
