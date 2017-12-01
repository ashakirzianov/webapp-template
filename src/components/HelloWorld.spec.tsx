import * as React from "react";
import * as enzyme from "enzyme";
import { HelloWorld } from "./HelloWorld";
import { expect } from "chai";

describe("React tests", () => {
  it("work", () => {
    const helloWorld = enzyme.shallow(<HelloWorld name="Anton" />);
    expect(helloWorld.find(".main").text()).equal("Hello, Anton!");
  });
});
