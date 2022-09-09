<script context="module" lang="ts" sheetworker>
	import '../../lib/Tabs/TabsWorker.ts';
	import { attachRepeatingListeners, attachListeners } from '../../lib/EditableFieldWorker';
	import { num } from '../../lib/util';
	import { socialSkills } from '../../lib/values';

	attachRepeatingListeners('personae', 'items', 'feats');
	attachListeners('main_weapon');

	on('change:character_level change:vitality', () => {
		getAttrs(['vitality', 'character_level'], (attrs) => {
			console.log(num(attrs));
			const { vitality, character_level } = num(attrs);
			const energy_max = Math.floor(vitality + character_level / 2);
			const hp_max = Math.floor(25 + (vitality + 5) * character_level);
			setAttrs({ energy_max, hp_max });
		});
	});

	const tierUpperBounds = [4, 14, 29, 54, 79];

	on(socialSkills.map((skill) => `change:${skill}_points`).join(' '), (e) => {
		console.log(e);
		const tierAttr = e.sourceAttribute?.replace('_points', '') as string;
		const titleAttr = tierAttr + '_title';
		const points = Math.max(+e.newValue! || 0, 0);
		let tier;
		for (tier = 0; tier < tierUpperBounds.length; tier++)
			if (points <= tierUpperBounds[tier]) break;
		console.log(tier);
		setAttrs({ [tierAttr]: tier, [titleAttr]: tier });
	});

	on('change:weapon_damage', (e) => {
		const value = e.newValue?.replaceAll('{', '').replaceAll('}', '').replace('@', '') as string;
		setAttrs({ weapon_damage_display: value });
	});

	on('change:hdc_mod change:ddc_mod', (e) => {
		const attr = e.sourceAttribute?.substring(0, 3) as string;
		const value = e.newValue as string;
		const die = Math.max(1, Math.min(12, 6 + +value * 2));
		console.log(die);
		setAttrs({ [attr]: die });
	});
</script>

<script>
	import { MaterialApp } from 'svelte-materialify';
	import { Tab, TabButton, TabView } from '$lib/Tabs';
	import MainPage from '$lib/grimoire-sheet/MainPage/MainPage.svelte';
	import SecondaryPage from '$lib/grimoire-sheet/SecondaryPage/SecondaryPage.svelte';
	import PersonaPage from '$lib/grimoire-sheet/PersonaPage/PersonaPage.svelte';
	import GeneralTemplate from '$lib/grimoire-sheet/roll-templates/GeneralTemplate.svelte';

	const production = process.env.NODE_ENV == 'production';
	// const production = true;
</script>

<div class="sheet">
	<MaterialApp>
		<TabView>
			<div class="tab-buttons">
				<TabButton>Main</TabButton>
				<TabButton>Secondary</TabButton>
				<TabButton>Persona</TabButton>
				<TabButton>Persona 2</TabButton>
				<TabButton>Bio</TabButton>
			</div>
			<div class="spacer" />
			<Tab>
				<MainPage />
			</Tab>
			<Tab>
				<SecondaryPage />
			</Tab>
			<Tab>
				<PersonaPage suffix="" />
			</Tab>
			<Tab>
				<PersonaPage suffix="_2" />
			</Tab>
			<Tab />
		</TabView>
	</MaterialApp>
</div>

{#if production}
	<GeneralTemplate />
{/if}

<style lang="sass">

	.tab-buttons
		// display: flex
		// justify-content: center

	.spacer
		// height: 50px

	div.sheet
		min-width: 340px
		position: relative

	@media (min-width: 600px)
		div.sheet
			width: 850px

	:global(.charactersheet div.repitem .itemcontrol)
		z-index: 10

</style>
