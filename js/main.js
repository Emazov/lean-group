// ----------PRODUCTS SECTION
// $(document).ready(function () {
// 	$('.products-tabs__btn').click(function () {
// 		$(this)
// 			.toggleClass('products-tabs__btn_active')
// 			.siblings()
// 			.removeClass('products-tabs__btn_active');
// 	});
// });

$(document).ready(function () {
	const productsTab = document.querySelectorAll('.products-tabs__btn');
	const productsContent = document.querySelectorAll('.products__content');
	let productTabName;

	productsTab.forEach((item) => {
		item.addEventListener('click', setProductsTab);
	});

	function setProductsTab() {
		productsTab.forEach((item) => {
			item.classList.remove('products-tabs__btn_active');
		});
		this.classList.add('products-tabs__btn_active');
		productTabName = this.getAttribute('data-tab-name');
		setProductContent(productTabName);
	}

	function setProductContent(productTabName) {
		productsContent.forEach((item) => {
			item.classList.contains(productTabName)
				? item.classList.add('products__content_active')
				: item.classList.remove('products__content_active');
		});
	}
});
