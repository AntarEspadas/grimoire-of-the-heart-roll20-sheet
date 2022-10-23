<script lang="ts">
	import Economic from './Economic.svelte';

	import Social from './Social.svelte';

	import Preferences from './Preferences.svelte';

	import Personal from './Personal.svelte';

	import Physical from './Physical.svelte';

	import Hobbies from './Hobbies.svelte';

	import Portrait from './Portrait.svelte';

	import Past from './Past.svelte';

	import ChippedDiv from '$lib/ChippedDiv.svelte';

	import Header from './Header.svelte';

	let bgColor = '#8182AB';
</script>

<div class="bio-page">
	<ChippedDiv style="grid-area: header;">
		<Header />
	</ChippedDiv>
	<ChippedDiv style="grid-area: past;">
		<Past />
	</ChippedDiv>
	<!-- <ChippedDiv {bgColor} chipSize={40} h="100%" style="grid-area: portrait;">
			<Portrait />
		</ChippedDiv> -->
	<ChippedDiv style="grid-area: hobbies;">
		<Hobbies />
	</ChippedDiv>
	<ChippedDiv style="grid-area: physical;">
		<Physical />
	</ChippedDiv>
	<ChippedDiv style="grid-area: personal;">
		<Personal />
	</ChippedDiv>
	<ChippedDiv style="grid-area: preferences;">
		<Preferences />
	</ChippedDiv>
	<ChippedDiv style="grid-area: social;">
		<Social />
	</ChippedDiv>
	<ChippedDiv style="grid-area: economic;">
		<Economic />
	</ChippedDiv>
</div>

<style lang="scss">
	.bio-page > :global(.chipped-div) {
		background-color: #8182ab;
		--chip-size: 40px;
		height: 100%;
	}

	.bio-page {
		padding: 10px;
		display: grid;
		gap: 10px;
		align-items: center;
		justify-content: center;
		grid-template-areas: 'header' 'past' 'portrait' 'hobbies' 'physical' 'personal' 'preferences' 'social' 'economic';
	}

	@media (min-width: 600px) {
		.bio-page {
			grid-template-columns: 1fr 1fr;
			grid-template-areas:
				'header header'
				'past past'
				'hobbies physical'
				'personal physical'
				'personal preferences'
				'social preferences'
				'social economic';
		}
	}
</style>
