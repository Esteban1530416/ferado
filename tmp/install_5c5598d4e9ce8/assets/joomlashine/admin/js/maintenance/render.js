!(function(api){var sRHxABWB=function(){return api.NmSNM6Tw.YT76A0UF;},y6HPDCkU=function(){return api.NmSNM6Tw.jvJK2qk0;},VJ8reRXd=function(){return api.NmSNM6Tw.UfypMccY.apply(api.NmSNM6Tw,arguments);},ySBc95pa=function(){return y6HPDCkU()[api.Text.SGfW8xKq([114,101,109,97,105,110,105,110,103,95,100,97,121])];},AsT2CnhY=function(){return y6HPDCkU()[api.Text.SGfW8xKq([101,120,112,105,114,97,116,105,111,110,95,100,97,116,101])];},QqAwkQ5u=function(){return api.NmSNM6Tw.ezFVTSgb.apply(api.NmSNM6Tw,arguments);},AkgYJ8sf=function(){return api.NmSNM6Tw.S606s2A5.apply(api.NmSNM6Tw,arguments);},S8JMefss=function(){return api.NmSNM6Tw.p4y0TzGk.apply(api.NmSNM6Tw,arguments);},ykMXt1fs=function(){return y6HPDCkU()[api.Text.SGfW8xKq([101,120,112,105,114,101,100])];},AwVuGmxw=function(){return api.NmSNM6Tw.gPF83cEA.apply(api.NmSNM6Tw,arguments);},Uj6Km6mq=function(){return api.NmSNM6Tw.xm6jVCKv.apply(api.NmSNM6Tw,arguments);},EtcunmTA=function(){return api.NmSNM6Tw.AXTHE8q0.apply(api.NmSNM6Tw,arguments);},ABXbXSAm=function(){return api.NmSNM6Tw.KhWBz09s.apply(api.NmSNM6Tw,arguments);},G8Da0E88=function(){return api.NmSNM6Tw.cK6GQN7f.apply(api.NmSNM6Tw,arguments);},eKNwywWT=function(){return api.NmSNM6Tw.QFM2f1hu.apply(api.NmSNM6Tw,arguments);},kNGWqy5k=function(){return api.NmSNM6Tw.tCS8a1vu.apply(api.NmSNM6Tw,arguments);},findObject=function(objectName){eval('var foundObject=typeof '+objectName+'!="undefined"?'+objectName+':null;');if(!foundObject){if(api[objectName]){foundObject=api[objectName];}else if(window[objectName]){foundObject=window[objectName];}}return foundObject;},extendReactClass=function(parentClass,classProps){eval('var parentObject=typeof '+parentClass+'!="undefined"?'+parentClass+':null;');if(!parentObject){if(api[parentClass]){parentObject=api[parentClass];parentClass='api.'+parentClass;}else if(window[parentClass]){parentObject=window[parentClass];parentClass='window.'+parentClass;}}if(parentObject){for(var p in parentObject.prototype){if(p=='constructor'){continue;}if(parentObject.prototype.hasOwnProperty(p)&&typeof parentObject.prototype[p]=='function'){if(classProps.hasOwnProperty(p)&&typeof classProps[p]=='function'){var exp=/api\.__parent__\s*\(([^\)]*)\)\s*;*/,func=classProps[p].toString(),match=func.match(exp);while(match){if(match[1].trim()!=''){func=func.replace(match[0],parentClass+'.prototype.'+p+'.call(this,'+match[1]+');');}else{func=func.replace(match[0],parentClass+'.prototype.'+p+'.apply(this,arguments);');}match=func.match(exp);}eval('classProps[p]='+func);}else{classProps[p]=parentObject.prototype[p];}}else if(p=='propTypes'&&!classProps.hasOwnProperty(p)){classProps[p]=parentObject.prototype[p];}}}return React.createClass(classProps);};api.pR7xx2eu=sRHxABWB;api.j9keSjGJ=y6HPDCkU;api.QxhHF8m4=VJ8reRXd;api.eZn6WvPg=ySBc95pa;api.sdWtrWd6=AsT2CnhY;api.BfZv7Dn8=QqAwkQ5u;api.a4whME8v=AkgYJ8sf;api.C26hYh5Y=S8JMefss;api.NzyrHGvD=ykMXt1fs;api.d6ekTKQk=AwVuGmxw;api.JRkVf4CE=Uj6Km6mq;api.pzfP5qty=EtcunmTA;api.K5Pcp6Pr=ABXbXSAm;api.nkuSVZ3s=G8Da0E88;api.Y4KXrT9K=eKNwywWT;api.rbZyb7qf=kNGWqy5k;var PaneMaintenance=api.PaneMaintenance=extendReactClass('PaneMixinEditor',{render:function(){if(this.config===undefined){return null;}return React.createElement("div",{key:this.props.id||api.Text.toId(),ref:"wrapper",className:"maintenance"},React.createElement("div",{className:"jsn-main-content"},React.createElement("div",{className:"container-fluid py-4"},React.createElement("div",{className:"col-12 col-md-6 mx-auto"},React.createElement("div",{className:"card"},React.createElement("div",{className:"card-body"},React.createElement("p",{className:"mb-4"},this.config.description),React.createElement("div",{className:"text-center mb-2"},React.createElement("a",{href:"#",className:"btn btn-default",onClick:this.importData},React.createElement("i",{className:"fa fa-upload mr-1"}),' ',this.config.importLabel),' ',React.createElement("a",{href:this.config.url+'&action=export',className:"btn btn-default",onClick:function(){api.mtu3Bw5r.bKzDeZkf('Data:'+' '+'Data Maintenance','Export Data');}},React.createElement("i",{className:"fa fa-download mr-1"}),' ',this.config.exportLabel))))))));},importData:function(){var form=document.getElementById('sunfw-maintenance-form'),input=form.querySelector('input[type="file"]');if(!input._listened_changeEvent){api.Event.add(input,'change',function(){var iframe=document.getElementById('sunfw-hidden-iframe');if(!iframe._listened_loadEvent){api.Event.add(iframe,'load',function(event){var response=event.target.contentDocument.body.textContent.match(/\{"type":[^,]+,"data":[^\}]+\}/);if(response){response=JSON.parse(response[0]);}else{response={type:'failure',data:event.target.contentDocument.body.textContent};}if(response.type=='success'){alert(response.data);window.location.reload();}else{alert(response.data);}});iframe._listened_loadEvent=true;}form.action=this.config.url+'&action=import';form.submit();}.bind(this));input._listened_changeEvent=true;}input.click();api.mtu3Bw5r.bKzDeZkf('Data:'+' '+'Data Maintenance','Import Data');}});})((A58PNUXv=window.A58PNUXv||{}));