/**
 * @regdate 2018-11-22
 * @author 김영훈
 * @description 날짜를 포멧팅 해주는 헬퍼 함수
 */

import parse from "date-fns/parse";
import format from "date-fns/format";
import isValid from "date-fns/isValid";

export const dateToFormattedString = (dateString: string, dateStringFormat: string, formatString: string) => {
  const stringToDateObject = parse(dateString, dateStringFormat, new Date());
  if (!isValid(stringToDateObject)) {
    // 유효하지 않은 날짜의 경우 오늘 날짜로 Return 한다.
    return format(new Date(), formatString);
  }
  if (dateString === format(stringToDateObject, dateStringFormat)) {
    // 날짜의 형식과 포멧 형식이 일치하는 경우는 정상적으로 변환해서 반환한다.
    return format(stringToDateObject, formatString);
  } else {
    // @TODO 정규표현식을 이용하여 자리수 체크 후 포멧팅하는 로직 추가
    const formattedDate = dateString.replace(/[^0-9]/g, "-");
    let yearFormat = "yyyy";
    const year = formattedDate.split("-")[0];
    if (/^[0-9_-]{2}$/.test(year)) {
      yearFormat = "yy";
    }
    const test = parse(formattedDate, `${yearFormat}-MM-dd`, new Date());
    return format(test, formatString);
  }

  return format(new Date(), formatString);
};
