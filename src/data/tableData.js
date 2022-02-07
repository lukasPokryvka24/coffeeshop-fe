export const columns = [
	{
		name: 'orderId',
		required: true,
		label: 'Order ID',
		field: 'orderId',
		align: 'left'
	},
	{
		name: 'recipient',
		align: 'center',
		label: 'Recipient',
		field: 'recipient'
	},
	{
		name: 'status',
		label: 'Status',
		field: 'status'
	}
];

export const rows = [
	{
		name: 'Test1',
		orderId: '123',
		recipient: 'Testik',
		status: 'in progress'
	},
	{
		name: 'Test2',
		orderId: '1234',
		recipient: 'Testik2',
		status: 'done'
	}
];
