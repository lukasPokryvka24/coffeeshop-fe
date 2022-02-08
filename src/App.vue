<template>
	<div class="q-pa-md container">
		<nav class="header">
			<img src="./assets/logo2.png" width="200" alt="logo" />
		</nav>
		<main class="column justify-center content">
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
						v-model="order.email"
						label="Your email"
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
					:rows="data"
					:columns="columns"
					row-key="orderId"
					color="amber"
					style="width: 800px"
					:loading="orderLoading"
				/>
			</section>
		</main>
	</div>
</template>

<script setup>
import { useQuasar } from 'quasar';
import { onMounted, reactive, ref } from 'vue';
import { columns } from './data/tableData';
import api from './api/api';

const $q = useQuasar();
$q.dark.set(true);

const order = reactive({
	user: '',
	email: ''
});
const data = ref([]);
const orderLoading = ref(false);
onMounted(() => {
	orderLoading.value = true;
	api
		.get('/objednavky')
		.then((res) => {
			console.log(res);
			data.value = res.data.message.map((item) => {
				return {
					email: item.email.S,
					orderId: item.idObjednavky.S,
					name: item.meno.S,
					orderStatus: item.stavObjednavky.S
				};
			});
			orderLoading.value = false;
		})
		.catch((err) => {
			console.log(err);
			orderLoading.value = false;
		});
});

const onSubmit = () => {
	api
		.post('objednanie-kavy', {
			customerName: order.user,
			email: order.email
		})
		.then((res) => {
			onReset();
		});
};

const onReset = () => {
	order.user = '';
	order.email = '';
};
</script>

<style lang="sass">
body, #app, .container
	min-height: 100vh
body.body--dark
	background: #3D405B
.header
	height: 10%
.content
	height: 90%
</style>
