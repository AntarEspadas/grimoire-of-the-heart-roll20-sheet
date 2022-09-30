<script lang="ts">
	import { Container, Row, Col } from 'svelte-materialify';
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';
	import RollableLabel from '$lib/RollableLabel.svelte';
	import ChippedDiv from '$lib/ChippedDiv.svelte';
	import { socialSkills } from '$lib/values';

	const titles = [
		['Slacker', 'Aware', 'Learned', 'Scholarly', 'Encyclopedic', 'Erudite'],
		['Bumbling', 'Decent', 'Persistent', 'Thorough', 'Masterful', 'Transcendent'],
		['Indifferent', 'Inoffensive', 'Kindly', 'Generous', 'Selfless', 'Saintly'],
		['Plain', 'Existent', 'Confident', 'Suave', 'Popular', 'Debonair'],
		['Monotone', 'Rough', 'Eloquent', 'Inspiring', 'Touching', 'Enthralling'],
		['Timid', 'Ordinary', 'Determined', 'Staunch', 'Dauntless', 'Badass']
	];
</script>

<Container class="pt-1">
	<Row dense>
		<Col>
			<Label i18n="social-skills" element="h5">Social Skills</Label>
		</Col>
	</Row>
	<Row dense>
		<Col class="offset-4 pt-0">
			<Label i18n="points-brief">Pts</Label>
		</Col>
		<Col class="col-2 pt-0">
			<Label i18n="tier">Tier</Label>
		</Col>
		<Col class="col-4 pt-0">
			<Label i18n="title">Title</Label>
		</Col>
	</Row>
	{#each socialSkills as skill, i}
		<Row dense>
			<Col class="col-4 pt-0">
				<RollableLabel i18n="social-skill-{skill}" justify="end" name={skill} />
			</Col>
			<Col class="col-2 pt-0">
				<ChippedTextField
					name="attr_{skill.toLowerCase()}_points"
					type="number"
					chipSize={7}
					value="0"
				/>
			</Col>
			<Col class="col-2 pt-0">
				<ChippedTextField
					name="attr_{skill.toLowerCase()}"
					type="number"
					chipSize={7}
					disabled
					value="0"
				/>
			</Col>
			<Col class="col-4 pt-0">
				<ChippedDiv h="33.2px" style="display: flex; align-items: center;">
					<select name="attr_{skill.toLocaleLowerCase()}_title">
						{#each titles[i] as title, i}
							<option data-i18n={title.toLowerCase()} value={i} selected={i == 0}>{title}</option>
						{/each}
					</select>
				</ChippedDiv>
			</Col>
		</Row>
	{/each}
</Container>

<style lang="sass">
    select
        margin: 0
        padding: 0
        width: 100%
        padding-left: 5px
        cursor: default
        color: black
        font-weight: 600
        pointer-events: none
</style>
