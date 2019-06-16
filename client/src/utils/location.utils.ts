import qs, {IParseOptions, IStringifyOptions} from "qs";
import { Maybe, Nullable } from "../@types/utils/utils";

interface IParams {
  [key: string]: Maybe<string | number>;
}

export function addObjectQueryParams (url: string, params: IParams): string {
  const [currentUrl, queryParams] = url.split("?");
  const queryParamsObject = queryParamsToObject(queryParams, { ignoreQueryPrefix: true });
  const mergedQueryParams = { ...queryParamsObject, ...params };
  const queryParamsString = queryParamsToString(mergedQueryParams);

  return currentUrl + queryParamsString;
}

export function addStringQueryParam (url: string, params: string): string {
  const [currentUrl, queryParams] = url.split("?");
  const currentQueryParams = queryParamsToObject(queryParams);
  const newQueryParams = queryParamsToObject(params);
  const mergedQueryParams = { ...currentQueryParams, ...newQueryParams };
  const queryParamString = queryParamsToString(mergedQueryParams, { encode: true });

  return currentUrl + queryParamString;
}

export function getQueryParam (key: string, targetUrl: string = window.location.href): Nullable<string> {
  const [,queryParams] = targetUrl.split("?");
  const queryParamsObject = queryParamsToObject(queryParams, { ignoreQueryPrefix: true });

  return queryParamsObject[key] || null;
}

export function encodingLocation (url: string = window.location.href): string {
  return encodeURIComponent(url);
}

export function removeQueryParam (key: string): string {
  const [currentLocation, queryParams] = window.location.href.split("?");
  const queryParamsObject = queryParamsToObject(queryParams, { ignoreQueryPrefix: true });

  delete queryParamsObject[key];

  const queryParamsString = queryParamsToString(queryParamsObject);
  return currentLocation + queryParamsString;
}

function queryParamsToObject (queryParams: string, options?: IParseOptions) {
  return qs.parse(queryParams, options);
}

function queryParamsToString (queryParams: string, options: IStringifyOptions = {}): string {
  return qs.stringify(queryParams, { encode: false, addQueryPrefix: true, ...options });
}
