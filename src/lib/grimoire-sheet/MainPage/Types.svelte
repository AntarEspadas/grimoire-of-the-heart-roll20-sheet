<script lang="ts">
	import { Container, Col, Row } from 'svelte-materialify';
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import { Corner } from '$lib/ChippedDiv.svelte';
	import Label from '$lib/Label.svelte';
	import { getContext } from '../PersonaPage/PersonaPage.svelte';

	export let h: string | undefined = undefined;

	let className: string | undefined = undefined;
	export { className as class };

	const { attr } = getContext();
</script>

<Container dense class="pt-1 {className ?? ''}">
	<Row dense>
		<Col>
			<Label>Types</Label>
		</Col>
	</Row>
	<Row dense>
		<Col>
			<ChippedTextField {h} name={attr('type_1')} chipSize={5} corner={Corner.bottomRight} />
		</Col>
		<Col>
			<ChippedTextField {h} name={attr('type_2')} chipSize={5} corner={Corner.bottomLeft} />
		</Col>
	</Row>
	<Row dense>
		<Col>
			<ChippedTextField {h} name={attr('type_3')} chipSize={5} />
		</Col>
		<Col>
			<ChippedTextField {h} name={attr('type_4')} chipSize={5} corner={Corner.topLeft} />
		</Col>
	</Row>
</Container>
