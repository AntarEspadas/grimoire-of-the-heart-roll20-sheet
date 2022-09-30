<script lang="ts">
	import ChippedTextArea from '$lib/ChippedTextArea.svelte';

	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import EditableField from '$lib/EditableField.svelte';
	import Label from '$lib/Label.svelte';
	import { Container, Row, Col } from 'svelte-materialify';

	const feats = [
		[
			{ name: 'Lv. 2', value: 2 },
			{ name: 'Lv. 4', value: 4 }
		],
		[
			{ name: 'Lv. 6', value: 6 },
			{ name: 'Lv. 8', value: 8 }
		],
		[
			{ name: 'Lv. 10', value: 10 },
			{ name: 'Lv. 12', value: 12 }
		],
		[
			{ name: 'Lv. 14', value: 14 },
			{ name: 'Lv. 16', value: 16 }
		],
		[
			{ name: 'Lv. 18', value: 18 },
			{ name: 'Lv. 20', value: 20 }
		],
		[
			{ name: 'Extra', value: 'extra_1' },
			{ name: 'Extra', value: 'extra_2' }
		]
	].flat();
</script>

<Container class="pt-0">
	<Row dense>
		<Col>
			<Label i18n="feats" element="h5">Feats</Label>
		</Col>
	</Row>
	<fieldset class="repeating_feats">
		<Row dense>
			<Col class="col-12 pt-0">
				<EditableField
					chatTemplate={'&{template:general} {{title=Feat}} {{name=@{_feat_name}}} {{desc=@{_feat_description}}} {{color=purple}} '}
				>
					<svelte:fragment slot="edit">
						<ChippedTextField
							name="attr_featsource"
							h="30px"
							chipSize={7}
							placeholder="Source"
							class="mb-1"
						/>
						<ChippedTextField name="attr__feat_name" class="mb-1" placeholder="Name" chipSize={7} />
						<ChippedTextArea
							chipSize={10}
							placeholder="Description"
							name="attr__feat_description"
						/>
					</svelte:fragment>
					<Container slot="normal" class="ma-0 pa-0">
						<Row dense>
							<Col class="col-3 pb-0 pt-0 d-flex align-center justify-end">
								<span name="attr_featsource" />
							</Col>
							<Col class="pb-0 pt-0">
								<ChippedTextField disabled name="attr__feat_name" chipSize={7} />
							</Col>
						</Row>
					</Container>
				</EditableField>
			</Col>
		</Row>
	</fieldset>
</Container>
