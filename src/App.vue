<template>
	<div class="q-pa-md">
		<div class="row justify-center">
			<img src="./assets/logo.svg" width="300" alt="logo" />
		</div>
		<section class="row justify-center q-mt-lg">
			<q-card
				tag="form"
				@submit.prevent="onSubmit"
				@reset="onReset"
				class="row column items-center q-pa-lg"
				style="width: 500px"
			>
				<q-input
					v-model="order.user"
					label="Who is ordering"
					color="secondary"
					:clearable="true"
					:autofocus="true"
					type="string"
					maxlength="18"
					style="width: 100%"
				></q-input>
				<q-input
					v-model="order.coffee"
					label="Which coffee"
					color="secondary"
					:clearable="true"
					type="string"
					maxlength="18"
					style="width: 100%"
				></q-input>
				<div class="q-mt-lg">
					<q-btn label="Submit" type="submit" color="positive" />
					<q-btn
						label="Reset"
						type="reset"
						color="light"
						flat
						class="q-ml-sm"
					/>
				</div>
			</q-card>
		</section>
		<section class="row justify-center q-mt-xl">
			<q-table
				title="Orders"
				:rows="rows"
				:columns="columns"
				row-key="name"
				color="amber"
				style="width: 800px"
			/>
		</section>
	</div>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import { columns, rows } from './data/tableData';

const $q = useQuasar();
$q.dark.set(true);

const order = ref({
	user: '',
	coffee: ''
});

const onSubmit = () => {
	console.log('submit');
};

const onReset = () => {
	order.value.user = '';
	order.value.coffee = '';
};
</script>

<style lang="sass">
body
	min-height: 100vh
body.body--dark
	background: #3D405B
</style>
