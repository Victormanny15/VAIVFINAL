import{c as d}from"./chunk-HWCR5HWZ.js";import{b as r,f as e,g as s,i as n,j as i}from"./chunk-ICJQ63PU.js";import{d as o}from"./chunk-72KDLSWN.js";import"./chunk-RW4GY4BD.js";var f=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}",m=f,b=class{constructor(t){r(this,t),this.ionImgWillLoad=i(this,"ionImgWillLoad",7),this.ionImgDidLoad=i(this,"ionImgDidLoad",7),this.ionError=i(this,"ionError",7),this.inheritedAttributes={},this.onLoad=()=>{this.ionImgDidLoad.emit()},this.onError=()=>{this.ionError.emit()},this.loadSrc=void 0,this.loadError=void 0,this.alt=void 0,this.src=void 0}srcChanged(){this.addIO()}componentWillLoad(){this.inheritedAttributes=o(this.el,["draggable"])}componentDidLoad(){this.addIO()}addIO(){this.src!==void 0&&(typeof window<"u"&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype?(this.removeIO(),this.io=new IntersectionObserver(t=>{t[t.length-1].isIntersecting&&(this.load(),this.removeIO())}),this.io.observe(this.el)):setTimeout(()=>this.load(),200))}load(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()}removeIO(){this.io&&(this.io.disconnect(),this.io=void 0)}render(){let{loadSrc:t,alt:a,onLoad:h,loadError:c,inheritedAttributes:l}=this,{draggable:g}=l;return e(s,{key:"da600442894427dee1974a28e545613afac69fca",class:d(this)},e("img",{key:"16df0c7069af86c0fa7ce5af598bc0f63b4eb71a",decoding:"async",src:t,alt:a,onLoad:h,onError:c,part:"image",draggable:u(g)}))}get el(){return n(this)}static get watchers(){return{src:["srcChanged"]}}},u=t=>{switch(t){case"true":return!0;case"false":return!1;default:return}};b.style=m;export{b as ion_img};
