function Detect(){playerVersion=[0,0,0];this.ua=navigator.userAgent.toLowerCase();var b=navigator.platform.toLowerCase(),a=this.ua.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0];if("undefined"!=typeof navigator.plugins&&"object"==typeof navigator.plugins["Shockwave Flash"]){if((d=navigator.plugins["Shockwave Flash"].description)&&!("undefined"!=typeof navigator.mimeTypes&&navigator.mimeTypes["application/x-shockwave-flash"]&&
    !navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin))plugin=!0,ie=!1,d=d.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),playerVersion[0]=parseInt(d.replace(/^(.*)\..*$/,"$1"),10),playerVersion[1]=parseInt(d.replace(/^.*\.(.*)\s.*$/,"$1"),10),playerVersion[2]=/[a-zA-Z]/.test(d)?parseInt(d.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}else if("undefined"!=typeof window.ActiveXObject)try{var c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");if(c&&(d=c.GetVariable("$version")))ie=!0,d=d.split(" ")[1].split(","),
    playerVersion=[parseInt(d[0],10),parseInt(d[1],10),parseInt(d[2],10)]}catch(e){}this.flash=0===playerVersion[0]&&0===playerVersion[1]&&0===playerVersion[2]?!1:!0;this.flashVer=playerVersion[0]+"."+playerVersion[1]+"."+playerVersion[2];this.browser={};this.platform={};this.device={};this.browser.name="version"==a[1]?a[3]:a[1];this.browser[this.browser.name]=!0;mode="ie"==a[1]&&document.documentMode;this.browser.version=mode||parseFloat("opera"==a[1]&&a[4]?a[4]:a[2]);this.platform.name=this.ua.match(/ip(?:ad|od|hone)/)?
    "ios":this.ua.match(/(?:msie 9)/)?"wphone":(this.ua.match(/(?:webos|android|bada|symbian|palm|blackberry)/)||b.match(/mac|win|linux/)||["other"])[0];this.platform[this.platform.name]=!0;this.platform.mac&&(this.browser.safari||this.browser.chrome?this.platform.version=this.ua.match(/10_\d*/)[0].split("_"):this.browser.firefox?this.platform.version=this.ua.match(/10\.\d*/)[0].split("."):this.browser.opera&&(this.platform.version=this.ua.match(/10\.\d*/)[0].split(".")));this.device.name=this.ua.match(/ipad/)?
    "ipad":this.ua.match(/ipad/)?"ipad":this.ua.match(/iphone/)?"iphone":this.ua.match(/android/)?"android":this.ua.match(/silk/)?"silk":this.ua.match(/kindle/)?"kindle":b.match(/mac|win|linux/)?"pc":"other";this.device[this.device.name]=!0;this.device.version="android"===this.device.name&&this.ua.match(/android 2/)?2:"android"===this.device.name&&this.ua.match(/android 3/)?3:"android"===this.device.name&&this.ua.match(/android 4/)?4:0;this.isBasic=this.isFlash=this.isMobile=!1;"silk"==this.device.name||
    "kindle"==this.device.name?this.isMobile=!0:this.platform.ios||this.platform.blackberry?this.isMobile=!0:(this.platform.ios||this.platform.android)&&(this.browser.safari||this.browser.chrome)?this.isMobile=!0:this.platform.android?this.isBasic=!0:(this.device.pc||this.device.other)&&!this.flash?this.isBasic=!0:this.platform.mac&&6>this.platform.version[1]?this.isBasic=!0:this.isFlash=!0;this.isTablet="ipad"==this.device.name||3==this.device.version?!0:!1};
var browser = new Detect();

/*          
var changeURL = function(){
		
    if(document.getElementById('hrefMobile'))document.getElementById('hrefMobile').href = dir+mobileFolder+'/index.html';
    if(document.getElementById('hrefSEO'))document.getElementById('hrefSEO').href = dir+assetsFolder +'/basic-html/toc.html';
    delete changeURL;
}

if (document.addEventListener){
    document.addEventListener("DOMContentLoaded", changeURL, false);
} else {
    document.attachEvent("onDOMContentLoaded", changeURL);
}
*/




function afterLoad(){ 
    checkPage();
    if(!(browser.platform.mac && browser.browser.chrome))setFocusOnFlash(); 
}

function setFocusOnFlash()
{ 
    var f=swfobject.getObjectById('content'); 
    if (f) { f.tabIndex = 0; f.focus(); } 
}
function getURLParam()
{
    var returnObject = {};
    var href = window.location.href;
    if ( href.indexOf("?") > -1 )
    {
        var param = href.substr(href.indexOf("?"));
        var arrayParam = param.split("&");
	  
				for ( var i = 0; i < arrayParam.length; i++ )
        {
            var value = arrayParam[i].split("=");
            returnObject[value[0]] = value[1];
        }
    }
    returnObject['assets'] = assetsFolder;
    return returnObject;
}

		var dir = "./" + filesFolderName + "/";

		var getURI = function() {
		    var URIArray = document.location.href.split('/');

		    URIArray.length = URIArray.length - 1;
		    var URIstr = URIArray.join('/');

		    URIArray = null;

		    var URIarr = dir.split('/');
		    URIarr[0] = URIarr[0] == '.' ? '' : URIarr[0];
		    var dirStr = URIarr.join('/');

		    URIstr = URIstr + dirStr;

		    return URIstr;
		};

var swfName = "flippingbook.swf?rnd="+projectGUID;

         
		
var page = parseInt(window.location.hash.substring(2, window.location.hash.length-1));
page = page?'#'+page:'';


if(browser.isMobile){
    if(browser.device.ipad || (browser.device.android && browser.device.version === 3)){
        window.location = "./" + mobileFolder + "/tablet.html" + page;
    }else{
        window.location = "./" + mobileFolder + "/mobile.html" + page;
    }

}

//if (browser.isBasic) window.location = "./" + SEOFolder + "/toc.html";  //������������ �������� � SEO ���� �������� FALSH
		
var flashvars = getURLParam();
		
var params = {baseURI: getURI(), base: dir, allowFullScreen: true, allowScriptAccess: "always", quality: "high", scale: "noscale",bgcolor:documentBackColor};
          var attributes = {align: "middle"};

swfobject.embedSWF(dir + swfName, "content", "100%", "100%", "10.3.0", dir + "expressInstall.swf", flashvars, params, attributes);




if ( document.addEventListener ){
    document.addEventListener("DOMContentLoaded", afterLoad);
}else{
    document.attachEvent("onreadystatechange", afterLoad);
}