
gdjs.evtsExt__StarRatingBar__StarRatingBar = gdjs.evtsExt__StarRatingBar__StarRatingBar || {};

/**
 * Object generated from Star Rating Bar
 */
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar = class StarRatingBar extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.Rate = objectData.content.Rate !== undefined ? objectData.content.Rate : Number("3") || 0;
    this._objectData.ShakingOnHoverEnabled = objectData.content.ShakingOnHoverEnabled !== undefined ? objectData.content.ShakingOnHoverEnabled : true;
    this._objectData.Disabled = objectData.content.Disabled !== undefined ? objectData.content.Disabled : false;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.Rate !== newObjectData.content.Rate)
      this._objectData.Rate = newObjectData.content.Rate;
    if (oldObjectData.content.ShakingOnHoverEnabled !== newObjectData.content.ShakingOnHoverEnabled)
      this._objectData.ShakingOnHoverEnabled = newObjectData.content.ShakingOnHoverEnabled;
    if (oldObjectData.content.Disabled !== newObjectData.content.Disabled)
      this._objectData.Disabled = newObjectData.content.Disabled;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getRate() {
    return this._objectData.Rate !== undefined ? this._objectData.Rate : Number("3") || 0;
  }
  _setRate(newValue) {
    this._objectData.Rate = newValue;
  }
  _getShakingOnHoverEnabled() {
    return this._objectData.ShakingOnHoverEnabled !== undefined ? this._objectData.ShakingOnHoverEnabled : true;
  }
  _setShakingOnHoverEnabled(newValue) {
    this._objectData.ShakingOnHoverEnabled = newValue;
  }
  _toggleShakingOnHoverEnabled() {
    this._setShakingOnHoverEnabled(!this._getShakingOnHoverEnabled());
  }
  _getDisabled() {
    return this._objectData.Disabled !== undefined ? this._objectData.Disabled : false;
  }
  _setDisabled(newValue) {
    this._objectData.Disabled = newValue;
  }
  _toggleDisabled() {
    this._setDisabled(!this._getDisabled());
  }

  

  
}

// Methods:
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext = {};
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDStarObjects1= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDStarObjects2= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDBackgroundObjects1= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDBackgroundObjects2= [];


gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Star"), gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDStarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDStarObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDStarObjects1[i].getVariableNumber(gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDStarObjects1[i].getVariables().get("ID")) > eventsFunctionContext.getObjects("Object")[0]._getRate() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDStarObjects1[k] = gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDStarObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDStarObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDStarObjects1 */
{for(var i = 0, len = gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDStarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDStarObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("Disabled");
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Star"), gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDStarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDStarObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDStarObjects1[i].getVariableNumber(gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDStarObjects1[i].getVariables().get("ID")) <= eventsFunctionContext.getObjects("Object")[0]._getRate() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDStarObjects1[k] = gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDStarObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDStarObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDStarObjects1 */
{for(var i = 0, len = gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDStarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDStarObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("Enabled");
}
}
}

}


};

gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDStarObjectsList = [...runtimeScene.getObjects("Star")];
var GDStarObjects = Hashtable.newFrom({"Star": thisGDStarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Star": GDStarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Star": thisGDStarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("StarRatingBar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("StarRatingBar"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDStarObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDStarObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDStarObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDStarObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onCreatedContext.GDBackgroundObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.GDStarObjects1= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.GDStarObjects2= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.GDBackgroundObjects1= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.GDBackgroundObjects2= [];


gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595StarRatingBar_9595_9595StarRatingBar_9546StarRatingBar_9546prototype_9546doStepPostEventsContext_9546GDStarObjects1Objects = Hashtable.newFrom({"Star": gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.GDStarObjects1});
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Star"), gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.GDStarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__StarRatingBar__IsInGameEdition.func(runtimeScene, eventsFunctionContext));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0]._getDisabled();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595StarRatingBar_9595_9595StarRatingBar_9546StarRatingBar_9546prototype_9546doStepPostEventsContext_9546GDStarObjects1Objects, runtimeScene, true, false);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.GDObjectObjects1);
/* Reuse gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.GDStarObjects1 */
{for(var i = 0, len = gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.GDObjectObjects1[i].SetRate(((gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.GDStarObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.GDStarObjects1[0].getVariables()).get("ID").getAsNumber(), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDStarObjectsList = [...runtimeScene.getObjects("Star")];
var GDStarObjects = Hashtable.newFrom({"Star": thisGDStarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Star": GDStarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Star": thisGDStarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("StarRatingBar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("StarRatingBar"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.GDStarObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.GDStarObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.GDStarObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.GDStarObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPostEventsContext.GDBackgroundObjects2.length = 0;


return;
}
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext = {};
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.idToCallbackMap = new Map();
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.GDObjectObjects1= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.GDObjectObjects2= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.GDStarObjects1= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.GDStarObjects2= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.GDBackgroundObjects1= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.GDBackgroundObjects2= [];


gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.GDObjectObjects1[i].SetRate(eventsFunctionContext.getObjects("Object")[0]._getRate(), eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0]._getDisabled();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.GDObjectObjects1[i].SetDisabled(false, eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0]._getDisabled();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.GDObjectObjects1[i].SetDisabled(true, eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloading = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDStarObjectsList = [...runtimeScene.getObjects("Star")];
var GDStarObjects = Hashtable.newFrom({"Star": thisGDStarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Star": GDStarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Star": thisGDStarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("StarRatingBar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("StarRatingBar"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.GDStarObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.GDStarObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.GDStarObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.GDStarObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.onHotReloadingContext.GDBackgroundObjects2.length = 0;


return;
}
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.RateContext = {};
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.RateContext.idToCallbackMap = new Map();
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.RateContext.GDObjectObjects1= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.RateContext.GDObjectObjects2= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.RateContext.GDStarObjects1= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.RateContext.GDStarObjects2= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.RateContext.GDBackgroundObjects1= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.RateContext.GDBackgroundObjects2= [];


gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.RateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getRate();}
}

}


};

gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.Rate = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDStarObjectsList = [...runtimeScene.getObjects("Star")];
var GDStarObjects = Hashtable.newFrom({"Star": thisGDStarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Star": GDStarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Star": thisGDStarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("StarRatingBar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("StarRatingBar"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.RateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.RateContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.RateContext.GDStarObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.RateContext.GDStarObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.RateContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.RateContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.RateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.RateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.RateContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.RateContext.GDStarObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.RateContext.GDStarObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.RateContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.RateContext.GDBackgroundObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext = {};
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.idToCallbackMap = new Map();
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDObjectObjects1= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDObjectObjects2= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects1= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects2= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDBackgroundObjects1= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDBackgroundObjects2= [];


gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.mapOfEmptyGDStarObjects = Hashtable.newFrom({"Star": []});
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0]._getShakingOnHoverEnabled();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__StarRatingBar__IsInGameEdition.func(runtimeScene, eventsFunctionContext));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects1 */
{for(var i = 0, len = gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ShakeObject_PositionAngleScale")).ShakeObject_PositionAngleScale(0.5, 5, 0, 0, 25, 0.1, false, eventsFunctionContext);
}
}
}

}


};gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0]._setRate(gdjs.evtTools.common.clamp(eventsFunctionContext.getArgument("Value"), 0, gdjs.evtTools.object.getSceneInstancesCount(eventsFunctionContext, gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.mapOfEmptyGDStarObjects)))
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Star"), gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects1[i].getVariableNumber(gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects1[i].getVariables().get("ID")) > eventsFunctionContext.getObjects("Object")[0]._getRate() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects1[k] = gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects1 */
{for(var i = 0, len = gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("Disabled");
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Star"), gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects1[i].getVariableNumber(gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects1[i].getVariables().get("ID")) <= eventsFunctionContext.getObjects("Object")[0]._getRate() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects1[k] = gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects1 */
{for(var i = 0, len = gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("Enabled");
}
}

{ //Subevents
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRate = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDStarObjectsList = [...runtimeScene.getObjects("Star")];
var GDStarObjects = Hashtable.newFrom({"Star": thisGDStarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Star": GDStarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Star": thisGDStarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("StarRatingBar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("StarRatingBar"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDStarObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetRateContext.GDBackgroundObjects2.length = 0;


return;
}
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.DisabledContext = {};
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.DisabledContext.idToCallbackMap = new Map();
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.DisabledContext.GDObjectObjects1= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.DisabledContext.GDObjectObjects2= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.DisabledContext.GDStarObjects1= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.DisabledContext.GDStarObjects2= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.DisabledContext.GDBackgroundObjects1= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.DisabledContext.GDBackgroundObjects2= [];


gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.DisabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0]._getDisabled();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.Disabled = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDStarObjectsList = [...runtimeScene.getObjects("Star")];
var GDStarObjects = Hashtable.newFrom({"Star": thisGDStarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Star": GDStarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Star": thisGDStarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("StarRatingBar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("StarRatingBar"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.DisabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.DisabledContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.DisabledContext.GDStarObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.DisabledContext.GDStarObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.DisabledContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.DisabledContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.DisabledContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.DisabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.DisabledContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.DisabledContext.GDStarObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.DisabledContext.GDStarObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.DisabledContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.DisabledContext.GDBackgroundObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext = {};
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext.idToCallbackMap = new Map();
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext.GDObjectObjects1= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext.GDObjectObjects2= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext.GDStarObjects1= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext.GDStarObjects2= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext.GDBackgroundObjects1= [];
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext.GDBackgroundObjects2= [];


gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Star"), gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext.GDStarObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setDisabled(false)
}
{for(var i = 0, len = gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext.GDStarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext.GDStarObjects1[i].setColor("255;255;255");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Star"), gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext.GDStarObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setDisabled(true)
}
{for(var i = 0, len = gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext.GDStarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext.GDStarObjects1[i].setColor("109;109;109");
}
}
}

}


};

gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabled = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDStarObjectsList = [...runtimeScene.getObjects("Star")];
var GDStarObjects = Hashtable.newFrom({"Star": thisGDStarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Star": GDStarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Star": thisGDStarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("StarRatingBar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("StarRatingBar"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext.GDStarObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext.GDStarObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext.GDStarObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext.GDStarObjects2.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.SetDisabledContext.GDBackgroundObjects2.length = 0;


return;
}

gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("StarRatingBar::StarRatingBar", gdjs.evtsExt__StarRatingBar__StarRatingBar.StarRatingBar);
