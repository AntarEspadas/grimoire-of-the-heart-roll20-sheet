<script>
	import { Container, Col, Row } from 'svelte-materialify';
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import { Corner } from '$lib/ChippedDiv.svelte';
</script>

<Container dense class="pt-1">
	<Row dense>
		<Col>
			<p>Types</p>
		</Col>
	</Row>
	<Row dense>
		<Col>
			<ChippedTextField name="attr_type_1" chipSize={5} corner={Corner.bottomRight} />
		</Col>
		<Col>
			<ChippedTextField name="attr_type_2" chipSize={5} corner={Corner.bottomLeft} />
		</Col>
	</Row>
	<Row dense>
		<Col>
			<ChippedTextField name="attr_type_3" chipSize={5} />
		</Col>
		<Col>
			<ChippedTextField name="attr_type_4" chipSize={5} corner={Corner.topLeft} />
		</Col>
	</Row>
</Container>

<style lang="sass">
    p
        color: white
        font-weight: 900
        margin: 0
</style>
