(function(t){var o=function(s,r){var i,n=!1,l=!1,c=!1,e={},o;var O={to:'top',offset:0,effectsOffset:0,parent:!1,classes:{sticky:'cw-sticky',stickyActive:'cw-sticky-active',stickyEffects:'cw-sticky-effects',spacer:'cw-sticky-spacer',},};var b=function(){i=t(s).addClass(o.classes.sticky);e.$window=t(window);if(o.parent){if('parent'===o.parent){e.$parent=i.parent()}
else{e.$parent=i.closest(o.parent)}}},w=function(){o=jQuery.extend(!0,O,r)},T=function(){e.$window.on({scroll:v,resize:g,})},B=function(){e.$window.off('scroll',v).off('resize',g)},C=function(){w();b();T();h()},a=function(t,o,i){var e={},s=t[0].style;i.forEach(function(t){e[t]=undefined!==s[t]?s[t]:''});t.data('css-backup-'+o,e)},p=function(t,o){return t.data('css-backup-'+o)},E=function(){e.$spacer=i.clone().addClass(o.classes.spacer).css({visibility:'hidden',transition:'none',animation:'none',});i.after(e.$spacer)},F=function(){e.$spacer.remove()},m=function(){a(i,'unsticky',['position','width','margin-top','margin-bottom','top','bottom']);var t={position:'fixed',width:d(i,'width'),marginTop:0,marginBottom:0,};t[o.to]=o.offset;t['top'===o.to?'bottom':'top']='';i.css(t).addClass(o.classes.stickyActive)},u=function(){i.css(p(i,'unsticky')).removeClass(o.classes.stickyActive)},A=function(){a(e.$parent,'childNotFollowing',['position']);e.$parent.css('position','relative');a(i,'notFollowing',['position','top','bottom']);var t={position:'absolute',};t[o.to]='';t['top'===o.to?'bottom':'top']=0;i.css(t);l=!0},S=function(){e.$parent.css(p(e.$parent,'childNotFollowing'));i.css(p(i,'notFollowing'));l=!1},d=function(t,o,s){var i=getComputedStyle(t[0]),n=parseFloat(i[o]),r='height'===o?['top','bottom']:['left','right'],e=[];if('border-box'!==i.boxSizing){e.push('border','padding')};if(s){e.push('margin')};e.forEach(function(t){r.forEach(function(o){n+=parseFloat(i[t+'-'+o])})});return n},f=function(t){var n=e.$window.scrollTop(),i=d(t,'height'),r=innerHeight,f=t.offset().top,o=f-n,s=o-r;return{top:{fromTop:o,fromBottom:s,},bottom:{fromTop:o+i,fromBottom:s+i,},}},x=function(){E();m();n=!0;i.trigger('sticky:stick')},k=function(){u();F();n=!1;i.trigger('sticky:unstick')},y=function(){var t=f(i),s='top'===o.to;if(l){var m=s?t.top.fromTop>o.offset:t.bottom.fromBottom<-o.offset;if(m){S()}}
else{var n=f(e.$parent),a=getComputedStyle(e.$parent[0]),r=parseFloat(a[s?'borderBottomWidth':'borderTopWidth']),c=s?n.bottom.fromTop-r:n.top.fromBottom+r,p=s?c<=t.bottom.fromTop:c>=t.top.fromBottom;if(p){A()}}},z=function(t){if(c&&-t<o.effectsOffset){i.removeClass(o.classes.stickyEffects);c=!1}
else if(!c&&-t>=o.effectsOffset){i.addClass(o.classes.stickyEffects);c=!0}},h=function(){var s=o.offset,t;if(n){var c=f(e.$spacer);t='top'===o.to?c.top.fromTop-s:-c.bottom.fromBottom-s;if(o.parent){y()};if(t>0){k()}}
else{var r=f(i);t='top'===o.to?r.top.fromTop-s:-r.bottom.fromBottom-s;if(t<=0){x();if(o.parent){y()}}};z(t)},v=function(){h()},g=function(){if(!n){return};u();m()};this.destroy=function(){if(n){k()};B();i.removeClass(o.classes.sticky)};C()};t.fn.cw_sticky=function(i){var e='string'===typeof i;this.each(function(){var n=t(this);if(!e){n.data('cw_sticky',new o(this,i));return};var s=n.data('cw_sticky');if(!s){throw Error('Trying to perform the `'+i+'` method prior to initialization')};if(!s[i]){throw ReferenceError('Method `'+i+'` not found in sticky instance')};s[i].apply(s,Array.prototype.slice.call(arguments,1));if('destroy'===i){n.removeData('cw_sticky')}});return this};window.cwSticky=o})(jQuery);