export declare function store<T>(obj: T): {
    getState: (k?: string) => any;
    setState: (k: string, val: any) => void;
    subscribe(k: string, cb: any): () => void;
    subscribeAll(cb: any): () => void;
    unSubscribe(k: string, cb: any): void;
};
