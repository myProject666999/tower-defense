export class Singleton<T> {
    protected static _instance: any = null;

    protected constructor() {
    }

    public static getInstance<T>(this: new () => T): T {
        if (!this._instance) {
            this._instance = new this();
        }
        return this._instance;
    }

    public static destroyInstance(): void {
        if (this._instance) {
            this._instance = null;
        }
    }
}
