<script lang="ts">
	import ChippedDiv from './ChippedDiv.svelte';

	export let name: string;
	export let value: string | undefined = undefined;

	export let style: string | undefined = undefined;
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label {style}>
	<ChippedDiv h="33.2px" class="d-flex justify-center">
		<input type="checkbox" {name} {value} />
	</ChippedDiv>
</label>

<style lang="sass">
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
