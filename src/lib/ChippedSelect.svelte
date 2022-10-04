<script lang="ts">
	import ChippedDiv from './ChippedDiv.svelte';

	export let name: string;
</script>

<ChippedDiv h="33.2px" class="d-flex justify-center chipped-select">
	<select {name}>
		<slot />
	</select>
</ChippedDiv>

<style lang="sass">
    select
        text-align-last: center
        width: 100%
        height: 100%
</style>
