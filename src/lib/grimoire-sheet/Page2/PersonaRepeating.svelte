<script lang="ts">
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import { Container, Row, Col } from 'svelte-materialify';

	const arr = new Array(7).fill(0).map((_, i) => i);
</script>

<Container class="pt-0">
	<Row dense>
		<Col class="pb-0">
			<h5>Persona</h5>
		</Col>
	</Row>
	<Row dense>
		<Col class="col-4">
			<p>Arcana</p>
		</Col>
		<Col class="col-6">
			<p>Name</p>
		</Col>
		<Col>
			<p>Lv</p>
		</Col>
	</Row>
	<!-- <fieldset class="repeating_personae"> -->
	<!-- <input type="text" name="attr_test" /> -->
	<!-- <Row dense>
			<Col class="col-4 pt-0">
				<ChippedTextField name="attr__arcana" chipSize={7} />
			</Col>
			<Col class="col-6 pt-0">
				<ChippedTextField name="attr__name" chipSize={7} />
			</Col>
			<Col class="pt-0">
				<ChippedTextField name="attr__level" chipSize={7} type="number" />
			</Col>
		</Row> -->
	<!-- </fieldset> -->
</Container>

<style lang="sass">
    p, h5
        color: white
        font-weight: 900
        margin: 0
</style>
