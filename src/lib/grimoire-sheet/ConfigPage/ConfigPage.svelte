<script lang="ts">
	import ChippedCheckbox from '$lib/ChippedCheckbox.svelte';

	import ChippedDiv from '$lib/ChippedDiv.svelte';
	import Label from '$lib/Label.svelte';
	import { Row, Col, Container } from 'svelte-materialify';

	let bgColor = '#8395AE';
</script>

<Container>
	<ChippedDiv {bgColor} chipSize={20}>
		<Container>
			<Row>
				<Col class="col-1">
					<ChippedCheckbox name="attr_enable_persona_2" value="1" />
				</Col>
				<Col>
					<Label i18n="second-persona-page">Second Persona Page</Label>
				</Col>
			</Row>
		</Container>
	</ChippedDiv>
</Container>
