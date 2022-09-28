<script lang="ts">
	import ChippedTextArea from '$lib/ChippedTextArea.svelte';

	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import EditableField from '$lib/EditableField.svelte';
	import Label from '$lib/Label.svelte';
	import { Container, Row, Col } from 'svelte-materialify';

	const chatTemplate =
		'&{template:general} {{title=Persona}} {{name=@{_name}}} {{arcana=@{_arcana}}} {{level=@{_level}}} {{color=purple}}';
</script>

<Container class="pt-0">
	<Row dense>
		<Col class="pb-0">
			<h5>Persona</h5>
		</Col>
	</Row>
	<Row dense>
		<Col class="col-4">
			<Label>Arcana</Label>
		</Col>
		<Col class="col-6">
			<Label>Name</Label>
		</Col>
		<Col>
			<Label>Lv</Label>
		</Col>
	</Row>
	<fieldset class="repeating_personae">
		<EditableField {chatTemplate}>
			<Row dense>
				<Col class="col-4 pt-0">
					<ChippedTextField name="attr__arcana" chipSize={7} />
				</Col>
				<Col class="col-6 pt-0">
					<ChippedTextField name="attr__name" chipSize={7} />
				</Col>
				<Col class="pt-0">
					<ChippedTextField name="attr__level" chipSize={7} type="number" />
				</Col>
			</Row>
			<svelte:fragment slot="edit">
				<Row dense>
					<Col>
						<Label>Notes</Label>
					</Col>
				</Row>
				<Row dense>
					<Col>
						<ChippedTextArea chipSize={7} name="attr__persona_notes" />
					</Col>
				</Row>
			</svelte:fragment>
		</EditableField>
	</fieldset>
</Container>

<style lang="sass">
    h5
        color: white
        font-weight: 900
        margin: 0
</style>
