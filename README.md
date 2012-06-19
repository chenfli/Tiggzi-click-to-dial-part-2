Tiggzi-click-to-dial-part-2
===========================

Foundry Nasb Make Call Integration

don't forget to look at part 1 - https://github.com/chenfli/Tiggzi-click-to-dial-part-1

This demo demonstrait Tiggzy integration with Foundry Alpha API. 

There are 2 screens:

1. Result.html - This is called after the inital auth token request 
 called from (https://github.com/chenfli/Tiggzi-click-to-dial-part-1/blob/master/Click_To_Dial/assets/www/mobilescreen2.html)
2. mobilescreen1.html - not part of the flow, but can come in use when the 1st part (Facebook integration) doesn't work.

The full live demo can be found under

http://tiggzi.com/view/25c969c6-3c0e-4ee1-a09e-54a7a042b19f/mob-mobilescreen1.html

To test only this part use

http://www.tiggzi.com/view/3f6ca50e-c260-471f-a6cc-70c890c24f24/mob-mobilescreen1.html

The screens layout can be found under

https://github.com/chenfli/Tiggzi-click-to-dial-part-2/tree/master/Click_To_Dial/assets/www

For each page you can see the layout (html,css) and thier relevant javascript code which trigger

however, the logic is done via javascript since Tiggzy SDK/ Foundry Alpha had several bugs which deny me to use

thier REST Gui generation.

There for, there are 3 js scripts which make the Foundry oauth2 flow and invocation of make call API.

https://github.com/chenfli/Tiggzi-click-to-dial-part-2/tree/master/Click_To_Dial/assets/www/files/views/assets/js

InvokeAccessTokenApi.js - responsible of making rest calls to the foundry 
1. Get Access Code
2. Invoke Make Call API

xmlWriter.js - responsible to generate any XML, used to create xml for Make Call API

makeCallWriter.js - responsible to generate both XML and request headers for make call api.

The flow goes like this:

Tiggzi-click-to-dial-part-1 --with 2 phones--> Foundry Login Page + Approval for Amit Application --redirect with phones--> Result.html 

1. Recieve Auth Token
2. Send request for Access Token
3. Recieve Access Token
4. Send request to use Make Call Nasb API.


NOTE: If you test it on a browser you must remove your security checks, since 
the foundry and tiggzi doesn't share resources a.k.a  Cross Domain or CSRF Attackes see:
(http://nelm.io/blog/2011/11/cors-with-sencha-touch/)

This best seen on Chrome. If you use chrome, 
validate that chrome process doesn't run on backgroud/foreground and than: 

C:\Users\[your user name]\AppData\Local\Google\Chrome\Application\chrome.exe --disable-web-security

LOG POINT: To see the flow better enable the logs on chrome Ctrl+Shift+I.
