/**
 * @regdate 2018-11-22
 * @author 김영훈
 * @description 날짜를 포멧팅 해주는 헬퍼 함수
 */

import parse from "date-fns/parse";
import format from "date-fns/format";
import isValid from "date-fns/isValid";

const YEAR_FORMAT_WITH_FOUR = "yyyy";
const YEAR_FORMAT_WITH_TWO = "yy";

export const dateToFormattedString = (dateString: string, dateStringFormat: string, formatString: string) => {
  const stringToDateObject = parse(dateString, dateStringFormat, new Date());

  if (!isValid(stringToDateObject)) {
    return format(new Date(), formatString);
  }

  if (dateString === format(stringToDateObject, dateStringFormat)) {
    return format(stringToDateObject, formatString);
  }

  const formattedDate = dateString.replace(/[^0-9]/g, "-");
  const year = formattedDate.split("-")[0];

  return /^[0-9_-]{2}$/.test(year) ?
    parse(formattedDate, `${YEAR_FORMAT_WITH_TWO}-MM-dd`, new Date()) :
    parse(formattedDate, `${YEAR_FORMAT_WITH_FOUR}-MM-dd`, new Date())
};
