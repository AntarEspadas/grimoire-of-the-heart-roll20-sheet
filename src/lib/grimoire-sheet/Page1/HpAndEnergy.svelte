<script>
	import { Container, Row, Col } from 'svelte-materialify';
	import ChippedTextField from '$lib/ChippedTextField.svelte';

	import CustomCheckbox from '$lib/CustomCheckbox.svelte';
	import ChippedDiv from '$lib/ChippedDiv.svelte';
	import ChippedTextArea from '$lib/ChippedTextArea.svelte';
</script>

<Container class="pa-1 pl-4">
	<Row>
		<Col class="pt-0">
			<Row dense>
				<Col class="col-7 left-col">
					<p>Hit Points</p>
				</Col>
				<Col>
					<ChippedTextField disabled name="attr_hit_points_max" chipSize={7} />
				</Col>
			</Row>
			<Row dense>
				<Col>
					<ChippedTextField name="attr_hit_points" chipSize={10} h="100px" fontSize="50px" />
				</Col>
			</Row>
			<Row dense>
				{#each [1, 2, 3] as i}
					<Col>
						<ChippedDiv style="width: 100%; height: 35px; background-color: white" chipSize={7}>
							<CustomCheckbox
								name="attr_deaths_door_{i}"
								style="height: 35px; display: flex; justify-content: center; align-items: center;"
							>
								<img src="http://kurisu.pls-step-on.me/media/noun-skull-26391.svg" alt="skull" />
							</CustomCheckbox>
						</ChippedDiv>
					</Col>
				{/each}
			</Row>
			<Row dense>
				<Col class="col-7 left-col">
					<p>Damage Red</p>
				</Col>
				<Col>
					<ChippedTextField name="attr_damage_reduction" chipSize={7} />
				</Col>
			</Row>
		</Col>
		<Col class="pt-0">
			<Row dense>
				<Col>
					<p>Energy/Max</p>
				</Col>
			</Row>
			<Row dense>
				<Col class="col-4">
					<ChippedTextField name="attr_energy" chipSize={7} />
				</Col>
				<Col class="col-4">
					<ChippedTextField name="attr_energy_max" disabled chipSize={7} />
				</Col>
			</Row>
			<Row dense>
				<Col>
					<p>Buffs/Conditions</p>
				</Col>
			</Row>
			<Row dense>
				<Col class="col-11">
					<ChippedTextArea name="attr_buffs_conditions" chipSize={10} w="100%" h="120px" />
				</Col>
			</Row>
		</Col>
	</Row>
</Container>

<style lang="sass">
	img
		height: 100%

	p
		margin: 0
		color: white
		font-weight: 900
	
	:global(.left-col)
		display: flex
		align-items: center
		justify-content: flex-end
</style>
