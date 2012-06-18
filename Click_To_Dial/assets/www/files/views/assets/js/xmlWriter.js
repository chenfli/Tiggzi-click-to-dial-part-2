console.debug("Loading xmlWriter.js");
//Taken from: http://stackoverflow.com/questions/3191179/generate-xml-document-in-memory-with-javascript

// use this document for creating XML
var doc = document.implementation.createDocument(null, null, null);

// function that creates the XML structure
function Σ() {
    var node = doc.createElement(arguments[0]), text, child;
    // UGLY but works
	if (arguments[0] == 'ns3:callSessionInformation') {
		node.setAttribute('xmlns:ns2',"urn:oma:xml:rest:callnotification:1");		
		node.setAttribute('xmlns:ns4',"urn:oma:xml:rest:common:1");				
		node.setAttribute('xmlns:ns3',"urn:oma:xml:rest:thirdpartycall:1");						
	}     

    for(var i = 1; i < arguments.length; i++) {
        child = arguments[i];
        if(typeof child == 'string') {
            child = doc.createTextNode(child);
        } 
        node.appendChild(child);
    }

    return node;
};

/** Impl Example 

// create the XML structure recursively
var root = Σ('report',
    Σ('submitter',
        Σ('name', 'John Doe')
    ),
    Σ('students',
        Σ('student',
            Σ('name', 'Alice'),
            Σ('grade', '80')
        ),
        Σ('student',
            Σ('name', 'Bob'),
            Σ('grade', '90')
        )
    )
);

console.log(root);
Impl Example End **/