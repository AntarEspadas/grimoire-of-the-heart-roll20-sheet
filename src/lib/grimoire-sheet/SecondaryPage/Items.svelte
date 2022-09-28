<script lang="ts">
	import ChippedTextArea from '$lib/ChippedTextArea.svelte';

	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import EditableField from '$lib/EditableField.svelte';
	import Label from '$lib/Label.svelte';
	import { Container, Row, Col, Divider } from 'svelte-materialify';

	const items = new Array(9).fill(0).map((_, i) => i + 1);
</script>

<Container class="pt-0">
	<Row dense>
		<Col class="pb-0">
			<Label element="h5">Items</Label>
		</Col>
	</Row>
	<Row dense>
		<Col class="pb-0 pt-0 col-10">
			<Label>Name</Label>
		</Col>
		<Col class="pb-0 pt-0">
			<Label>Qty</Label>
		</Col>
	</Row>
	<fieldset class="repeating_items">
		<EditableField
			chatTemplate={'&{template:general} {{title=Item}} {{name=@{_item_name}}} {{desc=@{_item_description}}} {{color=purple}}'}
		>
			<Row dense>
				<Col class="col-9 pb-0">
					<ChippedTextField name="attr__item_name" chipSize={7} />
				</Col>
				<Col class="pb-0">
					<ChippedTextField name="attr__item_amount" chipSize={7} type="number" />
				</Col>
			</Row>
			<svelte:fragment slot="edit">
				<Row dense>
					<Col class="pt-0 pb-0">
						<Label>Description</Label>
					</Col>
				</Row>
				<Row dense>
					<Col>
						<ChippedTextArea resizable chipSize={10} name="attr__item_description" />
					</Col>
				</Row>
				<Divider />
			</svelte:fragment>
		</EditableField>
	</fieldset>
</Container>
