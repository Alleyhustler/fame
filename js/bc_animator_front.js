document.addEventListener("DOMContentLoaded",function(e){animationsFrontend()});function animationsFrontend(){var jsonString=data_animator.data_animations.replace(/\\/g,'');if(!JSON.parse(jsonString).animator&&JSON.parse(jsonString)!=''){jsonString=convertOldAnimator(jsonString)}
var JSONobject=JSON.parse(jsonString);JSONobject.animator.folders.map(folder=>{folder.folder.timelines.map(timeline=>{var timeline=timeline.timeline;var GSAPtimelineCustomEvent=gsap.timeline({paused:!0});document.querySelectorAll(timeline.trigger).forEach((triggerElement,triggerElementIndex)=>{var GSAPtimeline="";if(timeline.conditionalDisplay!='Load everywhere'){var postIDs=timeline.conditionalDisplay.match(/\d+/g);if(postIDs){if(postIDs.includes(data_animator.post_id)){GSAPtimeline=createTimeline(timeline,GSAPtimeline)}}}else{GSAPtimeline=createTimeline(timeline,GSAPtimeline)}
function createTimeline(timeline,GSAPtimeline){if(timeline.breakpoint){let mm=gsap.matchMedia();mm.add(`(${timeline.breakpoint})`,()=>{GSAPtimeline=handleTriggerEvent(timeline,GSAPtimeline)})}else{GSAPtimeline=handleTriggerEvent(timeline,GSAPtimeline)}
return GSAPtimeline;function handleTriggerEvent(timeline,GSAPtimeline){switch(timeline.triggerEvent){case 'custom':GSAPtimeline=gsap.timeline({paused:!0});if(timeline.reverseEnabled=='false'&&timeline.restartEnabled=='false'){triggerElement.addEventListener(timeline.customTriggerEvent,function(){GSAPtimeline.play();GSAPtimelineCustomEvent.play()})}else if(timeline.restartEnabled=='true'){triggerElement.addEventListener(timeline.customTriggerEvent,function(){GSAPtimeline.restart();GSAPtimelineCustomEvent.restart()})}else if(timeline.reverseEnabled=='true'){switch(timeline.customTriggerEvent){case 'click':GSAPtimeline.reversed(!0)
GSAPtimelineCustomEvent.reversed(!0)
triggerElement.addEventListener("click",function(){GSAPtimeline.reversed()?GSAPtimeline.play():GSAPtimeline.reverse()
GSAPtimelineCustomEvent.reversed()?GSAPtimelineCustomEvent.play():GSAPtimelineCustomEvent.reverse()})
break;case 'dblclick':GSAPtimeline.reversed(!0)
GSAPtimelineCustomEvent.reversed(!0)
triggerElement.addEventListener("dblclick",function(){GSAPtimeline.reversed()?GSAPtimeline.play():GSAPtimeline.reverse()
GSAPtimelineCustomEvent.reversed()?GSAPtimelineCustomEvent.play():GSAPtimelineCustomEvent.reverse()})
break;case 'mouseenter':triggerElement.addEventListener("mouseenter",function(){GSAPtimeline.play();GSAPtimelineCustomEvent.play()})
triggerElement.addEventListener("mouseleave",function(){GSAPtimeline.reverse();GSAPtimelineCustomEvent.reverse()})
break;case 'mouseleave':triggerElement.addEventListener("mouseleave",function(){GSAPtimeline.play();GSAPtimelineCustomEvent.play()})
triggerElement.addEventListener("mouseenter",function(){GSAPtimeline.reverse();GSAPtimelineCustomEvent.reverse()})
break}}
break;case 'pageload':GSAPtimeline=gsap.timeline({paused:!0});GSAPtimeline.play();break;case 'scroll':var scrollTriggerOptions={};if(JSONobject.animator.markersEnabled==='true')scrollTriggerOptions.markers=!0;if(timeline.start)scrollTriggerOptions.start=timeline.start;if(timeline.end)scrollTriggerOptions.end=timeline.end;if(timeline.toggleActions)scrollTriggerOptions.toggleActions=timeline.toggleActions;if(timeline.scroller)scrollTriggerOptions.scroller=timeline.scroller;if(timeline.scrubEnabled=='true'&&timeline.scrub)scrollTriggerOptions.scrub=timeline.scrub;if(timeline.pinEnabled=='true'&&timeline.pin){if(timeline.pin=='this'&&document.querySelector(timeline.trigger)){scrollTriggerOptions.pin=triggerElement}else if(timeline.pin!=''&&document.querySelector(timeline.pin)){scrollTriggerOptions.pin=timeline.pin}}
scrollTriggerOptions.trigger=triggerElement;var varContainerAnimation=isInsideHorizontalScrollElement(triggerElement);scrollTriggerOptions.containerAnimation=varContainerAnimation?window[varContainerAnimation]:undefined;GSAPtimeline=gsap.timeline({scrollTrigger:scrollTriggerOptions});break}
return GSAPtimeline}}
function isInsideHorizontalScrollElement(element){let containerName=null;document.querySelectorAll('.next-horizontal-scroll').forEach((horizontalScroll,index)=>{if(horizontalScroll.contains(element)){containerName=`NextHorizontalScroll${index}`}});return containerName}
if(GSAPtimeline!=''){timeline.animations.forEach(function(animation){var animation=animation.animation;switch(animation.method){case 'from':var animationFromConfig={duration:Number(animation.duration),};if(animation.delay){animationFromConfig.delay=Number(animation.delay)}
if(animation.easing){animationFromConfig.ease=animation.easing}
if(animation.staggerEnabled=='true'){animationFromConfig.stagger=animation.stagger}
if(animation.repeatEnabled=='true'){animationFromConfig.repeat=Number(animation.repeat)}
if(animation.yoyoEnabled=='true'){animationFromConfig.yoyo=!0}
if(animation.fromObject.opacity){animationFromConfig.opacity=animation.fromObject.opacity}
if(animation.fromObject.autoAlpha){animationFromConfig.autoAlpha=animation.fromObject.autoAlpha}
if(animation.fromObject.transformX){animationFromConfig.x=animation.fromObject.transformX}
if(animation.fromObject.transformY){animationFromConfig.y=animation.fromObject.transformY}
if(animation.fromObject.transformScale){animationFromConfig.scale=animation.fromObject.transformScale}
if(animation.fromObject.transformRotate){animationFromConfig.rotation=animation.fromObject.transformRotate}
if(animation.fromObject.transformSkewX){animationFromConfig.skewX=animation.fromObject.transformSkewX}
if(animation.fromObject.transformSkewY){animationFromConfig.skewY=animation.fromObject.transformSkewY}
if(animation.fromObject.background){animationFromConfig.backgroundColor=animation.fromObject.background}
if(animation.fromObject.color){animationFromConfig.color=animation.fromObject.color}
if(animation.fromObject.fontFamily){animationFromConfig.fontFamily=animation.fromObject.fontFamily}
if(animation.fromObject.fontSize){animationFromConfig.fontSize=animation.fromObject.fontSize}
if(animation.fromObject.fontWeight){animationFromConfig.fontWeight=animation.fromObject.fontWeight}
if(animation.fromObject.fontStyle){animationFromConfig.fontStyle=animation.fromObject.fontStyle}
if(animation.fromObject.textAlign){animationFromConfig.textAlign=animation.fromObject.textAlign}
if(animation.fromObject.textDecoration){animationFromConfig.textDecoration=animation.fromObject.textDecoration}
if(animation.fromObject.textTransform){animationFromConfig.textTransform=animation.fromObject.textTransform}
if(animation.fromObject.lineHeight){animationFromConfig.lineHeight=animation.fromObject.lineHeight}
if(animation.fromObject.letterSpacing){animationFromConfig.letterSpacing=animation.fromObject.letterSpacing}
if(animation.fromObject.wordSpacing){animationFromConfig.wordSpacing=animation.fromObject.wordSpacing}
if(animation.fromObject.width){animationFromConfig.width=animation.fromObject.width}
if(animation.fromObject.height){animationFromConfig.height=animation.fromObject.height}
if(animation.fromObject.minWidth){animationFromConfig.minWidth=animation.fromObject.minWidth}
if(animation.fromObject.minHeight){animationFromConfig.minHeight=animation.fromObject.minHeight}
if(animation.fromObject.maxWidth){animationFromConfig.maxWidth=animation.fromObject.maxWidth}
if(animation.fromObject.maxHeight){animationFromConfig.maxHeight=animation.fromObject.maxHeight}
if(animation.fromObject.paddingTop){animationFromConfig.paddingTop=animation.fromObject.paddingTop}
if(animation.fromObject.paddingBottom){animationFromConfig.paddingBottom=animation.fromObject.paddingBottom}
if(animation.fromObject.paddingLeft){animationFromConfig.paddingLeft=animation.fromObject.paddingLeft}
if(animation.fromObject.paddingRight){animationFromConfig.paddingRight=animation.fromObject.paddingRight}
if(animation.fromObject.marginTop){animationFromConfig.marginTop=animation.fromObject.marginTop}
if(animation.fromObject.marginBottom){animationFromConfig.marginBottom=animation.fromObject.marginBottom}
if(animation.fromObject.marginLeft){animationFromConfig.marginLeft=animation.fromObject.marginLeft}
if(animation.fromObject.marginRight){animationFromConfig.marginRight=animation.fromObject.marginRight}
if(animation.fromObject.positionTop){animationFromConfig.top=animation.fromObject.positionTop}
if(animation.fromObject.positionBottom){animationFromConfig.bottom=animation.fromObject.positionBottom}
if(animation.fromObject.positionLeft){animationFromConfig.left=animation.fromObject.positionLeft}
if(animation.fromObject.positionRight){animationFromConfig.right=animation.fromObject.positionRight}
if(animation.fromObject.borderColor){animationFromConfig.borderColor=animation.fromObject.borderColor}
if(animation.fromObject.borderStyle){animationFromConfig.borderStyle=animation.fromObject.borderStyle}
if(animation.fromObject.borderWidthTop){animationFromConfig.borderTopWidth=animation.fromObject.borderWidthTop}
if(animation.fromObject.borderWidthBottom){animationFromConfig.borderBottomWidth=animation.fromObject.borderWidthBottom}
if(animation.fromObject.borderWidthLeft){animationFromConfig.borderLeftWidth=animation.fromObject.borderWidthLeft}
if(animation.fromObject.borderWidthRight){animationFromConfig.borderRightWidth=animation.fromObject.borderWidthRight}
if(animation.fromObject.borderTopLeftRadius){animationFromConfig.borderTopLeftRadius=animation.fromObject.borderTopLeftRadius}
if(animation.fromObject.borderTopRightRadius){animationFromConfig.borderTopRightRadius=animation.fromObject.borderTopRightRadius}
if(animation.fromObject.borderBottomLeftRadius){animationFromConfig.borderBottomLeftRadius=animation.fromObject.borderBottomLeftRadius}
if(animation.fromObject.borderBottomRightRadius){animationFromConfig.borderBottomRightRadius=animation.fromObject.borderBottomRightRadius}
if(animation.fromObject.boxShadowOffsetX&&animation.fromObject.boxShadowOffsetY&&animation.fromObject.boxShadowBlur&&animation.fromObject.boxShadowSpread&&animation.fromObject.boxShadowColor){var boxShadowProperties={offsetX:animation.fromObject.boxShadowOffsetX,offsetY:animation.fromObject.boxShadowOffsetY,blur:animation.fromObject.boxShadowBlur,spread:animation.fromObject.boxShadowSpread,color:animation.fromObject.boxShadowColor};animationFromConfig.boxShadow=`${boxShadowProperties.offsetX} ${boxShadowProperties.offsetY} ${boxShadowProperties.blur} ${boxShadowProperties.spread} ${boxShadowProperties.color}`}
var filterString='';if(animation.fromObject.filterBlur){filterString+=`blur(${animation.fromObject.filterBlur}) `}
if(animation.fromObject.filterBrightness){filterString+=`brightness(${animation.fromObject.filterBrightness}) `}
if(animation.fromObject.filterContrast){filterString+=`contrast(${animation.fromObject.filterContrast}) `}
if(animation.fromObject.filterGrayscale){filterString+=`grayscale(${animation.fromObject.filterGrayscale}) `}
if(animation.fromObject.filterHueRotate){filterString+=`hue-rotate(${animation.fromObject.filterHueRotate}) `}
if(animation.fromObject.filterInvert){filterString+=`invert(${animation.fromObject.filterInvert}) `}
if(animation.fromObject.filterSaturate){filterString+=`saturate(${animation.fromObject.filterSaturate}) `}
if(animation.fromObject.filterSepia){filterString+=`sepia(${animation.fromObject.filterSepia}) `}
if(filterString!=''){filterString=filterString.trim();animationFromConfig.filter=filterString}
if(animation.fromObject.svgFill){animationFromConfig.fill=animation.fromObject.svgFill}
if(animation.fromObject.svgStrokeColor){animationFromConfig.stroke=animation.fromObject.svgStrokeColor}
if(animation.fromObject.svgStrokeWidth){animationFromConfig.strokeWidth=animation.fromObject.svgStrokeWidth}
if(animation.element=='this'&&timeline.trigger!=''){var elementToAnimate=triggerElement;GSAPtimeline.from(elementToAnimate,animationFromConfig,0)}else if(animation.element!=''){if(timeline.triggerEvent=='custom'){var elementToAnimate=animation.element;if(document.querySelector(elementToAnimate)&&triggerElementIndex==0){GSAPtimelineCustomEvent.from(animation.element,animationFromConfig,0)}}else if(triggerElementIndex==0){var elementToAnimate=animation.element;if(document.querySelector(elementToAnimate)){GSAPtimeline.from(animation.element,animationFromConfig,0)}}}
break;case 'to':var animationToConfig={duration:Number(animation.duration),};if(animation.delay){animationToConfig.delay=Number(animation.delay)}
if(animation.easing){animationToConfig.ease=animation.easing}
if(animation.staggerEnabled=='true'){animationToConfig.stagger=animation.stagger}
if(animation.repeatEnabled=='true'){animationToConfig.repeat=Number(animation.repeat)}
if(animation.yoyoEnabled=='true'){animationToConfig.yoyo=!0}
if(animation.toObject.opacity){animationToConfig.opacity=animation.toObject.opacity}
if(animation.toObject.autoAlpha){animationToConfig.autoAlpha=animation.toObject.autoAlpha}
if(animation.toObject.transformX){animationToConfig.x=animation.toObject.transformX}
if(animation.toObject.transformY){animationToConfig.y=animation.toObject.transformY}
if(animation.toObject.transformScale){animationToConfig.scale=animation.toObject.transformScale}
if(animation.toObject.transformRotate){animationToConfig.rotation=animation.toObject.transformRotate}
if(animation.toObject.transformSkewX){animationToConfig.skewX=animation.toObject.transformSkewX}
if(animation.toObject.transformSkewY){animationToConfig.skewY=animation.toObject.transformSkewY}
if(animation.toObject.background){animationToConfig.backgroundColor=animation.toObject.background}
if(animation.toObject.color){animationToConfig.color=animation.toObject.color}
if(animation.toObject.fontFamily){animationToConfig.fontFamily=animation.toObject.fontFamily}
if(animation.toObject.fontSize){animationToConfig.fontSize=animation.toObject.fontSize}
if(animation.toObject.fontWeight){animationToConfig.fontWeight=animation.toObject.fontWeight}
if(animation.toObject.fontStyle){animationToConfig.fontStyle=animation.toObject.fontStyle}
if(animation.toObject.textAlign){animationToConfig.textAlign=animation.toObject.textAlign}
if(animation.toObject.textDecoration){animationToConfig.textDecoration=animation.toObject.textDecoration}
if(animation.toObject.textTransform){animationToConfig.textTransform=animation.toObject.textTransform}
if(animation.toObject.lineHeight){animationToConfig.lineHeight=animation.toObject.lineHeight}
if(animation.toObject.letterSpacing){animationToConfig.letterSpacing=animation.toObject.letterSpacing}
if(animation.toObject.wordSpacing){animationToConfig.wordSpacing=animation.toObject.wordSpacing}
if(animation.toObject.width){animationToConfig.width=animation.toObject.width}
if(animation.toObject.height){animationToConfig.height=animation.toObject.height}
if(animation.toObject.minWidth){animationToConfig.minWidth=animation.toObject.minWidth}
if(animation.toObject.minHeight){animationToConfig.minHeight=animation.toObject.minHeight}
if(animation.toObject.maxWidth){animationToConfig.maxWidth=animation.toObject.maxWidth}
if(animation.toObject.maxHeight){animationToConfig.maxHeight=animation.toObject.maxHeight}
if(animation.toObject.paddingTop){animationToConfig.paddingTop=animation.toObject.paddingTop}
if(animation.toObject.paddingBottom){animationToConfig.paddingBottom=animation.toObject.paddingBottom}
if(animation.toObject.paddingLeft){animationToConfig.paddingLeft=animation.toObject.paddingLeft}
if(animation.toObject.paddingRight){animationToConfig.paddingRight=animation.toObject.paddingRight}
if(animation.toObject.marginTop){animationToConfig.marginTop=animation.toObject.marginTop}
if(animation.toObject.marginBottom){animationToConfig.marginBottom=animation.toObject.marginBottom}
if(animation.toObject.marginLeft){animationToConfig.marginLeft=animation.toObject.marginLeft}
if(animation.toObject.marginRight){animationToConfig.marginRight=animation.toObject.marginRight}
if(animation.toObject.positionTop){animationToConfig.top=animation.toObject.positionTop}
if(animation.toObject.positionBottom){animationToConfig.bottom=animation.toObject.positionBottom}
if(animation.toObject.positionLeft){animationToConfig.left=animation.toObject.positionLeft}
if(animation.toObject.positionRight){animationToConfig.right=animation.toObject.positionRight}
if(animation.toObject.borderColor){animationToConfig.borderColor=animation.toObject.borderColor}
if(animation.toObject.borderStyle){animationToConfig.borderStyle=animation.toObject.borderStyle}
if(animation.toObject.borderWidthTop){animationToConfig.borderTopWidth=animation.toObject.borderWidthTop}
if(animation.toObject.borderWidthBottom){animationToConfig.borderBottomWidth=animation.toObject.borderWidthBottom}
if(animation.toObject.borderWidthLeft){animationToConfig.borderLeftWidth=animation.toObject.borderWidthLeft}
if(animation.toObject.borderWidthRight){animationToConfig.borderRightWidth=animation.toObject.borderWidthRight}
if(animation.toObject.borderTopLeftRadius){animationToConfig.borderTopLeftRadius=animation.toObject.borderTopLeftRadius}
if(animation.toObject.borderTopRightRadius){animationToConfig.borderTopRightRadius=animation.toObject.borderTopRightRadius}
if(animation.toObject.borderBottomLeftRadius){animationToConfig.borderBottomLeftRadius=animation.toObject.borderBottomLeftRadius}
if(animation.toObject.borderBottomRightRadius){animationToConfig.borderBottomRightRadius=animation.toObject.borderBottomRightRadius}
if(animation.toObject.boxShadowOffsetX&&animation.toObject.boxShadowOffsetY&&animation.toObject.boxShadowBlur&&animation.toObject.boxShadowSpread&&animation.toObject.boxShadowColor){var boxShadowProperties={offsetX:animation.toObject.boxShadowOffsetX,offsetY:animation.toObject.boxShadowOffsetY,blur:animation.toObject.boxShadowBlur,spread:animation.toObject.boxShadowSpread,color:animation.toObject.boxShadowColor};animationToConfig.boxShadow=`${boxShadowProperties.offsetX} ${boxShadowProperties.offsetY} ${boxShadowProperties.blur} ${boxShadowProperties.spread} ${boxShadowProperties.color}`}
var filterString='';if(animation.toObject.filterBlur){filterString+=`blur(${animation.toObject.filterBlur}) `}
if(animation.toObject.filterBrightness){filterString+=`brightness(${animation.toObject.filterBrightness}) `}
if(animation.toObject.filterContrast){filterString+=`contrast(${animation.toObject.filterContrast}) `}
if(animation.toObject.filterGrayscale){filterString+=`grayscale(${animation.toObject.filterGrayscale}) `}
if(animation.toObject.filterHueRotate){filterString+=`hue-rotate(${animation.toObject.filterHueRotate}) `}
if(animation.toObject.filterInvert){filterString+=`invert(${animation.toObject.filterInvert}) `}
if(animation.toObject.filterSaturate){filterString+=`saturate(${animation.toObject.filterSaturate}) `}
if(animation.toObject.filterSepia){filterString+=`sepia(${animation.toObject.filterSepia}) `}
if(filterString!=''){filterString=filterString.trim();animationToConfig.filter=filterString}
if(animation.toObject.svgFill){animationToConfig.fill=animation.toObject.svgFill}
if(animation.toObject.svgStrokeColor){animationToConfig.stroke=animation.toObject.svgStrokeColor}
if(animation.toObject.svgStrokeWidth){animationToConfig.strokeWidth=animation.toObject.svgStrokeWidth}
if(animation.element=='this'&&timeline.trigger!=''){var elementToAnimate=triggerElement;GSAPtimeline.to(elementToAnimate,animationToConfig,0)}else if(animation.element!=''){if(timeline.triggerEvent=='custom'){var elementToAnimate=animation.element;if(document.querySelector(elementToAnimate)&&triggerElementIndex==0){GSAPtimelineCustomEvent.to(animation.element,animationToConfig,0)}}else if(triggerElementIndex==0){var elementToAnimate=animation.element;if(document.querySelector(elementToAnimate)){GSAPtimeline.to(animation.element,animationToConfig,0)}}}
break;case 'fromto':var animationFromToToConfig={duration:Number(animation.duration),};if(animation.delay){animationFromToToConfig.delay=Number(animation.delay)}
if(animation.easing){animationFromToToConfig.ease=animation.easing}
if(animation.staggerEnabled=='true'){animationFromToToConfig.stagger=animation.stagger}
if(animation.repeatEnabled=='true'){animationFromToToConfig.repeat=Number(animation.repeat)}
if(animation.yoyoEnabled=='true'){animationFromToToConfig.yoyo=!0}
if(animation.fromtotoObject.opacity){animationFromToToConfig.opacity=animation.fromtotoObject.opacity}
if(animation.fromtotoObject.autoAlpha){animationFromToToConfig.autoAlpha=animation.fromtotoObject.autoAlpha}
if(animation.fromtotoObject.transformX){animationFromToToConfig.x=animation.fromtotoObject.transformX}
if(animation.fromtotoObject.transformY){animationFromToToConfig.y=animation.fromtotoObject.transformY}
if(animation.fromtotoObject.transformScale){animationFromToToConfig.scale=animation.fromtotoObject.transformScale}
if(animation.fromtotoObject.transformRotate){animationFromToToConfig.rotation=animation.fromtotoObject.transformRotate}
if(animation.fromtotoObject.transformSkewX){animationFromToToConfig.skewX=animation.fromtotoObject.transformSkewX}
if(animation.fromtotoObject.transformSkewY){animationFromToToConfig.skewY=animation.fromtotoObject.transformSkewY}
if(animation.fromtotoObject.background){animationFromToToConfig.backgroundColor=animation.fromtotoObject.background}
if(animation.fromtotoObject.color){animationFromToToConfig.color=animation.fromtotoObject.color}
if(animation.fromtotoObject.fontFamily){animationFromToToConfig.fontFamily=animation.fromtotoObject.fontFamily}
if(animation.fromtotoObject.fontSize){animationFromToToConfig.fontSize=animation.fromtotoObject.fontSize}
if(animation.fromtotoObject.fontWeight){animationFromToToConfig.fontWeight=animation.fromtotoObject.fontWeight}
if(animation.fromtotoObject.fontStyle){animationFromToToConfig.fontStyle=animation.fromtotoObject.fontStyle}
if(animation.fromtotoObject.textAlign){animationFromToToConfig.textAlign=animation.fromtotoObject.textAlign}
if(animation.fromtotoObject.textDecoration){animationFromToToConfig.textDecoration=animation.fromtotoObject.textDecoration}
if(animation.fromtotoObject.textTransform){animationFromToToConfig.textTransform=animation.fromtotoObject.textTransform}
if(animation.fromtotoObject.lineHeight){animationFromToToConfig.lineHeight=animation.fromtotoObject.lineHeight}
if(animation.fromtotoObject.letterSpacing){animationFromToToConfig.letterSpacing=animation.fromtotoObject.letterSpacing}
if(animation.fromtotoObject.wordSpacing){animationFromToToConfig.wordSpacing=animation.fromtotoObject.wordSpacing}
if(animation.fromtotoObject.width){animationFromToToConfig.width=animation.fromtotoObject.width}
if(animation.fromtotoObject.height){animationFromToToConfig.height=animation.fromtotoObject.height}
if(animation.fromtotoObject.minWidth){animationFromToToConfig.minWidth=animation.fromtotoObject.minWidth}
if(animation.fromtotoObject.minHeight){animationFromToToConfig.minHeight=animation.fromtotoObject.minHeight}
if(animation.fromtotoObject.maxWidth){animationFromToToConfig.maxWidth=animation.fromtotoObject.maxWidth}
if(animation.fromtotoObject.maxHeight){animationFromToToConfig.maxHeight=animation.fromtotoObject.maxHeight}
if(animation.fromtotoObject.paddingTop){animationFromToToConfig.paddingTop=animation.fromtotoObject.paddingTop}
if(animation.fromtotoObject.paddingBottom){animationFromToToConfig.paddingBottom=animation.fromtotoObject.paddingBottom}
if(animation.fromtotoObject.paddingLeft){animationFromToToConfig.paddingLeft=animation.fromtotoObject.paddingLeft}
if(animation.fromtotoObject.paddingRight){animationFromToToConfig.paddingRight=animation.fromtotoObject.paddingRight}
if(animation.fromtotoObject.marginTop){animationFromToToConfig.marginTop=animation.fromtotoObject.marginTop}
if(animation.fromtotoObject.marginBottom){animationFromToToConfig.marginBottom=animation.fromtotoObject.marginBottom}
if(animation.fromtotoObject.marginLeft){animationFromToToConfig.marginLeft=animation.fromtotoObject.marginLeft}
if(animation.fromtotoObject.marginRight){animationFromToToConfig.marginRight=animation.fromtotoObject.marginRight}
if(animation.fromtotoObject.positionTop){animationFromToToConfig.top=animation.fromtotoObject.positionTop}
if(animation.fromtotoObject.positionBottom){animationFromToToConfig.bottom=animation.fromtotoObject.positionBottom}
if(animation.fromtotoObject.positionLeft){animationFromToToConfig.left=animation.fromtotoObject.positionLeft}
if(animation.fromtotoObject.positionRight){animationFromToToConfig.right=animation.fromtotoObject.positionRight}
if(animation.fromtotoObject.borderColor){animationFromToToConfig.borderColor=animation.fromtotoObject.borderColor}
if(animation.fromtotoObject.borderStyle){animationFromToToConfig.borderStyle=animation.fromtotoObject.borderStyle}
if(animation.fromtotoObject.borderWidthTop){animationFromToToConfig.borderTopWidth=animation.fromtotoObject.borderWidthTop}
if(animation.fromtotoObject.borderWidthBottom){animationFromToToConfig.borderBottomWidth=animation.fromtotoObject.borderWidthBottom}
if(animation.fromtotoObject.borderWidthLeft){animationFromToToConfig.borderLeftWidth=animation.fromtotoObject.borderWidthLeft}
if(animation.fromtotoObject.borderWidthRight){animationFromToToConfig.borderRightWidth=animation.fromtotoObject.borderWidthRight}
if(animation.fromtotoObject.borderTopLeftRadius){animationFromToToConfig.borderTopLeftRadius=animation.fromtotoObject.borderTopLeftRadius}
if(animation.fromtotoObject.borderTopRightRadius){animationFromToToConfig.borderTopRightRadius=animation.fromtotoObject.borderTopRightRadius}
if(animation.fromtotoObject.borderBottomLeftRadius){animationFromToToConfig.borderBottomLeftRadius=animation.fromtotoObject.borderBottomLeftRadius}
if(animation.fromtotoObject.borderBottomRightRadius){animationFromToToConfig.borderBottomRightRadius=animation.fromtotoObject.borderBottomRightRadius}
if(animation.fromtotoObject.boxShadowOffsetX&&animation.fromtotoObject.boxShadowOffsetY&&animation.fromtotoObject.boxShadowBlur&&animation.fromtotoObject.boxShadowSpread&&animation.fromtotoObject.boxShadowColor){var boxShadowProperties={offsetX:animation.fromtotoObject.boxShadowOffsetX,offsetY:animation.fromtotoObject.boxShadowOffsetY,blur:animation.fromtotoObject.boxShadowBlur,spread:animation.fromtotoObject.boxShadowSpread,color:animation.fromtotoObject.boxShadowColor};animationFromToToConfig.boxShadow=`${boxShadowProperties.offsetX} ${boxShadowProperties.offsetY} ${boxShadowProperties.blur} ${boxShadowProperties.spread} ${boxShadowProperties.color}`}
var filterString='';if(animation.fromtotoObject.filterBlur){filterString+=`blur(${animation.fromtotoObject.filterBlur}) `}
if(animation.fromtotoObject.filterBrightness){filterString+=`brightness(${animation.fromtotoObject.filterBrightness}) `}
if(animation.fromtotoObject.filterContrast){filterString+=`contrast(${animation.fromtotoObject.filterContrast}) `}
if(animation.fromtotoObject.filterGrayscale){filterString+=`grayscale(${animation.fromtotoObject.filterGrayscale}) `}
if(animation.fromtotoObject.filterHueRotate){filterString+=`hue-rotate(${animation.fromtotoObject.filterHueRotate}) `}
if(animation.fromtotoObject.filterInvert){filterString+=`invert(${animation.fromtotoObject.filterInvert}) `}
if(animation.fromtotoObject.filterSaturate){filterString+=`saturate(${animation.fromtotoObject.filterSaturate}) `}
if(animation.fromtotoObject.filterSepia){filterString+=`sepia(${animation.fromtotoObject.filterSepia}) `}
if(filterString!=''){filterString=filterString.trim();animationFromToToConfig.filter=filterString}
if(animation.fromtotoObject.svgFill){animationFromToToConfig.fill=animation.fromtotoObject.svgFill}
if(animation.fromtotoObject.svgStrokeColor){animationFromToToConfig.stroke=animation.fromtotoObject.svgStrokeColor}
if(animation.fromtotoObject.svgStrokeWidth){animationFromToToConfig.strokeWidth=animation.fromtotoObject.svgStrokeWidth}
var animationFromToFromConfig={};if(animation.fromtofromObject.opacity){animationFromToFromConfig.opacity=animation.fromtofromObject.opacity}
if(animation.fromtofromObject.autoAlpha){animationFromToFromConfig.autoAlpha=animation.fromtofromObject.autoAlpha}
if(animation.fromtofromObject.transformX){animationFromToFromConfig.x=animation.fromtofromObject.transformX}
if(animation.fromtofromObject.transformY){animationFromToFromConfig.y=animation.fromtofromObject.transformY}
if(animation.fromtofromObject.transformScale){animationFromToFromConfig.scale=animation.fromtofromObject.transformScale}
if(animation.fromtofromObject.transformRotate){animationFromToFromConfig.rotation=animation.fromtofromObject.transformRotate}
if(animation.fromtofromObject.transformSkewX){animationFromToFromConfig.skewX=animation.fromtofromObject.transformSkewX}
if(animation.fromtofromObject.transformSkewY){animationFromToFromConfig.skewY=animation.fromtofromObject.transformSkewY}
if(animation.fromtofromObject.background){animationFromToFromConfig.backgroundColor=animation.fromtofromObject.background}
if(animation.fromtofromObject.color){animationFromToFromConfig.color=animation.fromtofromObject.color}
if(animation.fromtofromObject.fontFamily){animationFromToFromConfig.fontFamily=animation.fromtofromObject.fontFamily}
if(animation.fromtofromObject.fontSize){animationFromToFromConfig.fontSize=animation.fromtofromObject.fontSize}
if(animation.fromtofromObject.fontWeight){animationFromToFromConfig.fontWeight=animation.fromtofromObject.fontWeight}
if(animation.fromtofromObject.fontStyle){animationFromToFromConfig.fontStyle=animation.fromtofromObject.fontStyle}
if(animation.fromtofromObject.textAlign){animationFromToFromConfig.textAlign=animation.fromtofromObject.textAlign}
if(animation.fromtofromObject.textDecoration){animationFromToFromConfig.textDecoration=animation.fromtofromObject.textDecoration}
if(animation.fromtofromObject.textTransform){animationFromToFromConfig.textTransform=animation.fromtofromObject.textTransform}
if(animation.fromtofromObject.lineHeight){animationFromToFromConfig.lineHeight=animation.fromtofromObject.lineHeight}
if(animation.fromtofromObject.letterSpacing){animationFromToFromConfig.letterSpacing=animation.fromtofromObject.letterSpacing}
if(animation.fromtofromObject.wordSpacing){animationFromToFromConfig.wordSpacing=animation.fromtofromObject.wordSpacing}
if(animation.fromtofromObject.width){animationFromToFromConfig.width=animation.fromtofromObject.width}
if(animation.fromtofromObject.height){animationFromToFromConfig.height=animation.fromtofromObject.height}
if(animation.fromtofromObject.minWidth){animationFromToFromConfig.minWidth=animation.fromtofromObject.minWidth}
if(animation.fromtofromObject.minHeight){animationFromToFromConfig.minHeight=animation.fromtofromObject.minHeight}
if(animation.fromtofromObject.maxWidth){animationFromToFromConfig.maxWidth=animation.fromtofromObject.maxWidth}
if(animation.fromtofromObject.maxHeight){animationFromToFromConfig.maxHeight=animation.fromtofromObject.maxHeight}
if(animation.fromtofromObject.paddingTop){animationFromToFromConfig.paddingTop=animation.fromtofromObject.paddingTop}
if(animation.fromtofromObject.paddingBottom){animationFromToFromConfig.paddingBottom=animation.fromtofromObject.paddingBottom}
if(animation.fromtofromObject.paddingLeft){animationFromToFromConfig.paddingLeft=animation.fromtofromObject.paddingLeft}
if(animation.fromtofromObject.paddingRight){animationFromToFromConfig.paddingRight=animation.fromtofromObject.paddingRight}
if(animation.fromtofromObject.marginTop){animationFromToFromConfig.marginTop=animation.fromtofromObject.marginTop}
if(animation.fromtofromObject.marginBottom){animationFromToFromConfig.marginBottom=animation.fromtofromObject.marginBottom}
if(animation.fromtofromObject.marginLeft){animationFromToFromConfig.marginLeft=animation.fromtofromObject.marginLeft}
if(animation.fromtofromObject.marginRight){animationFromToFromConfig.marginRight=animation.fromtofromObject.marginRight}
if(animation.fromtofromObject.positionTop){animationFromToFromConfig.top=animation.fromtofromObject.positionTop}
if(animation.fromtofromObject.positionBottom){animationFromToFromConfig.bottom=animation.fromtofromObject.positionBottom}
if(animation.fromtofromObject.positionLeft){animationFromToFromConfig.left=animation.fromtofromObject.positionLeft}
if(animation.fromtofromObject.positionRight){animationFromToFromConfig.right=animation.fromtofromObject.positionRight}
if(animation.fromtofromObject.borderColor){animationFromToFromConfig.borderColor=animation.fromtofromObject.borderColor}
if(animation.fromtofromObject.borderStyle){animationFromToFromConfig.borderStyle=animation.fromtofromObject.borderStyle}
if(animation.fromtofromObject.borderWidthTop){animationFromToFromConfig.borderTopWidth=animation.fromtofromObject.borderWidthTop}
if(animation.fromtofromObject.borderWidthBottom){animationFromToFromConfig.borderBottomWidth=animation.fromtofromObject.borderWidthBottom}
if(animation.fromtofromObject.borderWidthLeft){animationFromToFromConfig.borderLeftWidth=animation.fromtofromObject.borderWidthLeft}
if(animation.fromtofromObject.borderWidthRight){animationFromToFromConfig.borderRightWidth=animation.fromtofromObject.borderWidthRight}
if(animation.fromtofromObject.borderTopLeftRadius){animationFromToFromConfig.borderTopLeftRadius=animation.fromtofromObject.borderTopLeftRadius}
if(animation.fromtofromObject.borderTopRightRadius){animationFromToFromConfig.borderTopRightRadius=animation.fromtofromObject.borderTopRightRadius}
if(animation.fromtofromObject.borderBottomLeftRadius){animationFromToFromConfig.borderBottomLeftRadius=animation.fromtofromObject.borderBottomLeftRadius}
if(animation.fromtofromObject.borderBottomRightRadius){animationFromToFromConfig.borderBottomRightRadius=animation.fromtofromObject.borderBottomRightRadius}
if(animation.fromtofromObject.boxShadowOffsetX&&animation.fromtofromObject.boxShadowOffsetY&&animation.fromtofromObject.boxShadowBlur&&animation.fromtofromObject.boxShadowSpread&&animation.fromtofromObject.boxShadowColor){var boxShadowProperties={offsetX:animation.fromtofromObject.boxShadowOffsetX,offsetY:animation.fromtofromObject.boxShadowOffsetY,blur:animation.fromtofromObject.boxShadowBlur,spread:animation.fromtofromObject.boxShadowSpread,color:animation.fromtofromObject.boxShadowColor};animationFromToFromConfig.boxShadow=`${boxShadowProperties.offsetX} ${boxShadowProperties.offsetY} ${boxShadowProperties.blur} ${boxShadowProperties.spread} ${boxShadowProperties.color}`}
var filterString='';if(animation.fromtofromObject.filterBlur){filterString+=`blur(${animation.fromtofromObject.filterBlur}) `}
if(animation.fromtofromObject.filterBrightness){filterString+=`brightness(${animation.fromtofromObject.filterBrightness}) `}
if(animation.fromtofromObject.filterContrast){filterString+=`contrast(${animation.fromtofromObject.filterContrast}) `}
if(animation.fromtofromObject.filterGrayscale){filterString+=`grayscale(${animation.fromtofromObject.filterGrayscale}) `}
if(animation.fromtofromObject.filterHueRotate){filterString+=`hue-rotate(${animation.fromtofromObject.filterHueRotate}) `}
if(animation.fromtofromObject.filterInvert){filterString+=`invert(${animation.fromtofromObject.filterInvert}) `}
if(animation.fromtofromObject.filterSaturate){filterString+=`saturate(${animation.fromtofromObject.filterSaturate}) `}
if(animation.fromtofromObject.filterSepia){filterString+=`sepia(${animation.fromtofromObject.filterSepia}) `}
if(filterString!=''){filterString=filterString.trim();animationFromToFromConfig.filter=filterString}
if(animation.fromtofromObject.svgFill){animationFromToFromConfig.fill=animation.fromtofromObject.svgFill}
if(animation.fromtofromObject.svgStrokeColor){animationFromToFromConfig.stroke=animation.fromtofromObject.svgStrokeColor}
if(animation.fromtofromObject.svgStrokeWidth){animationFromToFromConfig.strokeWidth=animation.fromtofromObject.svgStrokeWidth}
if(animation.element=='this'&&timeline.trigger!=''){var elementToAnimate=triggerElement;GSAPtimeline.fromTo(elementToAnimate,animationFromToFromConfig,animationFromToToConfig,0)}else if(animation.element!=''){if(timeline.triggerEvent=='custom'){var elementToAnimate=animation.element;if(document.querySelector(elementToAnimate)&&triggerElementIndex==0){GSAPtimelineCustomEvent.fromTo(animation.element,animationFromToFromConfig,animationFromToToConfig,0)}}else if(triggerElementIndex==0){var elementToAnimate=animation.element;if(document.querySelector(elementToAnimate)){GSAPtimeline.fromTo(animation.element,animationFromToFromConfig,animationFromToToConfig,0)}}}
break}})}})})});function convertOldAnimator(JSONobject){const folderData=[];const timelinesValues=JSONobject.timelines.map((timeline,index)=>{var animationsValues=JSONobject.panels.map((panel,panelIndex)=>{if(index==panelIndex){const fromObject=(()=>{let fromObjectValuesArray={};const properties=['method','opacity','autoAlpha','transformX','transformY','transformScale','transformRotate','transformSkewX','transformSkewY','background','color','fontFamily','fontSize','fontWeight','fontStyle','textAlign','textDecoration','textTransform','lineHeight','letterSpacing','wordSpacing','width','height','minWidth','minHeight','maxWidth','maxHeight','paddingTop','paddingBottom','paddingLeft','paddingRight','marginTop','marginBottom','marginLeft','marginRight','positionTop','positionBottom','positionLeft','positionRight','borderColor','borderStyle','borderWidthTop','borderWidthBottom','borderWidthLeft','borderWidthRight','borderTopLeftRadius','borderTopRightRadius','borderBottomLeftRadius','borderBottomRightRadius','boxShadowOffsetX','boxShadowOffsetY','boxShadowBlur','boxShadowSpread','boxShadowColor','filterBlur','filterBrightness','filterContrast','filterGrayscale','filterHueRotate','filterInvert','filterSaturate','filterSepia','svgFill','svgStrokeColor','svgStrokeWidth',];fromObjectValuesArray.method='from';return fromObjectValuesArray})();const toObject=(()=>{let toObjectValuesArray={};const properties=['method','opacity','autoAlpha','transformX','transformY','transformScale','transformRotate','transformSkewX','transformSkewY','background','color','fontFamily','fontSize','fontWeight','fontStyle','textAlign','textDecoration','textTransform','lineHeight','letterSpacing','wordSpacing','width','height','minWidth','minHeight','maxWidth','maxHeight','paddingTop','paddingBottom','paddingLeft','paddingRight','marginTop','marginBottom','marginLeft','marginRight','positionTop','positionBottom','positionLeft','positionRight','borderColor','borderStyle','borderWidthTop','borderWidthBottom','borderWidthLeft','borderWidthRight','borderTopLeftRadius','borderTopRightRadius','borderBottomLeftRadius','borderBottomRightRadius','boxShadowOffsetX','boxShadowOffsetY','boxShadowBlur','boxShadowSpread','boxShadowColor','filterBlur','filterBrightness','filterContrast','filterGrayscale','filterHueRotate','filterInvert','filterSaturate','filterSepia','svgFill','svgStrokeColor','svgStrokeWidth',];toObjectValuesArray.method='to';return toObjectValuesArray})();const fromtofromObject=(()=>{let fromtofromObjectValuesArray={};const properties=['method','opacity','autoAlpha','transformX','transformY','transformScale','transformRotate','transformSkewX','transformSkewY','background','color','fontFamily','fontSize','fontWeight','fontStyle','textAlign','textDecoration','textTransform','lineHeight','letterSpacing','wordSpacing','width','height','minWidth','minHeight','maxWidth','maxHeight','paddingTop','paddingBottom','paddingLeft','paddingRight','marginTop','marginBottom','marginLeft','marginRight','positionTop','positionBottom','positionLeft','positionRight','borderColor','borderStyle','borderWidthTop','borderWidthBottom','borderWidthLeft','borderWidthRight','borderTopLeftRadius','borderTopRightRadius','borderBottomLeftRadius','borderBottomRightRadius','boxShadowOffsetX','boxShadowOffsetY','boxShadowBlur','boxShadowSpread','boxShadowColor','filterBlur','filterBrightness','filterContrast','filterGrayscale','filterHueRotate','filterInvert','filterSaturate','filterSepia','svgFill','svgStrokeColor','svgStrokeWidth',];properties.forEach(prop=>{if(JSONobject.panels[index][3]=='x'){fromtofromObjectValuesArray.transformX=JSONobject.panels[index][4]}else if(JSONobject.panels[index][3]=='y'){fromtofromObjectValuesArray.transformY=JSONobject.panels[index][4]}else if(JSONobject.panels[index][3]=='scale'){fromtofromObjectValuesArray.transformScale=JSONobject.panels[index][4]}else if(JSONobject.panels[index][3]=='top'){fromtofromObjectValuesArray.positionTop=JSONobject.panels[index][4]}else if(JSONobject.panels[index][3]=='bottom'){fromtofromObjectValuesArray.positionBottom=JSONobject.panels[index][4]}else if(JSONobject.panels[index][3]=='left'){fromtofromObjectValuesArray.positionLeft=JSONobject.panels[index][4]}else if(JSONobject.panels[index][3]=='right'){fromtofromObjectValuesArray.positionRight=JSONobject.panels[index][4]}else if(JSONobject.panels[index][3]==prop){fromtofromObjectValuesArray[prop]=JSONobject.panels[index][4]}});fromtofromObjectValuesArray.method='fromto';return fromtofromObjectValuesArray})();const fromtotoObject=(()=>{let fromtotoObjectValuesArray={};const properties=['method','opacity','autoAlpha','transformX','transformY','transformScale','transformRotate','transformSkewX','transformSkewY','background','color','fontFamily','fontSize','fontWeight','fontStyle','textAlign','textDecoration','textTransform','lineHeight','letterSpacing','wordSpacing','width','height','minWidth','minHeight','maxWidth','maxHeight','paddingTop','paddingBottom','paddingLeft','paddingRight','marginTop','marginBottom','marginLeft','marginRight','positionTop','positionBottom','positionLeft','positionRight','borderColor','borderStyle','borderWidthTop','borderWidthBottom','borderWidthLeft','borderWidthRight','borderTopLeftRadius','borderTopRightRadius','borderBottomLeftRadius','borderBottomRightRadius','boxShadowOffsetX','boxShadowOffsetY','boxShadowBlur','boxShadowSpread','boxShadowColor','filterBlur','filterBrightness','filterContrast','filterGrayscale','filterHueRotate','filterInvert','filterSaturate','filterSepia','svgFill','svgStrokeColor','svgStrokeWidth',];properties.forEach(prop=>{if(JSONobject.panels[index][3]=='x'){fromtotoObjectValuesArray.transformX=JSONobject.panels[index][5]}else if(JSONobject.panels[index][3]=='y'){fromtotoObjectValuesArray.transformY=JSONobject.panels[index][5]}else if(JSONobject.panels[index][3]=='scale'){fromtotoObjectValuesArray.transformScale=JSONobject.panels[index][5]}else if(JSONobject.panels[index][3]=='top'){fromtotoObjectValuesArray.positionTop=JSONobject.panels[index][5]}else if(JSONobject.panels[index][3]=='bottom'){fromtotoObjectValuesArray.positionBottom=JSONobject.panels[index][5]}else if(JSONobject.panels[index][3]=='left'){fromtotoObjectValuesArray.positionLeft=JSONobject.panels[index][5]}else if(JSONobject.panels[index][3]=='right'){fromtotoObjectValuesArray.positionRight=JSONobject.panels[index][5]}else if(JSONobject.panels[index][3]==prop){fromtotoObjectValuesArray[prop]=JSONobject.panels[index][5]}});fromtotoObjectValuesArray.method='fromto';return fromtotoObjectValuesArray})();let animationValuesArray={};animationValuesArray.isActiveAnimation=!0;if(JSONobject.panels[panelIndex][0])animationValuesArray.element=JSONobject.panels[panelIndex][0];if(JSONobject.panels[panelIndex][6])animationValuesArray.duration=JSONobject.panels[panelIndex][6];if(JSONobject.panels[panelIndex][7])animationValuesArray.delay=JSONobject.panels[panelIndex][7];if(JSONobject.panels[panelIndex][8])animationValuesArray.easing=JSONobject.panels[panelIndex][8];animationValuesArray.method='fromto';animationValuesArray.methodfromto='fromtofrom';animationValuesArray.fromObject=fromObject;animationValuesArray.toObject=toObject;if(fromtofromObject)animationValuesArray.fromtofromObject=fromtofromObject;if(fromtotoObject)animationValuesArray.fromtotoObject=fromtotoObject;return{animation:animationValuesArray}}});let timelineValuesArray={};if(JSONobject.timelines[index])timelineValuesArray.timelineName=JSONobject.timelines[index];if(index==0)timelineValuesArray.isActiveTimeline=!0;if(JSONobject.panels[index][1]){timelineValuesArray.trigger=JSONobject.panels[index][1]}else if(JSONobject.panels[index][1]==''){timelineValuesArray.trigger=JSONobject.panels[index][0]}
if(JSONobject.panels[index][2])timelineValuesArray.start=JSONobject.panels[index][2];animationsValues=animationsValues.filter(function(value){return value!==undefined});if(animationsValues)timelineValuesArray.animations=animationsValues;return{timeline:timelineValuesArray}});const folderObject={folder:{isActiveFolder:!0,folderName:'Folder 1',timelines:timelinesValues}};folderData.push(folderObject);const animatorObject={animator:{markersEnabled:JSONobject.markers,folders:folderData,}};return animatorObject}}