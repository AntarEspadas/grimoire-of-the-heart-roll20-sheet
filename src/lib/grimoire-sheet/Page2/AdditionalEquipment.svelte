<script lang="ts">
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import { Container, Row, Col } from 'svelte-materialify';
</script>

<Container class="pt-0">
	<Row dense>
		<Col class="col-5">
			<p>Sidearm</p>
		</Col>
		<Col class="col-2">
			<p>Damage</p>
		</Col>
		<Col class="col-2">
			<p>Reach</p>
		</Col>
		<Col class="col-3">
			<p>Effect</p>
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
			<p>Misc Gear</p>
		</Col>
	</Row>
	<Row dense>
		<Col>
			<ChippedTextField name="attr_misc_gear" chipSize={7} />
		</Col>
	</Row>
</Container>

<style lang="sass">
    p
        color: white
        font-weight: 900
        margin: 0
</style>
