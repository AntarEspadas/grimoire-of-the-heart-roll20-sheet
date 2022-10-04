<script lang="ts">
	let value = 'true';

	export let chatTemplate: string | undefined = undefined;
	export let rollTemplate: string | undefined = undefined;

	export let fieldName = '';

	export let rollAttribute: string | undefined = undefined;

	export let hasRoll = false;

	export let hideBubble = false;

	export let display = 'block';

	let className = '';

	export { className as class };

	const production = process.env.NODE_ENV !== 'development';

	const positionRelative = production && !fieldName.length ? undefined : 'position: relative;';
</script>

<div class="editable-field {className}" style={positionRelative} style:--display={display}>
	<input class="edit-mode" type="hidden" name="attr_{fieldName}editmode" {value} />
	<button
		class="editbutton"
		type="action"
		name="act_{fieldName}editbutton"
		on:click={() => (value = value === 'true' ? 'false' : 'true')}
	/>
	{#if !hideBubble}
		<button class="showbutton" type="roll" value={chatTemplate}>w</button>
	{/if}
	{#if rollAttribute}
		<input class="attack-enabled" type="hidden" name={rollAttribute} value={Number(hasRoll)} />
		<button class="attackbutton" type="roll" value={rollTemplate}>T</button>
	{/if}

	<slot />

	<div class="edit">
		<slot name="edit" />
	</div>
	<div class="normal">
		<slot name="normal" />
	</div>
</div>

<style lang="sass">

    .editable-field:hover
        button
            transition-duration: 0.75s
            opacity: 1

        .showbutton
            transition-delay: 0.15s

        .attackbutton
            transition-delay: 0.3s
        
    .editable-field:not(:hover)
        button
            transition-duration: 1s
            opacity: 0
            transform: translateY(20px)


    .editable-field .showbutton
        right: 12px

    .editable-field .attackbutton
        top: 20px
        right: -4px 
        font-family: "dicefontd20"

    .editable-field button
        transition-property: opacity, transform
        position: absolute
        z-index: 5
        right: 0
        top: -5px
        font-size: 20px
        font-family: Pictos
        // -webkit-text-stroke-width: 1px
        // -webkit-text-stroke-color: white
        background: none
        border: none
        box-shadow: none

    .editable-field button::before
        content: ""

    button:hover
        font-weight: 900

    .editbutton::after
        content: "p"

    .normal
        display: var(--display)

    .edit
        display: none

    button.attackbutton
        display: var(--display)

    input.edit-mode[value="true"] ~ .edit
        display: var(--display)

    input.edit-mode[value="true"] ~ .normal
        display: none

    input.edit-mode[value="true"] ~ .editbutton::after
        content: "3"

    input.attack-enabled[value="0"] ~ button.attackbutton
        display: none
</style>
