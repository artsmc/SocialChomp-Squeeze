$.fn.sliderHPRC = function (method) {
       			var methods = {	
					settings: {
						elem : $(this),
						gap : 20,
						next:'.next',
                    	prev:'.prev'
					},
					init : function(options) {
						methods.settings.totalWidth = 0;
						methods.settings.elem.width(methods.settings.elem.parent().width());
						methods.settings.elem.find('.wrap-slider').css({
							'position':'absolute',
							'top':'0px',
							'left':'0px',
							'height':'250px'
						});
						var posSpot;

						methods.settings.elem.find('.wrap-slider .data-slide').each(function(i,e){
							methods.settings.totalWidth += $(this).width()+methods.settings.gap;
						});
						methods.settings.elem.find('.wrap-slider').width(methods.settings.totalWidth);
						methods.settings.elem.find('.wrap-slider .data-slide').each(function(i,e){
							if(!$(this).prev().size()==0){
								posSpot = $(this).prev().position().left+$(this).width()+methods.settings.gap;
							}else{
								posSpot = 0;
							}
							$(this).css({
								'position':'absolute',
								'top':'0px',
								'left':posSpot+'px'
							});
							console.log($(this).position().left);
						});
						function moveLeft(){
		                    methods.settings.elem.find('.wrap-slider .data-slide').first().clone().appendTo(methods.settings.elem.find('.wrap-slider')); 
		                    methods.settings.elem.find('.wrap-slider .data-slide').first().remove();
		                    methods.settings.elem.find('.wrap-slider .data-slide').each(function(i, element){
		                        if(!$(this).prev().size()==0){
									posSpot = $(this).prev().position().left;
								}else{
									posSpot = 0;
								}    
		                        $(this).css({'left':posSpot+'px'});
		                    });//int set up
		                }
		                function moveRight(){
		                    methods.settings.elem.find('.wrap-slider .data-slide').last().clone().prependTo(methods.settings.elem.find('.wrap-slider')); 
		                    methods.settings.elem.find('.wrap-slider .data-slide').last().remove();
		                    methods.settings.elem.find('.wrap-slider .data-slide').each(function(i, element){
		                        if(!$(this).next().size()==0){
									posSpot = $(this).next().position().left;
								}else{
									posSpot = 0;
								}    
		                       $(this).css({'left':posSpot+'px'});
		                    });//int set up
		                }
		                setInterval(moveLeft, 1000);
						$(window).resize(function(){
							methods.settings.elem.width(methods.settings.elem.parent().width());

						});
						
					}

				}
       			if (methods[method]) {
        			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    			} else if (typeof method === 'object' || !method) {
            		return methods.init.apply(this, arguments);
    			} else {
            		$.error( 'Method "' +  method + '" does not exist in pluginName plugin!');
    			}
			}//END PLUGIN