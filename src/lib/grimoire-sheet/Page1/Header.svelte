<script>
	import { TextField, Container, Row, Col } from 'svelte-materialify';
	import ChippedTextField from '$lib/ChippedTextField.svelte';

	const bgColor = 'white';
</script>

<Container class="pt-0" style="transform: translateX(-1%)">
	<Row>
		<Col class="col-3 sm-2">
			<div>
				<p>Character</p>
			</div>
		</Col>
		<Col class="col-9 sm-6">
			<ChippedTextField name="attr_character_name" chipSize={7} {bgColor} />
		</Col>
		<Col class="col-3 sm-1">
			<div>
				<p>Class</p>
			</div>
		</Col>
		<Col class="col-5 sm-3">
			<ChippedTextField name="attr_class" chipSize={7} {bgColor} />
		</Col>
		<Col class="col-1 sm-2">
			<div>
				<p>level</p>
			</div>
		</Col>
		<Col class="col-3 sm-2">
			<ChippedTextField type="number" name="attr_level" chipSize={7} {bgColor} />
		</Col>
		<Col class="col-3 sm-1">
			<div>
				<p>Arcana</p>
			</div>
		</Col>
		<Col class="sm-3 mr-sm-0 mr-2">
			<ChippedTextField name="attr_arcana" chipSize={7} {bgColor} />
		</Col>
		<Col class="col-1 sm-1">
			<div>
				<p>Player</p>
			</div>
		</Col>
		<Col class="sm-3">
			<ChippedTextField name="attr_player" chipSize={7} {bgColor} />
		</Col>
	</Row>
</Container>

<style lang="sass">

    div
        height: 100%
        width: 100%
        display: flex
        justify-content: flex-end
        align-items: center

    p
        text-align: right
        font-weight: 900
        color: white
        margin: 0
        transform: translateX(15px)
</style>
