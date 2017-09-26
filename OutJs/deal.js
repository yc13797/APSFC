
//用来记录访问者ip
var city = returnCitySN["cname"]; //定义城市IP
var ip = returnCitySN["cip"];	//定义IP

var xmlHttp

function showHint(str)
{
	if (event.keyCode==13){
		Send(str);
   } 
   
}

function Send(str)
{
	if (str.length==0){
		document.getElementById("txtHint").innerHTML="";
		return;
    }

    xmlHttp=GetXmlHttpObject()

    if (xmlHttp==null){

        alert ("您的浏览器不支持AJAX！");
		return;
	}

    var url="http://www.tuling123.com/openapi/api?key=39cc29390f4f4f04abeb4074dcec5c76";

    url=url+"&info="+str;

    url=url+"&userid="+city+","+ip;

    xmlHttp.onreadystatechange=stateChanged;

    xmlHttp.open("GET",url,true);

    xmlHttp.send(null);

    document.getElementById("robot").value="";

}

function stateChanged()
{
	if (xmlHttp.readyState==4){
		var msg=eval('(' + xmlHttp.responseText + ')'); 
		document.getElementById("txtHint").innerHTML=msg.text;
	}
	
}

function GetXmlHttpObject()
{

  var xmlHttp=null;
  try{
	// Firefox, Opera 8.0+, Safari
	xmlHttp=new XMLHttpRequest();
	}

  catch(e){
	// Internet Explorer
	try{
		
	xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
	}

    catch (e){

    xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

  }

return xmlHttp;

}
