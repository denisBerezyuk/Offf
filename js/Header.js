class Header {
	selectors = {
		root: '[data-js-header]',
		menu: '[data-js-header-menu]',
		burgerButton: '[data-js-header-burger-button]',
	};

	stateClasses = {
		isActive: 'is-active',
		isVisible: 'is-visible',
		isLock: 'is-lock',
	};

	constructor() {
		this.rootElement = document.querySelector(this.selectors.root);
		this.menuElement = this.rootElement.querySelector(this.selectors.menu);
		this.burgerButton = this.rootElement.querySelector(
			this.selectors.burgerButton
		);

		this.bindEvents();
	}

	onBurgerButtonClick = event => {
		this.burgerButton.classList.toggle(this.stateClasses.isActive);
		this.menuElement.classList.toggle(this.stateClasses.isVisible);
		document.body.classList.toggle(this.stateClasses.isLock);
	};

	bindEvents() {
		this.burgerButton.addEventListener('click', this.onBurgerButtonClick);
	}
}

export default Header;
