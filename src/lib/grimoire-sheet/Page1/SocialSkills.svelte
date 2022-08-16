<script>
	import { Container, Row, Col } from 'svelte-materialify';
	import ChippedTextField from '$lib/ChippedTextField.svelte';

	const skills = ['Knowledge', 'Discipline', 'Empathy', 'Charm', 'Expression', 'Courage'];
</script>

<Container class="pt-1">
	<Row dense>
		<Col>
			<h5>Social Skills</h5>
		</Col>
	</Row>
	<Row dense>
		<Col class="col-2 offset-4 pt-0">
			<p>Pts</p>
		</Col>
		<Col class="col-2 pt-0">
			<p>Tier</p>
		</Col>
		<Col class="pt-0">
			<p>Title</p>
		</Col>
	</Row>
	{#each skills as skill}
		<Row dense>
			<Col class="col-4 pt-0">
				<div>
					<p>{skill}</p>
				</div>
			</Col>
			<Col class="col-2 pt-0">
				<ChippedTextField name="attr_{skill.toLowerCase()}_points" type="number" chipSize={7} />
			</Col>
			<Col class="col-2 pt-0">
				<ChippedTextField name="attr_{skill.toLowerCase()}_tier" type="number" chipSize={7} />
			</Col>
			<Col class="pt-0">
				<ChippedTextField name="attr_{skill.toLowerCase()}_title" disabled chipSize={7} />
			</Col>
		</Row>
	{/each}
</Container>

<style lang="sass">
    h5, p 
        font-weight: 900
        color: white
        margin: 0

    div
        display: flex
        justify-content: flex-end
</style>
