/*
 * JS for mobilescreen1 generated by Exadel Tiggzi
 *
 * Created on: Monday, June 18, 2012, 05:53:34 AM (PDT)
 */
/************************************
 * JS API provided by Exadel Tiggzi  *
 ************************************/
/* Setting project environment indicator */
Tiggr.env = "apk"; /* Object & array with components "name-to-id" mapping */
var n2id_buf = {
    'mobilebutton1': 'j_22'
};
if ("n2id" in window && window.n2id !== undefined) {
    $.extend(n2id, n2id_buf);
} else {
    window.n2id = n2id_buf;
}
Tiggr.AppPages = [{
    "name": "Result",
    "location": "Result.html"
}, {
    "name": "TEST",
    "location": "TEST.html"
}, {
    "name": "mobilescreen1",
    "location": "mobilescreen1.html"
}, {
    "name": "current",
    "location": "mobilescreen1.html"
}];
Tiggr.CurrentScreen = 'j_18';

function navigateTo(outcome, useAjax) {
    Tiggr.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Tiggr.adjustContentHeight();
}

function adjustContentHeightWithPadding() {
    Tiggr.adjustContentHeightWithPadding();
}

function unwrapAndApply(selector, content) {
    Tiggr.unwrapAndApply(selector, content);
}

function setDetailContent(pageUrl) {
    Tiggr.setDetailContent(pageUrl);
}
/**********************
 * SECURITY CONTEXTS  *
 **********************/
/*******************************
 *      SERVICE SETTINGS        *
 ********************************/
/*************************
 *      SERVICES          *
 *************************/
/*************************
 * NONVISUAL COMPONENTS  *
 *************************/
var datasources = [];
/************************
 * EVENTS AND HANDLERS  *
 ************************/
// screen onload
screen_0DA9_onLoad = j_18_onLoad = function() {
    createSpinner("res/lib/jquerymobile/images/ajax-loader.gif");
    Tiggr.__registerComponent('mobilebutton1', new Tiggr.BaseComponent({
        id: 'mobilebutton1',
        context: '#j_21'
    }));
    for (var idx = 0; idx < datasources.length; idx++) {
        datasources[idx].__setupDisplay();
    }
    screen_0DA9_elementsExtraJS();
    j_18_deviceEvents();
    j_18_windowEvents();
    screen_0DA9_elementsEvents();
}
// screen window events
screen_0DA9_windowEvents = j_18_windowEvents = function() {
    $('#j_18').bind('pageshow orientationchange', function() {
        adjustContentHeightWithPadding();
    });
}
// device events
j_18_deviceEvents = function() {
    document.addEventListener("deviceready", function() {});
}
// screen elements extra js
screen_0DA9_elementsExtraJS = j_18_elementsExtraJS = function() {
    // screen (screen-0DA9) extra code
}
// screen elements handler
screen_0DA9_elementsEvents = j_18_elementsEvents = function() {
    $("a :input,a a,a fieldset label").live({
        click: function(event) {
            event.stopPropagation();
        }
    });
    $('#j_21 [name="mobilebutton1"]').die().live({
        vclick: function() {
            if (!$(this).attr('disabled')) {
                window.top.location = 'https://auth.tfoundry.com/oauth/authorize?client_id=3ae89f7209498c083997639e220b9a27&scope=NASB&redirect_uri=http://tiggzi.com/view/3f6ca50e-c260-471f-a6cc-70c890c24f24/mob-Result.html?phones=1100200015_1100200014&response_type=code';
            }
        },
    });
}
$("body").undelegate("pagebeforeshow").delegate("#j_18", "pagebeforeshow", function(event, ui) {
    j_18_onLoad();
});