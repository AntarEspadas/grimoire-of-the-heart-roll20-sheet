<script lang="ts">
	import { Container, Col, Row } from 'svelte-materialify';
	import ChippedTextArea from '$lib/ChippedTextArea.svelte';
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';
</script>

<Container class="pt-1">
	<Row dense>
		<Col class="col-4">
			<div>
				<h5>Aspects</h5>
			</div>
		</Col>
		<Col class="col-4">
			<Label justify="end">Aspect Points</Label>
		</Col>
		<Col class="col-3">
			<ChippedTextField chipSize={7} name="attr_aspect_points" type="number" />
		</Col>
	</Row>
	<Row dense>
		<Col>
			<ChippedTextArea chipSize={30} name="attr_aspects" h="230px" />
		</Col>
	</Row>
</Container>

<style lang="sass">
    h5
        font-weight: 900
        color: white
        margin: 0
</style>
