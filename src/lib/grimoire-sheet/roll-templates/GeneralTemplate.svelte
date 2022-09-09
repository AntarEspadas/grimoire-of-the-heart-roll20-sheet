<rolltemplate class="sheet-rolltemplate-general">
	<!-- Removing this comment makes the template stop working -->
	<div class="sheet-template-container sheet-chipped-div sheet-grimoire-color-{'{{color}}'}">
		<h1>{'{{title}}'}</h1>
		<h2>{'{{subtitle}}'}</h2>
		{'{{#name}}'}
		<div class="sheet-name sheet-chipped-div">{'{{name}}'}</div>
		{'{{/name}}'}
		{'{{#desc}}'}
		<div class="sheet-description sheet-chipped-div">
			{'{{desc}}'}
		</div>
		{'{{/desc}}'}
		{'{{#roll}}'}
		<div class="sheet-roll-container">
			<div class="sheet-roll sheet-chipped-div">
				<p class="sheet-roll-value">{'{{roll}}'}</p>
			</div>
		</div>
		{'{{/roll}}'}
		<div class="sheet-all-props">
			{'{{#allprops() title subtitle desc color roll}}'}
			<p>{'{{key}}'}</p>
			<div class="sheet-value sheet-chipped-div">{'{{value}}'}</div>
			{'{{/allprops() title subtitle desc color roll}}'}
		</div>
	</div>
</rolltemplate>

<style lang="sass">
    :global
        .sheet-rolltemplate-general

            .sheet-row
                display: flex


            .sheet-value
                background-color: white
                --chip-size: 7px
                // min-height: 25px
                color: black
                padding-top: 5px
                padding-bottom: 5px
                padding-left: 3px

            .sheet-all-props
                margin-top: 5px
                width: 100%
                display: flex
                flex-direction: column
                gap: 5px

                p
                    color: white
                    // text-align: right
                    font-size: 15px

            .sheet-roll-container
                width: 100%
                display: flex
                justify-content: center

            .sheet-roll
                min-width: 50px
                height: 40px
                background-color: white
                display: flex
                justify-content: center
                align-items: center
                --chip-size: 10px

            .sheet-roll-value
                color: black
                font-size: 20px

            .inlinerollresult.inlinerollresult
                background-color: transparent
                border: none

            h1, h2, p
                font-family: "Helvetica Neue",Helvetica,Arial,sans-serif
                margin: 0
                font-weight: 900

            h1, h2
                color: white
                font-size: 20px
                margin-bottom: 5px

            h2
                font-size: 15px
                font-style: italic

            .sheet-description
                --chip-size: 15px
                min-height: 20px
                padding: 5px
                background-color: white
                margin-top: 8px
                color: black

            .sheet-template-container
                --chip-size: 30px
                min-height: 70px
                background-color: red
                padding: 10px
                padding-top: 5px

            .sheet-name
                --chip-size: 7px
                height: 30px
                width: fit-content
                padding-left: 5px 
                padding-right: 5px 
                background-color: white
                display: flex
                justify-content: center
                align-items: center
                color: black

            .sheet-chipped-div
                clip-path: polygon(calc(100% - var(--chip-size)) 0, 100% var(--chip-size), 100% 100%, 0 100%, 0 0)
            .sheet-chipped-div.sheet-bottom-left
                clip-path: polygon(0 0, 100% 0, 100% 100%, var(--chip-size) 100%, 0 calc(100% - var(--chip-size)))

            .sheet-grimoire-color-, .sheet-grimoire-color-blue
                background-color: #8193ad
            .sheet-grimoire-color-purple
                background-color: #8182ab
            .sheet-grimoire-color-red
                background-color: #ff5673

</style>
