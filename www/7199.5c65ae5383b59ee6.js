"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7199],{7199:(I,c,s)=>{s.r(c),s.d(c,{CartasPageModule:()=>M});var l=s(177),d=s(4341),r=s(4742),o=s(8986),t=s(3953),g=s(1626);let u=(()=>{class a{constructor(e){this.http=e,this.baseUrl="https://api.tcgdex.net/v2/en/random/card"}getData(){return this.http.get(this.baseUrl)}static#t=this.\u0275fac=function(n){return new(n||a)(t.KVO(g.Qq))};static#a=this.\u0275prov=t.jDH({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();function p(a,x){if(1&a&&(t.j41(0,"div",3),t.nrm(1,"img",4),t.k0s()),2&a){const e=t.XpG();t.R7$(),t.Y8G("src",e.cartaMuestra.image,t.B4B)}}function m(a,x){if(1&a&&(t.j41(0,"div")(1,"h3",5),t.EFF(2),t.k0s()()),2&a){const e=t.XpG();t.R7$(2),t.JRh(e.cartaMuestra.illustrator)}}let f=(()=>{class a{constructor(e){this.tcgDexService=e,this.data=[]}ngOnInit(){this.llenarData()}llenarData(){this.tcgDexService.getData().subscribe(e=>{this.data=e,this.cartaMuestra=this.data,console.log(this.data),console.log(this.cartaMuestra),this.cartaMuestra.image=this.cartaMuestra.image+"/high.png",console.log(this.cartaMuestra.image)})}conseguirAleatorio(e){return[e[Math.floor(Math.random()*e.length)]]}static#t=this.\u0275fac=function(n){return new(n||a)(t.rXU(u))};static#a=this.\u0275cmp=t.VBU({type:a,selectors:[["app-card"]],decls:8,vars:2,consts:[["class","carta",4,"ngIf"],[4,"ngIf"],[2,"display","block","margin","0 auto","font-family","Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif",3,"click"],[1,"carta"],["alt","Imagen no encontrada",3,"src"],["alt","No existe ilustrador"]],template:function(n,i){1&n&&(t.j41(0,"div"),t.DNE(1,p,2,1,"div",0),t.j41(2,"div")(3,"h3"),t.EFF(4,"Ilustrador:"),t.k0s()(),t.DNE(5,m,3,1,"div",1),t.j41(6,"button",2),t.bIt("click",function(){return i.llenarData()}),t.EFF(7," Carta Aleatoria "),t.k0s()()),2&n&&(t.R7$(),t.Y8G("ngIf",i.cartaMuestra),t.R7$(4),t.Y8G("ngIf",i.cartaMuestra))},dependencies:[l.bT],styles:['@charset "UTF-8";.carta[_ngcontent-%COMP%]{width:70%;height:10% auto;margin:24% auto;border:2px solid red auto;border-radius:8px;background-color:#fff;box-shadow:0 2px 10px #0000001a;text-align:center}.carta[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%;height:80%}h3[_ngcontent-%COMP%]{color:#333;font-size:3.2m;margin:10px 0;text-align:center}']})}return a})();const C=[{path:"",component:(()=>{class a{constructor(e,n,i,h){this.tcgDexService=e,this.alertController=n,this.activatedRoute=i,this.router=h}ngOnInit(){}irAPerfil(){this.router.navigate(["/perfil"])}static#t=this.\u0275fac=function(n){return new(n||a)(t.rXU(u),t.rXU(r.hG),t.rXU(o.nX),t.rXU(o.Ix))};static#a=this.\u0275cmp=t.VBU({type:a,selectors:[["app-cartas"]],decls:9,vars:2,consts:[[3,"translucent"],["slot","start"],["default-href","#"],[3,"fullscreen"],[1,"ion-justify-content-center","ion-margin"],["size","12","size-md","8","size-lg","6"]],template:function(n,i){1&n&&(t.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t.nrm(3,"ion-back-button",2),t.k0s()()(),t.j41(4,"ion-content",3)(5,"ion-grid")(6,"ion-row",4)(7,"ion-col",5),t.nrm(8,"app-card"),t.k0s()()()()),2&n&&(t.Y8G("translucent",!0),t.R7$(4),t.Y8G("fullscreen",!0))},dependencies:[r.QW,r.hU,r.W9,r.lO,r.eU,r.ln,r.ai,r.el,f]})}return a})()}];let v=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#a=this.\u0275mod=t.$C({type:a});static#e=this.\u0275inj=t.G2t({imports:[o.iI.forChild(C),o.iI]})}return a})(),M=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#a=this.\u0275mod=t.$C({type:a});static#e=this.\u0275inj=t.G2t({imports:[l.MD,d.YN,r.bv,v]})}return a})()}}]);