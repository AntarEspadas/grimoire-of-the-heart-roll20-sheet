<script lang="ts">
	import ChippedCheckbox from '$lib/ChippedCheckbox.svelte';

	import ChippedDiv from '$lib/ChippedDiv.svelte';
	import ChippedTextArea from '$lib/ChippedTextArea.svelte';
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';

	import EditableField from '$lib/EditableField.svelte';

	import { Row, Col, Container } from 'svelte-materialify';
	import { getContext } from './PersonaPage.svelte';

	const { attr, getName } = getContext();

	const bgColor = '#FB6674';

	const rollTemplate = `&{template:general} {{title=@{${getName(
		'_spell_name'
	)}}}} {{subtitle=@{${getName('_spell_type')}}}} {{color=red}} {{roll=[[@{${getName(
		'_spell_roll'
	)}}]]}}`;
	const chatTemplate = `&{template:general} {{title=@{${getName(
		'_spell_name'
	)}}}} {{type=@{${getName('_spell_type')}}}} {{tier=@{${getName(
		'_spell_tier'
	)}}}} {{categories=@{${getName('_spell_categories')}}}} {{effect=@{${getName(
		'_spell_effect'
	)}}}} {{time=@{${getName('_spell_time')}}}} {{duration=@{${getName(
		'_spell_duration'
	)}}}} {{color=red}}`;
</script>

<fieldset class="repeating_{getName('skills')}">
	<EditableField
		hasRoll
		rollAttribute={attr('_spell_roll')}
		{rollTemplate}
		{chatTemplate}
		class="mb-3"
	>
		<ChippedDiv chipSize={30} h="fit-content" w="100%" {bgColor} class="d-flex" slot="edit">
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
						<Label>Uses / Max</Label>
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
						<ChippedTextField name={attr('_spell_uses', '_max')} chipSize={7} />
					</Col>
					<Col class="col-3 offset-3">
						<ChippedCheckbox name={attr('_spell_repress')} value="1" />
					</Col>
				</Row>
				<Row dense>
					<Col class="col-6">
						<Label>Time</Label>
					</Col>
					<Col class="col-6 ">
						<Label>Duration</Label>
					</Col>
				</Row>
				<Row dense>
					<Col class="col-6">
						<ChippedTextField name={attr('_spell_time')} chipSize={7} />
					</Col>
					<Col class="col-6">
						<ChippedTextField name={attr('_spell_duration')} chipSize={7} />
					</Col>
				</Row>
			</Container>
		</ChippedDiv>
		<ChippedDiv chipSize={30} h="fit-content" w="100%" {bgColor} class="d-flex" slot="normal">
			<Container class="pt-0">
				<Row dense>
					<Col class="col-5">
						<div>
							<Label>Spell</Label>
							<ChippedTextField chipSize={7} name={attr('_spell_name')} disabled />
						</div>
					</Col>
					<Col class="col-2">
						<div>
							<Label>Roll</Label>
							<ChippedTextField chipSize={7} name={attr('_spell_roll', '_display')} disabled />
						</div>
					</Col>
					<Col class="col-1 ">
						<div>
							<Label>Tier</Label>
							<ChippedTextField chipSize={7} name={attr('_spell_tier')} disabled />
						</div>
					</Col>
					<Col class="col-1 ">
						<div>
							<Label>Repress</Label>
							<ChippedCheckbox name={attr('_spell_repress')} value="1" />
						</div>
					</Col>
					<Col class="col-1 offset-1">
						<div>
							<Label>Uses /</Label>
							<ChippedTextField chipSize={7} name={attr('_spell_uses')} />
						</div>
					</Col>
					<Col class="col-1">
						<div>
							<Label>Max</Label>
							<ChippedTextField chipSize={7} name={attr('_spell_uses', '_max')} disabled />
						</div>
					</Col>
				</Row>
			</Container>
		</ChippedDiv>
	</EditableField>
</fieldset>
