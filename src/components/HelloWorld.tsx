import * as React from "react";
import { SFC } from "react";

export const HelloWorld = (props: { name: string }) => <div className="main">Hello, { props.name }!</div>;