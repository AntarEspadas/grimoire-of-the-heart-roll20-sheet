<script lang="ts">
	import Label from '$lib/Label.svelte';
	import Resistance from './Resistance.svelte';

	export let cols = 3;
	export let rows = 'auto repeat(4, 30px 32px)';
	export let areas = `
            'title title title'
            'physical-img fire-img ice-img'
			'physical fire ice'
			'thunder-img wind-img psychokinetic-img'
			'thunder wind psychokinetic'
			'nuclear-img dark-img light-img'
			'nuclear dark light'
			'status-img intel-img .'
			'status intel .'
    `;
</script>

<div class="resistances">
	<div class="grid" style="--areas: {areas}; --rows: {rows}; --cols: {cols}">
		<Label i18n="resistances" element="h6" style="grid-area: title;">Resistances</Label>
		<Resistance type="physical" />
		<Resistance type="fire" />
		<Resistance type="ice" />
		<Resistance type="thunder" />
		<Resistance type="wind" />
		<Resistance type="psychokinetic" />
		<Resistance type="nuclear" />
		<Resistance type="dark" />
		<Resistance type="light" />
		<Resistance type="status" />
		<Resistance type="intel" />
	</div>
</div>

<style lang="scss">
	.resistances {
		padding: 10px;
	}

	.grid {
		display: grid;
		gap: 5px;
		grid-template-columns: repeat(var(--cols), 1fr);
		grid-template-rows: var(--rows);
		grid-template-areas: var(--areas);
	}
</style>
