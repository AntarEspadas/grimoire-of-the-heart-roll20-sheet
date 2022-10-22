<script lang="ts">
	import ChippedDiv from './ChippedDiv.svelte';

	export let name: string;

	export let style: string | undefined = undefined;
</script>

<ChippedDiv {style} h="33.2px" class="chipped-select">
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
