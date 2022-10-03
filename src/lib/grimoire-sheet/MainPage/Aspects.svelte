<script lang="ts">
	import { Container, Col, Row } from 'svelte-materialify';
	import ChippedTextArea from '$lib/ChippedTextArea.svelte';
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';
</script>

<div class="aspects">
	<Container class="pt-1">
		<Row dense>
			<Col class="col-4">
				<Label element="h5" i18n="aspects">Aspects</Label>
			</Col>
			<Col class="col-4">
				<Label class="aspect-points-label" i18n="aspect points">Aspect Points</Label>
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
</div>

<style lang="scss">
	.aspects {
		:global(.aspect-points-label) {
			justify-content: end;
		}
	}
</style>
