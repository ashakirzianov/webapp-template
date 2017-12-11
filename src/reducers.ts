import { combineReducers, AnyAction } from "redux";

export type Store = { foo: string, bar: number };
function foo(store: Store, action: AnyAction): Store {
    return { ...store, foo: store.foo + store.foo };
}

function bar(store: Store, action: AnyAction): Store {
    return { ...store, bar: store.bar + store.bar };
}

export const reducer = combineReducers<Store>({
    foo: foo,
    bar: bar,
});
