<script lang="ts">
	import ChippedDiv from './ChippedDiv.svelte';

	export let name: string;

	export let style: string | undefined = undefined;
</script>

<ChippedDiv {style} class="chipped-select">
	<select {name}>
		<slot />
	</select>
</ChippedDiv>

<style lang="sass">

    :global(.chipped-div.chipped-select)
        height: 33.2px

    select
        // all: unset
        outline: none
        border: none
        text-align-last: center
        text-align: center
        width: 100%
        height: 100%

        -webkit-appearance: none
        -moz-appearance: none
        text-indent: 1px
        text-overflow: ''
</style>
