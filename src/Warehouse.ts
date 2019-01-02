export default class Warehouse {
  private readonly namespace: string;
  private readonly separator: string;
  
  constructor(namespace: string, separator: string = '-') {
    this.namespace = namespace;
    this.separator = separator;
  }

  public get<T = any>(key: string): T | undefined {
    const qKey = `${this.namespace}${this.separator}${key}`;
    const data = Warehouse.storage[qKey];
    if (data) return JSON.parse(data);
    return undefined;
  }

  public set(key: string, value: any) {
    const qKey = `${this.namespace}${this.separator}${key}`;
    Warehouse.storage[qKey] = JSON.stringify(value);
  }

  public getOrDefault<T = any>(key: string, def: T, set: 'SET' | 'NOSET' = 'SET'): T {
    const v = this.get(key);
    if (!v) {
      if (set == 'SET') this.set(key, def);
      return def;
    }
    return v;
  }

  // public get(key: string): string | undefined {
  //   const qKey = `${this.namespace}${this.separator}${key}`;
  //   return Warehouse.storage[qKey];
  // }

  // public getJSON<T>(key: string): T | undefined {
  //   const qKey = `${this.namespace}${this.separator}${key}`;
  //   const data = this.get(key);
  //   if (data) {
  //     return JSON.parse(data);
  //   } else {
  //     return undefined;
  //   }
  // }

  // public set(key: string, value: string) {
  //   const qKey = `${this.namespace}${this.separator}${key}`;
  //   Warehouse.storage[qKey] = value;
  // }

  // public setJSON(key: string, value: any) {
  //   const qKey = `${this.namespace}${this.separator}${key}`;
  //   Warehouse.storage[qKey] = JSON.stringify(value);
  // }

  private static readonly storage =
    localStorage || {};
}
