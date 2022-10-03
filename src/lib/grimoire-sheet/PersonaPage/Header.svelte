<script lang="ts">
	import ChippedTextArea from '$lib/ChippedTextArea.svelte';

	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';
	import { Container, Col, Row } from 'svelte-materialify';
	import { getContext } from './PersonaPage.svelte';

	const { attr } = getContext();

	const justify = 'end';
</script>

<div class="header">
	<Container>
		<Row dense>
			<Col>
				<Label i18n="name" class="end">Name</Label>
			</Col>
			<Col class="col-3">
				<ChippedTextField chipSize={7} name={attr('persona_name')} />
			</Col>
			<Col>
				<Label i18n="arcana" class="end">Arcana</Label>
			</Col>
			<Col class="col-3 pr-0">
				<ChippedTextField chipSize={7} name={attr('arcana')} />
			</Col>
			<Col class="pl-0">
				<Label i18n="level-brief" class="end">Lv</Label>
			</Col>
			<Col class="pr-0 pl-0">
				<ChippedTextField chipSize={7} name={attr('persona_level')} />
			</Col>
			<Col class="pl-0">
				<Label i18n="spirit-points-brief" class="end">SP</Label>
			</Col>
			<Col class="pr-0 pl-0">
				<ChippedTextField chipSize={7} name={attr('spell_points')} />
			</Col>
		</Row>
		<Row dense>
			<Label i18n="natural-skill">Natural Skill</Label>
		</Row>
		<Row dense>
			<ChippedTextArea chipSize={10} w="100%" name={attr('natural_skill')} />
		</Row>
	</Container>
</div>

<style lang="sass">
	.header
		width: 115%

		:global(.label.end)
			justify-content: end
</style>
