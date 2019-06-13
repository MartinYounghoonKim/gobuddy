import { generateNumberFormat } from "./number-format.utils";

describe("generateNumberFormat 함수에 대해서", () => {
  it("Number 형의 인자를 던질 경우, 해당 인자를 포멧팅 후 반환한다.", () => {
    expect(generateNumberFormat(1)).toEqual("1");
    expect(generateNumberFormat(100)).toEqual("100");
    expect(generateNumberFormat(100000)).toEqual("100,000");
  });
});
