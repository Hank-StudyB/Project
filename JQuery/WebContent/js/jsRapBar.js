function SetPosition(value){
$('#demo1')[0].SetPosition(value);
}

$(document).ready(function(){
$('#demo1').jsRapBar({position:0.1,height:'24px',
onClick:function(value){
	alert(value);
}
});
$('#demo2').jsRapBar({position:0.5,barColor:'#2C3E50',height:'24px'});
$('#demo3').jsRapBar({enabled:false,position:0.8,barColor:'red',height:'24px'});
});
(function ($) {
	$.fn.jsRapBar = function (options) {

		return this.each(function () {
			this.opt = $.extend({
				enabled: true,
				position: 0,
				width: '100%',
				height: '16px',
				barColor: 'green',
				backColor: 'white',
				onClick: null,
				onChange: null
			}, options);
			$(this).empty().addClass('rapBarOut').css({ width: this.opt.width, height: this.opt.height, background: this.opt.backColor });
			let inBar = $('<div>').addClass('rapBarIn').css({ 'background-color': this.opt.barColor }).appendTo($(this));

			if (this.opt.enabled)
				$(this).bind({
					click: function (e) {
						this.UpdatePosition(e);
						if (this.opt.onClick)
							this.opt.onClick.call(this, this.opt.position); 
					},
					mousemove: function (e) {
						if (e.buttons == 1)
							this.UpdatePosition(e);
					}
				});

			this.UpdatePosition = function(e) {
				let p = (e.clientX - this.getBoundingClientRect().left) / $(this).width();
				this.SetPosition(p);
			}

			this.SetPosition = function(p) {
				if (p < 0)
					p = 0;
				if (p > 1)
					p = 1;
				this.opt.position = p;
				inBar.width( p * 100 + '%');
				if (this.opt.onChange)
					this.opt.onChange.call(this, p);
			}

			this.SetPosition(this.opt.position);
		})

	}
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
})(jQuery);