function _defineProperties(n,l){for(var e=0;e<l.length;e++){var t=l[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8k80":function(n,l,e){"use strict";e.r(l);var t=e("8Y7J"),u=function n(){_classCallCheck(this,n)},a=e("yWMr"),i=e("t68o"),o=e("zbXB"),r=e("NcP4"),s=e("xYTU"),c=e("WkNh"),b=e("KCZ/"),h=e("pMnS"),d=e("MKJQ"),g=e("sZkV"),p=e("VDRc"),f=e("/q54"),m=e("s7LF"),v=e("SVse"),y=e("mrSG"),k=e("iqUP"),C=e("KDUW"),D=e("HSB1"),x=e("UJml"),w=e("zKUs"),M=function(){function n(l,e,t,u,a,i,o,r,s){_classCallCheck(this,n),this.changeDetectorRefs=l,this.alertCtrl=e,this.authService=t,this.afStorage=u,this.imageService=a,this.alertController=i,this.router=o,this.userService=r,this.modalController=s,this.ages=[],this.religions=["Atheism","Buddhism","Christianity","Catholicism","Hinduism","Islam","Judaism","Other"],this.kidsOptions=["Yes","No","Maybe","No opinion"],this.user={},this.selectedFileName="Select File",this.thisImage={},this.images=[],this.imageUrls=[],this.file={},this._authState=null,this.ageActionSheetOptions={header:"Select your age"},this.religionActionSheetOptions={header:"Select your religion"},this.kidsActionSheetOptions={header:"Select your religion"},this.imagesTrackFn=function(n,l){return l.photoName},$("#file-upload").change((function(){$(this).prev("label").clone();var n=$("#file-upload")[0].files[0].name;$(this).prev("label").text(n)}))}return _createClass(n,[{key:"ngOnInit",value:function(){for(var n=this,l=18;l<99;l++)this.ages.push(l);this.userRef=this.userService.getUser(this.authService.authState.email),this.userRef.get().subscribe((function(l){l.exists?(console.log("Document data:",l.data()),n.user=l.data()):console.log("No such document!")}),(function(n){})),this.loadPhotos()}},{key:"ngAfterViewInit",value:function(){}},{key:"onFileChanged",value:function(n){this.selectedFileName=n.target.value.split("C:\\fakepath\\").pop(),this.changeDetectorRefs.detectChanges(),console.log("AccountPage -> onFileChanged -> this.selectedFileName",this.selectedFileName)}},{key:"onUpload",value:function(){var n=this;if(this.selectedFile=$("#file-upload")[0].files[0],this.images.find((function(l){return l.photoName===n.selectedFile.name})))this.existsAlert();else{this.tmpImages=[];var l=k.storage().ref();console.log("AccountPage -> onUpload -> this.selectedFile.name",this.selectedFile.name),l.child("images/".concat(this.user.email,"/").concat(this.selectedFile.name)).put(this.selectedFile).then((function(l){console.log("Uploaded a blob or file1 (snapshot): ",l),n.imageRef=n.imageService.getTmpImages(n.authService.authState.email),n.imageRef.get().subscribe((function(l){n.thisImage.photoName=n.selectedFile.name,l.exists&&(k.storage().ref("images/".concat(n.authService.authState.email,"/").concat(n.selectedFile.name)).getDownloadURL().then((function(n){})).catch((function(n){console.log("AccountPage -> loadPhotos -> error",n)})),n.imageService.addImageList({photoName:n.selectedFile.name},n.authService.authState.email),n.selectedFileName="Select File",n.router.navigateByUrl("/account"))}))}))}}},{key:"loadPhotos",value:function(){var n=this;this.images=[],this.imageUrls=[],this.imageService.getUserImageList(this.authService.authState.email).subscribe((function(l){n.images=l;var e=!0,t=!1,u=void 0;try{for(var a,i=n.images[Symbol.iterator]();!(e=(a=i.next()).done);e=!0){var o=a.value;k.storage().ref("images/".concat(n.authService.authState.email,"/").concat(o.image.photoName)).getDownloadURL().then((function(l){n.imageUrls.find((function(n){return n===l}))||n.imageUrls.push(l)})).catch((function(n){console.log("AccountPage -> loadPhotos -> error",n)}))}}catch(r){t=!0,u=r}finally{try{e||null==i.return||i.return()}finally{if(t)throw u}}}))}},{key:"deleteImage",value:function(n){var l=this;this.deletedPhoto=this.images[n].image.photoName,this.imageNameRef=this.imageService.getImages(this.authService.authState.email).subscribe((function(e){if(e[n].payload.doc.data().image.photoName===l.deletedPhoto){l.imageService.deleteImage(e[n].payload.doc.id,l.authService.authState.email);var t=k.storage().ref().child("images/".concat(l.user.email,"/").concat(l.images[n].image.photoName));l.loadPhotos(),t.delete().then((function(){})).catch((function(n){console.log("deleteImage -> error",n)}))}}))}},{key:"deleteAllPhotos",value:function(){var n=this;this.imageUrls.forEach((function(l){n.imageService.deleteImage(l,n.authService.authState.email),k.storage().ref().child("images/".concat(n.user.email,"/").concat(l)).delete().then((function(){})).catch((function(n){console.log("deleteImage -> error",n)}))}))}},{key:"launchPicModal",value:function(){return y.a(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.modalController.create({component:w.a,componentProps:{email:this.authService.authState.email}});case 2:return l=n.sent,n.next=5,l.present();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n,this)})))}},{key:"updatePicture",value:function(){return y.a(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l,e=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertCtrl.create({header:"Change Picture",buttons:["Cancel",{text:"Ok",handler:function(n){e.user.photoURL=n.photoUrl,e.userService.updateUser(e.user)}}],inputs:[{type:"url",name:"photoUrl",placeholder:"photoUrl"}]});case 2:return l=n.sent,n.next=5,l.present();case 5:case"end":return n.stop()}}),n,this)})))}},{key:"updateUserData",value:function(n){return this.userRef.set({uid:this.authService.authState.uid,email:this.authService.authState.email,displayName:n.displayName,photoURL:n.photoURL,title:n.title,age:n.age,religion:n.religion,haveKids:n.haveKids,hobbies:n.hobbies,description:n.description},{merge:!0})}},{key:"updateAvatar",value:function(){return y.a(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l,e=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertCtrl.create({header:"Change Profile Picture",cssClass:"globalAlert",buttons:["Cancel",{text:"Ok",handler:function(n){e.user.photoURL=n.url,e.updateUserData(e.user)}}],inputs:[{type:"text",name:"url",placeholder:"url"}]});case 2:return l=n.sent,n.next=5,l.present();case 5:case"end":return n.stop()}}),n,this)})))}},{key:"updateUsername",value:function(){return y.a(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l,e=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertCtrl.create({header:"Change Username",cssClass:"globalAlert",buttons:["Cancel",{text:"Ok",handler:function(n){e.user.displayName=n.username,e.updateUserData(e.user)}}],inputs:[{type:"text",name:"username",placeholder:"username"}]});case 2:return l=n.sent,n.next=5,l.present();case 5:case"end":return n.stop()}}),n,this)})))}},{key:"updateTitle",value:function(){return y.a(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l,e=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertCtrl.create({header:"Change Title",cssClass:"globalAlert",buttons:["Cancel",{text:"Ok",handler:function(n){e.user.title=n.title,e.updateUserData(e.user)}}],inputs:[{type:"text",name:"title",placeholder:"title"}]});case 2:return l=n.sent,n.next=5,l.present();case 5:case"end":return n.stop()}}),n,this)})))}},{key:"updateAge",value:function(){this.user.age=this.selectedAge,this.updateUserData(this.user)}},{key:"updateReligion",value:function(){this.user.religion=this.selectedReligion,this.updateUserData(this.user)}},{key:"updateHaveKids",value:function(){this.user.haveKids=this.selectedKids,this.updateUserData(this.user)}},{key:"updateHobbies",value:function(){return y.a(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l,e=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertCtrl.create({header:"Change Hobbies",cssClass:"globalAlert",buttons:["Cancel",{text:"Ok",handler:function(n){e.user.hobbies=n.hobbies,e.updateUserData(e.user)}}],inputs:[{type:"textarea",name:"hobbies",placeholder:"Hobbies"}]});case 2:return l=n.sent,n.next=5,l.present();case 5:case"end":return n.stop()}}),n,this)})))}},{key:"updateDescription",value:function(){return y.a(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l,e=this;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertCtrl.create({header:"Update Description",cssClass:"globalAlert",buttons:["Cancel",{text:"Ok",handler:function(n){e.user.description=n.description,e.updateUserData(e.user)}}],inputs:[{type:"textarea",name:"description",placeholder:"Description"}]});case 2:return l=n.sent,n.next=5,l.present();case 5:case"end":return n.stop()}}),n,this)})))}},{key:"getUsername",value:function(){this.username=this.authService.authState.displayName}},{key:"existsAlert",value:function(){return y.a(this,void 0,void 0,regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertController.create({header:"Image Upload Error",message:"Image already exists"});case 2:return l=n.sent,n.next=5,l.present();case 5:case"end":return n.stop()}}),n,this)})))}},{key:"authState",get:function(){return this._authState},set:function(n){this._authState=n}}]),n}(),O=e("HDdC"),P=e("lJxs");function U(n){var l=function(n){return new O.a((function(l){return n.on("state_changed",(function(n){return l.next(n)}),(function(n){return l.error(n)}),(function(){return l.complete()})),function(){return n.cancel()}}))}(n);return{task:n,then:n.then.bind(n),catch:n.catch.bind(n),pause:n.pause.bind(n),cancel:n.cancel.bind(n),resume:n.resume.bind(n),snapshotChanges:function(){return l},percentageChanges:function(){return l.pipe(Object(P.a)((function(n){return n.bytesTransferred/n.totalBytes*100})))}}}var A=e("Cfvw");function F(n,l,e){return{getDownloadURL:function(){return Object(A.a)(n.getDownloadURL(),l.outsideAngular).pipe(e)},getMetadata:function(){return Object(A.a)(n.getMetadata()).pipe(e)},delete:function(){return Object(A.a)(n.delete())},child:function(t){return F(n.child(t),l,e)},updateMetatdata:function(l){return Object(A.a)(n.updateMetadata(l))},updateMetadata:function(l){return Object(A.a)(n.updateMetadata(l))},put:function(l,e){return U(n.put(l,e))},putString:function(l,e,t){return U(n.putString(l,e,t))}}}var S=e("1XSQ"),_=e("yA/v"),L=new t.p("angularfire2.storageBucket"),R=function(){function n(l,e,t,u,a){_classCallCheck(this,n),this.schedulers=new S.a(a),this.keepUnstableUntilFirst=Object(S.b)(this.schedulers,u),this.storage=a.runOutsideAngular((function(){return Object(_.e)(l,a,e).storage(t||void 0)}))}return _createClass(n,[{key:"ref",value:function(n){return F(this.storage.ref(n),this.schedulers,this.keepUnstableUntilFirst)}},{key:"upload",value:function(n,l,e){return F(this.storage.ref(n),this.schedulers,this.keepUnstableUntilFirst).put(l,e)}}]),n}(),N=e("iInd"),H=t.rb({encapsulation:0,styles:[['span[_ngcontent-%COMP%]{margin-left:1em}span.span-2em[_ngcontent-%COMP%]{margin-left:2em}span.span-4em[_ngcontent-%COMP%]{margin-left:4em}*[_ngcontent-%COMP%]{box-sizing:inherit;-webkit-transition-property:all;transition-property:all;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-timing-function:ease;transition-timing-function:ease}.buttons[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;height:100%;-webkit-box-pack:center;justify-content:center;text-align:center;width:100%}.btn[_ngcontent-%COMP%]{color:#000;cursor:pointer;font-size:16px;font-weight:400;line-height:45px;margin:0 0 2em;max-width:160px;position:relative;text-decoration:none;text-transform:uppercase;width:100%}.button-hover[_ngcontent-%COMP%]{letter-spacing:0}.button-hover[_ngcontent-%COMP%]:active, .button-hover[_ngcontent-%COMP%]:hover{letter-spacing:5px}.button-hover[_ngcontent-%COMP%]:after, .button-hover[_ngcontent-%COMP%]:before{-webkit-backface-visibility:hidden;backface-visibility:hidden;bottom:0;content:" ";display:block;margin:0 auto;position:relative;-webkit-transition:width 350ms ease-in-out;transition:all 280ms ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden;border-color:#1a73e8;transition:width 350ms ease-in-out;width:70%}.button-hover[_ngcontent-%COMP%]:hover:before{bottom:auto;top:0;width:70%}.btn-primary[_ngcontent-%COMP%]:after, .btn-primary[_ngcontent-%COMP%]:before{border:1px solid #1a73e8}.btn-primary[_ngcontent-%COMP%]:active, .btn-primary[_ngcontent-%COMP%]:hover{border-color:#1a73e8}.btn-secondary[_ngcontent-%COMP%]:after, .btn-secondary[_ngcontent-%COMP%]:before{border:1px solid grey}.btn-secondary[_ngcontent-%COMP%]:active, .btn-secondary[_ngcontent-%COMP%]:hover{border-color:grey}img[_ngcontent-%COMP%]{max-width:140px;border-radius:50%}ion-content[_ngcontent-%COMP%]{max-width:100vw}.ion-padding-top[_ngcontent-%COMP%]{max-width:25vw;margin:0 auto}.fxlayout-support[_ngcontent-%COMP%]{width:100%;height:100%}ion-button[_ngcontent-%COMP%]{max-width:200px;margin:0 auto}label[_ngcontent-%COMP%]{border:none}.dropzone[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;min-width:80vw;font-weight:200;height:300px;border:2px dashed #f16624;border-radius:5px;background:#fff;margin:10px 0}.dropzone.hovering[_ngcontent-%COMP%]{border:2px solid #f16624;color:#dadada!important}.dropzone[_ngcontent-%COMP%]   .file-label[_ngcontent-%COMP%]{font-size:1.2em}.span-info[_ngcontent-%COMP%]{float:right}progress[_ngcontent-%COMP%]::-webkit-progress-value{-webkit-transition:width .1s;transition:width .1s ease}p[_ngcontent-%COMP%]{text-align:left}.cancel-icon[_ngcontent-%COMP%]{color:#dc143c;cursor:pointer}.custom-file-upload[_ngcontent-%COMP%]{display:inline-block;padding:6px 12px;cursor:pointer}h3[_ngcontent-%COMP%]{margin:5vh auto}a.btn[_ngcontent-%COMP%]{font-size:.625rem;width:10rem}@media screen and (max-width:812px){.ion-padding-top[_ngcontent-%COMP%]{max-width:94vw}}']],data:{}});function I(n){return t.Ob(0,[(n()(),t.tb(0,0,null,null,2,"ion-select-option",[],null,null,null,d.hb,d.A)),t.sb(1,49152,null,0,g.lb,[t.h,t.k,t.y],{value:[0,"value"]},null),(n()(),t.Mb(2,0,[""," "]))],(function(n,l){n(l,1,0,t.xb(1,"",l.context.$implicit,""))}),(function(n,l){n(l,2,0,l.context.$implicit)}))}function j(n){return t.Ob(0,[(n()(),t.tb(0,0,null,null,2,"ion-select-option",[],null,null,null,d.hb,d.A)),t.sb(1,49152,null,0,g.lb,[t.h,t.k,t.y],{value:[0,"value"]},null),(n()(),t.Mb(2,0,[""," "]))],(function(n,l){n(l,1,0,t.xb(1,"",l.context.$implicit,""))}),(function(n,l){n(l,2,0,l.context.$implicit)}))}function J(n){return t.Ob(0,[(n()(),t.tb(0,0,null,null,2,"ion-select-option",[],null,null,null,d.hb,d.A)),t.sb(1,49152,null,0,g.lb,[t.h,t.k,t.y],{value:[0,"value"]},null),(n()(),t.Mb(2,0,[""," "]))],(function(n,l){n(l,1,0,t.xb(1,"",l.context.$implicit,""))}),(function(n,l){n(l,2,0,l.context.$implicit)}))}function K(n){return t.Ob(0,[(n()(),t.tb(0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),t.tb(1,0,null,null,2,"span",[],null,null,null,null,null)),(n()(),t.tb(2,0,null,null,1,"ion-icon",[["class","cancel-icon"],["name","close-outline"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.deleteImage(n.context.index)&&t),t}),d.V,d.n)),t.sb(3,49152,null,0,g.C,[t.h,t.k,t.y],{name:[0,"name"]},null),(n()(),t.tb(4,0,null,null,0,"img",[["class","all-images"]],[[8,"src",4]],null,null,null,null))],(function(n,l){n(l,3,0,"close-outline")}),(function(n,l){n(l,4,0,l.context.$implicit)}))}function B(n){return t.Ob(0,[(n()(),t.tb(0,0,null,null,10,"ion-header",[],null,null,null,d.U,d.m)),t.sb(1,49152,null,0,g.B,[t.h,t.k,t.y],null,null),(n()(),t.tb(2,0,null,0,8,"ion-toolbar",[["color","dark"]],null,null,null,d.pb,d.H)),t.sb(3,49152,null,0,g.zb,[t.h,t.k,t.y],{color:[0,"color"]},null),(n()(),t.tb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,d.M,d.e)),t.sb(5,49152,null,0,g.l,[t.h,t.k,t.y],null,null),(n()(),t.tb(6,0,null,0,1,"ion-menu-button",[],null,null,null,d.bb,d.u)),t.sb(7,49152,null,0,g.R,[t.h,t.k,t.y],null,null),(n()(),t.tb(8,0,null,0,2,"ion-title",[["class","title-padding"]],null,null,null,d.ob,d.G)),t.sb(9,49152,null,0,g.xb,[t.h,t.k,t.y],null,null),(n()(),t.Mb(-1,0,["Dating App"])),(n()(),t.tb(11,0,null,null,136,"div",[["class","fxlayout-support"],["fxLayout","row"],["fxLayoutAlign","space-around center"]],null,null,null,null,null)),t.sb(12,671744,null,0,p.b,[t.k,f.i,[2,p.e],f.f],{fxLayout:[0,"fxLayout"]},null),t.sb(13,671744,null,0,p.a,[t.k,f.i,[2,p.d],f.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(n()(),t.tb(14,0,null,null,133,"ion-content",[],null,null,null,d.T,d.l)),t.sb(15,49152,null,0,g.u,[t.h,t.k,t.y],null,null),(n()(),t.tb(16,0,null,0,131,"div",[["class","ion-padding-top ion-text-center"]],null,null,null,null,null)),(n()(),t.tb(17,0,null,null,0,"img",[["alt","avatar"]],[[8,"src",4]],null,null,null,null)),(n()(),t.tb(18,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.Mb(19,null,["",""])),(n()(),t.tb(20,0,null,null,1,"h5",[],null,null,null,null,null)),(n()(),t.Mb(21,null,["",""])),(n()(),t.tb(22,0,null,null,5,"p",[],null,null,null,null,null)),(n()(),t.tb(23,0,null,null,2,"i",[],null,null,null,null,null)),(n()(),t.tb(24,0,null,null,1,"u",[],null,null,null,null,null)),(n()(),t.Mb(-1,null,["Age: "])),(n()(),t.tb(26,0,null,null,1,"span",[["class","span-info"]],null,null,null,null,null)),(n()(),t.Mb(27,null,["",""])),(n()(),t.tb(28,0,null,null,5,"p",[],null,null,null,null,null)),(n()(),t.tb(29,0,null,null,2,"i",[],null,null,null,null,null)),(n()(),t.tb(30,0,null,null,1,"u",[],null,null,null,null,null)),(n()(),t.Mb(-1,null,["Religion: "])),(n()(),t.tb(32,0,null,null,1,"span",[["class","span-info"]],null,null,null,null,null)),(n()(),t.Mb(33,null,["",""])),(n()(),t.tb(34,0,null,null,5,"p",[],null,null,null,null,null)),(n()(),t.tb(35,0,null,null,2,"i",[],null,null,null,null,null)),(n()(),t.tb(36,0,null,null,1,"u",[],null,null,null,null,null)),(n()(),t.Mb(-1,null,["Want Kids? "])),(n()(),t.tb(38,0,null,null,1,"span",[["class","span-info"]],null,null,null,null,null)),(n()(),t.Mb(39,null,["",""])),(n()(),t.tb(40,0,null,null,5,"p",[],null,null,null,null,null)),(n()(),t.tb(41,0,null,null,2,"i",[],null,null,null,null,null)),(n()(),t.tb(42,0,null,null,1,"u",[],null,null,null,null,null)),(n()(),t.Mb(-1,null,["Hobbies: "])),(n()(),t.tb(44,0,null,null,1,"span",[["class","span-info"]],null,null,null,null,null)),(n()(),t.Mb(45,null,["",""])),(n()(),t.tb(46,0,null,null,5,"p",[],null,null,null,null,null)),(n()(),t.tb(47,0,null,null,2,"i",[],null,null,null,null,null)),(n()(),t.tb(48,0,null,null,1,"u",[],null,null,null,null,null)),(n()(),t.Mb(-1,null,["Description: "])),(n()(),t.tb(50,0,null,null,1,"span",[["class","span-info"]],null,null,null,null,null)),(n()(),t.Mb(51,null,["",""])),(n()(),t.tb(52,0,null,null,58,"ion-list",[],null,null,null,d.ab,d.r)),t.sb(53,49152,null,0,g.O,[t.h,t.k,t.y],null,null),(n()(),t.tb(54,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.updateAvatar()&&t),t}),d.X,d.p)),t.sb(55,49152,null,0,g.H,[t.h,t.k,t.y],null,null),(n()(),t.Mb(-1,0,["Change Profile Picture"])),(n()(),t.tb(57,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.updateUsername()&&t),t}),d.X,d.p)),t.sb(58,49152,null,0,g.H,[t.h,t.k,t.y],null,null),(n()(),t.Mb(-1,0,["Change Username"])),(n()(),t.tb(60,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.updateTitle()&&t),t}),d.X,d.p)),t.sb(61,49152,null,0,g.H,[t.h,t.k,t.y],null,null),(n()(),t.Mb(-1,0,["Change Title"])),(n()(),t.tb(63,0,null,0,13,"ion-item",[],null,null,null,d.X,d.p)),t.sb(64,49152,null,0,g.H,[t.h,t.k,t.y],null,null),(n()(),t.tb(65,0,null,0,2,"ion-label",[],null,null,null,d.Y,d.q)),t.sb(66,49152,null,0,g.N,[t.h,t.k,t.y],null,null),(n()(),t.Mb(-1,0,["Update Age"])),(n()(),t.tb(68,0,null,0,8,"ion-select",[["interface","action-sheet"],["multiple","false"],["name","selectAge"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,l,e){var u=!0,a=n.component;return"ionBlur"===l&&(u=!1!==t.Fb(n,70)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Fb(n,70)._handleChangeEvent(e.target)&&u),"ngModelChange"===l&&(u=!1!==(a.selectedAge=e)&&u),"ionChange"===l&&(u=!1!==a.updateAge()&&u),u}),d.ib,d.z)),t.sb(69,49152,null,0,g.kb,[t.h,t.k,t.y],{interface:[0,"interface"],interfaceOptions:[1,"interfaceOptions"],multiple:[2,"multiple"],name:[3,"name"],placeholder:[4,"placeholder"]},null),t.sb(70,16384,null,0,g.Jb,[t.k],null,null),t.Jb(1024,null,m.h,(function(n){return[n]}),[g.Jb]),t.sb(72,671744,null,0,m.m,[[8,null],[8,null],[8,null],[6,m.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Jb(2048,null,m.i,null,[m.m]),t.sb(74,16384,null,0,m.j,[[4,m.i]],null,null),(n()(),t.ib(16777216,null,0,1,null,I)),t.sb(76,278528,null,0,v.k,[t.P,t.L,t.r],{ngForOf:[0,"ngForOf"]},null),(n()(),t.tb(77,0,null,0,13,"ion-item",[],null,null,null,d.X,d.p)),t.sb(78,49152,null,0,g.H,[t.h,t.k,t.y],null,null),(n()(),t.tb(79,0,null,0,2,"ion-label",[],null,null,null,d.Y,d.q)),t.sb(80,49152,null,0,g.N,[t.h,t.k,t.y],null,null),(n()(),t.Mb(-1,0,["Update Religion"])),(n()(),t.tb(82,0,null,0,8,"ion-select",[["interface","action-sheet"],["multiple","false"],["name","selectReligion"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,l,e){var u=!0,a=n.component;return"ionBlur"===l&&(u=!1!==t.Fb(n,84)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Fb(n,84)._handleChangeEvent(e.target)&&u),"ngModelChange"===l&&(u=!1!==(a.selectedReligion=e)&&u),"ionChange"===l&&(u=!1!==a.updateReligion()&&u),u}),d.ib,d.z)),t.sb(83,49152,null,0,g.kb,[t.h,t.k,t.y],{interface:[0,"interface"],interfaceOptions:[1,"interfaceOptions"],multiple:[2,"multiple"],name:[3,"name"],placeholder:[4,"placeholder"]},null),t.sb(84,16384,null,0,g.Jb,[t.k],null,null),t.Jb(1024,null,m.h,(function(n){return[n]}),[g.Jb]),t.sb(86,671744,null,0,m.m,[[8,null],[8,null],[8,null],[6,m.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Jb(2048,null,m.i,null,[m.m]),t.sb(88,16384,null,0,m.j,[[4,m.i]],null,null),(n()(),t.ib(16777216,null,0,1,null,j)),t.sb(90,278528,null,0,v.k,[t.P,t.L,t.r],{ngForOf:[0,"ngForOf"]},null),(n()(),t.tb(91,0,null,0,13,"ion-item",[],null,null,null,d.X,d.p)),t.sb(92,49152,null,0,g.H,[t.h,t.k,t.y],null,null),(n()(),t.tb(93,0,null,0,2,"ion-label",[],null,null,null,d.Y,d.q)),t.sb(94,49152,null,0,g.N,[t.h,t.k,t.y],null,null),(n()(),t.Mb(-1,0,["Update Have Kids"])),(n()(),t.tb(96,0,null,0,8,"ion-select",[["interface","action-sheet"],["multiple","false"],["name","selectKids"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],(function(n,l,e){var u=!0,a=n.component;return"ionBlur"===l&&(u=!1!==t.Fb(n,98)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Fb(n,98)._handleChangeEvent(e.target)&&u),"ngModelChange"===l&&(u=!1!==(a.selectedKids=e)&&u),"ionChange"===l&&(u=!1!==a.updateHaveKids()&&u),u}),d.ib,d.z)),t.sb(97,49152,null,0,g.kb,[t.h,t.k,t.y],{interface:[0,"interface"],interfaceOptions:[1,"interfaceOptions"],multiple:[2,"multiple"],name:[3,"name"],placeholder:[4,"placeholder"]},null),t.sb(98,16384,null,0,g.Jb,[t.k],null,null),t.Jb(1024,null,m.h,(function(n){return[n]}),[g.Jb]),t.sb(100,671744,null,0,m.m,[[8,null],[8,null],[8,null],[6,m.h]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),t.Jb(2048,null,m.i,null,[m.m]),t.sb(102,16384,null,0,m.j,[[4,m.i]],null,null),(n()(),t.ib(16777216,null,0,1,null,J)),t.sb(104,278528,null,0,v.k,[t.P,t.L,t.r],{ngForOf:[0,"ngForOf"]},null),(n()(),t.tb(105,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.updateHobbies()&&t),t}),d.X,d.p)),t.sb(106,49152,null,0,g.H,[t.h,t.k,t.y],null,null),(n()(),t.Mb(-1,0,["Update Hobbies"])),(n()(),t.tb(108,0,null,0,2,"ion-item",[],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.updateDescription()&&t),t}),d.X,d.p)),t.sb(109,49152,null,0,g.H,[t.h,t.k,t.y],null,null),(n()(),t.Mb(-1,0,["Update Description"])),(n()(),t.tb(111,0,null,null,21,"div",[["class","buttons"]],null,null,null,null,null)),(n()(),t.tb(112,0,null,null,3,"ion-row",[],null,null,null,d.gb,d.y)),t.sb(113,49152,null,0,g.gb,[t.h,t.k,t.y],null,null),(n()(),t.tb(114,0,null,0,1,"h3",[],null,null,null,null,null)),(n()(),t.Mb(-1,null,["Add Photo"])),(n()(),t.tb(116,0,null,null,16,"ion-row",[],null,null,null,d.gb,d.y)),t.sb(117,49152,null,0,g.gb,[t.h,t.k,t.y],null,null),(n()(),t.tb(118,0,null,0,8,"ion-col",[["fxLayout","row"],["fxLayoutAlign","center center"]],null,null,null,d.S,d.k)),t.sb(119,49152,null,0,g.t,[t.h,t.k,t.y],null,null),t.sb(120,671744,null,0,p.b,[t.k,f.i,[2,p.e],f.f],{fxLayout:[0,"fxLayout"]},null),t.sb(121,671744,null,0,p.a,[t.k,f.i,[2,p.d],f.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(n()(),t.tb(122,0,null,0,4,"a",[["class","btn btn-primary button-hover"]],null,null,null,null,null)),(n()(),t.tb(123,0,null,null,2,"label",[["class","custom-file-upload"],["for","file-upload"]],null,null,null,null,null)),(n()(),t.tb(124,0,null,null,0,"i",[["class","fa fa-cloud-upload"]],null,null,null,null,null)),(n()(),t.Mb(125,null,[""," "])),(n()(),t.tb(126,0,null,null,0,"input",[["id","file-upload"],["name","upload_cont_img"],["style","display:none;"],["type","file"]],null,[[null,"change"]],(function(n,l,e){var t=!0;return"change"===l&&(t=!1!==n.component.onFileChanged(e)&&t),t}),null,null)),(n()(),t.tb(127,0,null,0,5,"ion-col",[["fxLayout","row"],["fxLayoutAlign","space-around center"]],null,null,null,d.S,d.k)),t.sb(128,49152,null,0,g.t,[t.h,t.k,t.y],null,null),t.sb(129,671744,null,0,p.b,[t.k,f.i,[2,p.e],f.f],{fxLayout:[0,"fxLayout"]},null),t.sb(130,671744,null,0,p.a,[t.k,f.i,[2,p.d],f.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(n()(),t.tb(131,0,null,0,1,"a",[["class","btn btn-secondary button-hover"],["color","success"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.onUpload()&&t),t}),null,null)),(n()(),t.Mb(-1,null,["Upload"])),(n()(),t.tb(133,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),t.Mb(-1,null,[" Photos "])),(n()(),t.tb(135,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.tb(136,0,null,null,5,"section",[["fxLayout","column"],["fxLayoutAlign","start center"]],null,null,null,null,null)),t.sb(137,671744,null,0,p.b,[t.k,f.i,[2,p.e],f.f],{fxLayout:[0,"fxLayout"]},null),t.sb(138,671744,null,0,p.a,[t.k,f.i,[2,p.d],f.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(n()(),t.tb(139,0,null,null,2,"ion-button",[["color","primary"],["fill","outline"],["shape","round"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.launchPicModal()&&t),t}),d.L,d.d)),t.sb(140,49152,null,0,g.k,[t.h,t.k,t.y],{color:[0,"color"],fill:[1,"fill"],shape:[2,"shape"]},null),(n()(),t.Mb(-1,0,[" View Photos "])),(n()(),t.tb(142,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.tb(143,0,null,null,4,"div",[["fxLayout","row"],["fxLayout.xs","column"],["fxLayoutAlign","space-between center"]],null,null,null,null,null)),t.sb(144,671744,null,0,p.b,[t.k,f.i,[2,p.e],f.f],{fxLayout:[0,"fxLayout"],"fxLayout.xs":[1,"fxLayout.xs"]},null),t.sb(145,671744,null,0,p.a,[t.k,f.i,[2,p.d],f.f],{fxLayoutAlign:[0,"fxLayoutAlign"]},null),(n()(),t.ib(16777216,null,null,1,null,K)),t.sb(147,278528,null,0,v.k,[t.P,t.L,t.r],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var e=l.component;n(l,3,0,"dark"),n(l,12,0,"row"),n(l,13,0,"space-around center"),n(l,69,0,"action-sheet",e.ageActionSheetOptions,"false","selectAge",e.selectedAge?e.selectedAge:"Tap to update"),n(l,72,0,"selectAge",e.selectedAge),n(l,76,0,e.ages),n(l,83,0,"action-sheet",e.religionActionSheetOptions,"false","selectReligion",e.selectedReligion?e.selectedReligion:"Tap to update"),n(l,86,0,"selectReligion",e.selectedReligion),n(l,90,0,e.religions),n(l,97,0,"action-sheet",e.kidsActionSheetOptions,"false","selectKids",e.selectedKids?e.selectedKids:"Tap to update"),n(l,100,0,"selectKids",e.selectedKids),n(l,104,0,e.kidsOptions),n(l,120,0,"row"),n(l,121,0,"center center"),n(l,129,0,"row"),n(l,130,0,"space-around center"),n(l,137,0,"column"),n(l,138,0,"start center"),n(l,140,0,"primary","outline","round"),n(l,144,0,"row","column"),n(l,145,0,"space-between center"),n(l,147,0,e.imageUrls)}),(function(n,l){var e=l.component;n(l,17,0,e.user.photoURL),n(l,19,0,e.user.displayName),n(l,21,0,e.user.title),n(l,27,0,e.user.age),n(l,33,0,e.user.religion),n(l,39,0,e.user.haveKids),n(l,45,0,e.user.hobbies),n(l,51,0,e.user.description),n(l,68,0,t.Fb(l,74).ngClassUntouched,t.Fb(l,74).ngClassTouched,t.Fb(l,74).ngClassPristine,t.Fb(l,74).ngClassDirty,t.Fb(l,74).ngClassValid,t.Fb(l,74).ngClassInvalid,t.Fb(l,74).ngClassPending),n(l,82,0,t.Fb(l,88).ngClassUntouched,t.Fb(l,88).ngClassTouched,t.Fb(l,88).ngClassPristine,t.Fb(l,88).ngClassDirty,t.Fb(l,88).ngClassValid,t.Fb(l,88).ngClassInvalid,t.Fb(l,88).ngClassPending),n(l,96,0,t.Fb(l,102).ngClassUntouched,t.Fb(l,102).ngClassTouched,t.Fb(l,102).ngClassPristine,t.Fb(l,102).ngClassDirty,t.Fb(l,102).ngClassValid,t.Fb(l,102).ngClassInvalid,t.Fb(l,102).ngClassPending),n(l,125,0,e.selectedFileName)}))}var z=t.pb("page-account",M,(function(n){return t.Ob(0,[(n()(),t.tb(0,0,null,null,1,"page-account",[],null,null,null,B,H)),t.sb(1,4308992,null,0,M,[t.h,g.b,C.a,R,D.a,g.b,N.m,x.a,g.Db],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),T=e("5GAg"),q=e("/HVE"),V=e("DkaU"),X=e("Mc5n"),E=e("hOhj"),Q=e("QQfA"),W=e("IP0z"),Z=e("/Co4"),G=e("POq0"),Y=e("Xd0L"),nn=e("s6ns"),ln=e("821u"),en=e("gavF"),tn=e("JjoW"),un=e("Mz6y"),an=e("cUpR"),on=e("OIZN"),rn=e("7kcP"),sn=e("qJ5m"),cn=e("Xr7G"),bn=e("zQui"),hn=e("zMNK"),dn=e("KPQW"),gn=e("lwm9"),pn=e("Fwaw"),fn=e("mkRZ"),mn=e("igqZ"),vn=e("r0V8"),yn=e("kNGD"),kn=e("02hT"),Cn=e("5Bek"),Dn=e("c9fC"),xn=e("FVPZ"),wn=e("Gi4r"),Mn=e("oapL"),On=e("HsOI"),Pn=e("ZwOa"),Un=e("Q+lL"),An=e("8P0U"),Fn=e("W5yJ"),Sn=e("elxJ"),_n=e("lT8R"),Ln=e("pBi1"),Rn=e("AaDx"),Nn=e("rWV4"),Hn=e("8rEH"),In=e("dFDH"),jn=e("BzsH"),Jn=e("BV1i"),Kn=e("qJ50"),Bn=e("7QIX"),zn=e("ura0"),Tn=e("Nhcz"),qn=e("u9T3"),Vn=e("5dmV"),Xn=e("PCNd"),$n=function n(){_classCallCheck(this,n)},En=e("dvZr");e.d(l,"AccountModuleNgFactory",(function(){return Qn}));var Qn=t.qb(u,[],(function(n){return t.Cb([t.Db(512,t.j,t.bb,[[8,[a.a,i.a,o.b,o.a,r.a,s.a,s.b,c.a,b.a,h.a,z]],[3,t.j],t.w]),t.Db(4608,v.n,v.m,[t.t,[2,v.C]]),t.Db(4608,g.c,g.c,[t.y,t.g]),t.Db(4608,g.Db,g.Db,[g.c,t.j,t.q]),t.Db(4608,g.Hb,g.Hb,[g.c,t.j,t.q]),t.Db(4608,m.c,m.c,[]),t.Db(4608,m.r,m.r,[]),t.Db(135680,T.h,T.h,[t.y,q.a]),t.Db(4608,V.e,V.e,[t.L]),t.Db(4608,X.a,X.a,[v.d,t.y,E.e,X.c]),t.Db(4608,Q.a,Q.a,[Q.g,Q.c,t.j,Q.f,Q.d,t.q,t.y,v.d,W.b,[2,v.h]]),t.Db(5120,Q.h,Q.i,[Q.a]),t.Db(5120,Z.a,Z.b,[Q.a]),t.Db(4608,G.c,G.c,[]),t.Db(4608,Y.d,Y.d,[]),t.Db(5120,nn.b,nn.c,[Q.a]),t.Db(135680,nn.d,nn.d,[Q.a,t.q,[2,v.h],[2,nn.a],nn.b,[3,nn.d],Q.c]),t.Db(4608,ln.h,ln.h,[]),t.Db(5120,ln.a,ln.b,[Q.a]),t.Db(5120,en.a,en.d,[Q.a]),t.Db(4608,Y.c,Y.u,[[2,Y.h],q.a]),t.Db(5120,tn.a,tn.b,[Q.a]),t.Db(5120,un.b,un.c,[Q.a]),t.Db(4608,an.e,Y.e,[[2,Y.i],[2,Y.m]]),t.Db(5120,on.b,on.a,[[3,on.b]]),t.Db(5120,rn.d,rn.a,[[3,rn.d]]),t.Db(5120,sn.b,sn.a,[[3,sn.b]]),t.Db(5120,t.b,(function(n,l){return[f.j(n,l)]}),[v.d,t.A]),t.Db(4608,cn.a,cn.a,[_.d,[2,_.c],[2,cn.b],[2,cn.c],t.A,t.y,[2,cn.d]]),t.Db(4608,R,R,[_.d,[2,_.c],[2,L],t.A,t.y]),t.Db(1073742336,v.c,v.c,[]),t.Db(1073742336,g.Bb,g.Bb,[]),t.Db(1073742336,m.q,m.q,[]),t.Db(1073742336,m.n,m.n,[]),t.Db(1073742336,m.f,m.f,[]),t.Db(1073742336,bn.p,bn.p,[]),t.Db(1073742336,V.c,V.c,[]),t.Db(1073742336,X.b,X.b,[]),t.Db(1073742336,W.a,W.a,[]),t.Db(1073742336,Y.m,Y.m,[[2,Y.f],[2,an.f]]),t.Db(1073742336,q.b,q.b,[]),t.Db(1073742336,Y.t,Y.t,[]),t.Db(1073742336,Y.r,Y.r,[]),t.Db(1073742336,Y.p,Y.p,[]),t.Db(1073742336,hn.g,hn.g,[]),t.Db(1073742336,E.c,E.c,[]),t.Db(1073742336,Q.e,Q.e,[]),t.Db(1073742336,Z.c,Z.c,[]),t.Db(1073742336,G.d,G.d,[]),t.Db(1073742336,T.a,T.a,[]),t.Db(1073742336,dn.a,dn.a,[]),t.Db(1073742336,gn.c,gn.c,[]),t.Db(1073742336,pn.c,pn.c,[]),t.Db(1073742336,fn.a,fn.a,[]),t.Db(1073742336,mn.a,mn.a,[]),t.Db(1073742336,vn.b,vn.b,[]),t.Db(1073742336,vn.a,vn.a,[]),t.Db(1073742336,yn.b,yn.b,[]),t.Db(1073742336,nn.g,nn.g,[]),t.Db(1073742336,ln.i,ln.i,[]),t.Db(1073742336,kn.a,kn.a,[]),t.Db(1073742336,Cn.c,Cn.c,[]),t.Db(1073742336,Dn.a,Dn.a,[]),t.Db(1073742336,Y.n,Y.n,[]),t.Db(1073742336,xn.a,xn.a,[]),t.Db(1073742336,wn.c,wn.c,[]),t.Db(1073742336,Mn.c,Mn.c,[]),t.Db(1073742336,On.d,On.d,[]),t.Db(1073742336,Pn.b,Pn.b,[]),t.Db(1073742336,Un.a,Un.a,[]),t.Db(1073742336,en.c,en.c,[]),t.Db(1073742336,en.b,en.b,[]),t.Db(1073742336,Y.v,Y.v,[]),t.Db(1073742336,Y.o,Y.o,[]),t.Db(1073742336,tn.c,tn.c,[]),t.Db(1073742336,un.e,un.e,[]),t.Db(1073742336,on.c,on.c,[]),t.Db(1073742336,An.a,An.a,[]),t.Db(1073742336,Fn.a,Fn.a,[]),t.Db(1073742336,Sn.a,Sn.a,[]),t.Db(1073742336,_n.a,_n.a,[]),t.Db(1073742336,Ln.b,Ln.b,[]),t.Db(1073742336,Ln.a,Ln.a,[]),t.Db(1073742336,rn.e,rn.e,[]),t.Db(1073742336,Rn.a,Rn.a,[]),t.Db(1073742336,Nn.j,Nn.j,[]),t.Db(1073742336,Hn.m,Hn.m,[]),t.Db(1073742336,In.d,In.d,[]),t.Db(1073742336,jn.a,jn.a,[]),t.Db(1073742336,Jn.a,Jn.a,[]),t.Db(1073742336,Kn.e,Kn.e,[]),t.Db(1073742336,sn.c,sn.c,[]),t.Db(1073742336,Bn.c,Bn.c,[]),t.Db(1073742336,f.c,f.c,[]),t.Db(1073742336,p.c,p.c,[]),t.Db(1073742336,zn.a,zn.a,[]),t.Db(1073742336,Tn.a,Tn.a,[]),t.Db(1073742336,qn.a,qn.a,[[2,f.g],t.A]),t.Db(1073742336,Vn.a,Vn.a,[]),t.Db(1073742336,Xn.a,Xn.a,[]),t.Db(1073742336,N.q,N.q,[[2,N.v],[2,N.m]]),t.Db(1073742336,$n,$n,[]),t.Db(1073742336,u,u,[]),t.Db(256,yn.a,{separatorKeyCodes:[En.f]},[]),t.Db(256,Y.g,Y.k,[]),t.Db(1024,N.k,(function(){return[[{path:"",component:M}]]}),[])])}))}}]);