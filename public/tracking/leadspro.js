(function(){window.cid=function(o){window.gid=o},document.addEventListener("DOMContentLoaded",function(){const o="http://localhost:8000/api/tracker",n=document.querySelector("form");if(!n){console.warn("No form with ID 'leadForm' found on this page.");return}function r(){const e=window.gid;return e||null}let a=r();if(a){let e=document.createElement("input");e.type="hidden",e.name="gid",e.value=a,n.appendChild(e),n.addEventListener("submit",function(i){i.preventDefault();let c=new FormData(n),d={};c.forEach((t,l)=>{d[l]=t}),console.log("Captured Lead Data:",d),fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)}).then(t=>t.json()).then(t=>{console.log("Lead data sent successfully:",t),n.reset()}).catch(t=>{console.error("Error sending lead data:",t)})})}})})();
