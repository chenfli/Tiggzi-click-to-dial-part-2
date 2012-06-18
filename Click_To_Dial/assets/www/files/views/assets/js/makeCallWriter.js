console.log("Loading generateXmlMakeCall.js");
function makeCallXml(){
var from = localStorage.getItem('from');
var to = localStorage.getItem('to');

var xml = Σ('ns3:callSessionInformation',
		  Σ('participant',				
		          Σ('participantAddress','tel:+' + from ),
    			      Σ('participantName', from ),
    			      Σ( 'noAnswerTimeout', '5000')
	      ),
  		  Σ('participant',
    	 		  Σ('participantAddress','tel:+' + to),
	    	      Σ('participantName', to),
	    	      Σ( 'noAnswerTimeout', '5000')
	 	  )
	 	 );  	     	   	   
 	  var string = (new XMLSerializer()).serializeToString(xml);
console.log(xml);
console.log(string);
return string;
}

function addHeaderMakeCall(req) {
    var from = localStorage.getItem('from');
	console.debug("REQ" + req);
	req.setRequestHeader('WSEndUserToken', from);
	req.setRequestHeader('Accept', 'application/xml');
    req.setRequestHeader('Content-type','application/xml');
}