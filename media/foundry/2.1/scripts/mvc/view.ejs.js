!function(){var moduleFactory=function($){var module=this;$.require().script("mvc/view","mvc/lang.string.rsplit").done(function(){var exports=function(){var myEval=function(script){eval(script)},rSplit=$.String.rsplit,extend=$.extend,isArray=$.isArray,returnReg=/\r\n/g,retReg=/\r/g,newReg=/\n/g,nReg=/\n/,slashReg=/\\/g,quoteReg=/"/g,singleQuoteReg=/'/g,tabReg=/\t/g,leftBracket=/\{/g,rightBracket=/\}/g,quickFunc=/\s*\(([\$\w]+)\)\s*->([^\n]*)/,clean=function(content){return content.replace(slashReg,"\\\\").replace(newReg,"\\n").replace(quoteReg,'\\"').replace(tabReg,"\\t")},escapeHTML=function(content){return content.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(quoteReg,"&#34;").replace(singleQuoteReg,"&#39;")},$View=$.View,bracketNum=function(content){var lefts=content.match(leftBracket),rights=content.match(rightBracket);return(lefts?lefts.length:0)-(rights?rights.length:0)},EJS=function(options){if(this.constructor!=EJS){var ejs=new EJS(options);return function(data,helpers){return ejs.render(data,helpers)}}if(typeof options=="function"){this.template={fn:options};return}extend(this,EJS.options,options);this.template=compile(this.text,this.type,this.name)};$&&($.EJS=EJS);EJS.prototype.render=function(object,extraHelpers){object=object||{};this._extra_helpers=extraHelpers;var v=new EJS.Helpers(object,extraHelpers||{});return this.template.fn.call(object,object,v)};extend(EJS,{text:function(input){if(typeof input=="string"){return input}if(input===null||input===undefined){return""}var hook=input.hookup&&function(el,id){input.hookup.call(input,el,id)}||typeof input=="function"&&input||isArray(input)&&function(el,id){for(var i=0;i<input.length;i++){input[i].hookup?input[i].hookup(el,id):input[i](el,id)}};if(hook){return"data-view-id='"+$View.hookup(hook)+"'"}return input.toString?input.toString():""},clean:function(text){if(typeof text=="string"){return escapeHTML(text)}else if(typeof text=="number"){return text}else{return EJS.text(text)}},options:{type:"<",ext:".ejs"}});var scan=function(scanner,source,block){var source_split=rSplit(source,nReg),i=0;for(;i<source_split.length;i++){scanline(scanner,source_split[i],block)}},scanline=function(scanner,line,block){scanner.lines++;var line_split=rSplit(line,scanner.splitter),token;for(var i=0;i<line_split.length;i++){token=line_split[i];if(token!==null){block(token,scanner)}}},makeScanner=function(left,right){var scanner={};extend(scanner,{left:left+"@",right:"@"+right,dLeft:left+"@@",dRight:"@@"+right,eeLeft:left+"@==",eLeft:left+"@=",cmnt:left+"@#",cleanLeft:left+"@~",scan:scan,lines:0});scanner.splitter=new RegExp("("+[scanner.dLeft,scanner.dRight,scanner.eeLeft,scanner.eLeft,scanner.cmnt,scanner.left,scanner.right+"\n",scanner.right,"\n"].join(")|(").replace(/\[/g,"\\[").replace(/\]/g,"\\]")+")");return scanner},compile=function(source,left,name){source=source.replace(returnReg,"\n").replace(retReg,"\n");left=left||"<";var put_cmd="___v1ew.push(",insert_cmd=put_cmd,startTxt="var ___v1ew = [];",finishTxt="return ___v1ew.join('')",buff=new EJS.Buffer([startTxt],[]),content="",put=function(content){buff.push(put_cmd,'"',clean(content),'");')},startTag=null,empty=function(){content=""},doubleParen="));",endStack=[];scan(makeScanner(left,left==="["?"]":">"),source||"",function(token,scanner){var bn;if(startTag===null){switch(token){case"\n":content=content+"\n";put(content);buff.cr();empty();break;case scanner.left:case scanner.eLeft:case scanner.eeLeft:case scanner.cmnt:startTag=token;if(content.length>0){put(content)}empty();break;case scanner.dLeft:content+=scanner.left;break;default:content+=token;break}}else{switch(token){case scanner.right:switch(startTag){case scanner.left:bn=bracketNum(content);var last=endStack.length&&bn==-1?endStack.pop():";";if(last===doubleParen){buff.push(finishTxt)}buff.push(content,last);if(bn===1){endStack.push(";")}break;case scanner.eLeft:bn=bracketNum(content);if(bn){endStack.push(doubleParen)}if(quickFunc.test(content)){var parts=content.match(quickFunc);content="function(__){var "+parts[1]+"=$(__);"+parts[2]+"}"}buff.push(insert_cmd,$.globalNamespace+".EJS.clean(",content,bn?startTxt:doubleParen);break;case scanner.eeLeft:bn=bracketNum(content);if(bn){endStack.push(doubleParen)}buff.push(insert_cmd,$.globalNamespace+".EJS.text(",content,bn?startTxt:doubleParen);break}startTag=null;empty();break;case scanner.dRight:content+=scanner.right;break;default:content+=token;break}}});if(content.length>0){buff.push(put_cmd,'"',clean(content)+'");')}var template=buff.close(),out={out:"try { with(_VIEW) { with (_CONTEXT) {"+template+" "+finishTxt+"}}}catch(e){e.lineNumber=null;throw e;}"};myEval.call(out,"this.fn = (function(_CONTEXT,_VIEW){"+out.out+"});");return out};EJS.Buffer=function(pre_cmd,post){this.line=[];this.script=[];this.post=post;this.push.apply(this,pre_cmd)};EJS.Buffer.prototype={push:function(){this.line.push.apply(this.line,arguments)},cr:function(){this.script.push(this.line.join(""),"\n");this.line=[]},close:function(){if(this.line.length>0){this.script.push(this.line.join(""));this.line=[]}this.post.length&&this.push.apply(this,this.post);this.script.push(";");return this.script.join("")}};EJS.Helpers=function(data,extras){this._data=data;this._extras=extras;extend(this,extras)};EJS.Helpers.prototype={plugin:function(name){var args=$.makeArray(arguments),widget=args.shift();return function(el){var jq=$(el);jq[widget].apply(jq,args)}},view:function(url,data,helpers){helpers=helpers||this._extras;data=data||this._data;return $View(url,data,helpers)}};$View.register({suffix:"ejs",script:function(id,src){return $.globalNamespace+".EJS(function(_CONTEXT,_VIEW) { "+new EJS({text:src,name:id}).template.out+" })"},renderer:function(id,text){return EJS({text:text,name:id})}})};exports();module.resolveWith(exports)})};dispatch("mvc/view.ejs").containing(moduleFactory).to("Foundry/2.1 Modules")}();