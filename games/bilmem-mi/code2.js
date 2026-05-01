gdjs.genelkulturCode = {};
gdjs.genelkulturCode.localVariables = [];
gdjs.genelkulturCode.idToCallbackMap = new Map();
gdjs.genelkulturCode.GDtxtSoruObjects1= [];
gdjs.genelkulturCode.GDtxtSoruObjects2= [];
gdjs.genelkulturCode.GDtxtSoruObjects3= [];
gdjs.genelkulturCode.GDtxtSoruObjects4= [];
gdjs.genelkulturCode.GDbtnAObjects1= [];
gdjs.genelkulturCode.GDbtnAObjects2= [];
gdjs.genelkulturCode.GDbtnAObjects3= [];
gdjs.genelkulturCode.GDbtnAObjects4= [];
gdjs.genelkulturCode.GDbtnBObjects1= [];
gdjs.genelkulturCode.GDbtnBObjects2= [];
gdjs.genelkulturCode.GDbtnBObjects3= [];
gdjs.genelkulturCode.GDbtnBObjects4= [];
gdjs.genelkulturCode.GDbtnCObjects1= [];
gdjs.genelkulturCode.GDbtnCObjects2= [];
gdjs.genelkulturCode.GDbtnCObjects3= [];
gdjs.genelkulturCode.GDbtnCObjects4= [];
gdjs.genelkulturCode.GDbtnDObjects1= [];
gdjs.genelkulturCode.GDbtnDObjects2= [];
gdjs.genelkulturCode.GDbtnDObjects3= [];
gdjs.genelkulturCode.GDbtnDObjects4= [];
gdjs.genelkulturCode.GDbtnBaslaObjects1= [];
gdjs.genelkulturCode.GDbtnBaslaObjects2= [];
gdjs.genelkulturCode.GDbtnBaslaObjects3= [];
gdjs.genelkulturCode.GDbtnBaslaObjects4= [];
gdjs.genelkulturCode.GDtxtSoruNoObjects1= [];
gdjs.genelkulturCode.GDtxtSoruNoObjects2= [];
gdjs.genelkulturCode.GDtxtSoruNoObjects3= [];
gdjs.genelkulturCode.GDtxtSoruNoObjects4= [];
gdjs.genelkulturCode.GDtxtLevelObjects1= [];
gdjs.genelkulturCode.GDtxtLevelObjects2= [];
gdjs.genelkulturCode.GDtxtLevelObjects3= [];
gdjs.genelkulturCode.GDtxtLevelObjects4= [];
gdjs.genelkulturCode.GDtxtTimerObjects1= [];
gdjs.genelkulturCode.GDtxtTimerObjects2= [];
gdjs.genelkulturCode.GDtxtTimerObjects3= [];
gdjs.genelkulturCode.GDtxtTimerObjects4= [];
gdjs.genelkulturCode.GDtextPuanObjects1= [];
gdjs.genelkulturCode.GDtextPuanObjects2= [];
gdjs.genelkulturCode.GDtextPuanObjects3= [];
gdjs.genelkulturCode.GDtextPuanObjects4= [];
gdjs.genelkulturCode.GDgostergeSeridiObjects1= [];
gdjs.genelkulturCode.GDgostergeSeridiObjects2= [];
gdjs.genelkulturCode.GDgostergeSeridiObjects3= [];
gdjs.genelkulturCode.GDgostergeSeridiObjects4= [];
gdjs.genelkulturCode.GDDialogPanelObjects1= [];
gdjs.genelkulturCode.GDDialogPanelObjects2= [];
gdjs.genelkulturCode.GDDialogPanelObjects3= [];
gdjs.genelkulturCode.GDDialogPanelObjects4= [];
gdjs.genelkulturCode.GDDialogBaslikObjects1= [];
gdjs.genelkulturCode.GDDialogBaslikObjects2= [];
gdjs.genelkulturCode.GDDialogBaslikObjects3= [];
gdjs.genelkulturCode.GDDialogBaslikObjects4= [];
gdjs.genelkulturCode.GDDialogPuanObjects1= [];
gdjs.genelkulturCode.GDDialogPuanObjects2= [];
gdjs.genelkulturCode.GDDialogPuanObjects3= [];
gdjs.genelkulturCode.GDDialogPuanObjects4= [];
gdjs.genelkulturCode.GDDialogMaskotObjects1= [];
gdjs.genelkulturCode.GDDialogMaskotObjects2= [];
gdjs.genelkulturCode.GDDialogMaskotObjects3= [];
gdjs.genelkulturCode.GDDialogMaskotObjects4= [];
gdjs.genelkulturCode.GDDialogDevamBtnObjects1= [];
gdjs.genelkulturCode.GDDialogDevamBtnObjects2= [];
gdjs.genelkulturCode.GDDialogDevamBtnObjects3= [];
gdjs.genelkulturCode.GDDialogDevamBtnObjects4= [];
gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects1= [];
gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects2= [];
gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects3= [];
gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects4= [];
gdjs.genelkulturCode.GDDialogCikBtnObjects1= [];
gdjs.genelkulturCode.GDDialogCikBtnObjects2= [];
gdjs.genelkulturCode.GDDialogCikBtnObjects3= [];
gdjs.genelkulturCode.GDDialogCikBtnObjects4= [];
gdjs.genelkulturCode.GDcanObjects1= [];
gdjs.genelkulturCode.GDcanObjects2= [];
gdjs.genelkulturCode.GDcanObjects3= [];
gdjs.genelkulturCode.GDcanObjects4= [];


gdjs.genelkulturCode.userFunc0x1279ef8 = function GDJSInlineCode(runtimeScene) {
"use strict";
const db = firebase.firestore();
const level = runtimeScene.getGame().getVariables().get("level").getAsNumber();
const collectionName = "questions_" + level;
const targetVariable = "dCekilenSoruListesi";

// 1. Koleksiyondaki TÜM belgeleri çek
db.collection(collectionName).get().then((querySnapshot) => {
    let tempArray = [];
    
    querySnapshot.forEach((doc) => {
        // Veriyi ve ID'yi al
        tempArray.push({ id: doc.id, ...doc.data() });
    });

    // 2. Fisher-Yates Shuffle (Tüm listeyi karıştır)
    for (let i = tempArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
    }

    // 3. LİMİTLEME: Sadece ilk 10 elemanı tut
    // Eğer koleksiyonda 10'dan az veri varsa hata vermez, olanı alır.
    const limitedArray = tempArray.slice(0, 10);

    // 4. GDevelop Değişkenine Aktar
    const gdVariable = runtimeScene.getVariables().get(targetVariable);
    gdVariable.fromJSObject(limitedArray);
    
    // İşlem bitti bayrağını kaldır
    runtimeScene.getVariables().get("VeriYuklendi").setBoolean(true);
    
    console.log("Firestore: Toplam " + tempArray.length + " soru arasından 10 tanesi seçildi ve karıştırıldı.");

}).catch((error) => {
    console.error("Firestore Hatası: ", error);
});
};
gdjs.genelkulturCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


gdjs.genelkulturCode.userFunc0x1279ef8(runtimeScene);

}


};gdjs.genelkulturCode.asyncCallback16633932 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.genelkulturCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("DialogBaslik"), gdjs.genelkulturCode.GDDialogBaslikObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("DialogCikBtn"), gdjs.genelkulturCode.GDDialogCikBtnObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("DialogDevamBtn"), gdjs.genelkulturCode.GDDialogDevamBtnObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("DialogLevelDevamBtn"), gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("DialogMaskot"), gdjs.genelkulturCode.GDDialogMaskotObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("DialogPanel"), gdjs.genelkulturCode.GDDialogPanelObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("DialogPuan"), gdjs.genelkulturCode.GDDialogPuanObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("btnA"), gdjs.genelkulturCode.GDbtnAObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("btnB"), gdjs.genelkulturCode.GDbtnBObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("btnC"), gdjs.genelkulturCode.GDbtnCObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("btnD"), gdjs.genelkulturCode.GDbtnDObjects2);

{gdjs.evtTools.sound.playSound(runtimeScene, "Sequence_01.aac", false, 30, 1);
}
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogPanelObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogPanelObjects2[i].setLayer("DialogKatman");
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogMaskotObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogMaskotObjects2[i].setLayer("DialogKatman");
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogDevamBtnObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogDevamBtnObjects2[i].setLayer("DialogKatman");
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogBaslikObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogBaslikObjects2[i].setLayer("DialogKatman");
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogPuanObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogPuanObjects2[i].setLayer("DialogKatman");
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogCikBtnObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogCikBtnObjects2[i].setLayer("DialogKatman");
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogPanelObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogPanelObjects2[i].setLayer("DialogKatman");
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogBaslikObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogBaslikObjects2[i].setLayer("DialogKatman");
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogPuanObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogPuanObjects2[i].setLayer("DialogKatman");
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogMaskotObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogMaskotObjects2[i].setLayer("DialogKatman");
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects2[i].setLayer("DialogKatman");
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogCikBtnObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogCikBtnObjects2[i].setLayer("DialogKatman");
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDbtnAObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnAObjects2[i].setLayer("");
}
for(var i = 0, len = gdjs.genelkulturCode.GDbtnBObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnBObjects2[i].setLayer("");
}
for(var i = 0, len = gdjs.genelkulturCode.GDbtnCObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnCObjects2[i].setLayer("");
}
for(var i = 0, len = gdjs.genelkulturCode.GDbtnDObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnDObjects2[i].setLayer("");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(13).setBoolean(false);
}

{ //Subevents
gdjs.genelkulturCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.genelkulturCode.localVariables.length = 0;
}
gdjs.genelkulturCode.idToCallbackMap.set(16633932, gdjs.genelkulturCode.asyncCallback16633932);
gdjs.genelkulturCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.genelkulturCode.localVariables);
for (const obj of gdjs.genelkulturCode.GDDialogBaslikObjects1) asyncObjectsList.addObject("DialogBaslik", obj);
for (const obj of gdjs.genelkulturCode.GDDialogCikBtnObjects1) asyncObjectsList.addObject("DialogCikBtn", obj);
for (const obj of gdjs.genelkulturCode.GDDialogDevamBtnObjects1) asyncObjectsList.addObject("DialogDevamBtn", obj);
for (const obj of gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects1) asyncObjectsList.addObject("DialogLevelDevamBtn", obj);
for (const obj of gdjs.genelkulturCode.GDDialogMaskotObjects1) asyncObjectsList.addObject("DialogMaskot", obj);
for (const obj of gdjs.genelkulturCode.GDDialogPanelObjects1) asyncObjectsList.addObject("DialogPanel", obj);
for (const obj of gdjs.genelkulturCode.GDDialogPuanObjects1) asyncObjectsList.addObject("DialogPuan", obj);
for (const obj of gdjs.genelkulturCode.GDbtnAObjects1) asyncObjectsList.addObject("btnA", obj);
for (const obj of gdjs.genelkulturCode.GDbtnBObjects1) asyncObjectsList.addObject("btnB", obj);
for (const obj of gdjs.genelkulturCode.GDbtnCObjects1) asyncObjectsList.addObject("btnC", obj);
for (const obj of gdjs.genelkulturCode.GDbtnDObjects1) asyncObjectsList.addObject("btnD", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.genelkulturCode.asyncCallback16633932(runtimeScene, asyncObjectsList)), 16633932, asyncObjectsList);
}
}

}


};gdjs.genelkulturCode.asyncCallback16642204 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.genelkulturCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("btnA"), gdjs.genelkulturCode.GDbtnAObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("btnB"), gdjs.genelkulturCode.GDbtnBObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("btnC"), gdjs.genelkulturCode.GDbtnCObjects2);

gdjs.copyArray(asyncObjectsList.getObjects("btnD"), gdjs.genelkulturCode.GDbtnDObjects2);

{for(var i = 0, len = gdjs.genelkulturCode.GDbtnAObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnAObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.genelkulturCode.GDbtnBObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnBObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.genelkulturCode.GDbtnCObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnCObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.genelkulturCode.GDbtnDObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnDObjects2[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(10).setBoolean(true);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setString(runtimeScene.getScene().getVariables().getFromIndex(5).getChild(0).getChild("answers").getChild(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber()).getAsString());
}
gdjs.genelkulturCode.localVariables.length = 0;
}
gdjs.genelkulturCode.idToCallbackMap.set(16642204, gdjs.genelkulturCode.asyncCallback16642204);
gdjs.genelkulturCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.genelkulturCode.localVariables);
for (const obj of gdjs.genelkulturCode.GDbtnAObjects1) asyncObjectsList.addObject("btnA", obj);
for (const obj of gdjs.genelkulturCode.GDbtnBObjects1) asyncObjectsList.addObject("btnB", obj);
for (const obj of gdjs.genelkulturCode.GDbtnCObjects1) asyncObjectsList.addObject("btnC", obj);
for (const obj of gdjs.genelkulturCode.GDbtnDObjects1) asyncObjectsList.addObject("btnD", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.genelkulturCode.asyncCallback16642204(runtimeScene, asyncObjectsList)), 16642204, asyncObjectsList);
}
}

}


};gdjs.genelkulturCode.userFunc0x128a9b0 = function GDJSInlineCode(runtimeScene) {
"use strict";
/* Doğru cevabı yeşil yapmak için */
const correct = runtimeScene.getVariables().get("degiskenCorrectAnswer").getAsNumber();

const buttons = [
  runtimeScene.getObjects("btnA")[0],
  runtimeScene.getObjects("btnB")[0],
  runtimeScene.getObjects("btnC")[0],
  runtimeScene.getObjects("btnD")[0]
];

if (buttons[correct]) {
  buttons[correct].enableEffect("yesil", true);
  buttons[correct].enableEffect("sari", false);
}

};
gdjs.genelkulturCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() == runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.genelkulturCode.GDDialogBaslikObjects2, gdjs.genelkulturCode.GDDialogBaslikObjects3);

gdjs.copyArray(gdjs.genelkulturCode.GDDialogPuanObjects2, gdjs.genelkulturCode.GDDialogPuanObjects3);

{for(var i = 0, len = gdjs.genelkulturCode.GDDialogBaslikObjects3.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogBaslikObjects3[i].getBehavior("Text").setText("Cevap Doğru!");
}
}
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "94;173;8");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Complete_02.aac", false, 50, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).add(10 + Math.max(0, 10 - Math.floor(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "CountingDown"))));
}
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogPuanObjects3.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogPuanObjects3[i].getBehavior("Text").setText("Puan: " + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() != runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.genelkulturCode.GDDialogBaslikObjects2, gdjs.genelkulturCode.GDDialogBaslikObjects3);

gdjs.copyArray(gdjs.genelkulturCode.GDDialogPuanObjects2, gdjs.genelkulturCode.GDDialogPuanObjects3);

{for(var i = 0, len = gdjs.genelkulturCode.GDDialogBaslikObjects3.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogBaslikObjects3[i].getBehavior("Text").setText("Cevap '" + runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() + "' olacaktı");
}
}
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "230;5;32");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Denied_02.aac", false, 10, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(3).sub(1);
}
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogPuanObjects3.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogPuanObjects3[i].getBehavior("Text").setText("Puan: " + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}
}

}


{


gdjs.genelkulturCode.userFunc0x128a9b0(runtimeScene);

}


};gdjs.genelkulturCode.asyncCallback16651228 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.genelkulturCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("DialogBaslik"), gdjs.genelkulturCode.GDDialogBaslikObjects2);
gdjs.copyArray(runtimeScene.getObjects("DialogCikBtn"), gdjs.genelkulturCode.GDDialogCikBtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("DialogDevamBtn"), gdjs.genelkulturCode.GDDialogDevamBtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("DialogMaskot"), gdjs.genelkulturCode.GDDialogMaskotObjects2);
gdjs.copyArray(runtimeScene.getObjects("DialogPanel"), gdjs.genelkulturCode.GDDialogPanelObjects2);
gdjs.copyArray(runtimeScene.getObjects("DialogPuan"), gdjs.genelkulturCode.GDDialogPuanObjects2);
gdjs.copyArray(runtimeScene.getObjects("btnA"), gdjs.genelkulturCode.GDbtnAObjects2);
gdjs.copyArray(runtimeScene.getObjects("btnB"), gdjs.genelkulturCode.GDbtnBObjects2);
gdjs.copyArray(runtimeScene.getObjects("btnC"), gdjs.genelkulturCode.GDbtnCObjects2);
gdjs.copyArray(runtimeScene.getObjects("btnD"), gdjs.genelkulturCode.GDbtnDObjects2);
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "bulanik", true);
}
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogPanelObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogPanelObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogMaskotObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogMaskotObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogDevamBtnObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogDevamBtnObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogBaslikObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogBaslikObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogPuanObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogPuanObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogCikBtnObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogCikBtnObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDbtnAObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnAObjects2[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDbtnBObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnBObjects2[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDbtnCObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnCObjects2[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDbtnDObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnDObjects2[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).add(1);
}
{gdjs.evtTools.variable.variableRemoveAt(runtimeScene.getScene().getVariables().getFromIndex(5), 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(13).setBoolean(true);
}

{ //Subevents
gdjs.genelkulturCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.genelkulturCode.localVariables.length = 0;
}
gdjs.genelkulturCode.idToCallbackMap.set(16651228, gdjs.genelkulturCode.asyncCallback16651228);
gdjs.genelkulturCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.genelkulturCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.genelkulturCode.asyncCallback16651228(runtimeScene, asyncObjectsList)), 16651228, asyncObjectsList);
}
}

}


};gdjs.genelkulturCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() >= 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DialogBaslik"), gdjs.genelkulturCode.GDDialogBaslikObjects3);
gdjs.copyArray(gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects2, gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects3);

{for(var i = 0, len = gdjs.genelkulturCode.GDDialogBaslikObjects3.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogBaslikObjects3[i].getBehavior("Text").setText("Yarışma Sona Erdi!");
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects3.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects3[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setString("giris");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber() < 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DialogBaslik"), gdjs.genelkulturCode.GDDialogBaslikObjects2);
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogBaslikObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogBaslikObjects2[i].getBehavior("Text").setText("Seviye " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() + " sona erdi, tebrikler!..");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setString("genelkultur");
}
}

}


};gdjs.genelkulturCode.asyncCallback16661036 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.genelkulturCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("DialogDevamBtn"), gdjs.genelkulturCode.GDDialogDevamBtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("DialogLevelDevamBtn"), gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects2);
gdjs.copyArray(runtimeScene.getObjects("btnA"), gdjs.genelkulturCode.GDbtnAObjects2);
gdjs.copyArray(runtimeScene.getObjects("btnB"), gdjs.genelkulturCode.GDbtnBObjects2);
gdjs.copyArray(runtimeScene.getObjects("btnC"), gdjs.genelkulturCode.GDbtnCObjects2);
gdjs.copyArray(runtimeScene.getObjects("btnD"), gdjs.genelkulturCode.GDbtnDObjects2);
gdjs.copyArray(asyncObjectsList.getObjects("can"), gdjs.genelkulturCode.GDcanObjects2);

gdjs.copyArray(runtimeScene.getObjects("gostergeSeridi"), gdjs.genelkulturCode.GDgostergeSeridiObjects2);
gdjs.copyArray(runtimeScene.getObjects("textPuan"), gdjs.genelkulturCode.GDtextPuanObjects2);
gdjs.copyArray(runtimeScene.getObjects("txtLevel"), gdjs.genelkulturCode.GDtxtLevelObjects2);
gdjs.copyArray(runtimeScene.getObjects("txtSoru"), gdjs.genelkulturCode.GDtxtSoruObjects2);
gdjs.copyArray(runtimeScene.getObjects("txtSoruNo"), gdjs.genelkulturCode.GDtxtSoruNoObjects2);
gdjs.copyArray(runtimeScene.getObjects("txtTimer"), gdjs.genelkulturCode.GDtxtTimerObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(13).setBoolean(true);
}
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "245;166;35");
}
{for(var i = 0, len = gdjs.genelkulturCode.GDbtnAObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnAObjects2[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDbtnBObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnBObjects2[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDbtnCObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnCObjects2[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDbtnDObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnDObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDtxtSoruNoObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDtxtSoruNoObjects2[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDtxtLevelObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDtxtLevelObjects2[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDcanObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDcanObjects2[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDtxtTimerObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDtxtTimerObjects2[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDtextPuanObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDtextPuanObjects2[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDgostergeSeridiObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDgostergeSeridiObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDtxtSoruObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDtxtSoruObjects2[i].getBehavior("Text").setText(" ");
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects2[i].setPosition(665,464);
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogDevamBtnObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogDevamBtnObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogDevamBtnObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogDevamBtnObjects2[i].setPosition(1000,1000);
}
}

{ //Subevents
gdjs.genelkulturCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.genelkulturCode.localVariables.length = 0;
}
gdjs.genelkulturCode.idToCallbackMap.set(16661036, gdjs.genelkulturCode.asyncCallback16661036);
gdjs.genelkulturCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.genelkulturCode.localVariables);
for (const obj of gdjs.genelkulturCode.GDcanObjects1) asyncObjectsList.addObject("can", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.genelkulturCode.asyncCallback16661036(runtimeScene, asyncObjectsList)), 16661036, asyncObjectsList);
}
}

}


};gdjs.genelkulturCode.asyncCallback16669268 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.genelkulturCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "giris", false);
}
gdjs.genelkulturCode.localVariables.length = 0;
}
gdjs.genelkulturCode.idToCallbackMap.set(16669268, gdjs.genelkulturCode.asyncCallback16669268);
gdjs.genelkulturCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.genelkulturCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.genelkulturCode.asyncCallback16669268(runtimeScene, asyncObjectsList)), 16669268, asyncObjectsList);
}
}

}


};gdjs.genelkulturCode.asyncCallback16668908 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.genelkulturCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("DialogBaslik"), gdjs.genelkulturCode.GDDialogBaslikObjects2);
gdjs.copyArray(runtimeScene.getObjects("DialogPuan"), gdjs.genelkulturCode.GDDialogPuanObjects2);
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogBaslikObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogBaslikObjects2[i].getBehavior("Text").setText("Canların bitti, yarışma sona erdi");
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogPuanObjects2.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogPuanObjects2[i].getBehavior("Text").setText("Puan: " + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}

{ //Subevents
gdjs.genelkulturCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.genelkulturCode.localVariables.length = 0;
}
gdjs.genelkulturCode.idToCallbackMap.set(16668908, gdjs.genelkulturCode.asyncCallback16668908);
gdjs.genelkulturCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.genelkulturCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.genelkulturCode.asyncCallback16668908(runtimeScene, asyncObjectsList)), 16668908, asyncObjectsList);
}
}

}


};gdjs.genelkulturCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16632892);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DialogBaslik"), gdjs.genelkulturCode.GDDialogBaslikObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogCikBtn"), gdjs.genelkulturCode.GDDialogCikBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogDevamBtn"), gdjs.genelkulturCode.GDDialogDevamBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogLevelDevamBtn"), gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogMaskot"), gdjs.genelkulturCode.GDDialogMaskotObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogPanel"), gdjs.genelkulturCode.GDDialogPanelObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogPuan"), gdjs.genelkulturCode.GDDialogPuanObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnA"), gdjs.genelkulturCode.GDbtnAObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnB"), gdjs.genelkulturCode.GDbtnBObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnC"), gdjs.genelkulturCode.GDbtnCObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnD"), gdjs.genelkulturCode.GDbtnDObjects1);
gdjs.copyArray(runtimeScene.getObjects("can"), gdjs.genelkulturCode.GDcanObjects1);
gdjs.copyArray(runtimeScene.getObjects("gostergeSeridi"), gdjs.genelkulturCode.GDgostergeSeridiObjects1);
gdjs.copyArray(runtimeScene.getObjects("textPuan"), gdjs.genelkulturCode.GDtextPuanObjects1);
gdjs.copyArray(runtimeScene.getObjects("txtLevel"), gdjs.genelkulturCode.GDtxtLevelObjects1);
gdjs.copyArray(runtimeScene.getObjects("txtSoruNo"), gdjs.genelkulturCode.GDtxtSoruNoObjects1);
gdjs.copyArray(runtimeScene.getObjects("txtTimer"), gdjs.genelkulturCode.GDtxtTimerObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(8).setBoolean(true);
}
{for(var i = 0, len = gdjs.genelkulturCode.GDbtnAObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnAObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDbtnBObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnBObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDbtnCObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnCObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDbtnDObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnDObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDtxtSoruNoObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDtxtSoruNoObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDtxtLevelObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDtxtLevelObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDcanObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDcanObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDtxtTimerObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDtxtTimerObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDtextPuanObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDtextPuanObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDgostergeSeridiObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDgostergeSeridiObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogPanelObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogPanelObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogMaskotObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogMaskotObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogDevamBtnObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogDevamBtnObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogBaslikObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogBaslikObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogPuanObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogPuanObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogCikBtnObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogCikBtnObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogPanelObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogPanelObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogBaslikObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogBaslikObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogPuanObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogPuanObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogMaskotObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogMaskotObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogCikBtnObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogCikBtnObjects1[i].hide();
}
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "bulanik", false);
}

{ //Subevents
gdjs.genelkulturCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("can"), gdjs.genelkulturCode.GDcanObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(6).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getChild(0).getChild("question").getAsString() != "0");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.genelkulturCode.GDcanObjects1.length;i<l;++i) {
    if ( gdjs.genelkulturCode.GDcanObjects1[i].Rate(null) != 0 ) {
        isConditionTrue_0 = true;
        gdjs.genelkulturCode.GDcanObjects1[k] = gdjs.genelkulturCode.GDcanObjects1[i];
        ++k;
    }
}
gdjs.genelkulturCode.GDcanObjects1.length = k;
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("btnA"), gdjs.genelkulturCode.GDbtnAObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnB"), gdjs.genelkulturCode.GDbtnBObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnC"), gdjs.genelkulturCode.GDbtnCObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnD"), gdjs.genelkulturCode.GDbtnDObjects1);
/* Reuse gdjs.genelkulturCode.GDcanObjects1 */
gdjs.copyArray(runtimeScene.getObjects("gostergeSeridi"), gdjs.genelkulturCode.GDgostergeSeridiObjects1);
gdjs.copyArray(runtimeScene.getObjects("textPuan"), gdjs.genelkulturCode.GDtextPuanObjects1);
gdjs.copyArray(runtimeScene.getObjects("txtLevel"), gdjs.genelkulturCode.GDtxtLevelObjects1);
gdjs.copyArray(runtimeScene.getObjects("txtSoru"), gdjs.genelkulturCode.GDtxtSoruObjects1);
gdjs.copyArray(runtimeScene.getObjects("txtSoruNo"), gdjs.genelkulturCode.GDtxtSoruNoObjects1);
gdjs.copyArray(runtimeScene.getObjects("txtTimer"), gdjs.genelkulturCode.GDtxtTimerObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(8).setBoolean(false);
}
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "CountingDown");
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CountingDown");
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(9);
}
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "245;166;35");
}
{for(var i = 0, len = gdjs.genelkulturCode.GDbtnAObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnAObjects1[i].getBehavior("Effect").enableEffect("sari", false);
}
for(var i = 0, len = gdjs.genelkulturCode.GDbtnBObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnBObjects1[i].getBehavior("Effect").enableEffect("sari", false);
}
for(var i = 0, len = gdjs.genelkulturCode.GDbtnCObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnCObjects1[i].getBehavior("Effect").enableEffect("sari", false);
}
for(var i = 0, len = gdjs.genelkulturCode.GDbtnDObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnDObjects1[i].getBehavior("Effect").enableEffect("sari", false);
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDbtnAObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnAObjects1[i].getBehavior("Effect").enableEffect("yesil", false);
}
for(var i = 0, len = gdjs.genelkulturCode.GDbtnBObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnBObjects1[i].getBehavior("Effect").enableEffect("yesil", false);
}
for(var i = 0, len = gdjs.genelkulturCode.GDbtnCObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnCObjects1[i].getBehavior("Effect").enableEffect("yesil", false);
}
for(var i = 0, len = gdjs.genelkulturCode.GDbtnDObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnDObjects1[i].getBehavior("Effect").enableEffect("yesil", false);
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDtxtSoruObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDtxtSoruObjects1[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(5).getChild(0).getChild("question").getAsString());
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDbtnAObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnAObjects1[i].SetLabelTextOp(runtimeScene.getScene().getVariables().getFromIndex(5).getChild(0).getChild("answers").getChild(0).getAsString(), null);
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDbtnBObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnBObjects1[i].SetLabelTextOp(runtimeScene.getScene().getVariables().getFromIndex(5).getChild(0).getChild("answers").getChild(1).getAsString(), null);
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDbtnCObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnCObjects1[i].SetLabelTextOp(runtimeScene.getScene().getVariables().getFromIndex(5).getChild(0).getChild("answers").getChild(2).getAsString(), null);
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDbtnDObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnDObjects1[i].SetLabelTextOp(runtimeScene.getScene().getVariables().getFromIndex(5).getChild(0).getChild("answers").getChild(3).getAsString(), null);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(runtimeScene.getScene().getVariables().getFromIndex(5).getChild(0).getChild("correctAnswer").getAsNumber());
}
{for(var i = 0, len = gdjs.genelkulturCode.GDtxtLevelObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDtxtLevelObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() + ". Seviye");
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDtxtSoruNoObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDtxtSoruNoObjects1[i].getBehavior("Text").setText("Soru " + runtimeScene.getScene().getVariables().getFromIndex(7).getAsString());
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDtxtSoruNoObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDtxtSoruNoObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.genelkulturCode.GDtxtLevelObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDtxtLevelObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.genelkulturCode.GDcanObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDcanObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.genelkulturCode.GDtxtTimerObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDtxtTimerObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.genelkulturCode.GDtextPuanObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDtextPuanObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.genelkulturCode.GDgostergeSeridiObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDgostergeSeridiObjects1[i].hide(false);
}
}

{ //Subevents
gdjs.genelkulturCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnA"), gdjs.genelkulturCode.GDbtnAObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.genelkulturCode.GDbtnAObjects1.length;i<l;++i) {
    if ( gdjs.genelkulturCode.GDbtnAObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.genelkulturCode.GDbtnAObjects1[k] = gdjs.genelkulturCode.GDbtnAObjects1[i];
        ++k;
    }
}
gdjs.genelkulturCode.GDbtnAObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(10).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16644316);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.genelkulturCode.GDbtnAObjects1 */
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "155;155;155");
}
{for(var i = 0, len = gdjs.genelkulturCode.GDbtnAObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnAObjects1[i].getBehavior("Effect").enableEffect("sari", true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(10).setBoolean(false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnB"), gdjs.genelkulturCode.GDbtnBObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.genelkulturCode.GDbtnBObjects1.length;i<l;++i) {
    if ( gdjs.genelkulturCode.GDbtnBObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.genelkulturCode.GDbtnBObjects1[k] = gdjs.genelkulturCode.GDbtnBObjects1[i];
        ++k;
    }
}
gdjs.genelkulturCode.GDbtnBObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(10).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16646044);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.genelkulturCode.GDbtnBObjects1 */
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "155;155;155");
}
{for(var i = 0, len = gdjs.genelkulturCode.GDbtnBObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnBObjects1[i].getBehavior("Effect").enableEffect("sari", true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(10).setBoolean(false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnC"), gdjs.genelkulturCode.GDbtnCObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.genelkulturCode.GDbtnCObjects1.length;i<l;++i) {
    if ( gdjs.genelkulturCode.GDbtnCObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.genelkulturCode.GDbtnCObjects1[k] = gdjs.genelkulturCode.GDbtnCObjects1[i];
        ++k;
    }
}
gdjs.genelkulturCode.GDbtnCObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(10).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16647732);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.genelkulturCode.GDbtnCObjects1 */
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "155;155;155");
}
{for(var i = 0, len = gdjs.genelkulturCode.GDbtnCObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnCObjects1[i].getBehavior("Effect").enableEffect("sari", true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(2);
}
{runtimeScene.getScene().getVariables().getFromIndex(10).setBoolean(false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btnD"), gdjs.genelkulturCode.GDbtnDObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.genelkulturCode.GDbtnDObjects1.length;i<l;++i) {
    if ( gdjs.genelkulturCode.GDbtnDObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.genelkulturCode.GDbtnDObjects1[k] = gdjs.genelkulturCode.GDbtnDObjects1[i];
        ++k;
    }
}
gdjs.genelkulturCode.GDbtnDObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(10).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16649460);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.genelkulturCode.GDbtnDObjects1 */
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "155;155;155");
}
{for(var i = 0, len = gdjs.genelkulturCode.GDbtnDObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnDObjects1[i].getBehavior("Effect").enableEffect("sari", true);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(3);
}
{runtimeScene.getScene().getVariables().getFromIndex(10).setBoolean(false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(10).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16651156);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "CountingDown");
}

{ //Subevents
gdjs.genelkulturCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DialogDevamBtn"), gdjs.genelkulturCode.GDDialogDevamBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.genelkulturCode.GDDialogDevamBtnObjects1.length;i<l;++i) {
    if ( gdjs.genelkulturCode.GDDialogDevamBtnObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.genelkulturCode.GDDialogDevamBtnObjects1[k] = gdjs.genelkulturCode.GDDialogDevamBtnObjects1[i];
        ++k;
    }
}
gdjs.genelkulturCode.GDDialogDevamBtnObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(8).setBoolean(true);
}
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "bulanik", false);
}
{runtimeScene.getScene().getVariables().getFromIndex(13).setBoolean(false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DialogCikBtn"), gdjs.genelkulturCode.GDDialogCikBtnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.genelkulturCode.GDDialogCikBtnObjects1.length;i<l;++i) {
    if ( gdjs.genelkulturCode.GDDialogCikBtnObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.genelkulturCode.GDDialogCikBtnObjects1[k] = gdjs.genelkulturCode.GDDialogCikBtnObjects1[i];
        ++k;
    }
}
gdjs.genelkulturCode.GDDialogCikBtnObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DialogBaslik"), gdjs.genelkulturCode.GDDialogBaslikObjects1);
/* Reuse gdjs.genelkulturCode.GDDialogCikBtnObjects1 */
gdjs.copyArray(runtimeScene.getObjects("DialogDevamBtn"), gdjs.genelkulturCode.GDDialogDevamBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogMaskot"), gdjs.genelkulturCode.GDDialogMaskotObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogPanel"), gdjs.genelkulturCode.GDDialogPanelObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogPuan"), gdjs.genelkulturCode.GDDialogPuanObjects1);
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogPanelObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogPanelObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogMaskotObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogMaskotObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogDevamBtnObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogDevamBtnObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogBaslikObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogBaslikObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogPuanObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogPuanObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDDialogCikBtnObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogCikBtnObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "giris", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DialogLevelDevamBtn"), gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("can"), gdjs.genelkulturCode.GDcanObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects1.length;i<l;++i) {
    if ( gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects1[k] = gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects1[i];
        ++k;
    }
}
gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.genelkulturCode.GDcanObjects1.length;i<l;++i) {
    if ( gdjs.genelkulturCode.GDcanObjects1[i].Rate(null) != 0 ) {
        isConditionTrue_0 = true;
        gdjs.genelkulturCode.GDcanObjects1[k] = gdjs.genelkulturCode.GDcanObjects1[i];
        ++k;
    }
}
gdjs.genelkulturCode.GDcanObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(9).getAsString(), false);
}
{runtimeScene.getScene().getVariables().getFromIndex(13).setBoolean(false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("can"), gdjs.genelkulturCode.GDcanObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(5).getChild(0).getChild("question").getAsString() == "0");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(6).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(8).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.genelkulturCode.GDcanObjects1.length;i<l;++i) {
    if ( gdjs.genelkulturCode.GDcanObjects1[i].Rate(null) != 0 ) {
        isConditionTrue_0 = true;
        gdjs.genelkulturCode.GDcanObjects1[k] = gdjs.genelkulturCode.GDcanObjects1[i];
        ++k;
    }
}
gdjs.genelkulturCode.GDcanObjects1.length = k;
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.genelkulturCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "CountingDown") > 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16665708);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("txtSoru"), gdjs.genelkulturCode.GDtxtSoruObjects1);
{for(var i = 0, len = gdjs.genelkulturCode.GDtxtSoruObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDtxtSoruObjects1[i].getBehavior("Text").setText("\nSÜRE BİTTİ");
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "Shield up effect.aac", false, 50, 1);
}
{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "230;5;32");
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(9);
}
{runtimeScene.getScene().getVariables().getFromIndex(10).setBoolean(false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("can"), gdjs.genelkulturCode.GDcanObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.genelkulturCode.GDcanObjects1.length;i<l;++i) {
    if ( gdjs.genelkulturCode.GDcanObjects1[i].Rate(null) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.genelkulturCode.GDcanObjects1[k] = gdjs.genelkulturCode.GDcanObjects1[i];
        ++k;
    }
}
gdjs.genelkulturCode.GDcanObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16667300);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DialogDevamBtn"), gdjs.genelkulturCode.GDDialogDevamBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogLevelDevamBtn"), gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnA"), gdjs.genelkulturCode.GDbtnAObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnB"), gdjs.genelkulturCode.GDbtnBObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnC"), gdjs.genelkulturCode.GDbtnCObjects1);
gdjs.copyArray(runtimeScene.getObjects("btnD"), gdjs.genelkulturCode.GDbtnDObjects1);
/* Reuse gdjs.genelkulturCode.GDcanObjects1 */
gdjs.copyArray(runtimeScene.getObjects("gostergeSeridi"), gdjs.genelkulturCode.GDgostergeSeridiObjects1);
gdjs.copyArray(runtimeScene.getObjects("textPuan"), gdjs.genelkulturCode.GDtextPuanObjects1);
gdjs.copyArray(runtimeScene.getObjects("txtLevel"), gdjs.genelkulturCode.GDtxtLevelObjects1);
gdjs.copyArray(runtimeScene.getObjects("txtSoru"), gdjs.genelkulturCode.GDtxtSoruObjects1);
gdjs.copyArray(runtimeScene.getObjects("txtSoruNo"), gdjs.genelkulturCode.GDtxtSoruNoObjects1);
gdjs.copyArray(runtimeScene.getObjects("txtTimer"), gdjs.genelkulturCode.GDtxtTimerObjects1);
{for(var i = 0, len = gdjs.genelkulturCode.GDtxtSoruObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDtxtSoruObjects1[i].getBehavior("Text").setText("Canların bitti, yarışma sona erdi");
}
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "CountingDown");
}
{for(var i = 0, len = gdjs.genelkulturCode.GDtxtSoruNoObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDtxtSoruNoObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDtxtLevelObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDtxtLevelObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDcanObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDcanObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDtxtTimerObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDtxtTimerObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDtextPuanObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDtextPuanObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDgostergeSeridiObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDgostergeSeridiObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDbtnAObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnAObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDbtnBObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnBObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDbtnCObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnCObjects1[i].hide();
}
for(var i = 0, len = gdjs.genelkulturCode.GDbtnDObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDbtnDObjects1[i].hide();
}
}
{runtimeScene.getScene().getVariables().getFromIndex(13).setBoolean(true);
}
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogDevamBtnObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogDevamBtnObjects1[i].setPosition(1000,1000);
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects1[i].setPosition(1000,1000);
}
}

{ //Subevents
gdjs.genelkulturCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("can"), gdjs.genelkulturCode.GDcanObjects1);
gdjs.copyArray(runtimeScene.getObjects("textPuan"), gdjs.genelkulturCode.GDtextPuanObjects1);
gdjs.copyArray(runtimeScene.getObjects("txtTimer"), gdjs.genelkulturCode.GDtxtTimerObjects1);
{for(var i = 0, len = gdjs.genelkulturCode.GDtxtTimerObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDtxtTimerObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.max(0, 10 - Math.floor(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "CountingDown")))));
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDtextPuanObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDtextPuanObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDcanObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDcanObjects1[i].SetRate(runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber(), null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(13).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DialogBaslik"), gdjs.genelkulturCode.GDDialogBaslikObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogCikBtn"), gdjs.genelkulturCode.GDDialogCikBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogDevamBtn"), gdjs.genelkulturCode.GDDialogDevamBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogMaskot"), gdjs.genelkulturCode.GDDialogMaskotObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogPanel"), gdjs.genelkulturCode.GDDialogPanelObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogPuan"), gdjs.genelkulturCode.GDDialogPuanObjects1);
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogPanelObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogPanelObjects1[i].setPosition(295,154);
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogBaslikObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogBaslikObjects1[i].setPosition(540,190);
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogMaskotObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogMaskotObjects1[i].setPosition(350,195);
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogPuanObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogPuanObjects1[i].setPosition(550,360);
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogCikBtnObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogCikBtnObjects1[i].setPosition(350,480);
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogDevamBtnObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogDevamBtnObjects1[i].setPosition(735,460);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(13).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("DialogBaslik"), gdjs.genelkulturCode.GDDialogBaslikObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogCikBtn"), gdjs.genelkulturCode.GDDialogCikBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogDevamBtn"), gdjs.genelkulturCode.GDDialogDevamBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogLevelDevamBtn"), gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogMaskot"), gdjs.genelkulturCode.GDDialogMaskotObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogPanel"), gdjs.genelkulturCode.GDDialogPanelObjects1);
gdjs.copyArray(runtimeScene.getObjects("DialogPuan"), gdjs.genelkulturCode.GDDialogPuanObjects1);
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogPanelObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogPanelObjects1[i].setPosition(1000,1000);
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogBaslikObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogBaslikObjects1[i].setPosition(1000,1000);
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogMaskotObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogMaskotObjects1[i].setPosition(1000,1000);
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogPuanObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogPuanObjects1[i].setPosition(1000,1000);
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogCikBtnObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogCikBtnObjects1[i].setPosition(1000,1000);
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogDevamBtnObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogDevamBtnObjects1[i].setPosition(1000,1000);
}
}
{for(var i = 0, len = gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects1.length ;i < len;++i) {
    gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects1[i].setPosition(1000,1000);
}
}
}

}


};

gdjs.genelkulturCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.genelkulturCode.GDtxtSoruObjects1.length = 0;
gdjs.genelkulturCode.GDtxtSoruObjects2.length = 0;
gdjs.genelkulturCode.GDtxtSoruObjects3.length = 0;
gdjs.genelkulturCode.GDtxtSoruObjects4.length = 0;
gdjs.genelkulturCode.GDbtnAObjects1.length = 0;
gdjs.genelkulturCode.GDbtnAObjects2.length = 0;
gdjs.genelkulturCode.GDbtnAObjects3.length = 0;
gdjs.genelkulturCode.GDbtnAObjects4.length = 0;
gdjs.genelkulturCode.GDbtnBObjects1.length = 0;
gdjs.genelkulturCode.GDbtnBObjects2.length = 0;
gdjs.genelkulturCode.GDbtnBObjects3.length = 0;
gdjs.genelkulturCode.GDbtnBObjects4.length = 0;
gdjs.genelkulturCode.GDbtnCObjects1.length = 0;
gdjs.genelkulturCode.GDbtnCObjects2.length = 0;
gdjs.genelkulturCode.GDbtnCObjects3.length = 0;
gdjs.genelkulturCode.GDbtnCObjects4.length = 0;
gdjs.genelkulturCode.GDbtnDObjects1.length = 0;
gdjs.genelkulturCode.GDbtnDObjects2.length = 0;
gdjs.genelkulturCode.GDbtnDObjects3.length = 0;
gdjs.genelkulturCode.GDbtnDObjects4.length = 0;
gdjs.genelkulturCode.GDbtnBaslaObjects1.length = 0;
gdjs.genelkulturCode.GDbtnBaslaObjects2.length = 0;
gdjs.genelkulturCode.GDbtnBaslaObjects3.length = 0;
gdjs.genelkulturCode.GDbtnBaslaObjects4.length = 0;
gdjs.genelkulturCode.GDtxtSoruNoObjects1.length = 0;
gdjs.genelkulturCode.GDtxtSoruNoObjects2.length = 0;
gdjs.genelkulturCode.GDtxtSoruNoObjects3.length = 0;
gdjs.genelkulturCode.GDtxtSoruNoObjects4.length = 0;
gdjs.genelkulturCode.GDtxtLevelObjects1.length = 0;
gdjs.genelkulturCode.GDtxtLevelObjects2.length = 0;
gdjs.genelkulturCode.GDtxtLevelObjects3.length = 0;
gdjs.genelkulturCode.GDtxtLevelObjects4.length = 0;
gdjs.genelkulturCode.GDtxtTimerObjects1.length = 0;
gdjs.genelkulturCode.GDtxtTimerObjects2.length = 0;
gdjs.genelkulturCode.GDtxtTimerObjects3.length = 0;
gdjs.genelkulturCode.GDtxtTimerObjects4.length = 0;
gdjs.genelkulturCode.GDtextPuanObjects1.length = 0;
gdjs.genelkulturCode.GDtextPuanObjects2.length = 0;
gdjs.genelkulturCode.GDtextPuanObjects3.length = 0;
gdjs.genelkulturCode.GDtextPuanObjects4.length = 0;
gdjs.genelkulturCode.GDgostergeSeridiObjects1.length = 0;
gdjs.genelkulturCode.GDgostergeSeridiObjects2.length = 0;
gdjs.genelkulturCode.GDgostergeSeridiObjects3.length = 0;
gdjs.genelkulturCode.GDgostergeSeridiObjects4.length = 0;
gdjs.genelkulturCode.GDDialogPanelObjects1.length = 0;
gdjs.genelkulturCode.GDDialogPanelObjects2.length = 0;
gdjs.genelkulturCode.GDDialogPanelObjects3.length = 0;
gdjs.genelkulturCode.GDDialogPanelObjects4.length = 0;
gdjs.genelkulturCode.GDDialogBaslikObjects1.length = 0;
gdjs.genelkulturCode.GDDialogBaslikObjects2.length = 0;
gdjs.genelkulturCode.GDDialogBaslikObjects3.length = 0;
gdjs.genelkulturCode.GDDialogBaslikObjects4.length = 0;
gdjs.genelkulturCode.GDDialogPuanObjects1.length = 0;
gdjs.genelkulturCode.GDDialogPuanObjects2.length = 0;
gdjs.genelkulturCode.GDDialogPuanObjects3.length = 0;
gdjs.genelkulturCode.GDDialogPuanObjects4.length = 0;
gdjs.genelkulturCode.GDDialogMaskotObjects1.length = 0;
gdjs.genelkulturCode.GDDialogMaskotObjects2.length = 0;
gdjs.genelkulturCode.GDDialogMaskotObjects3.length = 0;
gdjs.genelkulturCode.GDDialogMaskotObjects4.length = 0;
gdjs.genelkulturCode.GDDialogDevamBtnObjects1.length = 0;
gdjs.genelkulturCode.GDDialogDevamBtnObjects2.length = 0;
gdjs.genelkulturCode.GDDialogDevamBtnObjects3.length = 0;
gdjs.genelkulturCode.GDDialogDevamBtnObjects4.length = 0;
gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects1.length = 0;
gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects2.length = 0;
gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects3.length = 0;
gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects4.length = 0;
gdjs.genelkulturCode.GDDialogCikBtnObjects1.length = 0;
gdjs.genelkulturCode.GDDialogCikBtnObjects2.length = 0;
gdjs.genelkulturCode.GDDialogCikBtnObjects3.length = 0;
gdjs.genelkulturCode.GDDialogCikBtnObjects4.length = 0;
gdjs.genelkulturCode.GDcanObjects1.length = 0;
gdjs.genelkulturCode.GDcanObjects2.length = 0;
gdjs.genelkulturCode.GDcanObjects3.length = 0;
gdjs.genelkulturCode.GDcanObjects4.length = 0;

gdjs.genelkulturCode.eventsList9(runtimeScene);
gdjs.genelkulturCode.GDtxtSoruObjects1.length = 0;
gdjs.genelkulturCode.GDtxtSoruObjects2.length = 0;
gdjs.genelkulturCode.GDtxtSoruObjects3.length = 0;
gdjs.genelkulturCode.GDtxtSoruObjects4.length = 0;
gdjs.genelkulturCode.GDbtnAObjects1.length = 0;
gdjs.genelkulturCode.GDbtnAObjects2.length = 0;
gdjs.genelkulturCode.GDbtnAObjects3.length = 0;
gdjs.genelkulturCode.GDbtnAObjects4.length = 0;
gdjs.genelkulturCode.GDbtnBObjects1.length = 0;
gdjs.genelkulturCode.GDbtnBObjects2.length = 0;
gdjs.genelkulturCode.GDbtnBObjects3.length = 0;
gdjs.genelkulturCode.GDbtnBObjects4.length = 0;
gdjs.genelkulturCode.GDbtnCObjects1.length = 0;
gdjs.genelkulturCode.GDbtnCObjects2.length = 0;
gdjs.genelkulturCode.GDbtnCObjects3.length = 0;
gdjs.genelkulturCode.GDbtnCObjects4.length = 0;
gdjs.genelkulturCode.GDbtnDObjects1.length = 0;
gdjs.genelkulturCode.GDbtnDObjects2.length = 0;
gdjs.genelkulturCode.GDbtnDObjects3.length = 0;
gdjs.genelkulturCode.GDbtnDObjects4.length = 0;
gdjs.genelkulturCode.GDbtnBaslaObjects1.length = 0;
gdjs.genelkulturCode.GDbtnBaslaObjects2.length = 0;
gdjs.genelkulturCode.GDbtnBaslaObjects3.length = 0;
gdjs.genelkulturCode.GDbtnBaslaObjects4.length = 0;
gdjs.genelkulturCode.GDtxtSoruNoObjects1.length = 0;
gdjs.genelkulturCode.GDtxtSoruNoObjects2.length = 0;
gdjs.genelkulturCode.GDtxtSoruNoObjects3.length = 0;
gdjs.genelkulturCode.GDtxtSoruNoObjects4.length = 0;
gdjs.genelkulturCode.GDtxtLevelObjects1.length = 0;
gdjs.genelkulturCode.GDtxtLevelObjects2.length = 0;
gdjs.genelkulturCode.GDtxtLevelObjects3.length = 0;
gdjs.genelkulturCode.GDtxtLevelObjects4.length = 0;
gdjs.genelkulturCode.GDtxtTimerObjects1.length = 0;
gdjs.genelkulturCode.GDtxtTimerObjects2.length = 0;
gdjs.genelkulturCode.GDtxtTimerObjects3.length = 0;
gdjs.genelkulturCode.GDtxtTimerObjects4.length = 0;
gdjs.genelkulturCode.GDtextPuanObjects1.length = 0;
gdjs.genelkulturCode.GDtextPuanObjects2.length = 0;
gdjs.genelkulturCode.GDtextPuanObjects3.length = 0;
gdjs.genelkulturCode.GDtextPuanObjects4.length = 0;
gdjs.genelkulturCode.GDgostergeSeridiObjects1.length = 0;
gdjs.genelkulturCode.GDgostergeSeridiObjects2.length = 0;
gdjs.genelkulturCode.GDgostergeSeridiObjects3.length = 0;
gdjs.genelkulturCode.GDgostergeSeridiObjects4.length = 0;
gdjs.genelkulturCode.GDDialogPanelObjects1.length = 0;
gdjs.genelkulturCode.GDDialogPanelObjects2.length = 0;
gdjs.genelkulturCode.GDDialogPanelObjects3.length = 0;
gdjs.genelkulturCode.GDDialogPanelObjects4.length = 0;
gdjs.genelkulturCode.GDDialogBaslikObjects1.length = 0;
gdjs.genelkulturCode.GDDialogBaslikObjects2.length = 0;
gdjs.genelkulturCode.GDDialogBaslikObjects3.length = 0;
gdjs.genelkulturCode.GDDialogBaslikObjects4.length = 0;
gdjs.genelkulturCode.GDDialogPuanObjects1.length = 0;
gdjs.genelkulturCode.GDDialogPuanObjects2.length = 0;
gdjs.genelkulturCode.GDDialogPuanObjects3.length = 0;
gdjs.genelkulturCode.GDDialogPuanObjects4.length = 0;
gdjs.genelkulturCode.GDDialogMaskotObjects1.length = 0;
gdjs.genelkulturCode.GDDialogMaskotObjects2.length = 0;
gdjs.genelkulturCode.GDDialogMaskotObjects3.length = 0;
gdjs.genelkulturCode.GDDialogMaskotObjects4.length = 0;
gdjs.genelkulturCode.GDDialogDevamBtnObjects1.length = 0;
gdjs.genelkulturCode.GDDialogDevamBtnObjects2.length = 0;
gdjs.genelkulturCode.GDDialogDevamBtnObjects3.length = 0;
gdjs.genelkulturCode.GDDialogDevamBtnObjects4.length = 0;
gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects1.length = 0;
gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects2.length = 0;
gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects3.length = 0;
gdjs.genelkulturCode.GDDialogLevelDevamBtnObjects4.length = 0;
gdjs.genelkulturCode.GDDialogCikBtnObjects1.length = 0;
gdjs.genelkulturCode.GDDialogCikBtnObjects2.length = 0;
gdjs.genelkulturCode.GDDialogCikBtnObjects3.length = 0;
gdjs.genelkulturCode.GDDialogCikBtnObjects4.length = 0;
gdjs.genelkulturCode.GDcanObjects1.length = 0;
gdjs.genelkulturCode.GDcanObjects2.length = 0;
gdjs.genelkulturCode.GDcanObjects3.length = 0;
gdjs.genelkulturCode.GDcanObjects4.length = 0;


return;

}

gdjs['genelkulturCode'] = gdjs.genelkulturCode;
