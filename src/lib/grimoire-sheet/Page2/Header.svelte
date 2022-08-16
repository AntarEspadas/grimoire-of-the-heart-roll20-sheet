<script lang="ts">
	import Block from './Block.svelte';

	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import { Container, Row, Col } from 'svelte-materialify';
</script>

<Container>
	<Row dense>
		<Col class="col-2">
			<div class="label-container">
				<p>Character</p>
			</div>
		</Col>
		<Col class="col-6">
			<ChippedTextField name="attr_character_name" chipSize={7} />
		</Col>
		<Col class="col-1">
			<div class="label-container">
				<p>EXP</p>
			</div>
		</Col>
		<Col>
			<ChippedTextField name="attr_experience" chipSize={7} />
		</Col>
	</Row>
	<Row dense>
		<Col class="col-2">
			<div class="label-container">
				<p>Occupation</p>
			</div>
		</Col>
		<Col class="col-3">
			<ChippedTextField name="attr_occupation" chipSize={7} />
		</Col>
		<Col class="col-1">
			<div class="label-container">
				<p>Skill</p>
			</div>
		</Col>
		<Col class="col-2">
			<ChippedTextField name="attr_skill" chipSize={7} />
		</Col>
		<Col class="col-1">
			<div class="label-container">
				<p>RP</p>
			</div>
		</Col>
		<Col class="col-2">
			<ChippedTextField name="attr_resource_points" chipSize={7} />
		</Col>
	</Row>
	<Row dense>
		<Col class="col-3">
			<div class="label-container">
				<p>Worked Blocks</p>
			</div>
		</Col>
		<Block name="Sun" />
		<Block name="Mon" />
		<Block name="Tue" />
		<Block name="Wed" />
		<Block name="Thu" class="offset-1" />
		<Block name="Fri" />
		<Block name="Sat" />
		<Col class="col-2 offset-1">
			<div class="label-container">
				<p>RP/Block</p>
			</div>
		</Col>
		<Col>
			<ChippedTextField name="attr_rp_per_block" chipSize={7} type="number" />
		</Col>
	</Row>
</Container>

<style lang="sass">
	p
		color: white
		margin: 0
		font-weight: 900
		
	.label-container
		display: flex
		justify-content: flex-end
		align-items: center
		height: 100%
		gap: 10px
</style>
