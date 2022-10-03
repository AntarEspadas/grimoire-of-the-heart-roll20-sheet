<script lang="ts">
	export let name: string;
	export let abbreviation: string | undefined = undefined;

	export let justify = 'start';

	export let i18n: string;

	export let style: string | undefined = undefined;

	$: abbr = abbreviation ? ` (${abbreviation?.toUpperCase()})` : '';

	$: attr = name.toLowerCase();

	function getTemplate(roll: string, risk: string = '') {
		const template = `&{template:general} {{title=${name} ${risk}}} {{color=blue}} {{roll=[[%roll%]]}}`;
		return template.replace('%roll%', roll);
	}
</script>

<div class="rollable-label" {style}>
	<div class="risk">
		<button
			data-i18n="base-default"
			type="roll"
			value={getTemplate(`@{${attr}}[${abbreviation ?? name}]`)}>Base</button
		>
		<button
			type="roll"
			value={getTemplate(`@{${attr}}[${abbreviation ?? name}] + 1d4 - 1d4`, '(d4)')}>D4</button
		>
		<button
			type="roll"
			value={getTemplate(`@{${attr}}[${abbreviation ?? name}] + 1d6 - 1d6`, '(d6)')}>D6</button
		>
	</div>
	<div class="label" style="justify-content: {justify};">
		<p class="label" data-i18n={i18n} data-i18n-vars={abbr || null}>{name}{abbr ? '{{0}}' : ''}</p>
	</div>
</div>

<style lang="sass">
    p, button
        color: white
        font-weight: 900
        font-size: 13px
        margin: 0
        white-space: nowrap

    .rollable-label button::before
        content: none
    button
        background: none
        border: none
        box-shadow: none

    button:hover
        text-decoration: underline

    p.label
        transition-property: transform opacity
        transition-duration: 0.5s
        opacity: 1
        position: absolute
        top: 0

    div.risk
        transform: translateY(-30px)
        opacity: 0
        transition-property: transform opacity
        transition-duration: 0.5s
        positoin: absolute
        top: 0
        display: flex
        flex-direction: row
        justify-content: space-evenly

    div.rollable-label:not(:hover)
        div.risk
            pointer-events: none

    div.rollable-label:hover
        p.label
            transform: translateY(30px)
            opacity: 0
        div.risk
            transform: translateY(0px)
            opacity: 1

    div.rollable-label
        position: relative
        height: 30px
    
    div.label
        width: 100%
        height: 100%
        display: flex
</style>
