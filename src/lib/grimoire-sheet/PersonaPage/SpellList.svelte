<script lang="ts">
	import ChippedCheckbox from '$lib/ChippedCheckbox.svelte';

	import ChippedDiv from '$lib/ChippedDiv.svelte';
	import ChippedTextArea from '$lib/ChippedTextArea.svelte';
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';

	import { Row, Col, Container } from 'svelte-materialify';
	import { getContext } from './PersonaPage.svelte';

	const { attr } = getContext();

	const bgColor = '#FB6674';
</script>

<ChippedDiv chipSize={30} h="fit-content" w="100%" {bgColor} class="d-flex">
	<Container>
		<Row dense>
			<Col>
				<Label>Spell</Label>
			</Col>
		</Row>
		<Row dense>
			<Col>
				<ChippedTextField name={attr('_spell_name')} chipSize={7} />
			</Col>
		</Row>
		<Row dense>
			<Col>
				<Label>Roll</Label>
			</Col>
		</Row>
		<Row dense>
			<Col>
				<ChippedTextField name={attr('_spell_roll')} chipSize={7} />
			</Col>
		</Row>
		<Row dense>
			<Col class="col-8">
				<Label>Type</Label>
			</Col>
			<Col class="col-4">
				<Label>Tier</Label>
			</Col>
		</Row>
		<Row dense>
			<Col class="col-8">
				<ChippedTextField name={attr('_spell_type')} chipSize={7} />
			</Col>
			<Col class="col-4">
				<ChippedTextField name={attr('_spell_tier')} chipSize={7} />
			</Col>
		</Row>
		<Row dense>
			<Col>
				<Label>Categories</Label>
			</Col>
		</Row>
		<Row dense>
			<Col>
				<ChippedTextField name={attr('_spell_categories')} chipSize={7} />
			</Col>
		</Row>
		<Row dense>
			<Col class="col-12">
				<Label>Target</Label>
			</Col>
		</Row>
		<Row dense>
			<Col class="col-12">
				<ChippedTextField name={attr('_spell_target')} chipSize={7} />
			</Col>
		</Row>
	</Container>
	<Container>
		<Row dense>
			<Col>
				<Label>Effect</Label>
			</Col>
		</Row>
		<Row dense>
			<Col>
				<ChippedTextArea h="180px" name={attr('_spell_effect')} chipSize={15} />
			</Col>
		</Row>
		<Row dense>
			<Col class="col-3">
				<Label>Uses</Label>
			</Col>
			<Col class="col-3 offset-6">
				<Label>Repress</Label>
			</Col>
		</Row>
		<Row dense>
			<Col class="col-3">
				<ChippedTextField name={attr('_spell_uses')} chipSize={7} />
			</Col>
			<Col class="col-3">
				<ChippedTextField name={attr('_spell_uses', true)} chipSize={7} />
			</Col>
			<Col class="col-3 offset-3">
				<!-- <ChippedTextField name="attr__spell_repress" chipSize={7} /> -->
				<ChippedCheckbox name={attr('_spell_repress')} value="1" />
			</Col>
		</Row>
	</Container>
</ChippedDiv>
