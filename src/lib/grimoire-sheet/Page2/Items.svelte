<script lang="ts">
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import { Container, Row, Col } from 'svelte-materialify';

	const items = new Array(9).fill(0).map((_, i) => i + 1);
</script>

<Container class="pt-0">
	<Row dense>
		<Col class="pb-0">
			<h5>Items</h5>
		</Col>
	</Row>
	<Row dense>
		<Col class="pb-0 pt-0 col-10">
			<p>Name/Description</p>
		</Col>
		<Col class="pb-0 pt-0">
			<p>Qty</p>
		</Col>
	</Row>
	<fieldset class="repeating_item">
		<Row dense>
			<Col class="col-10 pb-0">
				<ChippedTextField name="attr__item" chipSize={7} />
			</Col>
			<Col class="pb-0">
				<ChippedTextField name="attr__item_amount" chipSize={7} type="number" />
			</Col>
		</Row>
	</fieldset>
</Container>

<style lang="sass">
    p, h5
        color: white
        font-weight: 900
        margin: 0
</style>
