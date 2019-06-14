import { dateToFormattedString } from "./date-format.utils";

describe("Date를 포맷팅해주는 유틸 함수에 대해서", () => {
  it("YYYY-MM-DD hh:mm:ss 형식의 날짜를 원하는 형식으로 변환시켜 반환한다.", () => {
    const mock1 = dateToFormattedString("2019-01-01 09:00:00", "YYYY-MM-DD hh:mm:ss",   "YYYY-MM-DD");
    const mock2 = dateToFormattedString("2019-01-01 09:00:00", "YYYY-MM-DD HH:mm:ss", "YYYY년 MM월 DD일 hh시 mm분 ss초");
    const mock3 = dateToFormattedString("2019-01-01 09:00:00", "YYYY-MM-DD HH:mm:ss", "YYYY년 MM월 DD일");
    const mock4 = dateToFormattedString("2019-01-01 09:00:00", "YYYY-MM-DD HH:mm:ss", "YYYY.MM.DD");
    const mock5 = dateToFormattedString("2019-01-01 09:00:00", "YYYY-MM-DD HH:mm:ss", "YYYY.MM.DD (hh:mm:ss)");
    const mock6 = dateToFormattedString("2019-01-01 17:00:00", "YYYY-MM-DD HH:mm:ss", "YYYY.MM.DD (HH:mm:ss)");

    expect(mock1).toEqual("2019-01-01");
    expect(mock2).toEqual("2019년 01월 01일 09시 00분 00초");
    expect(mock3).toEqual("2019년 01월 01일");
    expect(mock4).toEqual("2019.01.01");
    expect(mock5).toEqual("2019.01.01 (09:00:00)");
    expect(mock6).toEqual("2019.01.01 (17:00:00)");
  });
  it("YYYY-MM-DD 형식의 날짜를 원하는 형식으로 변환시켜 반환한다.", () => {
    const mock1 = dateToFormattedString("2019-01-01", "YYYY-MM-DD", "YYYY-MM-DD");
    const mock2 = dateToFormattedString("2019-01-01", "YYYY-MM-DD", "YYYY년 MM월 DD일");
    const mock3 = dateToFormattedString("2019-01-01", "YYYY-MM-DD", "YYYY.MM.DD");

    expect(mock1).toEqual("2019-01-01");
    expect(mock2).toEqual("2019년 01월 01일");
    expect(mock3).toEqual("2019.01.01");
  });
  it("YYYY.MM.DD 형식의 날짜를 원하는 형식으로 변환시켜 반환한다.", () => {
    const mock1 = dateToFormattedString("2019.01.01", "YYYY.MM.DD", "YYYY-MM-DD");
    const mock2 = dateToFormattedString("2019.01.01", "YYYY.MM.DD", "YYYY년 MM월 DD일");

    expect(mock1).toEqual("2019-01-01");
    expect(mock2).toEqual("2019년 01월 01일");
  });
  it("yy.MM.dd 형식의 날짜를 원하는 형식으로 변환시켜 반환한다.", () => {
    const mock1 = dateToFormattedString("19.01.01", "YY.MM.DD", "YYYY-MM-DD");
    const mock2 = dateToFormattedString("19.01.01", "YY.MM.DD", "YYYY년 MM월 DD일");
    const mock3 = dateToFormattedString("19.12.31", "YY.MM.DD", "YYYY.MM.DD");

    expect(mock1).toEqual("2019-01-01");
    expect(mock2).toEqual("2019년 01월 01일");
    expect(mock3).toEqual("2019.12.31");
  });
  it("Invalid 형식의 날짜의 경우 오늘 날짜로 반환한다.", () => {
    const mock1 = dateToFormattedString("invalid", "YYYY.MM.DD", "YYYY-MM-DD");

    expect(mock1).toEqual("2019-06-14");
  });
});
