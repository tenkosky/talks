$wnd.web.runAsyncCallback4('function ODi(){}\nfunction VDi(){}\nfunction RDi(){var a;gQk[a=++hQk]=RDi;RDi=nXb;LDi=new ODi;hQk=a-1}\nfunction YDi(){var a;gQk[a=++hQk]=YDi;YDi=nXb;SDi=new VDi;hQk=a-1}\nvar ZWl=\'/*Copyrights for code authored by Yahoo Inc. is licensed under the following terms:\\nMIT License\\nCopyright  2014 Yahoo Inc.\\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\\n*/\\n!function(e,t,r,n){var i,o,a,s,c,d,u,l,f,h,g,p,m,v,b,y,w,C,x,F,k;i=function(){var n={URL:e.URL||e.webkitURL||e.mozURL||e.msURL,getUserMedia:function(){var e=r.getUserMedia||r.webkitGetUserMedia||r.mozGetUserMedia||r.msGetUserMedia;return e?e.bind(r):e}(),Blob:e.Blob||e.BlobBuilder||e.WebKitBlobBuilder||e.MozBlobBuilder||e.MSBlobBuilder,btoa:function(){var t=e.btoa||function(e){for(var t,r,n,i,o,a,s,c="",d=0,u=e.length,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";u>d;)t=e.charCodeAt(d++),r=e.charCodeAt(d++),n=e.charCodeAt(d++),i=t>>2,o=(3&t)<<4|r>>4,a=(15&r)<<2|n>>6,s=63&n,isNaN(r)?a=s=64:isNaN(n)&&(s=64),c=c+l.charAt(i)+l.charAt(o)+l.charAt(a)+l.charAt(s);return c};return t?t.bind(e):function(){}}(),isObject:function(e){return e&&"[object Object]"===Object.prototype.toString.call(e)},isEmptyObject:function(e){return n.isObject(e)&&!Object.keys(e).length},isArray:function(e){return e&&Array.isArray(e)},isFunction:function(e){return e&&"function"==typeof e},isElement:function(e){return e&&1===e.nodeType},isString:function(e){return"string"==typeof e||"[object String]"===Object.prototype.toString.call(e)},isSupported:{canvas:function(){var e=t.createElement("canvas");return e&&e.getContext&&e.getContext("2d")},webworkers:function(){return e.Worker},blob:function(){return n.Blob},Uint8Array:function(){return e.Uint8Array},Uint32Array:function(){return e.Uint32Array},videoCodecs:function(){var e=t.createElement("video"),r={mp4:!1,h264:!1,ogv:!1,ogg:!1,webm:!1};return e&&e.canPlayType&&(r.mp4=""!==e.canPlayType(\\\'video/mp4; codecs="mp4v.20.8"\\\'),r.h264=""!==(e.canPlayType(\\\'video/mp4; codecs="avc1.42E01E"\\\')||e.canPlayType(\\\'video/mp4; codecs="avc1.42E01E, mp4a.40.2"\\\')),r.ogv=""!==e.canPlayType(\\\'video/ogg; codecs="theora"\\\'),r.ogg=""!==e.canPlayType(\\\'video/ogg; codecs="theora"\\\'),r.webm=-1!==e.canPlayType(\\\'video/webm; codecs="vp8, vorbis"\\\')),r}()},noop:function(){},each:function(e,t){var r,i;if(n.isArray(e))for(r=-1,i=e.length;++r<i&&t(r,e[r])!==!1;);else if(n.isObject(e))for(r in e)if(e.hasOwnProperty(r)&&t(r,e[r])===!1)break},mergeOptions:function i(e,t){if(n.isObject(e)&&n.isObject(t)&&Object.keys){var r={};return n.each(e,function(t){r[t]=e[t]}),n.each(t,function(o){var a=t[o];r[o]=n.isObject(a)?e[o]?i(e[o],a):a:a}),r}},setCSSAttr:function(e,t,r){n.isElement(e)&&(n.isString(t)&&n.isString(r)?e.style[t]=r:n.isObject(t)&&n.each(t,function(t,r){e.style[t]=r}))},removeElement:function(e){n.isElement(e)&&e.parentNode&&e.parentNode.removeChild(e)},createWebWorker:function(e){if(!n.isString(e))return{};try{var t=new n.Blob([e],{type:"text/javascript"}),r=n.URL.createObjectURL(t),i=new Worker(r);return{objectUrl:r,worker:i}}catch(o){return""+o}},getExtension:function(e){return e.substr(e.lastIndexOf(".")+1,e.length)},getFontSize:function(e){if(e=e||{},!t.body||e.resizeFont===!1)return e.fontSize;var r=e.text,n=e.gifWidth,i=parseInt(e.fontSize,10),o=parseInt(e.minFontSize,10),a=t.createElement("div"),s=t.createElement("span");for(a.setAttribute("width",n),a.appendChild(s),s.innerHTML=r,s.style.fontSize=i+"px",s.style.textIndent="-9999px",s.style.visibility="hidden",t.body.appendChild(s);s.offsetWidth>n&&i>=o;)s.style.fontSize=--i+"px";return t.body.removeChild(s),i+"px"},webWorkerError:!1};return n}(),o=function(e){var t={validate:function(r){r=e.isObject(r)?r:{};var n={};return e.each(t.validators,function(e,t){var i=t.errorCode;return r[i]||t.condition?void 0:(n=t,n.error=!0,!1)}),delete n.condition,n},isValid:function(e){var r=t.validate(e),n=r.error!==!0?!0:!1;return n},validators:[{condition:e.isFunction(e.getUserMedia),errorCode:"getUserMedia",errorMsg:"The getUserMedia API is not supported in your browser"},{condition:e.isSupported.canvas(),errorCode:"canvas",errorMsg:"Canvas elements are not supported in your browser"},{condition:e.isSupported.webworkers(),errorCode:"webworkers",errorMsg:"The Web Workers API is not supported in your browser"},{condition:e.isFunction(e.URL),errorCode:"window.URL",errorMsg:"The window.URL API is not supported in your browser"},{condition:e.isSupported.blob(),errorCode:"window.Blob",errorMsg:"The window.Blob File API is not supported in your browser"},{condition:e.isSupported.Uint8Array(),errorCode:"window.Uint8Array",errorMsg:"The window.Uint8Array function constructor is not supported in your browser"},{condition:e.isSupported.Uint32Array(),errorCode:"window.Uint32Array",errorMsg:"The window.Uint32Array function constructor is not supported in your browser"}],messages:{videoCodecs:{errorCode:"videocodec",errorMsg:"The video codec you are trying to use is not supported in your browser"}}};return t}(i),a={sampleInterval:10,numWorkers:2,gifWidth:200,gifHeight:200,interval:.1,numFrames:10,keepCameraOn:!1,images:[],video:null,webcamVideoElement:null,cameraStream:null,text:"",fontWeight:"normal",fontSize:"16px",minFontSize:"10px",resizeFont:!1,fontFamily:"sans-serif",fontColor:"#ffffff",textAlign:"center",textBaseline:"bottom",textXCoordinate:null,textYCoordinate:null,progressCallback:function(){},completeCallback:function(){},saveRenderingContexts:!1,savedRenderingContexts:[]},s=function(){return o.isValid()},d=function(){var e={getUserMedia:!0};return o.isValid(e)},l=function(){function e(){function e(e,t,r){var n,i;for(l=e,f=t,h=r,g=new Array(p),n=0;p>n;n++)g[n]=new Array(4),i=g[n],i[0]=i[1]=i[2]=(n<<x+8)/p|0,N[n]=W/p|0,V[n]=0}function t(){for(var e=[],t=new Array(p),r=0;p>r;r++)t[g[r][3]]=r;for(var n=0,i=0;p>i;i++){var o=t[i];e[n++]=g[o][0],e[n++]=g[o][1],e[n++]=g[o][2]}return e}function r(){var e,t,r,n,i,o,a,s;for(a=0,s=0,e=0;p>e;e++){for(i=g[e],r=e,n=i[1],t=e+1;p>t;t++)o=g[t],o[1]<n&&(r=t,n=o[1]);if(o=g[r],e!=r&&(t=o[0],o[0]=i[0],i[0]=t,t=o[1],o[1]=i[1],i[1]=t,t=o[2],o[2]=i[2],i[2]=t,t=o[3],o[3]=i[3],i[3]=t),n!=a){for(L[a]=s+e>>1,t=a+1;n>t;t++)L[t]=e;a=n,s=e}}for(L[a]=s+C>>1,t=a+1;256>t;t++)L[t]=C}function n(){var e,t,r,n,i,o,a,g,p,C,k,W,S,A;for(w>f&&(h=1),u=30+(h-1)/3,W=l,S=0,A=f,k=f/(3*h),C=k/F|0,g=B,o=O,a=o>>U,1>=a&&(a=0),e=0;a>e;e++)D[e]=g*((a*a-e*e)*z/(a*a));for(p=w>f?3:f%m!==0?3*m:f%v!==0?3*v:f%b!==0?3*b:3*y,e=0;k>e;)if(r=(255&W[S+0])<<x,n=(255&W[S+1])<<x,i=(255&W[S+2])<<x,t=d(r,n,i),c(g,t,r,n,i),0!==a&&s(a,t,r,n,i),S+=p,S>=A&&(S-=f),e++,0===C&&(C=1),e%C===0)for(g-=g/u,o-=o/T,a=o>>U,1>=a&&(a=0),t=0;a>t;t++)D[t]=g*((a*a-t*t)*z/(a*a))}function i(e,t,r){var n,i,o,a,s,c,d;for(s=1e3,d=-1,n=L[t],i=n-1;p>n||i>=0;)p>n&&(c=g[n],o=c[1]-t,o>=s?n=p:(n++,0>o&&(o=-o),a=c[0]-e,0>a&&(a=-a),o+=a,s>o&&(a=c[2]-r,0>a&&(a=-a),o+=a,s>o&&(s=o,d=c[3])))),i>=0&&(c=g[i],o=t-c[1],o>=s?i=-1:(i--,0>o&&(o=-o),a=c[0]-e,0>a&&(a=-a),o+=a,s>o&&(a=c[2]-r,0>a&&(a=-a),o+=a,s>o&&(s=o,d=c[3]))));return d}function o(){return n(),a(),r(),t()}function a(){var e;for(e=0;p>e;e++)g[e][0]>>=x,g[e][1]>>=x,g[e][2]>>=x,g[e][3]=e}function s(e,t,r,n,i){var o,a,s,c,d,u,l;for(s=t-e,-1>s&&(s=-1),c=t+e,c>p&&(c=p),o=t+1,a=t-1,u=1;c>o||a>s;){if(d=D[u++],c>o){l=g[o++];try{l[0]-=d*(l[0]-r)/H|0,l[1]-=d*(l[1]-n)/H|0,l[2]-=d*(l[2]-i)/H|0}catch(f){}}if(a>s){l=g[a--];try{l[0]-=d*(l[0]-r)/H|0,l[1]-=d*(l[1]-n)/H|0,l[2]-=d*(l[2]-i)/H|0}catch(f){}}}}function c(e,t,r,n,i){var o=g[t],a=e/B;o[0]-=a*(o[0]-r)|0,o[1]-=a*(o[1]-n)|0,o[2]-=a*(o[2]-i)|0}function d(e,t,r){var n,i,o,a,s,c,d,u,l,f;for(u=~(1<<31),l=u,c=-1,d=c,n=0;p>n;n++)f=g[n],i=f[0]-e,0>i&&(i=-i),o=f[1]-t,0>o&&(o=-o),i+=o,o=f[2]-r,0>o&&(o=-o),i+=o,u>i&&(u=i,c=n),a=i-(V[n]>>k-x),l>a&&(l=a,d=n),s=N[n]>>A,N[n]-=s,V[n]+=s<<S;return N[c]+=I,V[c]-=E,d}var u,l,f,h,g,p=256,m=499,v=491,b=487,y=503,w=3*y,C=p-1,x=4,F=100,k=16,W=1<<k,S=10,A=10,I=W>>A,E=W<<S-A,R=p>>3,U=6,M=1<<U,O=R*M,T=30,j=10,B=1<<j,P=8,z=1<<P,G=j+P,H=1<<G,L=[],V=[],N=[],D=[];e.apply(this,arguments);var X={};return X.map=i,X.process=o,X}return e}(),f=function(e){var t=function(){try{self.onmessage=function(e){var t=e.data,n=r.run(t);t&&t.gifshot&&postMessage(n)}}catch(t){}var r={dataToRGB:function(e,t,r){for(var n=0,i=t*r*4,o=[];i>n;)o.push(e[n++]),o.push(e[n++]),o.push(e[n++]),n++;return o},componentizedPaletteToArray:function(e){var t,r,n,i,o=[];for(t=0;t<e.length;t+=3)r=e[t],n=e[t+1],i=e[t+2],o.push(r<<16|n<<8|i);return o},processFrameWithQuantizer:function(t,r,n,i){var o,a,s,c,d=this.dataToRGB(t,r,n),u=new e(d,d.length,i),l=u.process(),f=new Uint32Array(this.componentizedPaletteToArray(l)),h=r*n,g=new Uint8Array(h),p=0;for(o=0;h>o;o++)a=d[p++],s=d[p++],c=d[p++],g[o]=u.map(a,s,c);return{pixels:g,palette:f}},run:function(e){var t=e.width,r=e.height,n=e.data,i=(e.palette,e.sampleInterval);return this.processFrameWithQuantizer(n,t,r,i)}};return r};return t}(l),h=function(e,t,r,i){function o(e){var t=e.length;if(2>t||t>256||t&t-1)throw"Invalid code/color length, must be power of 2 and 2 .. 256.";return t}function a(e,t,r,i){function o(r){for(;h>=r;)e[t++]=255&g,g>>=8,h-=8,t===s+256&&(e[s]=255,s=t++)}function a(e){g|=e<<h,h+=f,o(8)}e[t++]=r;var s=t++,c=1<<r,d=c-1,u=c+1,l=u+1,f=r+1,h=0,g=0,p=i[0]&d,m={};a(c);for(var v=1,b=i.length;b>v;++v){var y=i[v]&d,w=p<<8|y,C=m[w];if(C===n){for(g|=p<<h,h+=f;h>=8;)e[t++]=255&g,g>>=8,h-=8,t===s+256&&(e[s]=255,s=t++);4096===l?(a(c),l=u+1,f=r+1,m={}):(l>=1<<f&&++f,m[w]=l++),p=y}else p=C}return a(p),a(u),o(1),s+1===t?e[s]=0:(e[s]=t-s-1,e[t++]=0),t}var s=0;i=i===n?{}:i;var c=i.loop===n?null:i.loop,d=i.palette===n?null:i.palette;if(0>=t||0>=r||t>65535||r>65535)throw"Width/Height invalid.";e[s++]=71,e[s++]=73,e[s++]=70,e[s++]=56,e[s++]=57,e[s++]=97;var u=0,l=0;if(e[s++]=255&t,e[s++]=t>>8&255,e[s++]=255&r,e[s++]=r>>8&255,e[s++]=(null!==d?128:0)|u,e[s++]=l,e[s++]=0,null!==c){if(0>c||c>65535)throw"Loop count invalid.";e[s++]=33,e[s++]=255,e[s++]=11,e[s++]=78,e[s++]=69,e[s++]=84,e[s++]=83,e[s++]=67,e[s++]=65,e[s++]=80,e[s++]=69,e[s++]=50,e[s++]=46,e[s++]=48,e[s++]=3,e[s++]=1,e[s++]=255&c,e[s++]=c>>8&255,e[s++]=0}var f=!1;this.addFrame=function(t,r,i,c,u,l){if(f===!0&&(--s,f=!1),l=l===n?{}:l,0>t||0>r||t>65535||r>65535)throw"x/y invalid.";if(0>=i||0>=c||i>65535||c>65535)throw"Width/Height invalid.";if(u.length<i*c)throw"Not enough pixels for the frame size.";var h=!0,g=l.palette;if((g===n||null===g)&&(h=!1,g=d),g===n||null===g)throw"Must supply either a local or global palette.";for(var p=o(g),m=0;p>>=1;)++m;p=1<<m;var v=l.delay===n?0:l.delay,b=l.disposal===n?0:l.disposal;if(0>b||b>3)throw"Disposal out of range.";var y=!1,w=0;if(l.transparent!==n&&null!==l.transparent&&(y=!0,w=l.transparent,0>w||w>=p))throw"Transparent color index.";if((0!==b||y||0!==v)&&(e[s++]=33,e[s++]=249,e[s++]=4,e[s++]=b<<2|(y===!0?1:0),e[s++]=255&v,e[s++]=v>>8&255,e[s++]=w,e[s++]=0),e[s++]=44,e[s++]=255&t,e[s++]=t>>8&255,e[s++]=255&r,e[s++]=r>>8&255,e[s++]=255&i,e[s++]=i>>8&255,e[s++]=255&c,e[s++]=c>>8&255,e[s++]=h===!0?128|m-1:0,h===!0)for(var C=0,x=g.length;x>C;++C){var F=g[C];e[s++]=F>>16&255,e[s++]=F>>8&255,e[s++]=255&F}s=a(e,s,2>m?2:m,u)},this.end=function(){return f===!1&&(e[s++]=59,f=!0),s}},g=function(e,r,n,i){var o=function(t){this.canvas=null,this.ctx=null,this.repeat=0,this.frames=[],this.numRenderedFrames=0,this.onRenderCompleteCallback=e.noop,this.onRenderProgressCallback=e.noop,this.workers=[],this.availableWorkers=[],this.generatingGIF=!1,this.options=t,this.initializeWebWorkers(t)};return o.prototype={workerMethods:r(),initializeWebWorkers:function(i){var o,a,s,c,d=n.toString()+"("+r.toString()+"());",u=-1,l="";for(c=i.numWorkers;++u<c;)o=e.createWebWorker(d),e.isObject(o)?(a=o.objectUrl,s=o.worker,this.workers.push({worker:s,objectUrl:a}),this.availableWorkers.push(s)):(l=o,e.webWorkerError=!!o);this.workerError=l,this.canvas=t.createElement("canvas"),this.canvas.width=i.gifWidth,this.canvas.height=i.gifHeight,this.ctx=this.canvas.getContext("2d"),this.frames=[]},getWorker:function(){return this.availableWorkers.pop()},freeWorker:function(e){this.availableWorkers.push(e)},byteMap:function(){for(var e=[],t=0;256>t;t++)e[t]=String.fromCharCode(t);return e}(),bufferToString:function(e){for(var t=e.length,r="",n=-1;++n<t;)r+=this.byteMap[e[n]];return r},onFrameFinished:function(){var e=this,t=e.frames,r=t.every(function(e){return!e.beingProcessed&&e.done});e.numRenderedFrames++,e.onRenderProgressCallback(.75*e.numRenderedFrames/t.length),r?e.generatingGIF||e.generateGIF(t,e.onRenderCompleteCallback):setTimeout(function(){e.processNextFrame()},1)},processFrame:function(e){var t,r,n=this,i=this.options,o=i.sampleInterval,a=this.frames,s=function(e){var i=e.data;delete t.data,t.pixels=Array.prototype.slice.call(i.pixels),t.palette=Array.prototype.slice.call(i.palette),t.done=!0,t.beingProcessed=!1,n.freeWorker(r),n.onFrameFinished()};return t=a[e],t.beingProcessed||t.done?(this.onFrameFinished(),void 0):(t.sampleInterval=o,t.beingProcessed=!0,t.gifshot=!0,r=this.getWorker(),r?(r.onmessage=s,r.postMessage(t)):s({data:n.workerMethods.run(t)}),void 0)},startRendering:function(e){this.onRenderCompleteCallback=e;for(var t=0;t<this.options.numWorkers&&t<this.frames.length;t++)this.processFrame(t)},processNextFrame:function(){for(var e=-1,t=0;t<this.frames.length;t++){var r=this.frames[t];if(!r.done&&!r.beingProcessed){e=t;break}}e>=0&&this.processFrame(e)},generateGIF:function(t,r){var n,o,a=[],s={loop:this.repeat},c=this.options,d=c.interval,u=c.images,l=!!u.length,f=c.gifHeight,h=c.gifWidth,g=new i(a,h,f,s),p=this.onRenderProgressCallback,m=l?100*d:0;this.generatingGIF=!0,e.each(t,function(e,r){var n=r.palette;p(.75+.25*r.position*1/t.length),g.addFrame(0,0,h,f,r.pixels,{palette:n,delay:m})}),g.end(),p(1),this.frames=[],this.generatingGIF=!1,e.isFunction(r)&&(n=this.bufferToString(a),o="data:image/gif;base64,"+e.btoa(n),r(o))},setRepeat:function(e){this.repeat=e},addFrame:function(t,r){r=e.isObject(r)?r:{};var n,i=this,o=i.ctx,a=i.options,s=a.gifWidth,c=a.gifHeight,d=(r.gifHeight,r.gifWidth,r.text),u=r.fontWeight,l=e.getFontSize(r),f=r.fontFamily,h=r.fontColor,g=r.textAlign,p=r.textBaseline,m=r.textXCoordinate?r.textXCoordinate:"left"===g?1:"right"===g?s:s/2,v=r.textYCoordinate?r.textYCoordinate:"top"===p?1:"center"===p?c/2:c,b=u+" "+l+" "+f;try{o.drawImage(t,0,0,s,c),d&&(o.font=b,o.fillStyle=h,o.textAlign=g,o.textBaseline=p,o.fillText(d,m,v)),n=o.getImageData(0,0,s,c),i.addFrameImageData(n)}catch(y){return""+y}},addFrameImageData:function(e){var t=this.frames,r=e.data;this.frames.push({data:r,width:e.width,height:e.height,palette:null,dithering:null,done:!1,beingProcessed:!1,position:t.length})},onRenderProgress:function(e){this.onRenderProgressCallback=e},isRendering:function(){return this.generatingGIF},getBase64GIF:function(e){var t=this,r=function(r){t.destroyWorkers(),setTimeout(function(){e(r)},0)};t.startRendering(r)},destroyWorkers:function(){if(!this.workerError){var t=this.workers;e.each(t,function(t,r){var n=r.worker,i=r.objectUrl;n.terminate(),e.URL.revokeObjectURL(i)})}}},o}(i,f,l,h),p=function(e,t){e.getBase64GIF(function(e){t({error:!1,errorCode:"",errorMsg:"",image:e})})},m=function(e){var r,n,a=e.images,s=e.imagesLength,c=e.callback,d=e.options,u={getUserMedia:!0,"window.URL":!0},l=o.validate(u),f=0;return l.error?c(l):(n=new g(d),i.each(a,function(e,o){i.isElement(o)?(o.crossOrigin="Anonymous",n.addFrame(o,d),f+=1,f===s&&p(n,c)):i.isString(o)&&(r=t.createElement("img"),r.crossOrigin="Anonymous",r.onerror=function(){s>0&&(s-=1)},r.src=o,function(e){e.onload=function(){n.addFrame(e,d),i.removeElement(e),f+=1,f===s&&p(n,c)}}(r),i.\',$Wl=\'setCSSAttr(r,{position:"fixed",opacity:"0"}),t.body.appendChild(r))}),void 0)},v={getGIF:function(e,r){r=i.isFunction(r)?r:function(){};var o,a=t.createElement("canvas"),s=e.images,c=!!s.length,d=e.videoElement,u=e.keepCameraOn,l=e.webcamVideoElement,f=e.cameraStream,h=+e.gifWidth,p=+e.gifHeight,m=e.videoWidth,v=e.videoHeight,b=(+e.sampleInterval,+e.numWorkers,e.crop),y=+e.interval,w=c?0:1e3*y,C=e.progressCallback,x=e.savedRenderingContexts,F=e.saveRenderingContexts,k=[],W=x.length?x.length:e.numFrames,S=W,A=new g(e),I=e.text,E=e.fontWeight,R=i.getFontSize(e),U=e.fontFamily,M=e.fontColor,O=e.textAlign,T=e.textBaseline,j=e.textXCoordinate?e.textXCoordinate:"left"===O?1:"right"===O?h:h/2,B=e.textYCoordinate?e.textYCoordinate:"top"===T?1:"center"===T?p/2:p,P=E+" "+R+" "+U,z=b?Math.floor(b.scaledWidth/2):0,G=b?m-b.scaledWidth:0,H=b?Math.floor(b.scaledHeight/2):0,L=b?v-b.scaledHeight:0,V=function N(){function e(){try{G>m&&(G=m),L>v&&(L=v),0>z&&(z=0),0>H&&(H=0),o.drawImage(d,z,H,G,L,0,0,h,p),t()}catch(r){if("NS_ERROR_NOT_AVAILABLE"!==r.name)throw r;setTimeout(e,100)}}function t(){F&&k.push(o.getImageData(0,0,h,p)),I&&(o.font=P,o.fillStyle=M,o.textAlign=O,o.textBaseline=T,o.fillText(I,j,B)),A.addFrameImageData(o.getImageData(0,0,h,p)),S=n,C((W-S)/W),n>0&&setTimeout(N,w),S||A.getBase64GIF(function(e){r({error:!1,errorCode:"",errorMsg:"",image:e,cameraStream:f,videoElement:d,webcamVideoElement:l,savedRenderingContexts:k,keepCameraOn:u})})}var n=S-1;x.length?o.putImageData(x[W-S],0,0):e()};W=W!==n?W:10,y=y!==n?y:.1,a.width=h,a.height=p,o=a.getContext("2d"),function D(){return 0===d.currentTime?(setTimeout(D,100),void 0):(V(),void 0)}()},getCropDimensions:function(e){var t=e.videoWidth,r=e.videoHeight,n=e.gifWidth,i=e.gifHeight,o={width:0,height:0,scaledWidth:0,scaledHeight:0};return t>r?(o.width=Math.round(t*(i/r))-n,o.scaledWidth=Math.round(o.width*(r/i))):(o.height=Math.round(r*(n/t))-i,o.scaledHeight=Math.round(o.height*(t/n))),o}},y=function(e,r){var n=e.options||{},o=n.images,a=n.video,s=(+n.numFrames,e.cameraStream),c=e.videoElement,d=e.videoWidth,u=e.videoHeight,l=+n.gifWidth,f=+n.gifHeight,h=v.getCropDimensions({videoWidth:d,videoHeight:u,gifHeight:f,gifWidth:l}),g=r;n.crop=h,n.videoElement=c,n.videoWidth=d,n.videoHeight=u,n.cameraStream=s,i.isElement(c)&&(c.width=l+h.width,c.height=f+h.height,n.webcamVideoElement||(i.setCSSAttr(c,{position:"fixed",opacity:"0"}),t.body.appendChild(c)),c.play(),v.getGIF(n,function(e){o&&o.length||a&&a.length||b(e),g(e)}))},x=function(e,t){if(t=i.isFunction(e)?e:t,e=i.isObject(e)?e:{},i.isFunction(t)){var r=i.mergeOptions(a,e)||{},n=e.cameraStream,o=r.images,s=o?o.length:0,c=r.video,d=r.webcamVideoElement;s?m({images:o,imagesLength:s,callback:t,options:r}):c?w({existingVideo:c,callback:t,options:r}):C({lastCameraStream:n,callback:t,webcamVideoElement:d,options:r})}},F=function(e,t){if(t=i.isFunction(e)?e:t,e=i.isObject(e)?e:{},i.isFunction(t)){var r=i.mergeOptions(a,e),n=i.mergeOptions(r,{interval:.1,numFrames:1});x(n,t)}},k=function(e,t,r,n,i,o,a,s,c,d){var u={utils:e,error:t,defaultOptions:r,createGIF:s,takeSnapShot:c,stopVideoStreaming:d,isSupported:n,isWebCamGIFSupported:i,isExistingVideoGIFSupported:a,isExistingImagesGIFSupported:o,VERSION:"0.1.1"};return u}(i,o,a,s,c,d,u,x,F,b),function(t){"function"==typeof define&&define.amd?define([],function(){return t}):"undefined"!=typeof exports?module.exports=t:e.gifshot=t}(k)}("undefined"!=typeof window?window:{},"undefined"!=typeof document?document:{createElement:function(){}},"undefined"!=typeof window?window.navigator:{});\';mXb(4184,1,{});_.SG=function NDi(){var a,b;gQk[b=++hQk]=NDi;a=(RDi(),LDi);hQk=b-1;return a};var LDi;mXb(4185,1,_Yk,ODi);_.Xf=function PDi(){var a;gQk[a=++hQk]=PDi;hQk=a-1;return \'gifShotJs\'};_.Yf=function QDi(){var a,b,c;gQk[c=++hQk]=QDi;a=new Utk;a.a+=ZWl;a.a+=$Wl;b=a.a;hQk=c-1;return b};var nBb=vqk(4185);mXb(4186,1,{});_.SG=function UDi(){var a,b;gQk[b=++hQk]=UDi;a=(YDi(),SDi);hQk=b-1;return a};var SDi;mXb(4187,1,_Yk,VDi);_.Xf=function WDi(){var a;gQk[a=++hQk]=WDi;hQk=a-1;return \'gifShotJs\'};_.Yf=function XDi(){var a,b,c;gQk[c=++hQk]=XDi;a=new Utk;a.a+=ZWl;a.a+=$Wl;b=a.a;hQk=c-1;return b};var pBb=vqk(4187);mXb(3934,1,cql);_.Od=function yTj(){var a,b;gQk[b=++hQk]=yTj;f8g();lLh();!!jLh&&Foi(jLh,jLh.c,\'gifsot.image.min.js loading success\',5);B4h((KDi(),JDi).SG());this.a.c=true;if(this.a.a){a=uTj(this.a.b);vTj(a)}hQk=b-1};fQk(cl)(4);\n//# sourceURL=web-4.js\n')
