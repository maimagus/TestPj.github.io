System.register("chunks:///_virtual/BaseView.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var n,t,r,i,o,a,l,c,s,u,p;return{setters:[function(e){n=e.applyDecoratedDescriptor,t=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){o=e.cclegacy,a=e._decorator,l=e.Sprite,c=e.SpriteFrame,s=e.Button,u=e.Color,p=e.Component}],execute:function(){var B,b,y,h,f,g,C,m,w,d,k,E,v;o._RF.push({},"3af5b6yADFBoKVpUbYXQQuq","BaseView",void 0);var z=a.ccclass,F=a.property;e("BaseView",(B=z("BaseView"),b=F({type:l}),y=F({type:c}),h=F({type:c}),f=F({type:s}),g=F({type:s}),B((w=n((m=function(e){function n(){for(var n,t=arguments.length,o=new Array(t),a=0;a<t;a++)o[a]=arguments[a];return n=e.call.apply(e,[this].concat(o))||this,r(n,"Banner",w,i(n)),r(n,"OceanBanner",d,i(n)),r(n,"EgyptBanner",k,i(n)),r(n,"buttonColor",E,i(n)),r(n,"buttonBanner",v,i(n)),n}t(n,e);var o=n.prototype;return o.start=function(){this.Banner.color=u.WHITE},o.onClickColorButtonRED=function(){console.log("Clicked!"),this.Banner.color=u.RED},o.onClickColorButtonNormal=function(){console.log("Clicked!"),this.Banner.color=u.WHITE},o.onClickBannerButton=function(){console.log("Banner Button Clicked!"),this.ChangeBanner(this.Banner.spriteFrame)},o.ChangeBanner=function(e){switch(e){case this.OceanBanner:this.Banner.spriteFrame=this.EgyptBanner;break;case this.EgyptBanner:this.Banner.spriteFrame=this.OceanBanner}},n}(p)).prototype,"Banner",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=n(m.prototype,"OceanBanner",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=n(m.prototype,"EgyptBanner",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E=n(m.prototype,"buttonColor",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=n(m.prototype,"buttonBanner",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=m))||C));o._RF.pop()}}}));

System.register("chunks:///_virtual/ChangeBanner.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(n){"use strict";var e,t,r,o;return{setters:[function(n){e=n.inheritsLoose},function(n){t=n.cclegacy,r=n._decorator,o=n.Component}],execute:function(){var a;t._RF.push({},"ef764wUGp9IN7EaZ7MWxYK2","ChangeBanner",void 0);var c=r.ccclass;r.property,n("ChangeBanner",c("ChangeBanner")(a=function(n){function t(){return n.apply(this,arguments)||this}e(t,n);var r=t.prototype;return r.start=function(){},r.update=function(n){},t}(o))||a);t._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./BaseView.ts","./ChangeBanner.ts"],(function(){"use strict";return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});