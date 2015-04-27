MaterialPrime.widget.Checkbox = PrimeFaces.widget.BaseWidget.extend({
	init : function(cfg) {
		this._super(cfg);
		this.input = jQuery(this.jqId+"_input");
		var that = this;
		
		this.input.on("change",function(){
			if(that.cfg.behaviors && that.cfg.behaviors.valueChange) {
				that.cfg.behaviors.valueChange.call(that.input);
			}
		});
	}
});