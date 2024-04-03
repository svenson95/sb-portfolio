"use strict";(self.webpackChunksb_portfolio=self.webpackChunksb_portfolio||[]).push([[700],{4700:(ze,k,l)=>{l.r(k),l.d(k,{AboutComponent:()=>Pe,CvComponent:()=>$e,HobbyProjectsComponent:()=>Fe,SkillsComponent:()=>Ve,WorkSamplesComponent:()=>Ue});var u=l(1368),A=l(7816),e=l(7048);let f=(()=>{class n{constructor(){this.title=e.YhN.required(),this.icon=e.YhN.required()}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["sb-card-header"]],inputs:{title:[e.Wk5.SignalBased,"title"],icon:[e.Wk5.SignalBased,"icon"]},standalone:!0,features:[e.UHJ],decls:4,vars:2,consts:[[1,"flex","items-center","mb-4","p-5","text-xl","justify-between"],[1,"mr-2"],[1,"fa-solid",3,"ngClass"]],template:function(i,o){1&i&&(e.I0R(0,"div",0)(1,"h2",1),e.OEk(2),e.C$Y(),e.wR5(3,"i",2),e.C$Y()),2&i&&(e.yG2(2),e.cNF(o.title()),e.yG2(),e.E7m("ngClass",o.icon()))},dependencies:[u.MD,u.QF],encapsulation:2,changeDetection:0})}return n})();l(2352),l(8552),l(3496),l(8880),l(2700);let M=(()=>{class n{constructor(){this._listeners=[]}notify(t,i){for(let o of this._listeners)o(t,i)}listen(t){return this._listeners.push(t),()=>{this._listeners=this._listeners.filter(i=>t!==i)}}ngOnDestroy(){this._listeners=[]}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275prov=e.wxM({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var b=l(5657),T=l(6928);let z=0;const v=new e.UbH("CdkAccordion");let K=(()=>{class n{constructor(){this._stateChanges=new b.E,this._openCloseAllActions=new b.E,this.id="cdk-accordion-"+z++,this.multi=!1}openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(t){this._stateChanges.next(t)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275dir=e.Sc5({type:n,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[e.Wk5.HasDecoratorInputTransform,"multi","multi",e.cZD]},exportAs:["cdkAccordion"],standalone:!0,features:[e.M5G([{provide:v,useExisting:n}]),e.QJr,e.SYr]})}return n})(),J=0,W=(()=>{class n{get expanded(){return this._expanded}set expanded(t){this._expanded!==t&&(this._expanded=t,this.expandedChange.emit(t),t?(this.opened.emit(),this._expansionDispatcher.notify(this.id,this.accordion?this.accordion.id:this.id)):this.closed.emit(),this._changeDetectorRef.markForCheck())}constructor(t,i,o){this.accordion=t,this._changeDetectorRef=i,this._expansionDispatcher=o,this._openCloseAllSubscription=T.wH.EMPTY,this.closed=new e._w7,this.opened=new e._w7,this.destroyed=new e._w7,this.expandedChange=new e._w7,this.id="cdk-accordion-child-"+J++,this._expanded=!1,this.disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=o.listen((s,r)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===r&&this.id!==s&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(t=>{this.disabled||(this.expanded=t)})}static#e=this.\u0275fac=function(i){return new(i||n)(e.GI1(v,12),e.GI1(e.kD9),e.GI1(M))};static#t=this.\u0275dir=e.Sc5({type:n,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[e.Wk5.HasDecoratorInputTransform,"expanded","expanded",e.cZD],disabled:[e.Wk5.HasDecoratorInputTransform,"disabled","disabled",e.cZD]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],standalone:!0,features:[e.M5G([{provide:v,useValue:void 0}]),e.QJr]})}return n})(),B=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.a4G({type:n});static#n=this.\u0275inj=e.s3X({})}return n})();var C=l(2488),Q=l(5960),S=l(4548),X=l(4e3),D=l(5568),y=l(6684),Z=l(3992),E=l(7800),q=l(8960),ee=l(3412),c=l(9684);const te=["body"];function ne(n,a){}const ie=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],ae=["mat-expansion-panel-header","*","mat-action-row"];function oe(n,a){if(1&n&&(e.I0R(0,"span",2),e.S2Z(),e.I0R(1,"svg",3),e.wR5(2,"path",4),e.C$Y()()),2&n){const t=e.GaO();e.E7m("@indicatorRotate",t._getExpandedState())}}const se=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],re=["mat-panel-title","mat-panel-description","*"],w=new e.UbH("MAT_ACCORDION"),P="225ms cubic-bezier(0.4,0.0,0.2,1)",R={indicatorRotate:(0,c.gV)("indicatorRotate",[(0,c.K2)("collapsed, void",(0,c.wb)({transform:"rotate(0deg)"})),(0,c.K2)("expanded",(0,c.wb)({transform:"rotate(180deg)"})),(0,c.aK)("expanded <=> collapsed, void => collapsed",(0,c.Cs)(P))]),bodyExpansion:(0,c.gV)("bodyExpansion",[(0,c.K2)("collapsed, void",(0,c.wb)({height:"0px",visibility:"hidden"})),(0,c.K2)("expanded",(0,c.wb)({height:"*",visibility:""})),(0,c.aK)("expanded <=> collapsed, void => collapsed",(0,c.Cs)(P))])},H=new e.UbH("MAT_EXPANSION_PANEL");let le=(()=>{class n{constructor(t,i){this._template=t,this._expansionPanel=i}static#e=this.\u0275fac=function(i){return new(i||n)(e.GI1(e.Yw2),e.GI1(H,8))};static#t=this.\u0275dir=e.Sc5({type:n,selectors:[["ng-template","matExpansionPanelContent",""]],standalone:!0})}return n})(),ce=0;const G=new e.UbH("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");let $=(()=>{class n extends W{get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(t){this._hideToggle=t}get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(t){this._togglePosition=t}constructor(t,i,o,s,r,m,h){super(t,i,o),this._viewContainerRef=s,this._animationMode=m,this._hideToggle=!1,this.afterExpand=new e._w7,this.afterCollapse=new e._w7,this._inputChanges=new b.E,this._headerId="mat-expansion-panel-header-"+ce++,this._bodyAnimationDone=new b.E,this.accordion=t,this._document=r,this._bodyAnimationDone.pipe((0,X.a)((p,d)=>p.fromState===d.fromState&&p.toState===d.toState)).subscribe(p=>{"void"!==p.fromState&&("expanded"===p.toState?this.afterExpand.emit():"collapsed"===p.toState&&this.afterCollapse.emit())}),h&&(this.hideToggle=h.hideToggle)}_hasSpacing(){return!!this.accordion&&this.expanded&&"default"===this.accordion.displayMode}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe((0,D.W)(null),(0,y.I)(()=>this.expanded&&!this._portal),(0,Z.U)(1)).subscribe(()=>{this._portal=new C.CC(this._lazyContent._template,this._viewContainerRef)})}ngOnChanges(t){this._inputChanges.next(t)}ngOnDestroy(){super.ngOnDestroy(),this._bodyAnimationDone.complete(),this._inputChanges.complete()}_containsFocus(){if(this._body){const t=this._document.activeElement,i=this._body.nativeElement;return t===i||i.contains(t)}return!1}static#e=this.\u0275fac=function(i){return new(i||n)(e.GI1(w,12),e.GI1(e.kD9),e.GI1(M),e.GI1(e.y8U),e.GI1(u.Ud),e.GI1(e.qwP,8),e.GI1(G,8))};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["mat-expansion-panel"]],contentQueries:function(i,o,s){if(1&i&&e.szK(s,le,5),2&i){let r;e.wto(r=e.Gqi())&&(o._lazyContent=r.first)}},viewQuery:function(i,o){if(1&i&&e.CC$(te,5),2&i){let s;e.wto(s=e.Gqi())&&(o._body=s.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:6,hostBindings:function(i,o){2&i&&e.eAK("mat-expanded",o.expanded)("_mat-animation-noopable","NoopAnimations"===o._animationMode)("mat-expansion-panel-spacing",o._hasSpacing())},inputs:{hideToggle:[e.Wk5.HasDecoratorInputTransform,"hideToggle","hideToggle",e.cZD],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],standalone:!0,features:[e.M5G([{provide:w,useValue:void 0},{provide:H,useExisting:n}]),e.QJr,e.eg9,e.SYr,e.UHJ],ngContentSelectors:ae,decls:7,vars:4,consts:[["role","region",1,"mat-expansion-panel-content",3,"id"],["body",""],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(i,o){1&i&&(e.kPM(ie),e._Xx(0),e.I0R(1,"div",0,1),e.qCj("@bodyExpansion.done",function(r){return o._bodyAnimationDone.next(r)}),e.I0R(3,"div",2),e._Xx(4,1),e.yuY(5,ne,0,0,"ng-template",3),e.C$Y(),e._Xx(6,2),e.C$Y()),2&i&&(e.yG2(),e.E7m("@bodyExpansion",o._getExpandedState())("id",o.id),e.e48("aria-labelledby",o._headerId),e.yG2(4),e.E7m("cdkPortalOutlet",o._portal))},dependencies:[C.IP],styles:['.mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);position:relative;background:var(--mat-expansion-container-background-color);color:var(--mat-expansion-container-text-color);border-radius:var(--mat-expansion-container-shape)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape);border-top-left-radius:var(--mat-expansion-container-shape)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape);border-bottom-left-radius:var(--mat-expansion-container-shape)}.cdk-high-contrast-active .mat-expansion-panel{outline:solid 1px}.mat-expansion-panel.ng-animate-disabled,.ng-animate-disabled .mat-expansion-panel,.mat-expansion-panel._mat-animation-noopable{transition:none}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;font-family:var(--mat-expansion-container-text-font);font-size:var(--mat-expansion-container-text-size);font-weight:var(--mat-expansion-container-text-weight);line-height:var(--mat-expansion-container-text-line-height);letter-spacing:var(--mat-expansion-container-text-tracking)}.mat-expansion-panel-content[style*="visibility: hidden"] *{visibility:hidden !important}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color)}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}'],encapsulation:2,data:{animation:[R.bodyExpansion]},changeDetection:0})}return n})(),O=(()=>{class n{constructor(t,i,o,s,r,m,h){this.panel=t,this._element=i,this._focusMonitor=o,this._changeDetectorRef=s,this._animationMode=m,this._parentChangeSubscription=T.wH.EMPTY,this.tabIndex=0;const p=t.accordion?t.accordion._stateChanges.pipe((0,y.I)(d=>!(!d.hideToggle&&!d.togglePosition))):q.k;this.tabIndex=parseInt(h||"")||0,this._parentChangeSubscription=(0,ee.U)(t.opened,t.closed,p,t._inputChanges.pipe((0,y.I)(d=>!!(d.hideToggle||d.disabled||d.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),t.closed.pipe((0,y.I)(()=>t._containsFocus())).subscribe(()=>o.focusVia(i,"program")),r&&(this.expandedHeight=r.expandedHeight,this.collapsedHeight=r.collapsedHeight)}get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){const t=this._isExpanded();return t&&this.expandedHeight?this.expandedHeight:!t&&this.collapsedHeight?this.collapsedHeight:null}_keydown(t){switch(t.keyCode){case E.Gi:case E.wJ:(0,E.Yp)(t)||(t.preventDefault(),this._toggle());break;default:return void(this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(t))}}focus(t,i){t?this._focusMonitor.focusVia(this._element,t,i):this._element.nativeElement.focus(i)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(t=>{t&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static#e=this.\u0275fac=function(i){return new(i||n)(e.GI1($,1),e.GI1(e.GMv),e.GI1(S.Kk),e.GI1(e.kD9),e.GI1(G,8),e.GI1(e.qwP,8),e.gJ8("tabindex"))};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:15,hostBindings:function(i,o){1&i&&e.qCj("click",function(){return o._toggle()})("keydown",function(r){return o._keydown(r)}),2&i&&(e.e48("id",o.panel._headerId)("tabindex",o.disabled?-1:o.tabIndex)("aria-controls",o._getPanelId())("aria-expanded",o._isExpanded())("aria-disabled",o.panel.disabled),e.m4B("height",o._getHeaderHeight()),e.eAK("mat-expanded",o._isExpanded())("mat-expansion-toggle-indicator-after","after"===o._getTogglePosition())("mat-expansion-toggle-indicator-before","before"===o._getTogglePosition())("_mat-animation-noopable","NoopAnimations"===o._animationMode))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[e.Wk5.HasDecoratorInputTransform,"tabIndex","tabIndex",t=>null==t?0:(0,e.cJ3)(t)]},standalone:!0,features:[e.QJr,e.UHJ],ngContentSelectors:re,decls:5,vars:3,consts:[[1,"mat-content"],["class","mat-expansion-indicator"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(i,o){1&i&&(e.kPM(se),e.I0R(0,"span",0),e._Xx(1),e._Xx(2,1),e._Xx(3,2),e.C$Y(),e.yuY(4,oe,3,1,"span",1)),2&i&&(e.eAK("mat-content-hide-toggle",!o._showToggle()),e.yG2(4),e.C0Y(4,o._showToggle()?4:-1))},styles:['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1);height:var(--mat-expansion-header-collapsed-state-height);font-family:var(--mat-expansion-header-text-font);font-size:var(--mat-expansion-header-text-size);font-weight:var(--mat-expansion-header-text-weight);line-height:var(--mat-expansion-header-text-line-height);letter-spacing:var(--mat-expansion-header-text-tracking)}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color)}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color)}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color)}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color)}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color)}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color);display:inline-block;display:var(--mat-expansion-legacy-header-indicator-display, inline-block)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color);display:none;display:var(--mat-expansion-header-indicator-display, none)}.cdk-high-contrast-active .mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}'],encapsulation:2,data:{animation:[R.indicatorRotate]},changeDetection:0})}return n})(),de=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275dir=e.Sc5({type:n,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"],standalone:!0})}return n})(),pe=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275dir=e.Sc5({type:n,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"],standalone:!0})}return n})(),he=(()=>{class n extends K{constructor(){super(...arguments),this._ownHeaders=new e.VhX,this.hideToggle=!1,this.displayMode="default",this.togglePosition="after"}ngAfterContentInit(){this._headers.changes.pipe((0,D.W)(this._headers)).subscribe(t=>{this._ownHeaders.reset(t.filter(i=>i.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new S.IH(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(t){this._keyManager.onKeydown(t)}_handleHeaderFocus(t){this._keyManager.updateActiveItem(t)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static#e=this.\u0275fac=(()=>{let t;return function(o){return(t||(t=e.otF(n)))(o||n)}})();static#t=this.\u0275dir=e.Sc5({type:n,selectors:[["mat-accordion"]],contentQueries:function(i,o,s){if(1&i&&e.szK(s,O,5),2&i){let r;e.wto(r=e.Gqi())&&(o._headers=r)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(i,o){2&i&&e.eAK("mat-accordion-multi",o.multi)},inputs:{hideToggle:[e.Wk5.HasDecoratorInputTransform,"hideToggle","hideToggle",e.cZD],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],standalone:!0,features:[e.M5G([{provide:w,useExisting:n}]),e.QJr,e.eg9]})}return n})(),me=(()=>{class n{static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275mod=e.a4G({type:n});static#n=this.\u0275inj=e.s3X({imports:[Q.AN,B,C.g$]})}return n})(),ge=(()=>{class n{transform(t){if(void 0===t)throw new Error("ThumbnailPipe value is undefined");const i=t.lastIndexOf(".");return t.slice(0,i)+"-thumbnail"+t.slice(i)}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275pipe=e.UTH({name:"thumbnail",type:n,pure:!0,standalone:!0})}return n})();const ue=(n,a)=>a.title,fe=(n,a)=>a.href;function xe(n,a){1&n&&(e.I0R(0,"span"),e.OEk(1,"GitHub"),e.C$Y())}function _e(n,a){if(1&n&&(e.I0R(0,"a",4),e.OEk(1),e.C$Y()),2&n){const t=e.GaO().$implicit;e.E7m("href",t.href,e.K6U),e.yG2(),e.cNF(t.label)}}function be(n,a){if(1&n&&e.yuY(0,xe,2,0,"span")(1,_e,2,2,"a",4),2&n){const t=a.$implicit;e.C0Y(0,null===t.href?0:-1),e.yG2(),e.C0Y(1,null!==t.href?1:-1)}}function ye(n,a){if(1&n&&(e.I0R(0,"div",3),e.c53(1,be,2,2,null,null,fe),e.C$Y()),2&n){const t=e.GaO().$implicit;e.yG2(),e.oho(t.links)}}const ve=(n,a)=>a.src;function Ce(n,a){if(1&n&&(e.I0R(0,"a",6),e.wR5(1,"img",7),e.wVc(2,"thumbnail"),e.C$Y()),2&n){const t=a.$implicit;e.E7m("href",t.src,e.K6U),e.yG2(),e.E7m("src",e.kDX(2,3,t.src),e.K6U)("alt",t.label)}}function Ee(n,a){if(1&n&&(e.I0R(0,"div",5),e.c53(1,Ce,3,5,"a",6,ve),e.C$Y()),2&n){const t=e.GaO().$implicit;e.yG2(),e.oho(t.images)}}function we(n,a){1&n&&e.wR5(0,"hr")}function ke(n,a){if(1&n&&(e.I0R(0,"mat-expansion-panel")(1,"mat-expansion-panel-header"),e.wR5(2,"mat-panel-title",0),e.I0R(3,"mat-panel-description"),e.OEk(4),e.C$Y()(),e.yuY(5,ye,3,0,"div",1),e.wR5(6,"p",0),e.yuY(7,Ee,3,0,"div",2),e.C$Y(),e.yuY(8,we,1,0,"hr")),2&n){const t=a.$implicit,i=a.$index,o=a.$count;e.yG2(2),e.E7m("innerHTML",t.title,e.E3n),e.yG2(2),e.oRS(" ",t.description," "),e.yG2(),e.C0Y(5,t.links?5:-1),e.yG2(),e.E7m("innerHTML",t.content,e.E3n),e.yG2(),e.C0Y(7,t.images?7:-1),e.yG2(),e.C0Y(8,i!==o-1?8:-1)}}let F=(()=>{class n{constructor(){this.projects=e.YhN.required()}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["sb-projects-accordion"]],inputs:{projects:[e.Wk5.SignalBased,"projects"]},standalone:!0,features:[e.UHJ],decls:3,vars:0,consts:[[3,"innerHTML"],["class","links"],["class","gallery"],[1,"links"],["target","_blank",3,"href"],[1,"gallery"],["target","_blank","rel","noopener noreferrer",3,"href"],[3,"src","alt"]],template:function(i,o){1&i&&(e.I0R(0,"mat-accordion"),e.c53(1,ke,9,6,null,null,ue),e.C$Y()),2&i&&(e.yG2(),e.oho(o.projects()))},dependencies:[me,he,$,O,pe,de,ge],encapsulation:2,changeDetection:0})}return n})();l(8124);var x=l(908),Y=l(400);const Ae=(0,c.gV)("staggerAnimation",[(0,c.aK)("* => *",[(0,c.kt)(":enter",(0,c.wb)({opacity:0}),{optional:!0}),(0,c.kt)(":enter",(0,c.W0)("100ms",[(0,c.Cs)("300ms ease-in",(0,c.xZ)([(0,c.wb)({opacity:0,transform:"translateX(-20px)",offset:0}),(0,c.wb)({opacity:.5,transform:"translateX(10px)",offset:.3}),(0,c.wb)({opacity:1,transform:"translateX(0)",offset:1})]))]))])]),Ie=["id","about"],Me=(n,a)=>a.title,N=(n,a)=>a.key;function Te(n,a){if(1&n&&(e.I0R(0,"a",7)(1,"span",8),e.wR5(2,"i",9),e.I0R(3,"span"),e.OEk(4),e.C$Y()()()),2&n){const t=a.$implicit;e.E7m("href",t.href,e.K6U),e.yG2(2),e.E7m("ngClass",t.iconSelector),e.yG2(2),e.cNF(t.title)}}function Se(n,a){if(1&n&&(e.I0R(0,"div")(1,"h4",10),e.OEk(2),e.C$Y(),e.wR5(3,"div",11),e.wVc(4,"bypassUrl"),e.C$Y()),2&n){const t=a.$implicit;e.yG2(2),e.cNF(t.key),e.yG2(),e.E7m("innerHTML",e.g7$(4,2,t.value,"html"),e.E3n)}}function De(n,a){if(1&n&&(e.I0R(0,"div",12)(1,"div",13),e.OEk(2),e.C$Y(),e.wR5(3,"div",14),e.C$Y()),2&n){const t=a.$implicit;e.yG2(2),e.oRS("",t.key,":"),e.yG2(),e.E7m("innerHTML",t.value,e.E3n)}}let Pe=(()=>{class n{constructor(){this.socials=x.Cc,this.about=x.O,this.profile=x.kt}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["section","id","about"]],standalone:!0,features:[e.UHJ],attrs:Ie,decls:14,vars:1,consts:[["id","socials",1,"flex","gap-5"],[1,"card","flex-col","md:flex-row","gap-5","md:gap-10"],[1,"flex-1"],["title","\xdcber mich","icon","fa-circle-user"],[1,"flex","flex-col","gap-3","px-5"],["title","Daten","icon","fa-address-card"],[1,"flex","flex-col","gap-3"],["mat-button","","target","_blank","rel","noopener noreferrer",3,"href"],[1,"flex","flex-col","items-center","py-2"],[1,"text-2xl",3,"ngClass"],[1,"subtitle"],[3,"innerHTML"],[1,"flex","flex-col","lg:flex-row","border-b","pb-2","px-5"],[1,"key","flex-1"],[1,"value","flex-1",3,"innerHTML"],["class","flex flex-col lg:flex-row border-b pb-2 px-5"]],template:function(i,o){1&i&&(e.I0R(0,"section",0),e.c53(1,Te,5,3,"a",7,Me),e.C$Y(),e.I0R(3,"section",1)(4,"div",2),e.wR5(5,"sb-card-header",3),e.I0R(6,"div",4),e.c53(7,Se,5,5,"div",null,N),e.C$Y()(),e.I0R(9,"div",2),e.wR5(10,"sb-card-header",5),e.I0R(11,"div",6),e.c53(12,De,4,2,"div",15,N),e.C$Y()()()),2&i&&(e.yG2(),e.oho(o.socials),e.yG2(6),e.oho(o.about),e.yG2(4),e.E7m("@staggerAnimation",void 0),e.yG2(),e.oho(o.profile))},dependencies:[u.MD,u.QF,f,Y.k,A.oJ,A.EB],encapsulation:2,data:{animation:[Ae]},changeDetection:0})}return n})();const Re=["id","cv"],He=(n,a)=>a.value;function Ge(n,a){if(1&n&&(e.I0R(0,"tr"),e.wR5(1,"td",4)(2,"td",4),e.C$Y()),2&n){const t=a.$implicit;e.yG2(),e.E7m("innerHTML",t.dateRange,e.E3n),e.yG2(),e.E7m("innerHTML",t.value,e.E3n)}}let $e=(()=>{class n{constructor(){this.work=x.KG}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["section","id","cv"]],standalone:!0,features:[e.UHJ],attrs:Re,decls:6,vars:0,consts:[[1,"card"],["title","Lebenslauf","icon","fa-table"],[1,"px-5"],[1,"w-full","mb-5"],[3,"innerHTML"]],template:function(i,o){1&i&&(e.I0R(0,"div",0),e.wR5(1,"sb-card-header",1),e.I0R(2,"div",2)(3,"table",3),e.c53(4,Ge,3,2,"tr",null,He),e.C$Y()()()),2&i&&(e.yG2(4),e.oho(o.work))},dependencies:[f],encapsulation:2,changeDetection:0})}return n})();const Oe=["id","hobby-projects"];let Fe=(()=>{class n{constructor(){this.hobbyProjects=x.ER}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["section","id","hobby-projects"]],standalone:!0,features:[e.UHJ],attrs:Oe,decls:3,vars:1,consts:[[1,"card"],["title","Hobby-Projekte","icon","fa-code"],[3,"projects"]],template:function(i,o){1&i&&(e.I0R(0,"div",0),e.wR5(1,"sb-card-header",1)(2,"sb-projects-accordion",2),e.C$Y()),2&i&&(e.yG2(2),e.E7m("projects",o.hobbyProjects))},dependencies:[f,F],encapsulation:2,changeDetection:0})}return n})();var Ye=l(1680);const Ne=["id","skills"];let Ve=(()=>{class n{constructor(){this.theme=(0,e.uUt)(Ye.ak),this.pipe=(0,e.uUt)(Y.k),this.nodeJsLogo=(0,e.OCB)(void 0),this.themeEffect=(0,e.o3l)(()=>{const t=this.theme.themeString();this.nodeJsLogo.set(this.pipe.transform(`assets/skillset/nodejs-${t}.png`,"url"))},{allowSignalWrites:!0})}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["section","id","skills"]],standalone:!0,features:[e.UHJ],attrs:Ne,decls:30,vars:1,consts:[[1,"card"],["title","Skills","icon","fa-book"],[1,"grid","grid-rows-5","grid-flow-col","gap-10"],[1,"text-xs","sm:text-base"],["src","assets/skillset/angular.png","alt","Angular","title","Angular"],["src","assets/skillset/typescript.png","alt","TypeScript","title","TypeScript"],["src","assets/skillset/html.png","alt","HTML5","title","HTML5"],["src","assets/skillset/css.png","alt","CSS3","title","CSS3"],["alt","Node.js","title","Node.js",3,"src"],["src","assets/skillset/javascript.png","alt","JavaScript","title","JavaScript"],["src","assets/skillset/ionic.png","alt","Ionic","title","Ionic"],["src","assets/skillset/mongodb.png","alt","MongoDB","title","MongoDB"],["src","assets/skillset/react.png","alt","React","title","React"],["src","assets/skillset/swift.png","alt","Swift","title","Swift"],["src","assets/skillset/mysql.png","alt","MySQL","title","MySQL"],["src","assets/skillset/java.png","alt","Java","title","Java"]],template:function(i,o){1&i&&(e.I0R(0,"div",0),e.wR5(1,"sb-card-header",1),e.I0R(2,"div",2)(3,"div",3)(4,"p"),e.OEk(5,"Sehr gute Kenntnisse"),e.C$Y(),e.I0R(6,"small"),e.OEk(7,"Damit habe ich am meisten gearbeitet"),e.C$Y()(),e.wR5(8,"img",4)(9,"img",5)(10,"img",6)(11,"img",7),e.I0R(12,"div",3)(13,"p"),e.OEk(14,"Erweiterte Kenntnisse"),e.C$Y(),e.I0R(15,"small"),e.OEk(16,"Damit habe ich schon mal gearbeitet"),e.C$Y()(),e.wR5(17,"img",8)(18,"img",9)(19,"img",10)(20,"img",11),e.I0R(21,"div",3)(22,"p"),e.OEk(23,"Grund\xadkenntnisse"),e.C$Y(),e.I0R(24,"small"),e.OEk(25,"Das habe ich schon mal ausprobiert"),e.C$Y()(),e.wR5(26,"img",12)(27,"img",13)(28,"img",14)(29,"img",15),e.C$Y()()),2&i&&(e.yG2(17),e.E7m("src",o.nodeJsLogo(),e.K6U))},dependencies:[u.MD,f],encapsulation:2,changeDetection:0})}return n})();const je=[{title:"Cost-of-Production",description:"April 2021 - November 2021",content:'Online-Plattform gebaut mit <a target="blank" rel="noopener noreferrer" href="https://themeforest.net/item/vien-angular-admin-template/25817698">Vien-Angular-Admin-Template</a>. zur Erfassung von Produktionskosten in der Landwirtschaft - Farm-Statistiken, Frageb\xf6gen & Reports.',images:[{src:"assets/work-examples/cop/cop-1.png",label:"Image 1"}]},{title:"VapeWatchers",description:"Januar 2020 - Juni 2021",content:"Neuentwicklung einer Ionic & React Control-Panel-App, f\xfcr Nutzer von E-Zigaretten mit Informationen zu Inhaltsstoffen und Rauchverhalten - Nikotin Konsum pro Tag/Woche, verwendete Cartridges & Nutzungshistorie. Benutzer-Authentifizierung \xfcber AWS-Amplify.",images:[{src:"assets/work-examples/smart-vaping/smart-vaping-1.png",label:"Image 1"},{src:"assets/work-examples/smart-vaping/smart-vaping-2.png",label:"Image 2"},{src:"assets/work-examples/smart-vaping/smart-vaping-3.png",label:"Image 3"}]},{title:"Lernetics",description:"Oktober 2020 - Dezember 2020",content:"Neuentwicklung einer Cross-Plattform-App mit Tab-basiertem Layout. \u201eMit Lernletics kannst du dich im Rahmen deiner Ausbildung in verschiedenen Themenbereichen selbst trainieren.\u201c",images:[{src:"assets/work-examples/lernetics/lernetics-1.png",label:"Image 1"}]},{title:"Pio Office Suite",description:"August 2020 - September 2021",content:"Neuentwicklung einer Progressive-Web-App mit Ionic & Angular, ein Kontaktbuch mit der M\xf6glichkeit, Anrufe \xfcber Durchwahlnummern zu initialisieren mithilfe einer zus\xe4tzlichen VoIP-App \u201eeasybell\u201c.",images:[{src:"assets/work-examples/pos/pos-1.png",label:"Image 1"}]},{title:"Survey-App",description:"M\xe4rz 2019 - Dezember 2019",content:"Single-Page-Application entwickelt mit Angular und Angular Material, Anwendung zum durchf\xfchren von Umfragen.",images:[{src:"assets/work-examples/vilua-survey/vilua-survey-1.png",label:"Image 1"},{src:"assets/work-examples/vilua-survey/vilua-survey-2.png",label:"Image 2"},{src:"assets/work-examples/vilua-survey/vilua-survey-3.png",label:"Image 3"}]}],Le=["id","work-samples"];let Ue=(()=>{class n{constructor(){this.workSamples=je}static#e=this.\u0275fac=function(i){return new(i||n)};static#t=this.\u0275cmp=e.In1({type:n,selectors:[["section","id","work-samples"]],standalone:!0,features:[e.UHJ],attrs:Le,decls:3,vars:1,consts:[[1,"card"],["title","Bisherige Projekte","icon","fa-code"],[3,"projects"]],template:function(i,o){1&i&&(e.I0R(0,"div",0),e.wR5(1,"sb-card-header",1)(2,"sb-projects-accordion",2),e.C$Y()),2&i&&(e.yG2(2),e.E7m("projects",o.workSamples))},dependencies:[f,F],encapsulation:2,changeDetection:0})}return n})()}}]);