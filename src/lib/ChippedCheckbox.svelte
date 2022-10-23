<script lang="ts">
	import ChippedDiv from './ChippedDiv.svelte';

	export let name: string;
	export let value: string | undefined = undefined;

	export let style: string | undefined = undefined;
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label {style} class="chipped-checkbox">
	<ChippedDiv>
		<input type="checkbox" {name} {value} />
	</ChippedDiv>
</label>

<style lang="sass">
    .chipped-checkbox :global(.chipped-div)
        display: flex
        justify-content: center

    .chipped-checkbox :global(.chipped-div)
        height: 33.2px
    
    label
        width: 100%
        height: 100%

    label:hover, input:hover
        cursor: pointer

    input
        width: 50%

    input:not(:checked)
        display: none
</style>
