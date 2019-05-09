export default function(Vue) {
	Object.defineProperty(Vue.prototype, '$i18n', {
		get() {
			return this._i18n;
		}
	});
	
	Vue.prototype.$t = function() {
		return this._i18n.translate.apply(this._i18n, arguments);
	};
};