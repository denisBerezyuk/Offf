class Header {
	selectors = {
		root: '[data-js-header]',
		menu: '[data-js-header-menu]',
		link: '[data-js-header-menu-link]',
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

	toggleVisibleMenu = () => {
		this.burgerButton.classList.toggle(this.stateClasses.isActive);
		this.menuElement.classList.toggle(this.stateClasses.isVisible);
		document.body.classList.toggle(this.stateClasses.isLock);
	};

	onBurgerButtonClick = event => {
		this.toggleVisibleMenu();
	};

	onMenuClick = event => {
		const linkElement = event.target.closest(this.selectors.link);

		if (linkElement && linkElement.href.includes('/#')) {
			this.toggleVisibleMenu();
		}
	};

	bindEvents() {
		this.burgerButton.addEventListener('click', this.onBurgerButtonClick);
		this.menuElement.addEventListener('click', this.onMenuClick);
	}
}

export default Header;
