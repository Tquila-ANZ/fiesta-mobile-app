import * as React from 'react';
import { AsyncStorage, NetInfo } from 'react-native';

interface props {
  timeCached: Date;
}

interface state {}

export default class TqanzCache extends React.Component<props, state> {
  //var scoreManager = SingletonClass.getInstance();

  private static _instance: TqanzCache = new TqanzCache();
  //private _isOnline: Boolean;
  private _hasCacheLayer: Boolean;

  constructor(props?) {
    super(props);

    if (TqanzCache._instance) {
      throw new Error(
        'Error: Instantiation failed: Use TqanzCache.getInstance() instead of new.'
      );
    }
    TqanzCache._instance = this;
  }

  private setHasCacheLayer(value) {
    this._hasCacheLayer = value;
  }
  private getHasCacheLayer(): Boolean {
    return this._hasCacheLayer;
  }

  public async init(): Promise<any> {
    if (!this.isOnline() && this.getHasCacheLayer())
      return await 'cache layer text';
    else if (!this.isOnline() && !this.getHasCacheLayer()) return await undefined;
    else if (this.isOnline() && this.getHasCacheLayer()) {
      // Check date of cache
      if (this.isOnline() && this.getHasCacheLayer()) //(Date.now() < this.get('@fiesta:date'))
        //date < this.props.cacheTime
        return await 'cache layer text';
      else {
        return await true; // "Do SOQL, set cache date and set cache"; // do soql,set cache date and set cache
      }
    } else {
      return await false;
    }
  }

  public async startCacheLayer() {
    return await AsyncStorage.setItem('@fiesta:date', Date.now().toString());
  }

  public static getInstance(): TqanzCache {
    return TqanzCache._instance;
  }

  public netInfo() {
    NetInfo.getConnectionInfo().then(connectionInfo => {
      console.log(
        'Initial, type: ' +
          connectionInfo.type +
          ', effectiveType: ' +
          connectionInfo.effectiveType
      );
    });

    function handleFirstConnectivityChange(connectionInfo) {
      console.log(
        'First change, type: ' +
          connectionInfo.type +
          ', effectiveType: ' +
          connectionInfo.effectiveType
      );
      NetInfo.removeEventListener(
        'connectionChange',
        handleFirstConnectivityChange
      );
    }

    NetInfo.addEventListener('connectionChange', handleFirstConnectivityChange);
  }

  public isOnline(): Boolean {
    NetInfo.isConnected.fetch().then(isConnected => {
      if (isConnected) {
        return true;
      }
      return false;
    });
    return false;
  }

  public async set(key: string, value: string, callback?) {
    try {
      this.setHasCacheLayer(true);
      await AsyncStorage.setItem(key, value, callback);
    } catch (error) {
      // Error saving data
    }
  }

  public async get(key: string, callback?): Promise<any> {
    try {
      const value = await AsyncStorage.getItem(key, callback);
      if (value !== null) {
        return value;
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  public async forceUpdate() {}
}
