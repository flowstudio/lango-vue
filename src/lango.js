import Lango from 'lango';

export default class LangoVue extends Lango {
	subscribeData(vm) {
		vm._i18nListener = vm._i18nListener || (() => {
			vm.$nextTick(function() {
				this.$forceUpdate();
			});
		});

		this.on('update', vm._i18nListener);
	}
	
	unsubscribeData(vm) {
		this.off('update', vm._i18nListener);
	}
};