'use strict';
let installPrompt=null;
const installButton=document.getElementById('installApp');
window.addEventListener('beforeinstallprompt',event=>{event.preventDefault();installPrompt=event;installButton.textContent='Install app'});
installButton.addEventListener('click',async()=>{if(installPrompt){await installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;return}document.getElementById('installHelp').showModal()});
document.getElementById('closeInstallHelp').addEventListener('click',()=>document.getElementById('installHelp').close());
if('serviceWorker'in navigator&&location.protocol==='https:')window.addEventListener('load',()=>{navigator.serviceWorker.register('./sw.js',{scope:'./'}).then(()=>navigator.serviceWorker.ready).then(()=>{document.getElementById('offlineStatus').textContent='Ready for offline practice after this first visit.'}).catch(()=>{document.getElementById('offlineStatus').textContent='Keep an internet connection for this visit. Offline setup could not finish.'})});
