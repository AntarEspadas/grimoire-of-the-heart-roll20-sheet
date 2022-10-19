<script lang="ts">
	import { Container, Row, Col } from 'svelte-materialify';
	import ChippedTextField from '$lib/ChippedTextField.svelte';
	import Label from '$lib/Label.svelte';
	import RollableLabel from '$lib/RollableLabel.svelte';
	import ChippedDiv from '$lib/ChippedDiv.svelte';
	import { socialSkills } from '$lib/values';
	import ChippedSelect from '$lib/ChippedSelect.svelte';

	const titles = [
		['Slacker', 'Aware', 'Learned', 'Scholarly', 'Encyclopedic', 'Erudite'],
		['Bumbling', 'Decent', 'Persistent', 'Thorough', 'Masterful', 'Transcendent'],
		['Indifferent', 'Inoffensive', 'Kindly', 'Generous', 'Selfless', 'Saintly'],
		['Plain', 'Existent', 'Confident', 'Suave', 'Popular', 'Debonair'],
		['Monotone', 'Rough', 'Eloquent', 'Inspiring', 'Touching', 'Enthralling'],
		['Timid', 'Ordinary', 'Determined', 'Staunch', 'Dauntless', 'Badass']
	];

	const areas =
		"'. pts tier title'\n" +
		socialSkills
			.map((skill) => skill.toLowerCase())
			.map((skill) => `'${skill}-label ${skill}-pts ${skill}-tier ${skill}-title'`)
			.join('\n');
</script>

<div class="social-skills">
	<Label class="title" i18n="social-skills" element="h5">Social Skills</Label>
	<div class="grid" style:grid-template-areas={areas}>
		<Label style="grid-area: pts;" i18n="points-brief">Pts</Label>
		<Label style="grid-area: tier" i18n="tier">Tier</Label>
		<Label style="grid-area: title" i18n="title">Title</Label>

		{#each socialSkills.map((skill) => [skill, skill.toLowerCase()]) as [skill, lSkill], i}
			<RollableLabel
				style="grid-area: {lSkill}-label;"
				i18n="social-skill-{lSkill}"
				justify="end"
				name={skill}
			/>
			<ChippedTextField
				style="grid-area: {lSkill}-pts;"
				name="attr_{lSkill}_points"
				type="number"
				chipSize={7}
				value="0"
			/>
			<ChippedTextField
				style="grid-area: {lSkill}-tier;"
				name="attr_{lSkill}"
				type="number"
				chipSize={7}
				disabled
				value="0"
			/>
			<ChippedSelect style="grid-area: {lSkill}-title" name="attr_{lSkill}_title">
				{#each titles[i] as title, i}
					<option data-i18n={title.toLowerCase()} value={i} selected={i == 0}>{title}</option>
				{/each}
			</ChippedSelect>
		{/each}
	</div>
</div>

<style lang="scss">
	.social-skills {
		padding: 10px;

		.grid {
			display: grid;
			gap: 5px;
			grid-template-columns: 2fr 1fr 1fr 2fr;
		}
	}

	.social-skills :global(.chipped-select select) {
		margin: 0;
		padding: 0;
		width: 100%;
		padding-left: 5px;
		cursor: default;
		color: black;
		font-weight: 600;
		pointer-events: none;
	}
</style>
