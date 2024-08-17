const getOrderQuantity = () => {
	const orders = JSON.parse(localStorage.getItem("appState")) || [];
	let sum = 0;
	if (orders.length !== 0) {
		if (orders.length === 1) {
			sum = orders.map((p) => p.quantity).reduce((acc, curr) => curr, 0);
		} else {
			sum = orders.map((p) => p.quantity).reduce((acc, curr) => acc + curr);
		}
		return sum;
	} else {
		return sum;
	}
};

export default getOrderQuantity;
