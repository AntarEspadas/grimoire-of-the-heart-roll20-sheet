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
	<Row dense>
		{#each items as i}
			<Col class="col-10 pb-0">
				<ChippedTextField name="attr_item_{i}" chipSize={7} />
			</Col>
			<Col class="pb-0">
				<ChippedTextField name="attr_item_{i}_amount" chipSize={7} type="number" />
			</Col>
		{/each}
	</Row>
</Container>

<style lang="sass">
    p, h5
        color: white
        font-weight: 900
        margin: 0
</style>
