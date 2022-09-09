<script lang="ts">
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import EditableField from '$lib/EditableField.svelte';
	import Label from '$lib/Label.svelte';
	import { Container, Row, Col } from 'svelte-materialify';
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
		<EditableField>
			<svelte:fragment slot="normal">Normal</svelte:fragment>
			<Row dense slot="edit">
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
		</EditableField>
		<!-- <input type="hidden" name="attr__expand" value="true" />
		<div>
			<div class="edit">
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
			</div>
			<div class="display">
			</div>
			<button type="action" name="act_edit-r">Edit</button>
		</div> -->
	</fieldset>
</Container>

<style lang="sass">
    h5
        color: white
        font-weight: 900
        margin: 0
</style>
