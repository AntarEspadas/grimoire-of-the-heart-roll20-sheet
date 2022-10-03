<!--suppress HtmlUnknownTag -->
<script lang="ts">
	export let name: string;

	export let style: string | undefined = undefined;

	let className: string | undefined = undefined;

	export { className as class };
</script>

<label class={className}>
	<input value="1" type="checkbox" {name} />
	<div {style}>
		<slot />
	</div>
</label>

<style lang="sass">

    label
        margin: 0
        padding: 0

    label:hover
        cursor: pointer

    div
        opacity: 0
        margin: 0
        padding: 0
        transition-duration: 1.75s
    

    input
        display: none

    input:checked ~ div
        opacity: 1
        transition-duration: 1s
</style>
