export function setFoo(foo: string) {
    return {
        type: "SET_FOO",
        payload: foo,
    };
}

export function setBar(bar: number) {
    return {
        type: "SET_BAR",
        payload: bar,
    };
}
