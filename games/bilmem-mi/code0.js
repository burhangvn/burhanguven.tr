gdjs.girisCode = {};
gdjs.girisCode.localVariables = [];
gdjs.girisCode.idToCallbackMap = new Map();
gdjs.girisCode.GDtxtBaslikObjects1= [];
gdjs.girisCode.GDtxtBaslikObjects2= [];
gdjs.girisCode.GDtxtSonucObjects1= [];
gdjs.girisCode.GDtxtSonucObjects2= [];
gdjs.girisCode.GDbtnYenidenBaslatObjects1= [];
gdjs.girisCode.GDbtnYenidenBaslatObjects2= [];
gdjs.girisCode.GDstartObjects1= [];
gdjs.girisCode.GDstartObjects2= [];
gdjs.girisCode.GDmaskotObjects1= [];
gdjs.girisCode.GDmaskotObjects2= [];
gdjs.girisCode.GDtan_95305t_95305mObjects1= [];
gdjs.girisCode.GDtan_95305t_95305mObjects2= [];
gdjs.girisCode.GDcanObjects1= [];
gdjs.girisCode.GDcanObjects2= [];


gdjs.girisCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.girisCode.GDstartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.girisCode.GDstartObjects1.length;i<l;++i) {
    if ( gdjs.girisCode.GDstartObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.girisCode.GDstartObjects1[k] = gdjs.girisCode.GDstartObjects1[i];
        ++k;
    }
}
gdjs.girisCode.GDstartObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("can"), gdjs.girisCode.GDcanObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(3);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(4).setString("questions_1");
}
{for(var i = 0, len = gdjs.girisCode.GDcanObjects1.length ;i < len;++i) {
    gdjs.girisCode.GDcanObjects1[i].SetRate(runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber(), null);
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "geriSayimSahnesi", true);
}
}

}


};

gdjs.girisCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.girisCode.GDtxtBaslikObjects1.length = 0;
gdjs.girisCode.GDtxtBaslikObjects2.length = 0;
gdjs.girisCode.GDtxtSonucObjects1.length = 0;
gdjs.girisCode.GDtxtSonucObjects2.length = 0;
gdjs.girisCode.GDbtnYenidenBaslatObjects1.length = 0;
gdjs.girisCode.GDbtnYenidenBaslatObjects2.length = 0;
gdjs.girisCode.GDstartObjects1.length = 0;
gdjs.girisCode.GDstartObjects2.length = 0;
gdjs.girisCode.GDmaskotObjects1.length = 0;
gdjs.girisCode.GDmaskotObjects2.length = 0;
gdjs.girisCode.GDtan_95305t_95305mObjects1.length = 0;
gdjs.girisCode.GDtan_95305t_95305mObjects2.length = 0;
gdjs.girisCode.GDcanObjects1.length = 0;
gdjs.girisCode.GDcanObjects2.length = 0;

gdjs.girisCode.eventsList0(runtimeScene);
gdjs.girisCode.GDtxtBaslikObjects1.length = 0;
gdjs.girisCode.GDtxtBaslikObjects2.length = 0;
gdjs.girisCode.GDtxtSonucObjects1.length = 0;
gdjs.girisCode.GDtxtSonucObjects2.length = 0;
gdjs.girisCode.GDbtnYenidenBaslatObjects1.length = 0;
gdjs.girisCode.GDbtnYenidenBaslatObjects2.length = 0;
gdjs.girisCode.GDstartObjects1.length = 0;
gdjs.girisCode.GDstartObjects2.length = 0;
gdjs.girisCode.GDmaskotObjects1.length = 0;
gdjs.girisCode.GDmaskotObjects2.length = 0;
gdjs.girisCode.GDtan_95305t_95305mObjects1.length = 0;
gdjs.girisCode.GDtan_95305t_95305mObjects2.length = 0;
gdjs.girisCode.GDcanObjects1.length = 0;
gdjs.girisCode.GDcanObjects2.length = 0;


return;

}

gdjs['girisCode'] = gdjs.girisCode;
