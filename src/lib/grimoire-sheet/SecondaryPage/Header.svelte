<script lang="ts">
	import Block from './Block.svelte';

	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import { Container, Row, Col } from 'svelte-materialify';
	import Label from '$lib/Label.svelte';

	const justify = 'end';
</script>

<div class="header">
	<Container>
		<Row dense>
			<Col class="col-2">
				<Label i18n="character" class="end">Character</Label>
			</Col>
			<Col class="col-6">
				<ChippedTextField name="attr_character_name" chipSize={7} />
			</Col>
			<Col class="col-1">
				<Label i18n="experience-brief" class="end">EXP</Label>
			</Col>
			<Col>
				<ChippedTextField name="attr_experience" chipSize={7} />
			</Col>
		</Row>
		<Row dense>
			<Col class="col-2">
				<Label i18n="occupation" class="end">Occupation</Label>
			</Col>
			<Col class="col-3">
				<ChippedTextField name="attr_occupation" chipSize={7} />
			</Col>
			<Col class="col-1">
				<Label i18n="skill" class="end">Skill</Label>
			</Col>
			<Col class="col-2">
				<ChippedTextField name="attr_skill" chipSize={7} />
			</Col>
			<Col class="col-1">
				<Label i18n="resource-points-brief" class="end">RP</Label>
			</Col>
			<Col class="col-2">
				<ChippedTextField name="attr_resource_points" chipSize={7} />
			</Col>
		</Row>
		<Row dense>
			<Col class="col-3">
				<Label i18n="worked-blocks" class="end">Worked Blocks</Label>
			</Col>
			<Block name="Sun" i18n="sunday-short" />
			<Block name="Mon" i18n="monday-short" />
			<Block name="Tue" i18n="tuesday-short" />
			<Block name="Wed" i18n="wednesday-short" />
			<Block name="Thu" i18n="thursday-short" class="offset-1" />
			<Block name="Fri" i18n="friday-short" />
			<Block name="Sat" i18n="saturday-short" />
			<Col class="col-2 offset-1">
				<Label i18n="resource-points-block-brief" class="end">RP/Block</Label>
			</Col>
			<Col>
				<ChippedTextField name="attr_rp_per_block" chipSize={7} type="number" />
			</Col>
		</Row>
	</Container>
</div>

<style lang="sass">
    .header
        :global(.end)
            justify-content: end
</style>
