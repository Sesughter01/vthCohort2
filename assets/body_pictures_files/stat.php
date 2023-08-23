var d=new Date();var now=d.getTime();var txt='<img src="'+location.protocol+'//stat.mystat.hu/collect.php?id=156457&h=1&ref='+escape(document.referrer)+'&now='+now+'&br='+screen.width+'x'+screen.height+'&loc='+escape(document.location.href);
if (navigator.appName!='Netscape') { txt += '&c='+screen.colorDepth; } else { txt += '&c='+screen.pixelDepth; }
txt += '" width="1" height="1" border="0" alt="MyStat - Az ingyenes webstatisztika">';
document.write(txt);