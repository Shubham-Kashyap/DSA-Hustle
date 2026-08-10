/**
 * ------------------------------------------------------------------------
 * Singleton pattern
 * ------------------------------------------------------------------------
 * -- Intent: Ensure that a class has only one instance and allow global access to it.
 * 
 * Points to remember
 * -- Restrict the instentation {object creation} of a class to single object
 * -- request for instentation to classes not create ourself
 * -- created instance { object } or instance remains same throughout our appliation
 * -- Based on idea : Singleton object { reuse same object }
 * 
 * Note : we are requesting a class via its method to instentatte; we don't have any previlige to create a object by any means like via constructor,  inheritence etc
 * 
 * Kind of returning global constant that is not editable and not directly accessible
 */


// this is for common usage in examples 
const settings: { [key: string]: unknown } = {
  apiKey: "api_key",
  port: 4000,
  logging: false,
  database: {
    port: 3306,
    ...{/** other db settings */ },
  },
}

/**
 * ------------------------------------------------------------------------
 * Attempt 1
 * ------------------------------------------------------------------------
 */
// Usage
console.log("Attempt 1 : ", Object.freeze(settings));

/**
 * ------------------------------------------------------------------------
 * Attempt 2
 * ------------------------------------------------------------------------
 */
class Config {
  private static instance: Config;
  private settings: typeof settings;


  private constructor() {
    this.settings = settings
  }

  /** Request instance {object}; if exsist return it else create it */
  // Note : get instance directly accessible via class name {Config.getInstance()}
  public static getInstance(): Config {
    if (!Config.instance) Config.instance = new Config();
    return Config.instance;
  }

  /** Load setting - setting value can be anything : number, object, string , boolean etc */
  public loadSetting(name: string) {
    return this.settings[name] ?? undefined;
  }

  public updateSetting(name: string, value: unknown) {
    this.settings[name] && (this.settings[name] = value);
  }

}
// Usage 
const configuration = Config.getInstance() /** create object or return object if one is already created */
console.log('configuration: ', configuration);
const logging = configuration.loadSetting("logging");
console.log('Config : logging ', logging);


/** Usage : singletone is used when we need someting again & again but don't want create it again & again  */


/**
 * ------------------------------------------------------------------------
 * Attempt 3
 * ------------------------------------------------------------------------
 */

const globalConfig = (() => {
  let instance: { [key: string]: any } | undefined = undefined;

  // Create the object of accessor methods 
  const createInstance = () => {
    return {
      getSetting: (key: string) => settings[key],
      getAllSettigs: () => settings
    };
  };

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const config = globalConfig.getInstance();
console.log('config: logging ', config.getSetting('logging'));


/**
 * ------------------------------------------------------------------------
 * Attempt 4
 * ------------------------------------------------------------------------
 */

class DatabaseConnection {
  private static instance: DatabaseConnection;

  private constructor() {
    console.log('Database connection established');
  }

  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) DatabaseConnection.instance = new DatabaseConnection();
    return DatabaseConnection.instance;
  }

  public query(sql: string): void {
    console.log(`Executing query: ${sql}`);
  }
}

// Usage
const db1 = DatabaseConnection.getInstance();
console.log('db1: ', db1);
db1.query('SELECT * FROM users');

const db2 = DatabaseConnection.getInstance();
console.log('db2: ', db2);
db2.query('SELECT * FROM users');
