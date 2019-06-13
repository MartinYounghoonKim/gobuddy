import { dateToFormattedString } from "./date-format.utils";

describe("Date를 포맷팅해주는 유틸 함수에 대해서", () => {
  it("yyyy-MM-dd hh:mm:ss 형식의 날짜를 원하는 형식으로 변환시켜 반환한다.", () => {
    const mock1 = dateToFormattedString("2019-01-01 09:00:00", "yyyy-MM-dd hh:mm:ss",   "yyyy-MM-dd");
    const mock2 = dateToFormattedString("2019-01-01 09:00:00", "yyyy-MM-dd HH:mm:ss", "yyyy년 MM월 dd일 hh시 mm분 ss초");
    const mock3 = dateToFormattedString("2019-01-01 09:00:00", "yyyy-MM-dd HH:mm:ss", "yyyy년 MM월 dd일");
    const mock4 = dateToFormattedString("2019-01-01 09:00:00", "yyyy-MM-dd HH:mm:ss", "yyyy.MM.dd");
    const mock5 = dateToFormattedString("2019-01-01 09:00:00", "yyyy-MM-dd HH:mm:ss", "yyyy.MM.dd (hh:mm:ss)");
    const mock6 = dateToFormattedString("2019-01-01 17:00:00", "yyyy-MM-dd HH:mm:ss", "yyyy.MM.dd (HH:mm:ss)");

    expect(mock1).toEqual("2019-01-01");
    expect(mock2).toEqual("2019년 01월 01일 09시 00분 00초");
    expect(mock3).toEqual("2019년 01월 01일");
    expect(mock4).toEqual("2019.01.01");
    expect(mock5).toEqual("2019.01.01 (09:00:00)");
    expect(mock6).toEqual("2019.01.01 (17:00:00)");
  });
  it("yyyy-MM-dd 형식의 날짜를 원하는 형식으로 변환시켜 반환한다.", () => {
    const mock1 = dateToFormattedString("2019-01-01", "yyyy-MM-dd", "yyyy-MM-dd");
    const mock2 = dateToFormattedString("2019-01-01", "yyyy-MM-dd", "yyyy년 MM월 dd일");
    const mock3 = dateToFormattedString("2019-01-01", "yyyy-MM-dd", "yyyy.MM.dd");

    expect(mock1).toEqual("2019-01-01");
    expect(mock2).toEqual("2019년 01월 01일");
    expect(mock3).toEqual("2019.01.01");
  });
  it("yyyy.MM.dd 형식의 날짜를 원하는 형식으로 변환시켜 반환한다.", () => {
    const mock1 = dateToFormattedString("2019.01.01", "yyyy.MM.dd", "yyyy-MM-dd");
    const mock2 = dateToFormattedString("2019.01.01", "yyyy.MM.dd", "yyyy년 MM월 dd일");

    expect(mock1).toEqual("2019-01-01");
    expect(mock2).toEqual("2019년 01월 01일");
  });
  it("yy.MM.dd 형식의 날짜를 원하는 형식으로 변환시켜 반환한다.", () => {
    const mock1 = dateToFormattedString("19.01.01", "yy.MM.dd", "yyyy-MM-dd");
    const mock2 = dateToFormattedString("19.01.01", "yy.MM.dd", "yyyy년 MM월 dd일");
    const mock3 = dateToFormattedString("19.12.31", "yy.MM.dd", "yyyy.MM.dd");

    expect(mock1).toEqual("2019-01-01");
    expect(mock2).toEqual("2019년 01월 01일");
    expect(mock3).toEqual("2019.12.31");
  });
  it("변환하려는 날짜의 문자열과 형식이 일치하지 않더라도 원하는 형식으로 변환시켜 반환한다.", () => {
    const mock1 = dateToFormattedString("19.12.31", "yyyy.MM.dd", "yyyy-MM-dd");
    const mock2 = dateToFormattedString("19-12-31", "yyyy-MM-dd", "yyyy-MM-dd");

    expect(mock1).toEqual("2019-12-31");
    expect(mock2).toEqual("2019-12-31");
  });
  it("Invalid 형식의 날짜의 경우 오늘 날짜로 반환한다.", () => {
    const mock1 = dateToFormattedString("invalid", "yyyy.MM.dd", "yyyy-MM-dd");

    expect(mock1).toEqual("2019-03-25");
  });
});
