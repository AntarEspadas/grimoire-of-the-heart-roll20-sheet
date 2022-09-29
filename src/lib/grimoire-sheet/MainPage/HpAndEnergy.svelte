<script>
	import { Container, Row, Col } from 'svelte-materialify';
	import ChippedTextField from '$lib/ChippedTextField.svelte';

	import CustomCheckbox from '$lib/CustomCheckbox.svelte';
	import ChippedDiv from '$lib/ChippedDiv.svelte';
	import ChippedTextArea from '$lib/ChippedTextArea.svelte';
	import Label from '$lib/Label.svelte';
</script>

<Container class="pa-1 pl-4">
	<Row>
		<Col class="pt-0">
			<Row dense>
				<Col class="col-7">
					<Label justify="end">Hit Points</Label>
				</Col>
				<Col>
					<ChippedTextField name="attr_hp_max" chipSize={7} />
				</Col>
			</Row>
			<Row dense>
				<Col>
					<ChippedTextField name="attr_hp" chipSize={10} h="100px" fontSize="50px" />
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
								<img
									src="https://raw.githubusercontent.com/Naratna/grimoire-of-the-heart-roll20-sheet/e6d6e462a93e31fa715c6ddc4063a62f03f4ef99/static/assets/skull.svg"
									alt="skull"
								/>
							</CustomCheckbox>
						</ChippedDiv>
					</Col>
				{/each}
			</Row>
			<Row dense>
				<Col class="col-7">
					<Label justify="end">Damage Red</Label>
				</Col>
				<Col>
					<ChippedTextField name="attr_damage_reduction" chipSize={7} />
				</Col>
			</Row>
		</Col>
		<Col class="pt-0">
			<Row dense>
				<Col>
					<Label>Energy/Max</Label>
				</Col>
			</Row>
			<Row dense>
				<Col class="col-4">
					<ChippedTextField name="attr_energy" chipSize={7} />
				</Col>
				<Col class="col-4">
					<ChippedTextField name="attr_energy_max" chipSize={7} />
				</Col>
			</Row>
			<Row dense>
				<Col>
					<Label>Buffs/Conditions</Label>
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
</style>
