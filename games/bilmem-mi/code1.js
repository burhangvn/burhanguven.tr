gdjs.geriSayimSahnesiCode = {};
gdjs.geriSayimSahnesiCode.localVariables = [];
gdjs.geriSayimSahnesiCode.idToCallbackMap = new Map();
gdjs.geriSayimSahnesiCode.GDtxtGeriSayimObjects1= [];
gdjs.geriSayimSahnesiCode.GDtxtGeriSayimObjects2= [];
gdjs.geriSayimSahnesiCode.GDoyunBasliyorObjects1= [];
gdjs.geriSayimSahnesiCode.GDoyunBasliyorObjects2= [];
gdjs.geriSayimSahnesiCode.GDcanObjects1= [];
gdjs.geriSayimSahnesiCode.GDcanObjects2= [];


gdjs.geriSayimSahnesiCode.asyncCallback16616892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.geriSayimSahnesiCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("oyunBasliyor"), gdjs.geriSayimSahnesiCode.GDoyunBasliyorObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("txtGeriSayim"), gdjs.geriSayimSahnesiCode.GDtxtGeriSayimObjects2);

{for(var i = 0, len = gdjs.geriSayimSahnesiCode.GDtxtGeriSayimObjects2.length ;i < len;++i) {
    gdjs.geriSayimSahnesiCode.GDtxtGeriSayimObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.geriSayimSahnesiCode.GDoyunBasliyorObjects2.length ;i < len;++i) {
    gdjs.geriSayimSahnesiCode.GDoyunBasliyorObjects2[i].hide();
}
}
gdjs.geriSayimSahnesiCode.localVariables.length = 0;
}
gdjs.geriSayimSahnesiCode.idToCallbackMap.set(16616892, gdjs.geriSayimSahnesiCode.asyncCallback16616892);
gdjs.geriSayimSahnesiCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.geriSayimSahnesiCode.localVariables);
for (const obj of gdjs.geriSayimSahnesiCode.GDtxtGeriSayimObjects1) asyncObjectsList.addObject("txtGeriSayim", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.geriSayimSahnesiCode.asyncCallback16616892(runtimeScene, asyncObjectsList)), 16616892, asyncObjectsList);
}
}

}


};gdjs.geriSayimSahnesiCode.asyncCallback16617708 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.geriSayimSahnesiCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "genelkultur", false);
}
gdjs.geriSayimSahnesiCode.localVariables.length = 0;
}
gdjs.geriSayimSahnesiCode.idToCallbackMap.set(16617708, gdjs.geriSayimSahnesiCode.asyncCallback16617708);
gdjs.geriSayimSahnesiCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.geriSayimSahnesiCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.geriSayimSahnesiCode.asyncCallback16617708(runtimeScene, asyncObjectsList)), 16617708, asyncObjectsList);
}
}

}


};gdjs.geriSayimSahnesiCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("txtGeriSayim"), gdjs.geriSayimSahnesiCode.GDtxtGeriSayimObjects1);
{for(var i = 0, len = gdjs.geriSayimSahnesiCode.GDtxtGeriSayimObjects1.length ;i < len;++i) {
    gdjs.geriSayimSahnesiCode.GDtxtGeriSayimObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString());
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "gerisayimZamanlayici");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "gerisayimZamanlayici") > 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("txtGeriSayim"), gdjs.geriSayimSahnesiCode.GDtxtGeriSayimObjects1);
{for(var i = 0, len = gdjs.geriSayimSahnesiCode.GDtxtGeriSayimObjects1.length ;i < len;++i) {
    gdjs.geriSayimSahnesiCode.GDtxtGeriSayimObjects1[i].getBehavior("Text").setText("2");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "gerisayimZamanlayici") > 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("txtGeriSayim"), gdjs.geriSayimSahnesiCode.GDtxtGeriSayimObjects1);
{for(var i = 0, len = gdjs.geriSayimSahnesiCode.GDtxtGeriSayimObjects1.length ;i < len;++i) {
    gdjs.geriSayimSahnesiCode.GDtxtGeriSayimObjects1[i].getBehavior("Text").setText("1");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "gerisayimZamanlayici") > 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("txtGeriSayim"), gdjs.geriSayimSahnesiCode.GDtxtGeriSayimObjects1);
{for(var i = 0, len = gdjs.geriSayimSahnesiCode.GDtxtGeriSayimObjects1.length ;i < len;++i) {
    gdjs.geriSayimSahnesiCode.GDtxtGeriSayimObjects1[i].getBehavior("Text").setText("0");
}
}

{ //Subevents
gdjs.geriSayimSahnesiCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.geriSayimSahnesiCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.geriSayimSahnesiCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.geriSayimSahnesiCode.GDtxtGeriSayimObjects1.length = 0;
gdjs.geriSayimSahnesiCode.GDtxtGeriSayimObjects2.length = 0;
gdjs.geriSayimSahnesiCode.GDoyunBasliyorObjects1.length = 0;
gdjs.geriSayimSahnesiCode.GDoyunBasliyorObjects2.length = 0;
gdjs.geriSayimSahnesiCode.GDcanObjects1.length = 0;
gdjs.geriSayimSahnesiCode.GDcanObjects2.length = 0;

gdjs.geriSayimSahnesiCode.eventsList2(runtimeScene);
gdjs.geriSayimSahnesiCode.GDtxtGeriSayimObjects1.length = 0;
gdjs.geriSayimSahnesiCode.GDtxtGeriSayimObjects2.length = 0;
gdjs.geriSayimSahnesiCode.GDoyunBasliyorObjects1.length = 0;
gdjs.geriSayimSahnesiCode.GDoyunBasliyorObjects2.length = 0;
gdjs.geriSayimSahnesiCode.GDcanObjects1.length = 0;
gdjs.geriSayimSahnesiCode.GDcanObjects2.length = 0;


return;

}

gdjs['geriSayimSahnesiCode'] = gdjs.geriSayimSahnesiCode;
