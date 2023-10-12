export function store<T>(obj:T) {
  const stateData: Record<string, any> = {};
  const subscribers: Record<string, any> = {};
  let subscribersAll: any = [];

  const getState = (k?:string) => {
    if (!k) {
      return stateData;
    }
    if (!(k in stateData)) {
      return null;
    }
    return stateData[k];
  };
  const setState = (k:string, val:any) => {
    const prevState = { ...stateData };
    const prev = stateData[k] || stateData[k] == 0 ? stateData[k] : null;
    stateData[k] = val;

    if (k in subscribers) {
      subscribers[k].forEach((cb:any) => cb(val, prev, stateData));
    }
    subscribersAll.forEach((cb:any) => cb(k, prevState, stateData));
  };
  if (obj) {
    Object.keys(obj).forEach((k:string) => {
      // @ts-ignore
      setState(k, obj[k]);
    });
  }

  return {
    getState,
    setState,

    subscribe(k:string, cb: any) {
      if (!(k in subscribers)) {
        subscribers[k] = [];
      }
      subscribers[k].push(cb);
      const cur = getState(k);
      cb(cur, null, getState());
      return () => {
        subscribers[k] = subscribers[k].filter((i:any) => i !== cb);
      };
    },
    subscribeAll(cb: any) {
      subscribersAll.push(cb);
      cb(null, null, getState());
      return () => {
        subscribersAll = subscribersAll.filter((i:any) => i !== cb);
      };
    },
    unSubscribe(k:string, cb: any) {
      if (k in subscribers) {
        subscribers[k] = subscribers[k].filter((i: any) => i !== cb);
      }
    },
  };
}
