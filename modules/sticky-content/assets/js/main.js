(function(e,t){"use strict";var a={init:function(){t.hooks.addAction("frontend/element_ready/section",a.elementorSection)},elementorSection:function(e){var i=e,a=null,n=Boolean(t.isEditMode());a=new ColorwayHFSectionParallaxPlugin(i);a.init(a)},};e(window).on("elementor/frontend/init",a.init);window.ColorwayHFSectionParallaxPlugin=function(a){var i=this,l=a.data("id"),s=!1,n=Boolean(t.isEditMode()),r=e(window),o=e("body"),m=[],p=[],u=r.scrollTop(),d=r.height(),f=null,c=null,g={},h=!!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/),x=navigator.platform;i.init=function(){if(e(window).width()<=1024){return!1};i.setParallaxMulti(l);i.moveBg(l);return!1};i.setParallaxMulti=function(t){var l={},s=null,r=[];l=i.getOptions(t,"cw_section_parallax_multi_items");s=i.getOptions(t,"cw_section_parallax_multi");if(s!="yes"){return};if(n){if(!l.hasOwnProperty("models")||0===Object.keys(l.models).length||s!="yes"){return};l=l.models};a.addClass("colorwayhf-parallax-multi-container");e.each(l,function(e,t){if(t.hasOwnProperty("attributes")){t=t.attributes};r.push(t);i.pushElement(t);i.getSVG()});if(r.length<0){return r};a.on("mousemove",function(t){e.each(r,function(e,a){if(a.parallax_style=="mousemove"){i.moveItem(a,t)}})});e.each(r,function(e,t){if(t.parallax_style=="tilt"){i.tiltItem(t)};if(t.parallax_style=="onscroll"){i.walkItem(t)}})};i.moveBg=function(e){var t=null,l=.2;t=i.getOptions(e,"cw_section_parallax_bg");l=i.getOptions(e,"cw_section_parallax_bg_speed");a.addClass("colorwayhf-parallax-multi-container");if(t=="yes"&&!n){a.jarallax({speed:l})}};i.walkItem=function(e){if(e.parallax_transform!==undefined&&e.parallax_transform_value!==undefined){a.find(".elementor-repeater-item-"+e._id).magician({type:"scroll",offsetTop:parseInt(e.offsettop),offsetBottom:parseInt(e.offsetbottom),duration:parseInt(e.smoothness),animation:{[e.parallax_transform]:e.parallax_transform_value}})}};i.moveItem=function(e,t){var i=t.pageX-a.offset().left,n=t.pageY-a.offset().top;TweenMax.to(a.find(".elementor-repeater-item-"+e._id),1,{x:(i-a.width()/2)/a.width()*e.parallax_speed,y:(n-a.height()/2)/a.height()*e.parallax_speed,ease:Power2.ease})};i.tiltItem=function(e){var t=a.find(".elementor-repeater-item-"+e._id),i=t.find("img");t.tilt({disableAxis:e.disableaxis,scale:e.scale,speed:e.parallax_speed,maxTilt:e.maxtilt,glare:!0,maxGlare:.5})};i.getOptions=function(t,a){var i=null,l={};if(!n){t="section"+t;if(!window.colorwayhf_section_parallax_data||!window.colorwayhf_section_parallax_data.hasOwnProperty(t)){return!1};if(!window.colorwayhf_section_parallax_data[t].hasOwnProperty(a)){return!1};return window.colorwayhf_section_parallax_data[t][a]}
else{if(!window.elementor.hasOwnProperty("elements")){return!1};i=window.elementor.elements;if(!i.models){return!1};e.each(i.models,function(e,a){if(t==a.id){l=a.attributes.settings.attributes}});if(!l.hasOwnProperty(a)){return!1}};return l[a]};i.pushElement=function(e){var t="cw-section-parallax-mousemove cw-section-parallax-layer elementor-repeater-item-"+e._id,i="";if(e.item_source=="shape"){e.image.url=window.colorwayhf_module_parallax_url+"assets/svg/"+e.shape+".svg";t=t+" cw-section-parallax-layer-shape";i="shape-"+e.shape.replace(".svg","")};if(a.find(".elementor-repeater-item-"+e._id).length===0&&e.image.url!=""){a.prepend(`<div;class="${klass} cw-section-parallax-type-${elData.parallax_style}"><img;class="colorwayhf-parallax-graphic ${shapeKlass}";src="${elData.image.url}"/></div>;                    `);;            };        };;;        self.getSVG = function () {;            $target.find('.cw-section-parallax-layer-shape img').each(function () {;                var img = $(this);;                var attributes = img.prop("attributes");;                var imgURL = img.attr("src");;                $.get(imgURL, function (data) {;                    var svg = $(data).find('svg');;                    svg = svg.removeAttr('xmlns:a');;                    $.each(attributes, function () {;                        svg.attr(this.name, this.value);;                    });;                    img.replaceWith(svg);;                });;            });;        };    };;}(jQuery, window.elementorFrontend));