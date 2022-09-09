<script lang="ts">
	import ChippedTextArea from '$lib/ChippedTextArea.svelte';

	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';
	import { Container, Col, Row } from 'svelte-materialify';
	import { getContext } from './PersonaPage.svelte';

	const { attr } = getContext();

	const justify = 'end';
</script>

<div>
	<Container>
		<Row dense>
			<Col>
				<Label {justify}>Name</Label>
			</Col>
			<Col class="col-3">
				<ChippedTextField chipSize={7} name={attr('persona_name')} />
			</Col>
			<Col>
				<Label {justify}>Arcana</Label>
			</Col>
			<Col class="col-3 pr-0">
				<ChippedTextField chipSize={7} name={attr('arcana')} />
			</Col>
			<Col class="pl-0">
				<Label {justify}>Lv</Label>
			</Col>
			<Col class="pr-0 pl-0">
				<ChippedTextField chipSize={7} name={attr('persona_level')} />
			</Col>
			<Col class="pl-0">
				<Label {justify}>SP</Label>
			</Col>
			<Col class="pr-0 pl-0">
				<ChippedTextField chipSize={7} name={attr('spell_points')} />
			</Col>
		</Row>
		<Row dense>
			<Label>Natural Skill</Label>
		</Row>
		<Row dense>
			<ChippedTextArea chipSize={10} w="100%" name={attr('natural_skill')} />
		</Row>
	</Container>
</div>

<style lang="sass">
	div
		width: 115%
</style>
