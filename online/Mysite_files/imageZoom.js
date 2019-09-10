define("imageZoom",["lodash","coreUtils","santa-components","componentsCore","prop-types","skins","zepto","reactDOM","image-client-api"],function(t,e,i,n,o,s,a,r,p){return function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=791)}({0:function(e,i){e.exports=t},1:function(t,i){t.exports=e},2:function(t,e){t.exports=i},21:function(t,e){t.exports=p},240:function(t,e,i){var n,o;n=[i(2),i(6),i(4),i(0),i(3),i(793),i(7),i(241)],void 0===(o=function(t,e,i,n,o,s,a,r){"use strict";var p={width:240,height:60},d={width:0,height:0};function l(t){return t&&!t.target.href}function c(t){return t.isMobileDevice||t.isTabletDevice()}return{displayName:"MediaZoom",mixins:[o.mixins.skinBasedComp,t.mixins.animationsMixin,o.mixins.skinInfo,o.mixins.galleryImageExpandedActionMixin,o.mixins.cyclicTabbingMixin],propTypes:n.assign({styleId:t.santaTypesDefinitions.Component.styleId.isRequired,isZoomAllowed:t.santaTypesDefinitions.RenderFlags.isZoomAllowed.isRequired,isMobileDevice:t.santaTypesDefinitions.Device.isMobileDevice.isRequired,isTabletDevice:t.santaTypesDefinitions.Device.isTabletDevice.isRequired,rootNavigationInfo:t.santaTypesDefinitions.Component.rootNavigationInfo.isRequired,navigateToPage:t.santaTypesDefinitions.navigateToPage.isRequired,passClickEvent:t.santaTypesDefinitions.passClickEvent.isRequired,exitFullScreenMode:t.santaTypesDefinitions.exitFullScreenMode.isRequired,enterFullScreenMode:t.santaTypesDefinitions.enterFullScreenMode.isRequired,isExperimentOpen:t.santaTypesDefinitions.isExperimentOpen,isFirstRenderAfterSSR:t.santaTypesDefinitions.isFirstRenderAfterSSR.isRequired,getPrevAndNextStateFunc:i.func,isDataChangedFunc:i.func,getChildCompFunc:i.func,getBoxDimensionsFunc:i.func,actualNavigateToItemFunc:i.func,closeFunction:i.func,dataChanged:i.bool},t.utils.santaTypesUtils.getSantaTypesFromPropTypes(t.components.Image.propTypes),t.utils.santaTypesUtils.getSantaTypesByDefinition(r)),getSvgButton:function(e,i){var a=s[e],r=n.clone(a.svg),p=this.props.styleId+"_";return n.assign(r,{className:p+a.svg.className,dangerouslySetInnerHTML:{__html:a.content},tabIndex:0,role:"button",onKeyDown:o.utils.accessibility.keyboardInteractions.activateBySpaceOrEnterButton},i),t.utils.createReactElement("svg",r)},getInitialState:function(){this.isAnimating=!1,this.shouldUpdateSizeOnLayout=!0;var t="desktop";return this.props.isMobileDevice?t="mobile":this.props.isTabletDevice()&&(t="tablet"),n.assign({$buttonsState:"showButtons",$device:t},this.props.getPrevAndNextStateFunc())},componentWillReceiveProps:function(t){if(this.props.isZoomAllowed){var e=this.props.dataChanged||this.props.isDataChangedFunc(this.props,t);this.shouldUpdateSizeOnLayout=e&&!this.props.isFirstRenderAfterSSR,e&&this.setState(this.props.getPrevAndNextStateFunc())}else setTimeout(this.closeMediaZoom,0)},getSkinProperties:function(){var t=!!this.state.next?{}:{display:"none"},e=c(this.props)?d:p,i=this.props.getChildCompFunc({toggleButtons:this.toggleButtons,goToNextItem:this.clickOnNextButton,goToPrevItem:this.clickOnPreviousButton},e),n={"":{onKeyDown:this.preventTabbingOut,"data-width-spacer":e.width,"data-height-spacer":e.height},blockingLayer:{onClick:this.onBlockingLayerClick},xButton:{onClick:this.closeMediaZoom,children:[this.getSvgButton("buttonClose",{"aria-label":"close"})]},dialogBox:{onClick:this.handleDialogBoxClick},itemsContainer:{children:i,"aria-live":"polite",tabIndex:-1},buttonPrev:{onClick:this.clickOnPreviousButton,style:t,children:[this.getSvgButton("buttonPrevious",{"aria-label":"previous"})]},buttonNext:{onClick:this.clickOnNextButton,style:t,children:[this.getSvgButton("buttonNext",{"aria-label":"next"})]}};return c(this.props)&&(n.blockingLayer.onSwipeLeft=this.clickOnNextButton,n.blockingLayer.onSwipeRight=this.clickOnPreviousButton),n},onBlockingLayerClick:function(t){l(t)&&(this.closeMediaZoom(),t.preventDefault(),t.stopPropagation())},componentDidLayout:function(){var t=this.props.getBoxDimensionsFunc();if(this.shouldUpdateSizeOnLayout){this.shouldUpdateSizeOnLayout=!1,a.findDOMNode(this.refs.itemsContainer).focus();var i=this;if(!this.props.isFirstRenderAfterSSR){var n={width:t.dialogBoxWidth,height:t.dialogBoxHeight,marginTop:t.marginTop,marginLeft:t.marginLeft,padding:t.padding};this.sequence().add("dialogBox","BaseDimensions",.5,0,{to:n}).add("itemsContainer","FadeIn",.5,0).onCompleteAll(function(){i.unBlockNavigation(),i.handleImageExpandedAction()}).execute()}}else{var o={width:t.dialogBoxWidth,height:t.dialogBoxHeight,"margin-top":t.marginTop,"margin-left":t.marginLeft,padding:t.padding};e(a.findDOMNode(this.refs.dialogBox)).css(o)}},clickOnNextButton:function(t){this.navigateToOtherPageWithAnimations(this.state.next),t&&(t.preventDefault(),t.stopPropagation())},clickOnPreviousButton:function(t){this.navigateToOtherPageWithAnimations(this.state.prev),t&&(t.preventDefault(),t.stopPropagation())},navigateToOtherPageWithAnimations:function(t){if(!this.isNavigationBlocked()){var e=this;this.blockNavigation(),this.animate("itemsContainer","FadeOut",.5,0,null,{onComplete:function(){e.props.actualNavigateToItemFunc(t)}})}},closeMediaZoom:function(){if(this.props.closeFunction)this.props.closeFunction();else{var t=n.omit(this.props.rootNavigationInfo,["imageZoom","pageItemId","title"]);this.props.navigateToPage(t)}},handleDialogBoxClick:function(t){l(t)&&(t.preventDefault(),t.stopPropagation(),this.props.passClickEvent(t))},unBlockNavigation:function(){this.isAnimating=!1},blockNavigation:function(){this.isAnimating=!0},isNavigationBlocked:function(){return this.isAnimating},componentWillMount:function(){this.props.enterFullScreenMode()},componentDidMount:function(){this._focusedElementBeforeMediaZoom=window.document.activeElement},componentWillUnmount:function(){this.props.exitFullScreenMode(),e(this._focusedElementBeforeMediaZoom).focus()},toggleButtons:function(t){var e="showButtons"===this.state.$buttonsState?"hideButtons":"showButtons";this.setState({$buttonsState:e}),t&&(t.preventDefault(),t.stopPropagation())}}}.apply(e,n))||(t.exports=o)},241:function(t,e,i){var n,o;n=[i(4),i(0),i(3),i(1),i(21),i(2)],void 0===(o=function(t,e,i,n,o,s){"use strict";var a=n.linkRenderer,r="Go to link";function p(t,i,n,s){var a=e.assign({},t,{alt:t.title,itemProp:"contentUrl"}),r={id:this.props.id+"image",ref:"image",key:t.id,imageData:a,quality:s,containerWidth:i.imageContainerWidth,containerHeight:i.imageContainerHeight,displayMode:o.fittingTypes.LEGACY_FULL,onClick:this.props.goToNextItem,filterEffect:this.props.compProp.filterEffect,labelledById:this.props.id+"title",describedById:this.props.id+"description"};return n&&(r.onClick=this.props.toggleButtons,r.onTap=this.props.toggleButtons),this.createChildComponent(a,"core.components.Image","image",r)}return{displayName:"ImageZoomDisplayer",mixins:[i.mixins.skinBasedComp,i.mixins.createChildComponentMixin],propTypes:e.assign({id:s.santaTypesDefinitions.Component.id,compData:s.santaTypesDefinitions.Component.compData.isRequired,compProp:s.santaTypesDefinitions.Component.compProp,isMobileDevice:s.santaTypesDefinitions.Device.isMobileDevice,isTabletDevice:s.santaTypesDefinitions.Device.isTabletDevice,rootNavigationInfo:s.santaTypesDefinitions.Component.rootNavigationInfo.isRequired,linkRenderInfo:s.santaTypesDefinitions.Link.renderInfo.isRequired,goToNextItem:t.func,toggleButtons:t.func,zoomDimensions:t.object,quality:t.object},s.utils.santaTypesUtils.getSantaTypesFromPropTypes(s.components.Image.propTypes)),getInitialState:function(){var t="desktop";return this.props.isMobileDevice?t="mobile":this.props.isTabletDevice()&&(t="tablet"),{$device:t}},getSkinProperties:function(){var t=this.props.compData,e=this.props.compProp,i=this.props.zoomDimensions,n=this.props.quality,o={"":{itemScope:!0,itemType:"http://schema.org/ImageObject"},title:{children:t.title,itemProp:"name","aria-hidden":"true"},description:{children:t.description,itemProp:"description"},image:p.call(this,t,i,this.props.isMobileDevice||this.props.isTabletDevice(),n)};return t.link&&(o.link=a.renderLink(t.link,this.props.linkRenderInfo,this.props.rootNavigationInfo),o.link.children=e&&e.goToLinkText?e.goToLinkText:r),o}}}.apply(e,n))||(t.exports=o)},242:function(t){t.exports=JSON.parse('{"ENTER_EXPAND_MODE":{"eventId":376,"adapter":"ugc-viewer","params":{"site_id":"site_id"}},"ZOOM_IN_EXPAND_MODE":{"eventId":375,"adapter":"ugc-viewer","params":{"site_id":"site_id","zoomType":"zoomType"}}}')},3:function(t,e){t.exports=n},4:function(t,e){t.exports=o},5:function(t,e){t.exports=s},6:function(t,e){t.exports=a},7:function(t,e){t.exports=r},791:function(t,e,i){var n,o;n=[i(792),i(241),i(240),i(794),i(795),i(796),i(5),i(797)],void 0===(o=function(t,e,i,n,o,s,a,r){"use strict";return a.skinsMap.addBatch(r),{imageZoom:t,imageZoomDisplayer:e,mediaZoom:i,mobileMediaZoom:n,touchMediaZoom:o,touchMediaZoomItem:s}}.apply(e,n))||(t.exports=o)},792:function(t,e,i){var n,o;n=[i(2),i(4),i(0),i(3),i(240),i(1),i(242)],void 0===(o=function(t,e,i,n,o,s,a){"use strict";return{displayName:"ImageZoom",mixins:[n.mixins.mediaZoomWrapperMixin],propTypes:i.assign({id:t.santaTypesDefinitions.Component.id,compData:t.santaTypesDefinitions.Component.compData.isRequired,rootNavigationInfo:t.santaTypesDefinitions.Component.rootNavigationInfo.isRequired,reportBI:t.santaTypesDefinitions.reportBI.isRequired,siteId:t.santaTypesDefinitions.RendererModel.siteId.isRequired,siteWidth:t.santaTypesDefinitions.siteWidth,navigateToPage:t.santaTypesDefinitions.navigateToPage.isRequired,getScreenHeight:t.santaTypesDefinitions.getScreenHeight.isRequired,getScreenWidth:t.santaTypesDefinitions.getScreenWidth.isRequired,getWindowInnerHeight:t.santaTypesDefinitions.__DangerousSantaTypes.getWindowInnerHeight.isRequired,getCustomMeasureMap:t.santaTypesDefinitions.__DangerousSantaTypes.getCustomMeasureMap.isRequired,isMobileDevice:t.santaTypesDefinitions.Device.isMobileDevice,isTabletDevice:t.santaTypesDefinitions.Device.isTabletDevice,pageItemAdditionalData:e.object,galleryCompId:e.string,zoom:t.santaTypesDefinitions.NonPageItemZoom.zoom,unzoom:t.santaTypesDefinitions.NonPageItemZoom.unzoom,currentZoomItem:t.santaTypesDefinitions.NonPageItemZoom.currentItem},t.utils.santaTypesUtils.getSantaTypesByDefinition(o)),isNonOptimizedView:function(){return this.props.isMobileDevice||this.props.isTabletDevice()},fireEnterExpandModeEvent:function(){this.props.reportBI(a.ENTER_EXPAND_MODE,{site_id:this.props.siteId})},componentWillMount:function(){this.fireEnterExpandModeEvent()},getInitialState:function(){return this.isNonOptimizedView()&&(this.enableInnerScrolling=!0),{}},getPrevAndNextState:function(){var t=void 0,e=void 0,n=this.props.pageItemAdditionalData,o={next:null,prev:null};return n&&(t=i.map(n.items,"id")).length>1&&(e=t.indexOf(this.props.compData.id),o.next=t[(e+1)%t.length],o.prev=t[(e-1+t.length)%t.length]),o},isDataChanged:function(t,e){return t.compData!==e.compData},getChildComp:function(t,e){var n={isMobileDevice:this.props.isMobileDevice,isTabletDevice:this.props.isTabletDevice(),siteWidth:this.props.siteWidth},o={width:this.props.getScreenWidth(),height:this.props.getScreenHeight(),innerHeight:this.props.getWindowInnerHeight()},a=i.every(o),r={zoomDimensions:(this.isNonOptimizedView()?s.mediaZoomCalculations.getNonOptimizedViewDimensions:s.mediaZoomCalculations.getDesktopViewDimensions)(this.props.compData,n,a?o:null,e),quality:{quality:90}};return i.assign(r,t),this.createChildComponent(this.props.compData,"wysiwyg.components.ImageZoomDisplayer","imageItem",r)},getBoxDimensions:function(){return this.props.getCustomMeasureMap(this.props.id+this.props.compData.id)},actualNavigateToItem:function(t){if(this.props.currentZoomItem)if(t){var e=i.find(this.props.currentZoomItem.galleryData.items,{id:t});this.props.zoom(e,this.props.currentZoomItem.galleryData)}else this.props.unzoom();else{var n=i.clone(this.props.rootNavigationInfo);n.pageItemId=t,this.props.navigateToPage(n)}},getChildZoomComponentType:function(){return"wysiwyg.viewer.components.MediaZoom"},getImageIndex:function(){var t=i.get(this.props.pageItemAdditionalData,"items");if(t)return i.findIndex(t,{id:this.props.compData.id})},getChildZoomExtraProps:function(){return i.assign({},i.pickBy({galleryCompId:this.props.galleryCompId}),{imageIndex:this.getImageIndex()})}}}.apply(e,n))||(t.exports=o)},793:function(t,e,i){var n;void 0===(n=function(){"use strict";return{buttonClose:{svg:{viewBox:"0 0 180 180",className:"svgButtonClose"},content:'<path d="M5 5 L175 175 M175 5 L5 175"/>'},buttonPrevious:{svg:{viewBox:"0 0 180 310",className:"svgNavButton"},content:'<path d="M170 10 L10 161 M10 150 L170 300"/>'},buttonNext:{svg:{viewBox:"0 0 180 310",className:"svgNavButton"},content:'<path d="M10 10 L170 161 M170 150 L10 300"/>'}}}.apply(e,[]))||(t.exports=n)},794:function(t,e,i){var n,o;n=[i(2),i(0),i(3),i(4)],void 0===(o=function(t,e,i,n){"use strict";return{displayName:"MobileMediaZoom",mixins:[i.mixins.skinBasedComp],propTypes:{compData:t.santaTypesDefinitions.Component.compData.isRequired,forceBackground:t.santaTypesDefinitions.forceBackground.isRequired,disableForcedBackground:t.santaTypesDefinitions.disableForcedBackground.isRequired,isMobileDevice:t.santaTypesDefinitions.Device.isMobileDevice.isRequired,isZoomAllowed:t.santaTypesDefinitions.RenderFlags.isZoomAllowed.isRequired,siteWidth:t.santaTypesDefinitions.siteWidth.isRequired,siteScrollingBlocker:t.santaTypesDefinitions.SiteAspects.siteScrollingBlocker.isRequired,navigateToPage:t.santaTypesDefinitions.navigateToPage.isRequired,enterFullScreenMode:t.santaTypesDefinitions.enterFullScreenMode.isRequired,exitFullScreenMode:t.santaTypesDefinitions.exitFullScreenMode.isRequired,isDataChangedFunc:n.func.isRequired,getPrevAndNextStateFunc:n.func.isRequired,getChildCompFunc:n.func.isRequired,enableInnerScrolling:n.bool.isRequired,actualNavigateToItemFunc:n.func.isRequired,closeFunction:n.func,rootNavigationInfo:n.object},getInitialState:function(){var t=this.props.getPrevAndNextStateFunc();return e.assign(t,{$viewerType:this.props.isMobileDevice?"mobile":"tablet",$buttonState:""}),this.props.enableInnerScrolling&&(t.$scrollState="scrollEnabled"),t},componentWillReceiveProps:function(t){this.props.isZoomAllowed?this.props.isDataChangedFunc(this.props,t)&&this.setState(this.props.getPrevAndNextStateFunc()):setTimeout(this.closeMediaZoom,0)},createOverlay:function(t){return i.utils.fullScreenOverlay.createOverlay(t,{siteWidth:this.props.siteWidth,isMobileDevice:this.props.isMobileDevice,siteScrollingBlocker:this.props.siteScrollingBlocker,forceBackground:this.props.forceBackground,disableForcedBackground:this.props.disableForcedBackground})},getSkinProperties:function(){var t=this.props.getChildCompFunc({key:this.props.compData.id,hideMediaZoomButtons:this.hideButtons,showMediaZoomButtons:this.showButtons},{width:0,height:0}),e=!this.state.next,i={"":{onSwipeLeft:this.clickOnNextButton,onSwipeRight:this.clickOnPreviousButton},itemsContainer:{children:t},xButton:{onClick:this.closeMediaZoom,style:{}},buttonPrev:{onClick:this.clickOnPreviousButton,style:{}},buttonNext:{onClick:this.clickOnNextButton,style:{}}};return i=this.props.enableInnerScrolling?i:this.createOverlay(i),(e||this.props.enableInnerScrolling)&&(i.buttonNext.style.display="none",i.buttonPrev.style.display="none"),i},clickOnNextButton:function(t){this.showButtons(),this.props.actualNavigateToItemFunc(this.state.next),t&&(t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation())},closeMediaZoom:function(){this.props.closeFunction?this.props.closeFunction():this.props.navigateToPage({pageId:this.props.rootNavigationInfo.pageId})},clickOnPreviousButton:function(t){this.showButtons(),this.props.actualNavigateToItemFunc(this.state.prev),t&&(t.preventDefault&&t.preventDefault(),t.stopPropagation&&t.stopPropagation())},hideButtons:function(){this.setState({$buttonState:"hideButtons"})},showButtons:function(){this.setState({$buttonState:""})},componentDidMount:function(){this.props.enterFullScreenMode({scrollable:this.props.enableInnerScrolling})},componentWillUnmount:function(){this.props.exitFullScreenMode()}}}.apply(e,n))||(t.exports=o)},795:function(t,e,i){var n,o;n=[i(6),i(0),i(1),i(3),i(4),i(242),i(2)],void 0===(o=function(t,e,i,n,o,s,a){"use strict";var r=i.linkRenderer,p=i.touchMediaZoomUtils,d={displayName:"TouchMediaZoom",mixins:[n.mixins.skinBasedComp,n.mixins.createChildComponentMixin],propTypes:{browser:a.santaTypesDefinitions.Browser.browser.isRequired,id:a.santaTypesDefinitions.Component.id.isRequired,compData:a.santaTypesDefinitions.Component.compData.isRequired,compProp:a.santaTypesDefinitions.Component.compProp.isRequired,rootNavigationInfo:a.santaTypesDefinitions.Component.rootNavigationInfo.isRequired,styleId:a.santaTypesDefinitions.Component.styleId.isRequired,devicePixelRatio:a.santaTypesDefinitions.Device.devicePixelRatio.isRequired,isMobileDevice:a.santaTypesDefinitions.Device.isMobileDevice.isRequired,screenSize:a.santaTypesDefinitions.screenSize.isRequired,linkRenderInfo:a.santaTypesDefinitions.Link.renderInfo.isRequired,isLandscape:a.santaTypesDefinitions.mobile.isLandscape.isRequired,isZoomed:a.santaTypesDefinitions.mobile.isZoomed.isRequired,isZoomedIn:a.santaTypesDefinitions.mobile.isZoomedIn.isRequired,navigateToPage:a.santaTypesDefinitions.navigateToPage.isRequired,isZoomAllowed:a.santaTypesDefinitions.RenderFlags.isZoomAllowed.isRequired,siteId:a.santaTypesDefinitions.RendererModel.siteId.isRequired,reportBI:a.santaTypesDefinitions.reportBI.isRequired,staticMediaUrl:a.santaTypesDefinitions.ServiceTopology.staticMediaUrl.isRequired,windowKeyboardEvent:a.santaTypesDefinitions.SiteAspects.windowKeyboardEvent.isRequired,updateUrlIfNeeded:a.santaTypesDefinitions.Navigation.updateUrlIfNeeded.isRequired,currentZoomItem:a.santaTypesDefinitions.NonPageItemZoom.currentItem,unzoom:a.santaTypesDefinitions.NonPageItemZoom.unzoom,isExperimentOpen:a.santaTypesDefinitions.isExperimentOpen,enterMediaZoomMode:a.santaTypesDefinitions.enterMediaZoomMode.isRequired,exitMediaZoomMode:a.santaTypesDefinitions.exitMediaZoomMode.isRequired,isInSSR:a.santaTypesDefinitions.isInSSR.isRequired,pageItemAdditionalData:o.object},getSwipeOffset:function(){return this.nonReactState.swipeOffset},setSwipeOffset:function(t){this.nonReactState.swipeOffset=t;var e=p.generateTransformString(t,this.stageData.fullWidth);this.refs.swipeStage.style.transform=e,this.refs.swipeStage.style.webkitTransform=e},getCurrentSlideIndex:function(){return this.nonReactState.currentSlideIndex},setCurrentSlideIndex:function(t){this.nonReactState.currentSlideIndex=t},getIsZoomed:function(){return this.nonReactState.isZoomed},setIsZoomed:function(t){this.nonReactState.isZoomed=t},getItems:function(){return e.get(this.props.pageItemAdditionalData,"items",[this.props.compData])},enterZoomMode:function(){this.isZoomed=!0,this.refs.xButton.classList.add(this.classSet({"force-hide":!0})),this.fireZoomInExpandModeEvent("pinch")},exitZoomMode:function(){this.isZoomed=!1,this.refs.xButton.classList.remove(this.classSet({"force-hide":!0}))},onTouchMove:function(t){1!==t.touches.length||this.isZoomed?1===t.touches.length||this.isZoomed||this.enterZoomMode():t.preventDefault()},onTouchEnd:function(){this.isZoomed&&(this._touchEndTimeoutHandle=window.setTimeout(function(){this.props.isZoomedIn()||this.exitZoomMode()}.bind(this),300))},fireEnterExpandModeEvent:function(){this.props.reportBI(s.ENTER_EXPAND_MODE,{site_id:this.props.siteId})},fireZoomInExpandModeEvent:function(t){this.props.reportBI(s.ZOOM_IN_EXPAND_MODE,{site_id:this.props.siteId,zoomType:t})},componentWillMount:function(){this.fireEnterExpandModeEvent(),this.props.windowKeyboardEvent.registerToArrowLeftKey(this),this.props.windowKeyboardEvent.registerToArrowRightKey(this),Object.defineProperty(this,"swipeOffset",{get:this.getSwipeOffset,set:this.setSwipeOffset}),Object.defineProperty(this,"currentSlideIndex",{get:this.getCurrentSlideIndex,set:this.setCurrentSlideIndex}),Object.defineProperty(this,"isZoomed",{get:this.getIsZoomed,set:this.setIsZoomed}),this.stageData=p.createStageData(.2),this.stagePercentFactor=100/this.stageData.fullWidth,this.resetNonReactState(),this.setState({showInfo:!0,isZoomed:!1}),this.pageScroll=this.props.isInSSR?0:window.scrollY,this.props.enterMediaZoomMode()},componentDidMount:function(){if(this.nonReactState.firstRender=!1,this.setSwipeOffset(this.swipeOffset),this.refs.swipeStage.addEventListener("transitionend",this.onSwipeEnd),this.pageMarginTop=t("html").css("marginTop"),t("html").css({marginTop:0}),this.props.isMobileDevice){var e=this;requirejs(["hammer"],function(t){e.setupTouchHandlers(t)}),this.refs[""].addEventListener("touchend",this.onTouchEnd),this.refs[""].addEventListener("touchcancel",this.onTouchEnd),this.refs[""].addEventListener("touchmove",this.onTouchMove)}},componentWillUnmount:function(){window.clearTimeout(this._touchEndTimeoutHandle),this.props.exitMediaZoomMode(),t("html").css({marginTop:this.pageMarginTop}),window.scrollTo(0,this.pageScroll)},setupTouchHandlers:function(t){this.hammertime=new t.Manager(this.refs[""],{cssProps:{touchCallout:"default"},touchAction:"auto"}),this.hammertime.add(new t.Pan({event:"pan",direction:t.DIRECTION_HORIZONTAL})),this.hammertime.add(new t.Pan({event:"panstart",direction:t.DIRECTION_HORIZONTAL})),this.hammertime.add(new t.Pan({event:"panend",direction:t.DIRECTION_HORIZONTAL})),this.hammertime.on("panstart pan panend",this.onSwipe),this.hammertime.add(new t.Tap({event:"doubletap",taps:2,threshold:30,posThreshold:30})),this.hammertime.on("doubletap",e.partial(this.fireZoomInExpandModeEvent,"doubleTap"))},componentWillUpdate:function(){this.props.isMobileDevice&&this.setSwipeOffset(this.stageData.centerPart_begin)},componentWillReceiveProps:function(){this.props.isZoomAllowed||setTimeout(this.closeMediaZoom,0)},resetNonReactState:function(t){var i=t||this.props.compData,n=e.findIndex(this.getItems(),{id:i.id}),o=this.props.isZoomed();this.nonReactState={currentSlideIndex:n,swipeOffset:this.stageData.centerPart_begin,isZoomed:o,firstRender:!0}},onSwipe:function(t){if(!(this.isZoomed||t.center.x-t.deltaX<29))switch(t.type){case"panstart":break;case"pan":this.swipeOffset=e.clamp(this.stageData.centerPart_begin-t.deltaX/window.innerWidth,this.currentSlideIndex>0?this.stageData.leftPart_leftMargin:this.stageData.centerPart_leftMargin,this.currentSlideIndex<this.getItems().length-1?this.stageData.rightPart_rightMargin:this.stageData.centerPart_rightMargin);break;case"panend":this.startTransition();break;default:throw new Error("unsupported event type: "+t.type)}},calcTransitionTarget:function(){return this.swipeOffset<this.stageData.centerPart_leftMargin?{offset:this.stageData.leftPart_begin,index:this.currentSlideIndex-1}:this.swipeOffset>this.stageData.centerPart_rightMargin?{offset:this.stageData.rightPart_begin,index:this.currentSlideIndex+1}:{offset:this.stageData.centerPart_begin,index:this.currentSlideIndex}},startTransition:function(t){var e=t||this.calcTransitionTarget();this.refs.swipeStage.classList.add(this.props.styleId+"_animate"),this.swipeOffset=e.offset,this.currentSlideIndex=e.index},onSwipeEnd:function(){this.refs.swipeStage.classList.remove(this.props.styleId+"_animate"),this.swipeOffset=this.stageData.centerPart_begin,this.navigateToSlide(this.currentSlideIndex),this.setState({})},navigateToSlide:function(t){var i=this.getItems()[t].id,n=e.clone(this.props.rootNavigationInfo);n.pageItemId=i,this.props.updateUrlIfNeeded(n)},closeMediaZoom:function(){if(this.props.currentZoomItem)this.props.unzoom();else{var t=e.omit(this.props.rootNavigationInfo,["imageZoom","pageItemId","title"]);this.props.navigateToPage(t)}},onXButton:function(t){this.closeMediaZoom(),t.preventDefault()},onArrowLeftKey:function(){this.currentSlideIndex>0&&this.startTransition({offset:this.stageData.leftPart_begin,index:this.currentSlideIndex-1})},onArrowRightKey:function(){this.currentSlideIndex<this.getItems().length-1&&this.startTransition({offset:this.stageData.rightPart_begin,index:this.currentSlideIndex+1})},toggleInfoPanel:function(t){t.target!==this.refs.stage_CENTER.refs.link&&this.setState({showInfo:!this.isManipulated()&&!this.state.showInfo})},getGotoLink:function(t){var i=t.link;if(i){var n=r.renderLink(i,this.props.linkRenderInfo,this.props.rootNavigationInfo);return n.children=e.get(this.props.compProp,"goToLinkText","Go to link"),n}},getStageParts:function(){return e.filter([{id:"LEFT",imageIndex:this.currentSlideIndex-1,offset:this.stageData.leftPart_leftMargin},{id:"CENTER",imageIndex:this.currentSlideIndex,offset:this.stageData.centerPart_leftMargin},{id:"RIGHT",imageIndex:this.currentSlideIndex+1,offset:this.stageData.rightPart_leftMargin}],function(t){return t.imageIndex>=0&&t.imageIndex<this.getItems().length}.bind(this))},isManipulated:function(){return this.props.isMobileDevice&&this.props.isLandscape()||this.state.isZoomed},buildStageChildren:function(){var t=[];return e.forEach(this.getStageParts(),function(e){var i=e.offset*this.stagePercentFactor,n="stage_"+e.id,o=this.getItems()[e.imageIndex],s=this.nonReactState.firstRender?null:this.props.screenSize,a={pixelAspectRatio:this.props.devicePixelRatio,browser:this.props.browser,staticMediaUrl:this.props.staticMediaUrl,screenSize:s},r=this.createChildComponent(o,"wysiwyg.viewer.components.TouchMediaZoomItem","image",{key:this.props.id+"_item"+e.imageIndex,id:n,ref:n,imageData:o,clientData:a,link:this.getGotoLink(o),screenSize:s,itemToScreenRatio:1.4,showInfo:this.state.showInfo&&!this.isManipulated(),itemLeft:i,firstRender:this.nonReactState.firstRender});t.push(r)}.bind(this)),t},getSkinProperties:function(){return{"":{onClick:this.toggleInfoPanel},swipeStage:{style:{width:100*this.stageData.fullWidth+"%"},children:this.buildStageChildren()},xButton:{onClick:this.onXButton,className:this.classSet({hidden:this.isManipulated()})}}}};return n.compRegistrar.register("wysiwyg.viewer.components.TouchMediaZoom",d),d}.apply(e,n))||(t.exports=o)},796:function(t,e,i){var n,o;n=[i(0),i(4),i(1),i(3)],void 0===(o=function(t,e,i,n){"use strict";var o=i.touchMediaZoomUtils;return{displayName:"TouchMediaZoomItem",mixins:[n.mixins.skinBasedComp],propTypes:{itemToScreenRatio:e.number.isRequired,itemLeft:e.number.isRequired,imageData:e.object.isRequired,clientData:e.object.isRequired,showInfo:e.bool.isRequired,firstRender:e.bool.isRequired,link:e.object,screenSize:e.object},getTitle:function(){var e=t.get(this.props.imageData,"title");return{className:this.classSet({hidden:!e}),children:e}},getDescription:function(){var e=t.get(this.props.imageData,"description");return{className:this.classSet({hidden:!e}),children:e}},getLink:function(){return t.assign({},this.props.link,{className:this.classSet({hidden:!this.props.link})})},hasInfo:function(){return this.props.imageData.title||this.props.imageData.description||this.props.link},isImageFullWidth:function(){return!t.has(this.props.screenSize,"width")||this.props.screenSize<=t.get(this.props.imageApiFastData,"css.img.width")},getImageProps:function(e,i){if(this.props.firstRender)return{"data-imgdata":JSON.stringify(t.pick(e,["width","height","uri","quality"])),"data-imgscale":i||1};var n=o.getImageApiData(e,this.props.clientData,i||1);return{src:n.uri,style:n.css.img}},getSkinProperties:function(){var e=t.assign(this.getImageProps(this.props.imageData,.25),{className:this.classSet({fast:!0})}),i=t.assign(this.getImageProps(this.props.imageData),{className:this.classSet({heavy:!0})}),n=t.has(this.props.screenSize,"width")?{width:this.props.screenSize.width+"px"}:{},o=t.has(this.props.screenSize,"width")?{width:this.props.screenSize.width*this.props.itemToScreenRatio+"px"}:{};return{"":{className:this.classSet({parallax:this.isImageFullWidth()}),style:t.assign({},o,{left:this.props.itemLeft+"%"}),"data-firstrender":this.props.firstRender},imageContainer:{style:n},hirRes:i,lowRes:e,info:{className:this.classSet({hidden:!this.props.showInfo||!this.hasInfo()}),style:n},description:this.getDescription(),title:this.getTitle(),link:this.getLink()}}}}.apply(e,n))||(t.exports=o)},797:function(t,e,i){var n,o,s;"undefined"!=typeof self&&self,o=[],void 0===(s="function"==typeof(n=function(){"use strict";var t={"wysiwyg.skins.ImageZoomDisplayerSkin":{react:[["div","image",[],{}],["div","panel",[],{},["div",null,["_meta"],{},["h3","title",[],{}],["p","description",[],{}],["a","link",[],{}]]]],exports:{image:{skin:"skins.core.ImageSkin"}},mediaQueries:[{query:"@media (orientation: landscape)",css:{"%[data-state~='mobile'] %panel":"font-size:1.5em;"}},{query:"@media (orientation: landscape)",css:{"%[data-state~='tablet'] %panel":"font-size:1em;"}}],css:{"%":'width:100%;height:100%;text-align:center;font:12px "Helvetica Neue","HelveticaNeueW01-55Roma","HelveticaNeueW02-55Roma","HelveticaNeueW10-55Roma",Helvetica, Arial, sans-serif;',"%panel":"position:absolute;text-align:center;color:#fff;font-family:Helvetica;font-weight:100;letter-spacing:0.2px;","%title":"font-size:16px;margin:20px auto;max-width:100%;font-weight:100;","%description":"width:465px;margin:20px auto;white-space:pre-line;font-size:12px;line-height:17px;letter-spacing:0.3px;max-width:100%;","%link":"font-family:'Times New Roman';color:#ffffff;font-size:13px;font-style:italic;text-decoration:underline;","%[data-state~='mobile'] %panel":"font-size:2em;","%[data-state~='tablet'] %panel":"font-size:1.1em;","%[data-state~='mobile'] %panel,%[data-state~='tablet'] %panel":"padding:30px 85px;box-sizing:border-box;","%[data-state~='mobile'] %image,%[data-state~='tablet'] %image":"margin:0 auto;box-sizing:border-box;","%[data-state~='mobile'] %title,%[data-state~='tablet'] %title":"font-size:1.6em;margin-top:0;","%[data-state~='mobile'] %description,%[data-state~='tablet'] %description":"font-size:1.2em;line-height:1.7em;width:100%;","%[data-state~='mobile'] %link,%[data-state~='tablet'] %link":"font-size:1.3em;"}},"wysiwyg.skins.ImageZoomSkin":{react:[],exports:{imageItem:{skin:"wysiwyg.skins.ImageZoomDisplayerSkin"},mediaZoom:{skin:"wysiwyg.viewer.skins.MediaZoomSkin"}},css:{}},"wysiwyg.skins.NonOptimizedImageZoomSkin":{react:[],exports:{imageItem:{skin:"wysiwyg.skins.ImageZoomDisplayerSkin"},mediaZoom:{skin:"wysiwyg.viewer.skins.NonOptimizedMediaZoomSkin"}},css:{}},"wysiwyg.viewer.skins.AppPartMediaZoomSkin":{react:[["div","blockingLayer",[],{},["div","dialogBox",[],{},["div","xButton",[],{}],["div","itemsContainer",[],{}]],["div","buttonPrev",["_btn"],{}],["div","buttonNext",["_btn"],{}]]],params:{tdr:"URL",trns:"TRANSITION",bg:"BG_COLOR",heightSpacer:"SIZE"},paramsDefaults:{tdr:"BASE_THEME_DIRECTORY",trns:"opacity 0.5s ease 0s",bg:"#000",heightSpacer:["pad","pad"]},paramsMutators:{bg:{type:"alpha",value:.75}},css:{"%":"position:fixed !important;width:100% !important;height:100% !important;z-index:99999;","%blockingLayer":"background-color:[bg];position:fixed;top:0;right:0;bottom:0;left:0;visibility:visible;zoom:1;overflow:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;","%[data-state~='mobile'] %blockingLayer,%[data-state~='tablet'] %blockingLayer":"background-color:#5F6360;","%dialogBox":"margin:auto;background:#fff;min-width:500px;position:relative;text-align:right;width:500px;padding:10px 10px 0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-sizing:border-box;","%xButton":"display:inline-block;right:-25px;width:25px;height:25px;background:#fff url([tdr]close.gif) no-repeat 50% 50%;cursor:pointer;position:absolute;top:0;z-index:500;","%_btn":"position:fixed;top:0;width:100px;height:100%;background:url([tdr]arrows_white.png) no-repeat;overflow:hidden;text-indent:-9999px;cursor:pointer;opacity:0.3;[trns]","%buttonNext":"right:20px;background-position:-30px 50%;","%buttonPrev":"left:20px;background-position:70px 50%;","%_btn:hover":"opacity:1;"}},"wysiwyg.viewer.skins.AppPartMobileMediaZoomSkin":{react:[["div","blockingLayer",[],{},["div","dialogBox",["_z-dialog"],{},["div","itemsContainer",[],{}],["div","xButton",["_btn"],{}],["div","buttonPrev",["_btn"],{}],["div","buttonNext",["_btn"],{}]]]],params:{tdr:"URL",zoom:"INVERTED_ZOOM_FIXED",bg:"BG_COLOR"},paramsDefaults:{tdr:"BASE_THEME_DIRECTORY",zoom:"1",bg:"#000"},paramsMutators:{bg:{type:"alpha",value:1}},mediaQueries:[{query:"@media (orientation: landscape)",css:{"%buttonPrev,%buttonNext":"top:45%;"}}],css:{"%":"position:static;width:100%;height:100%;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);z-index:500;","%blockingLayer":"background-color:[bg];position:fixed;top:0;right:0;bottom:0;left:0;","%dialogBox":"position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;background:#000;z-index:1000;","%buttonNext,%buttonPrev":"top:50%;background-size:cover;background-repeat:no-repeat;","%buttonPrev":"background-image:url([tdr]prev_button.png);left:0;","%buttonNext":"background-image:url([tdr]next_button.png);right:0;","%xButton":"top:0;right:0;background:url([tdr]x_button.png) no-repeat;background-size:cover;",'%buttonNext [data-state~="tablet"],%buttonPrev [data-state~="tablet"],%xButton [data-state~="tablet"]':"[zoom]","%_btn":"[zoom]  position:fixed;overflow:hidden;cursor:pointer;",'%[data-state~="tablet"] %_btn':"width:80px;height:80px;",'%[data-state~="mobile"] %_btn':"width:43px;height:43px;",'%[data-state~="hideButtons"] %_btn':"display:none;",'%[data-state~="scrollEnabled"] %blockingLayer':"position:static;height:100%;"}},"wysiwyg.viewer.skins.MediaZoomSkin":{react:[["div","blockingLayer",[],{},["div","dialogBox",[],{},["div","itemsContainer",[],{}]],["div","xButton",[],{}],["div","buttonNext",["_btn"],{}],["div","buttonPrev",["_btn"],{}]]],params:{trns:"TRANSITION",bg:"BG_COLOR",heightSpacer:"SIZE"},paramsDefaults:{trns:"opacity 0.5s ease 0s",bg:"#000",heightSpacer:["pad","pad"]},paramsMutators:{bg:{type:"alpha",value:.9}},css:{"%":"position:fixed !important;width:100% !important;height:100% !important;z-index:99999;","%blockingLayer":"background-color:[bg];position:fixed;top:0;right:0;bottom:0;left:0;visibility:visible;zoom:1;overflow:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;","%dialogBox":"margin:auto;max-width:100%;position:relative;width:500px;padding:35px 0 50px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-sizing:border-box;visibility:hidden;","%xButton":"display:inline-block;right:50px;top:50px;cursor:pointer;position:fixed;z-index:500;","%xButton %_svgButtonClose":"width:18px;height:18px;stroke:#fff;stroke-width:15;position:absolute;right:0;top:0;","%_btn":"position:fixed;top:0;width:33%;height:100%;overflow:hidden;text-indent:-9999px;cursor:pointer;opacity:0.9;[trns]","%_btn %_svgNavButton":"width:18px;height:31px;stroke:#fff;stroke-width:20;position:absolute;top:50%;","%buttonNext":"right:0;","%buttonNext %_svgNavButton":"right:50px;","%buttonPrev":"left:0;","%buttonPrev %_svgNavButton":"left:50px;","%_btn:hover":"opacity:1;"}},"wysiwyg.viewer.skins.NonOptimizedMediaZoomSkin":{react:[["div","blockingLayer",[],{},["div","dialogBox",["_z-dialog"],{},["div","itemsContainer",[],{}],["div","buttonPrev",["_btn"],{}],["div","buttonNext",["_btn"],{}],["div","xButton",["_btn"],{}]]]],params:{trns:"TRANSITION",bg:"BG_COLOR",heightSpacer:"SIZE"},paramsDefaults:{trns:"opacity 0.5s ease 0s",bg:"#000",heightSpacer:["pad","pad"]},paramsMutators:{bg:{type:"alpha",value:.5}},mediaQueries:[{query:"@media (orientation: portrait)",css:{"%xButton":"width:75px;height:75px;","%[data-state~='mobile'] %_svgButtonClose":"width:45px;height:45px;right:15px;top:15px;","%[data-state~='mobile'] %_svgNavButton":"width:45px;height:45px;margin-top:-22px;","%[data-state~='mobile'] %buttonNext %_svgNavButton":"padding:15px 12px 15px 18px;","%[data-state~='mobile'] %buttonPrev %_svgNavButton":"padding:15px 18px 15px 12px;","%[data-state~='tablet'] %_svgButtonClose":"width:35px;height:35px;right:20px;top:20px;","%[data-state~='tablet'] %_svgNavButton":"width:35px;height:35px;margin-top:-17px;","%[data-state~='tablet'] %buttonNext %_svgNavButton":"padding:20px 18px 20px 22px;","%[data-state~='tablet'] %buttonPrev %_svgNavButton":"padding:20px 22px 20px 18px;"}},{query:"@media (orientation: landscape)",css:{"%xButton":"width:45px;height:45px;","%_svgNavButton":"width:25px;height:25px;margin-top:-12px;","%buttonNext %_svgNavButton":"padding:10px 9px 10px 11px;","%buttonPrev %_svgNavButton":"padding:10px 11px 10px 9px;","%[data-state~='tablet'] %_svgButtonClose":"width:19px;height:19px;right:13px;top:13px;","%[data-state~='mobile'] %_svgButtonClose":"width:25px;height:25px;right:10px;top:10px;"}}],css:{"%":"position:fixed !important;width:100% !important;height:100% !important;-webkit-tap-highlight-color:rgba(0, 0, 0, 0);z-index:500;","%blockingLayer":"background-color:#000;position:fixed;top:0;right:0;bottom:0;left:0;visibility:visible;zoom:1;overflow:auto;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;","%dialogBox":"position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;box-sizing:border-box;visibility:hidden;","%_btn":"display:inline-block;cursor:pointer;position:fixed;overflow:hidden;text-indent:-9999px;opacity:0.9;[trns]  z-index:500;","%xButton":"background-color:[bg];right:15px;top:15px;","%xButton %_svgButtonClose":"stroke:#fff;stroke-width:15;position:absolute;","%_svgNavButton":"stroke:#fff;stroke-width:25;position:absolute;top:50%;background-color:[bg];margin:15px;","%buttonNext":"top:0;right:0;width:33%;height:100%;","%buttonNext %_svgNavButton":"right:0;","%buttonPrev":"top:0;left:0;width:33%;height:100%;","%buttonPrev %_svgNavButton":"left:0;","%_btn:hover":"opacity:1;",'%[data-state~="hideButtons"] %_btn':"display:none;"}}};return t})?n.apply(e,o):n)||(t.exports=s)}})});
//# sourceMappingURL=imageZoom.min.js.map