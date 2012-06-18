console.log("Loading InvokeAccessTokenApi");


function sendRequest(url, callback, postData , headerData, secondCall, secReqDataMaker, secReqHeaderMaker) {
	var req = new XMLHttpRequest();
	console.debug("created Req" + req);
	if (!req) return;
	var method = (postData) ? "POST" : "GET";
	req.open(method,url,true);

	if (postData && !headerData)
		req.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	if (headerData) {
		console.debug("SEND REQ" + req);
	    headerData(req);
	}

		
	req.onreadystatechange = function () {	
		if (req.readyState != 4) return;
													  // REMOVE once the access token is solved
		if (req.status != 200 && req.status != 201 && req.status != 304 && req.status != 0) {
			console.debug('HTTP error ' + req.status);
			return;
		}		
		if(secondCall) {
			callback(req, secondCall, secReqDataMaker, secReqHeaderMaker);
		} else {
			callback(req);
		}
	}
	if (req.readyState == 4) return;
	console.debug("about to send " + postData);
	req.send(postData);
}

/**


**/
function handleRequest(req, secondCall, secReqDataMaker, secReqHeaderMaker) {
	console.debug("Call back " + req.responseText + " second call " + secondCall);	
	if (secondCall) {
		if ( req.responseText.search("access_token=")!= -1) {
			var secPostData = secReqDataMaker();
			sendRequest('https://auth.tfoundry.com/a1/nasb/thirdpartycall/callSessions/?access_token='+req.responseText.slice(13),secondCall, secPostData, secReqHeaderMaker);			
			Tiggr('accesstoken').html(req.responseText);
		//To be removed after access code error fixed
		} else if (req.responseText.search("invalid_grant")!= -1 || req.responseText.search("invalid_client")!= -1) {
			console.log("NOTICE ACCESS_TOKEN IS NOT RETRIEVED using Amit 79f11cc992224354617b03220842a170 Instead");
			localStorage.setItem("access_token","79f11cc992224354617b03220842a170");
			Tiggr('accesstoken').html("79f11cc992224354617b03220842a170"); 
			var secPostData = secReqDataMaker();
			sendRequest('https://api.tfoundry.com/a1/nasb/thirdpartycall/callSessions/?access_token=79f11cc992224354617b03220842a170', secondCall, secPostData ,secReqHeaderMaker);			
		} else {			
			console.debug("NO Access Token exists");
		}
	}	
}

function apiResponse(req) {
	console.debug("API Call returned " + req.responseText);
	
}






