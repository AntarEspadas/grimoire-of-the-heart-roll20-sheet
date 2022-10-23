<script lang="ts">
	import { key } from './TabView.svelte';
	import type { Context } from './TabView.svelte';
	import { getContext } from 'svelte';
	// import { Button } from 'svelte-materialify';

	export let style: string | undefined = undefined;

	export let toggleAttribute: string | undefined = undefined;

	const context = getContext<Context>(key);
	const index = context.getTabButtonIndex();
	const currentIndex = context.currentIndex;

	const type = 'action' as any;
</script>

{#if toggleAttribute}
	<input class="toggle-tab" type="hidden" name={toggleAttribute} value="0" />
{/if}

<span>
	<button
		on:click={() => currentIndex.set(String(index))}
		{type}
		name="act_tabs_switch_button"
		value={index}
		{style}
		class="tabs_switch_button_{index}"
	>
		<slot />
	</button>
</span>

<style lang="sass">
    input.toggle-tab + *
        display: inline-flex

    input.toggle-tab[value='0'] + *
        display: none

    button 
        appearance: none
        background-color: #FAFBFC
        border: 1px solid rgba(27, 31, 35, 0.15)
        border-radius: 6px
        box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset
        box-sizing: border-box
        color: #24292E
        cursor: pointer
        display: inline-block
        font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"
        font-size: 14px
        font-weight: 500
        line-height: 20px
        list-style: none
        padding: 6px 16px
        position: relative
        transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1)
        user-select: none
        -webkit-user-select: none
        touch-action: manipulation
        vertical-align: middle
        white-space: nowrap
        word-wrap: break-word


    button:hover 
        background-color: #F3F4F6
        text-decoration: none
        transition-duration: 0.1s
        

    button:disabled 
        background-color: #FAFBFC
        border-color: rgba(27, 31, 35, 0.15)
        color: #959DA5
        cursor: default


    button:active 
        background-color: #EDEFF2
        box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset
        transition: none 0s
    

    button:focus 
        outline: 1px transparent


    button:before 
        display: none


    button:-webkit-details-marker 
        display: none

</style>
