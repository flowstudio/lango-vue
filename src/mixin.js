export default {
	beforeCreate() {
		if (this.$options.i18n) {
			this._i18n = this.$options.i18n;
			this._i18n.subscribeData(this);
			this._i18nSubscribing = true;
		} else if (this.$root && this.$root.$i18n) {
			this._i18n = this.$root.$i18n;
			this._i18n.subscribeData(this);
			this._i18nSubscribing = true;
		}
	},
	beforeDestroy() {
		if (!this._i18n) {
			return;
		}
		
		if (this._i18nSubscribing) {
			this._i18n.unsubscribeData(this);
			delete this._i18nSubscribing;
		}

		delete this._i18n;
	}
};