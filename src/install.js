import extend from './extend';
import mixin from './mixin';

export let Vue;

export function install(_Vue) {
	/* istanbul ignore if */
	if (install.installed && _Vue === Vue) {
		if (process.env.NODE_ENV !== 'production') {
			console.warn('already installed.');
		}
		return;
	}
	
	install.installed = true;

	Vue = _Vue;

	extend(Vue);
	Vue.mixin(mixin);
};