<script lang="ts">
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';
	import { Container, Row, Col } from 'svelte-materialify';
	import CombatSkill from './CombatSkill.svelte';

	const bgColor = 'white';
</script>

<Container>
	<Row noGutters>
		<Col>
			<Label element="h5">Combat Skills</Label>
		</Col>
	</Row>
	<Row>
		<Col class="col-4 pt-0 pb-1">
			<CombatSkill name="Strength" abbreviation="str" />
		</Col>
		<Col class="col-4 pt-0 pb-1">
			<CombatSkill name="Technique" abbreviation="tec" />
		</Col>
		<Col class="col-4 pt-0 pb-1">
			<CombatSkill name="Vitality" abbreviation="vit" />
		</Col>
	</Row>
	<Row>
		<Col class="col-4 pt-0">
			<CombatSkill name="Magic" abbreviation="mag" />
		</Col>
		<Col class="col-4 pt-0">
			<CombatSkill name="Agility" abbreviation="agi" />
		</Col>
		<Col class="col-4 pt-0">
			<CombatSkill name="Luck" abbreviation="lck" />
		</Col>
	</Row>
</Container>
