(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5b633c40"],{"0674":function(e,t,a){},"133c":function(e,t,a){"use strict";var i=a("d785"),r=a.n(i);r.a},2201:function(e,t,a){"use strict";var i=a("d23e"),r=a.n(i);r.a},"456d":function(e,t,a){var i=a("4bf8"),r=a("0d58");a("5eda")("keys",(function(){return function(e){return r(i(e))}}))},"5eda":function(e,t,a){var i=a("5ca1"),r=a("8378"),s=a("79e5");e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],o={};o[e]=t(a),i(i.S+i.F*s((function(){a(1)})),"Object",o)}},"9af7":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var i=a("59ca"),r=a.n(i),s=(a("e71f"),{apiKey:"AIzaSyDmp3gGUMYRItduQCRWwvDZeR-uPjS_89k",authDomain:"cmu-shuttle.firebaseapp.com",databaseURL:"https://cmu-shuttle.firebaseio.com",projectId:"cmu-shuttle",storageBucket:"",messagingSenderId:"684256511959",appId:"1:684256511959:web:088eaf353a63c3a828ad92"}),o=r.a.initializeApp(s).firestore(),n=r.a.firestore;n.TimeStamp,n.GeoPoint},d06a:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("driver-model",{attrs:{"is-edit":!1}})},r=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",[a("div",{staticClass:"app-container ",staticStyle:{height:"600px",margin:"2%",background:"whitesmoke",width:"100%",border:"1px solid #eee"}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"driverForm",attrs:{"element-loading-text":e.loadingText,rules:e.rules,model:e.driverForm,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"Driver name",prop:"name"}},[a("el-input",{model:{value:e.driverForm.name,callback:function(t){e.$set(e.driverForm,"name",t)},expression:"driverForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Phone number",prop:"phone"}},[a("el-input",{model:{value:e.driverForm.phone,callback:function(t){e.$set(e.driverForm,"phone",t)},expression:"driverForm.phone"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Email Address",prop:"email"}},[a("el-input",{model:{value:e.driverForm.email,callback:function(t){e.$set(e.driverForm,"email",t)},expression:"driverForm.email"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Account Status"}},[a("el-select",{attrs:{placeholder:"Please choose an option"},model:{value:e.driverForm.status,callback:function(t){e.$set(e.driverForm,"status",t)},expression:"driverForm.status"}},[a("el-option",{attrs:{label:"Active",value:"active"}}),e._v(" "),a("el-option",{attrs:{label:"Deactivated",value:"inactive"}}),e._v(" "),a("el-option",{attrs:{label:"Suspended",value:"suspended"}})],1)],1),e._v(" "),a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.driverForm.imageUrl?a("img",{staticClass:"avatar",attrs:{src:e.driverForm.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),e._v(" "),a("el-form-item",{staticClass:"submit"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("Create")]),e._v(" "),a("el-button",{on:{click:function(t){return e.resetForm("driverForm")}}},[e._v("Reset")])],1)],1)],1)])},o=[],n=a("9af7"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"vue-image-crop-upload"},[a("div",{staticClass:"vicp-wrap"},[a("div",{staticClass:"vicp-close",on:{click:e.off}},[a("i",{staticClass:"vicp-icon4"})]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==e.step,expression:"step == 1"}],staticClass:"vicp-step1"},[a("div",{staticClass:"vicp-drop-area",on:{dragleave:e.preventDefault,dragover:e.preventDefault,dragenter:e.preventDefault,click:e.handleClick,drop:e.handleChange}},[a("i",{directives:[{name:"show",rawName:"v-show",value:1!=e.loading,expression:"loading != 1"}],staticClass:"vicp-icon1"},[a("i",{staticClass:"vicp-icon1-arrow"}),e._v(" "),a("i",{staticClass:"vicp-icon1-body"}),e._v(" "),a("i",{staticClass:"vicp-icon1-bottom"})]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:1!==e.loading,expression:"loading !== 1"}],staticClass:"vicp-hint"},[e._v(e._s(e.lang.hint))]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:!e.isSupported,expression:"!isSupported"}],staticClass:"vicp-no-supported-hint"},[e._v(e._s(e.lang.noSupported))]),e._v(" "),1==e.step?a("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"fileinput",attrs:{type:"file"},on:{change:e.handleChange}}):e._e()]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hasError,expression:"hasError"}],staticClass:"vicp-error"},[a("i",{staticClass:"vicp-icon2"}),e._v(" "+e._s(e.errorMsg)+"\n      ")]),e._v(" "),a("div",{staticClass:"vicp-operate"},[a("a",{on:{click:e.off,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.off))])])]),e._v(" "),2==e.step?a("div",{staticClass:"vicp-step2"},[a("div",{staticClass:"vicp-crop"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"vicp-crop-left"},[a("div",{staticClass:"vicp-img-container"},[a("img",{ref:"img",staticClass:"vicp-img",style:e.sourceImgStyle,attrs:{src:e.sourceImgUrl,draggable:"false"},on:{drag:e.preventDefault,dragstart:e.preventDefault,dragend:e.preventDefault,dragleave:e.preventDefault,dragover:e.preventDefault,dragenter:e.preventDefault,drop:e.preventDefault,touchstart:e.imgStartMove,touchmove:e.imgMove,touchend:e.createImg,touchcancel:e.createImg,mousedown:e.imgStartMove,mousemove:e.imgMove,mouseup:e.createImg,mouseout:e.createImg}}),e._v(" "),a("div",{staticClass:"vicp-img-shade vicp-img-shade-1",style:e.sourceImgShadeStyle}),e._v(" "),a("div",{staticClass:"vicp-img-shade vicp-img-shade-2",style:e.sourceImgShadeStyle})]),e._v(" "),a("div",{staticClass:"vicp-range"},[a("input",{attrs:{type:"range",step:"1",min:"0",max:"100"},domProps:{value:e.scale.range},on:{input:e.zoomChange}}),e._v(" "),a("i",{staticClass:"vicp-icon5",on:{mousedown:e.startZoomSub,mouseout:e.endZoomSub,mouseup:e.endZoomSub}}),e._v(" "),a("i",{staticClass:"vicp-icon6",on:{mousedown:e.startZoomAdd,mouseout:e.endZoomAdd,mouseup:e.endZoomAdd}})]),e._v(" "),e.noRotate?e._e():a("div",{staticClass:"vicp-rotate"},[a("i",{on:{mousedown:e.startRotateLeft,mouseout:e.endRotate,mouseup:e.endRotate}},[e._v("↺")]),e._v(" "),a("i",{on:{mousedown:e.startRotateRight,mouseout:e.endRotate,mouseup:e.endRotate}},[e._v("↻")])])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!0,expression:"true"}],staticClass:"vicp-crop-right"},[a("div",{staticClass:"vicp-preview"},[e.noSquare?e._e():a("div",{staticClass:"vicp-preview-item"},[a("img",{style:e.previewStyle,attrs:{src:e.createImgUrl}}),e._v(" "),a("span",[e._v(e._s(e.lang.preview))])]),e._v(" "),e.noCircle?e._e():a("div",{staticClass:"vicp-preview-item vicp-preview-item-circle"},[a("img",{style:e.previewStyle,attrs:{src:e.createImgUrl}}),e._v(" "),a("span",[e._v(e._s(e.lang.preview))])])])])]),e._v(" "),a("div",{staticClass:"vicp-operate"},[a("a",{on:{click:function(t){return e.setStep(1)},mousedown:e.ripple}},[e._v(e._s(e.lang.btn.back))]),e._v(" "),a("a",{staticClass:"vicp-operate-btn",on:{click:e.prepareUpload,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.save))])])]):e._e(),e._v(" "),3==e.step?a("div",{staticClass:"vicp-step3"},[a("div",{staticClass:"vicp-upload"},[a("span",{directives:[{name:"show",rawName:"v-show",value:1===e.loading,expression:"loading === 1"}],staticClass:"vicp-loading"},[e._v(e._s(e.lang.loading))]),e._v(" "),a("div",{staticClass:"vicp-progress-wrap"},[a("span",{directives:[{name:"show",rawName:"v-show",value:1===e.loading,expression:"loading === 1"}],staticClass:"vicp-progress",style:e.progressStyle})]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.hasError,expression:"hasError"}],staticClass:"vicp-error"},[a("i",{staticClass:"vicp-icon2"}),e._v(" "+e._s(e.errorMsg)+"\n        ")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:2===e.loading,expression:"loading === 2"}],staticClass:"vicp-success"},[a("i",{staticClass:"vicp-icon3"}),e._v(" "+e._s(e.lang.success)+"\n        ")])]),e._v(" "),a("div",{staticClass:"vicp-operate"},[a("a",{on:{click:function(t){return e.setStep(2)},mousedown:e.ripple}},[e._v(e._s(e.lang.btn.back))]),e._v(" "),a("a",{on:{click:e.off,mousedown:e.ripple}},[e._v(e._s(e.lang.btn.close))])])]):e._e(),e._v(" "),a("canvas",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"canvas",attrs:{width:e.width,height:e.height}})])])},c=[],u=(a("456d"),a("ac6a"),a("7618")),d=(a("c5f6"),a("b775")),h={zh:{hint:"点击，或拖动图片至此处",loading:"正在上传……",noSupported:"浏览器不支持该功能，请使用IE10以上或其他现在浏览器！",success:"上传成功",fail:"图片上传失败",preview:"头像预览",btn:{off:"取消",close:"关闭",back:"上一步",save:"保存"},error:{onlyImg:"仅限图片格式",outOfSize:"单文件大小不能超过 ",lowestPx:"图片最低像素为（宽*高）："}},"zh-tw":{hint:"點擊，或拖動圖片至此處",loading:"正在上傳……",noSupported:"瀏覽器不支持該功能，請使用IE10以上或其他現代瀏覽器！",success:"上傳成功",fail:"圖片上傳失敗",preview:"頭像預覽",btn:{off:"取消",close:"關閉",back:"上一步",save:"保存"},error:{onlyImg:"僅限圖片格式",outOfSize:"單文件大小不能超過 ",lowestPx:"圖片最低像素為（寬*高）："}},en:{hint:"Click or drag the file here to upload",loading:"Uploading…",noSupported:"Browser is not supported, please use IE10+ or other browsers",success:"Upload success",fail:"Upload failed",preview:"Preview",btn:{off:"Cancel",close:"Close",back:"Back",save:"Save"},error:{onlyImg:"Image only",outOfSize:"Image exceeds size limit: ",lowestPx:"Image's size is too low. Expected at least: "}},ro:{hint:"Atinge sau trage fișierul aici",loading:"Se încarcă",noSupported:"Browser-ul tău nu suportă acest feature. Te rugăm încearcă cu alt browser.",success:"S-a încărcat cu succes",fail:"A apărut o problemă la încărcare",preview:"Previzualizează",btn:{off:"Anulează",close:"Închide",back:"Înapoi",save:"Salvează"},error:{onlyImg:"Doar imagini",outOfSize:"Imaginea depășește limita de: ",loewstPx:"Imaginea este prea mică; Minim: "}},ru:{hint:"Нажмите, или перетащите файл в это окно",loading:"Загружаю……",noSupported:"Ваш браузер не поддерживается, пожалуйста, используйте IE10 + или другие браузеры",success:"Загрузка выполнена успешно",fail:"Ошибка загрузки",preview:"Предпросмотр",btn:{off:"Отменить",close:"Закрыть",back:"Назад",save:"Сохранить"},error:{onlyImg:"Только изображения",outOfSize:"Изображение превышает предельный размер: ",lowestPx:"Минимальный размер изображения: "}},"pt-br":{hint:"Clique ou arraste o arquivo aqui para carregar",loading:"Carregando…",noSupported:"Browser não suportado, use o IE10+ ou outro browser",success:"Sucesso ao carregar imagem",fail:"Falha ao carregar imagem",preview:"Pré-visualizar",btn:{off:"Cancelar",close:"Fechar",back:"Voltar",save:"Salvar"},error:{onlyImg:"Apenas imagens",outOfSize:"A imagem excede o limite de tamanho: ",lowestPx:"O tamanho da imagem é muito pequeno. Tamanho mínimo: "}},fr:{hint:"Cliquez ou glissez le fichier ici.",loading:"Téléchargement…",noSupported:"Votre navigateur n'est pas supporté. Utilisez IE10 + ou un autre navigateur s'il vous plaît.",success:"Téléchargement réussit",fail:"Téléchargement echoué",preview:"Aperçu",btn:{off:"Annuler",close:"Fermer",back:"Retour",save:"Enregistrer"},error:{onlyImg:"Image uniquement",outOfSize:"L'image sélectionnée dépasse la taille maximum: ",lowestPx:"L'image sélectionnée est trop petite. Dimensions attendues: "}},nl:{hint:"Klik hier of sleep een afbeelding in dit vlak",loading:"Uploaden…",noSupported:"Je browser wordt helaas niet ondersteund. Gebruik IE10+ of een andere browser.",success:"Upload succesvol",fail:"Upload mislukt",preview:"Voorbeeld",btn:{off:"Annuleren",close:"Sluiten",back:"Terug",save:"Opslaan"},error:{onlyImg:"Alleen afbeeldingen",outOfSize:"De afbeelding is groter dan: ",lowestPx:"De afbeelding is te klein! Minimale afmetingen: "}},tr:{hint:"Tıkla veya yüklemek istediğini buraya sürükle",loading:"Yükleniyor…",noSupported:"Tarayıcı desteklenmiyor, lütfen IE10+ veya farklı tarayıcı kullanın",success:"Yükleme başarılı",fail:"Yüklemede hata oluştu",preview:"Önizle",btn:{off:"İptal",close:"Kapat",back:"Geri",save:"Kaydet"},error:{onlyImg:"Sadece resim",outOfSize:"Resim yükleme limitini aşıyor: ",lowestPx:"Resmin boyutu çok küçük. En az olması gereken: "}},"es-MX":{hint:"Selecciona o arrastra una imagen",loading:"Subiendo...",noSupported:"Tu navegador no es soportado, porfavor usa IE10+ u otros navegadores mas recientes",success:"Subido exitosamente",fail:"Sucedió un error",preview:"Vista previa",btn:{off:"Cancelar",close:"Cerrar",back:"Atras",save:"Guardar"},error:{onlyImg:"Unicamente imagenes",outOfSize:"La imagen excede el tamaño maximo:",lowestPx:"La imagen es demasiado pequeño. Se espera por lo menos:"}},de:{hint:"Klick hier oder zieh eine Datei hier rein zum Hochladen",loading:"Hochladen…",noSupported:"Browser wird nicht unterstützt, bitte verwende IE10+ oder andere Browser",success:"Upload erfolgreich",fail:"Upload fehlgeschlagen",preview:"Vorschau",btn:{off:"Abbrechen",close:"Schließen",back:"Zurück",save:"Speichern"},error:{onlyImg:"Nur Bilder",outOfSize:"Das Bild ist zu groß: ",lowestPx:"Das Bild ist zu klein. Mindestens: "}},ja:{hint:"クリック・ドラッグしてファイルをアップロード",loading:"アップロード中...",noSupported:"このブラウザは対応されていません。IE10+かその他の主要ブラウザをお使いください。",success:"アップロード成功",fail:"アップロード失敗",preview:"プレビュー",btn:{off:"キャンセル",close:"閉じる",back:"戻る",save:"保存"},error:{onlyImg:"画像のみ",outOfSize:"画像サイズが上限を超えています。上限: ",lowestPx:"画像が小さすぎます。最小サイズ: "}}},p={jpg:"image/jpeg",png:"image/png",gif:"image/gif",svg:"image/svg+xml",psd:"image/photoshop"},m=(a("34ef"),a("28a5"),function(e,t){e=e.split(",")[1],e=window.atob(e);for(var a=new Uint8Array(e.length),i=0;i<e.length;i++)a[i]=e.charCodeAt(i);return new Blob([a],{type:t})}),g=function(e,t){var a=Object.assign({ele:e.target,type:"hit",bgc:"rgba(0, 0, 0, 0.15)"},t),i=a.ele;if(i){var r=i.getBoundingClientRect(),s=i.querySelector(".e-ripple");switch(s?s.className="e-ripple":(s=document.createElement("span"),s.className="e-ripple",s.style.height=s.style.width=Math.max(r.width,r.height)+"px",i.appendChild(s)),a.type){case"center":s.style.top=r.height/2-s.offsetHeight/2+"px",s.style.left=r.width/2-s.offsetWidth/2+"px";break;default:s.style.top=e.pageY-r.top-s.offsetHeight/2-document.body.scrollTop+"px",s.style.left=e.pageX-r.left-s.offsetWidth/2-document.body.scrollLeft+"px"}return s.style.backgroundColor=a.bgc,s.className="e-ripple z-active",!1}},v={props:{field:{type:String,default:"avatar"},ki:{default:0},value:{default:!0},url:{type:String,default:""},params:{type:Object,default:null},headers:{type:Object,default:null},width:{type:Number,default:200},height:{type:Number,default:200},noRotate:{type:Boolean,default:!0},noCircle:{type:Boolean,default:!1},noSquare:{type:Boolean,default:!1},maxSize:{type:Number,default:10240},langType:{type:String,default:"zh"},langExt:{type:Object,default:null},imgFormat:{type:String,default:"png"},withCredentials:{type:Boolean,default:!1}},data:function(){var e=this,t=e.imgFormat,a=e.langType,i=e.langExt,r=e.width,s=e.height,o=!0,n=["jpg","png"],l=-1===n.indexOf(t)?"jpg":t,c=h[a]?h[a]:h["en"],u=p[l];return e.imgFormat=l,i&&Object.assign(c,i),"function"!==typeof FormData&&(o=!1),{mime:u,lang:c,isSupported:o,isSupportTouch:document.hasOwnProperty("ontouchstart"),step:1,loading:0,progress:0,hasError:!1,errorMsg:"",ratio:r/s,sourceImg:null,sourceImgUrl:"",createImgUrl:"",sourceImgMouseDown:{on:!1,mX:0,mY:0,x:0,y:0},previewContainer:{width:100,height:100},sourceImgContainer:{width:240,height:184},scale:{zoomAddOn:!1,zoomSubOn:!1,range:1,rotateLeft:!1,rotateRight:!1,degree:0,x:0,y:0,width:0,height:0,maxWidth:0,maxHeight:0,minWidth:0,minHeight:0,naturalWidth:0,naturalHeight:0}}},computed:{progressStyle:function(){var e=this.progress;return{width:e+"%"}},sourceImgStyle:function(){var e=this.scale,t=this.sourceImgMasking,a=e.y+t.y+"px",i=e.x+t.x+"px";return{top:a,left:i,width:e.width+"px",height:e.height+"px",transform:"rotate("+e.degree+"deg)","-ms-transform":"rotate("+e.degree+"deg)","-moz-transform":"rotate("+e.degree+"deg)","-webkit-transform":"rotate("+e.degree+"deg)","-o-transform":"rotate("+e.degree+"deg)"}},sourceImgMasking:function(){var e=this.width,t=this.height,a=this.ratio,i=this.sourceImgContainer,r=i,s=r.width/r.height,o=0,n=0,l=r.width,c=r.height,u=1;return a<s&&(u=r.height/t,l=r.height*a,o=(r.width-l)/2),a>s&&(u=r.width/e,c=r.width/a,n=(r.height-c)/2),{scale:u,x:o,y:n,width:l,height:c}},sourceImgShadeStyle:function(){var e=this.sourceImgMasking,t=this.sourceImgContainer,a=t,i=e,r=i.width==a.width?i.width:(a.width-i.width)/2,s=i.height==a.height?i.height:(a.height-i.height)/2;return{width:r+"px",height:s+"px"}},previewStyle:function(){this.width,this.height;var e=this.ratio,t=this.previewContainer,a=t,i=a.width,r=a.height,s=i/r;return e<s&&(i=a.height*e),e>s&&(r=a.width/e),{width:i+"px",height:r+"px"}}},watch:{value:function(e){e&&1!=this.loading&&this.reset()}},methods:{ripple:function(e){g(e)},off:function(){var e=this;setTimeout((function(){e.$emit("input",!1),e.$emit("close"),3==e.step&&2==e.loading&&e.setStep(1)}),200)},setStep:function(e){var t=this;setTimeout((function(){t.step=e}),200)},preventDefault:function(e){return e.preventDefault(),!1},handleClick:function(e){1!==this.loading&&e.target!==this.$refs.fileinput&&(e.preventDefault(),document.activeElement!==this.$refs&&this.$refs.fileinput.click())},handleChange:function(e){if(e.preventDefault(),1!==this.loading){var t=e.target.files||e.dataTransfer.files;this.reset(),this.checkFile(t[0])&&this.setSourceImg(t[0])}},checkFile:function(e){var t=this,a=t.lang,i=t.maxSize;return-1===e.type.indexOf("image")?(t.hasError=!0,t.errorMsg=a.error.onlyImg,!1):!(e.size/1024>i)||(t.hasError=!0,t.errorMsg=a.error.outOfSize+i+"kb",!1)},reset:function(){var e=this;e.loading=0,e.hasError=!1,e.errorMsg="",e.progress=0},setSourceImg:function(e){var t=this,a=new FileReader;a.onload=function(e){t.sourceImgUrl=a.result,t.startCrop()},a.readAsDataURL(e)},startCrop:function(){var e=this,t=e.width,a=e.height,i=e.ratio,r=e.scale,s=e.sourceImgUrl,o=e.sourceImgMasking,n=e.lang,l=o,c=new Image;c.src=s,c.onload=function(){var s=c.naturalWidth,o=c.naturalHeight,u=s/o,d=l.width,h=l.height,p=0,m=0;if(s<t||o<a)return e.hasError=!0,e.errorMsg=n.error.lowestPx+t+"*"+a,!1;i>u&&(h=d/u,m=(l.height-h)/2),i<u&&(d=h*u,p=(l.width-d)/2),r.range=0,r.x=p,r.y=m,r.width=d,r.height=h,r.degree=0,r.minWidth=d,r.minHeight=h,r.maxWidth=s*l.scale,r.maxHeight=o*l.scale,r.naturalWidth=s,r.naturalHeight=o,e.sourceImg=c,e.createImg(),e.setStep(2)}},imgStartMove:function(e){if(e.preventDefault(),this.isSupportTouch&&!e.targetTouches)return!1;var t=e.targetTouches?e.targetTouches[0]:e,a=this.sourceImgMouseDown,i=this.scale,r=a;r.mX=t.screenX,r.mY=t.screenY,r.x=i.x,r.y=i.y,r.on=!0},imgMove:function(e){if(e.preventDefault(),this.isSupportTouch&&!e.targetTouches)return!1;var t=e.targetTouches?e.targetTouches[0]:e,a=this.sourceImgMouseDown,i=a.on,r=a.mX,s=a.mY,o=a.x,n=a.y,l=this.scale,c=this.sourceImgMasking,u=c,d=t.screenX,h=t.screenY,p=d-r,m=h-s,g=o+p,v=n+m;i&&(g>0&&(g=0),v>0&&(v=0),g<u.width-l.width&&(g=u.width-l.width),v<u.height-l.height&&(v=u.height-l.height),l.x=g,l.y=v)},startRotateRight:function(e){var t=this,a=t.scale;function i(){if(a.rotateRight){var e=++a.degree;t.createImg(e),setTimeout((function(){i()}),60)}}a.rotateRight=!0,i()},startRotateLeft:function(e){var t=this,a=t.scale;function i(){if(a.rotateLeft){var e=--a.degree;t.createImg(e),setTimeout((function(){i()}),60)}}a.rotateLeft=!0,i()},endRotate:function(){var e=this.scale;e.rotateLeft=!1,e.rotateRight=!1},startZoomAdd:function(e){var t=this,a=t.scale;function i(){if(a.zoomAddOn){var e=a.range>=100?100:++a.range;t.zoomImg(e),setTimeout((function(){i()}),60)}}a.zoomAddOn=!0,i()},endZoomAdd:function(e){this.scale.zoomAddOn=!1},startZoomSub:function(e){var t=this,a=t.scale;function i(){if(a.zoomSubOn){var e=a.range<=0?0:--a.range;t.zoomImg(e),setTimeout((function(){i()}),60)}}a.zoomSubOn=!0,i()},endZoomSub:function(e){var t=this.scale;t.zoomSubOn=!1},zoomChange:function(e){this.zoomImg(e.target.value)},zoomImg:function(e){var t=this,a=this.sourceImgMasking,i=(this.sourceImgMouseDown,this.scale),r=i.maxWidth,s=i.maxHeight,o=i.minWidth,n=i.minHeight,l=i.width,c=i.height,u=i.x,d=i.y,h=(i.range,a),p=h.width,m=h.height,g=o+(r-o)*e/100,v=n+(s-n)*e/100,f=p/2-g/l*(p/2-u),w=m/2-v/c*(m/2-d);f>0&&(f=0),w>0&&(w=0),f<p-g&&(f=p-g),w<m-v&&(w=m-v),i.x=f,i.y=w,i.width=g,i.height=v,i.range=e,setTimeout((function(){i.range==e&&t.createImg()}),300)},createImg:function(e){var t=this,a=t.mime,i=t.sourceImg,r=t.scale,s=r.x,o=r.y,n=r.width,l=r.height,c=r.degree,u=t.sourceImgMasking.scale,d=t.$refs.canvas,h=d.getContext("2d");e&&(t.sourceImgMouseDown.on=!1),d.width=t.width,d.height=t.height,h.clearRect(0,0,t.width,t.height),h.fillStyle="#fff",h.fillRect(0,0,t.width,t.height),h.translate(.5*t.width,.5*t.height),h.rotate(Math.PI*c/180),h.translate(.5*-t.width,.5*-t.height),h.drawImage(i,s/u,o/u,n/u,l/u),t.createImgUrl=d.toDataURL(a)},prepareUpload:function(){var e=this.url,t=this.createImgUrl,a=this.field,i=this.ki;this.$emit("crop-success",t,a,i),"string"===typeof e&&e?this.upload():this.off()},upload:function(){var e=this,t=this.lang,a=this.imgFormat,i=this.mime,r=this.url,s=this.params,o=(this.headers,this.field),n=this.ki,l=this.createImgUrl,c=(this.withCredentials,new FormData);c.append(o,m(l,i),o+"."+a),"object"===Object(u["a"])(s)&&s&&Object.keys(s).forEach((function(e){c.append(e,s[e])}));e.reset(),e.loading=1,e.setStep(3),Object(d["a"])({url:r,method:"post",data:c}).then((function(t){e.loading=2,e.$emit("crop-upload-success",t.data)})).catch((function(a){e.value&&(e.loading=3,e.hasError=!0,e.errorMsg=t.fail,e.$emit("crop-upload-fail",a,o,n))}))},closeHandler:function(e){!this.value||"Escape"!=e.key&&27!=e.keyCode||this.off()}},created:function(){document.addEventListener("keyup",this.closeHandler)},destroyed:function(){document.removeEventListener("keyup",this.closeHandler)}},f=v,w=(a("2201"),a("2877")),b=Object(w["a"])(f,l,c,!1,null,null,null),y=b.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pan-item",style:{zIndex:e.zIndex,height:e.height,width:e.width}},[a("div",{staticClass:"pan-info"},[a("div",{staticClass:"pan-info-roles-container"},[e._t("default")],2)]),e._v(" "),a("div",{staticClass:"pan-thumb",style:{backgroundImage:"url("+e.image+")"}})])},x=[],I={name:"PanThumb",props:{image:{type:String,required:!0},zIndex:{type:Number,default:1},width:{type:String,default:"150px"},height:{type:String,default:"150px"}}},C=I,k=(a("133c"),Object(w["a"])(C,S,x,!1,null,"799537af",null)),_=k.exports,z={userId:"",name:"",phone:"",email:"",status:"",imageUrl:"",createdAt:0,route:""},F={name:"Driver",components:{ImageCropper:y,PanThumb:_},props:{isEdit:{type:Boolean,default:!1}},created:function(){if(this.isEdit){this.loading=!0;var e=this.$route.params&&this.$route.params.id;this.fetchDriver(e)}else this.driverForm=Object.assign({},z)},data:function(){var e=this,t=function(t,a,i){""===a?(e.$message({message:t.field+" is required",type:"error"}),i(new Error(t.field+" is required"))):i()};return{formLabelWidth:"200px",loading:!1,loadingText:"false",driverForm:Object.assign({},z),rules:{name:[{validator:t}],phone:[{validator:t}]}}},methods:{handleAvatarSuccess:function(e,t){this.driverForm.imageUrl=URL.createObjectURL(t.raw)},fetchDriver:function(e){var t=this;this.$bind("driverForm",n["a"].collection("drivers").doc(e)).then((function(e){t.loading=!1}))},submitForm:function(){var e=this;this.$refs.driverForm.validate((function(t){if(!t)return console.log("Form errors"),!1;e.loading=!0,e.isEdit?e.loadingText="Submitting updates..":(e.loadingText="Adding new driver",e.driverForm.createdAt=(new Date).getTime()),e.driverForm.userId.length<1&&(e.driverForm.userId=n["a"].collection("drivers").doc().id),n["a"].collection("drivers").doc(e.driverForm.userId).set(e.driverForm).then((function(){var t=e.isEdit?"Successfully updated":"Driver Successfully added";e.$notify({title:"Success",message:t,type:"success",duration:3e3}),e.loading=!1}))}))},resetForm:function(e){this.$refs[e].resetFields()},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,a=e.size/1024/1024<2;return t||this.$message.error("Avatar picture must be JPG format!"),a||this.$message.error("Avatar picture size can not exceed 2MB!"),t&&a}}},D=F,O=(a("e580"),Object(w["a"])(D,s,o,!1,null,"13b5c7a8",null)),E=O.exports,A={name:"AddDriver",components:{DriverModel:E}},T=A,M=Object(w["a"])(T,i,r,!1,null,"e11232dc",null);t["default"]=M.exports},d23e:function(e,t,a){},d785:function(e,t,a){},e580:function(e,t,a){"use strict";var i=a("0674"),r=a.n(i);r.a}}]);