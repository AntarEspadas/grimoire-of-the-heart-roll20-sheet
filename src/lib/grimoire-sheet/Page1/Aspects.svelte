<script lang="ts">
	import { Container, Col, Row } from 'svelte-materialify';
	import ChippedTextArea from '$lib/ChippedTextArea.svelte';
	import ChippedTextField from '$lib/ChippedTextField.svelte';
</script>

<Container class="pt-1">
	<Row dense>
		<Col class="col-4">
			<div>
				<h5>Aspects</h5>
			</div>
		</Col>
		<Col class="col-4">
			<div class="label">
				<p>Aspect Points</p>
			</div>
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
    h5, p
        font-weight: 900
        color: white
        margin: 0

    div
        display: flex
        align-items: center
        height: 100%

    .label
        justify-content: flex-end
</style>
