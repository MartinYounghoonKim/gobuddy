import {
  addObjectQueryParams,
  addStringQueryParam,
  encodingLocation,
  getQueryParam,
  removeQueryParam
} from "./location.helper";

describe("Location 헬퍼 함수들에 대해서", () => {
  const encodedURL1 = encodeURIComponent("http://helloworld.com");
  const encodedURL2 = encodeURIComponent("http://hello.world.com");
  beforeEach(() => {
    window.history.pushState({}, "Foo", "?foo=1&bar=2");
  });

  /**
   * @summary addObjectQueryParams 헬퍼 함수
   * @param url: string;
   * @param params: object;
   */
  describe("addObjectQueryParams 헬퍼 함수에 대해서", () => {
    it("URL과 query param에 해당하는 Object 인자값을 넘기면 URL에 query params을 추가하여 반환한다.", () => {
      expect(addObjectQueryParams("http://foo.bar", { foo: 1, bar: 2 })).toEqual("http://foo.bar?foo=1&bar=2");
      expect(addObjectQueryParams("http://foo.bar#hash", { foo: 1, bar: 2 })).toEqual("http://foo.bar#hash?foo=1&bar=2");
      expect(addObjectQueryParams("http://foo.bar", { query: "query", params: "params" })).toEqual("http://foo.bar?query=query&params=params");
      expect(addObjectQueryParams("http://foo.bar", { query: undefined, params: "params" })).toEqual("http://foo.bar?params=params");
      expect(addObjectQueryParams("http://foo.bar", { camelCase: "camelCase" })).toEqual("http://foo.bar?camelCase=camelCase");
      expect(addObjectQueryParams("http://foo.bar", { PascalCase: "PascalCase" })).toEqual("http://foo.bar?PascalCase=PascalCase");
      expect(addObjectQueryParams("http://foo.bar", { snake_case: "snake_case" })).toEqual("http://foo.bar?snake_case=snake_case");
      expect(addObjectQueryParams("http://foo.bar", { returnUrl: encodedURL1 })).toEqual("http://foo.bar?returnUrl=http%3A%2F%2Fhelloworld.com");
      expect(addObjectQueryParams(`http://foo.bar?returnUrl=${encodedURL1}`, { returnUrl: encodedURL2 })).toEqual("http://foo.bar?returnUrl=http%3A%2F%2Fhello.world.com");
    });
    it("URL에 query param에 존재하는 값이 있을 경우, 새로운 query param의 값을 추가하여 반환한다.", () => {
      expect(addObjectQueryParams("http://foo.bar?foo=2", { foo: 1, bar: 2 })).toEqual("http://foo.bar?foo=1&bar=2");
      expect(addObjectQueryParams("http://foo.bar?foo=2&bar=1", { foo: 1, bar: 2 })).toEqual("http://foo.bar?foo=1&bar=2");
      expect(addObjectQueryParams("http://foo.bar?foo=2&bar=1", { foo: 1, bar: 2, query: "query" })).toEqual("http://foo.bar?foo=1&bar=2&query=query");
    });
  });

  /**
   * @summary addStringQueryParam 헬퍼 함수
   * @param url: string;
   * @param params: object;
   */
  describe("addObjectQueryParams 헬퍼 함수에 대해서", () => {
    it("URL과 query param에 해당하는 Object 인자값을 넘기면 URL에 query params을 추가하여 반환한다.", () => {
      expect(addStringQueryParam("http://foo.bar", "foo=1&bar=2")).toEqual("http://foo.bar?foo=1&bar=2");
      expect(addStringQueryParam("http://foo.bar#hash", "foo=1&bar=2")).toEqual("http://foo.bar#hash?foo=1&bar=2");
      expect(addStringQueryParam("http://foo.bar", "camelCase=camelCase" )).toEqual("http://foo.bar?camelCase=camelCase");
      expect(addStringQueryParam("http://foo.bar", "PascalCase=PascalCase" )).toEqual("http://foo.bar?PascalCase=PascalCase");
      expect(addStringQueryParam("http://foo.bar", "snake_case=snake_case" )).toEqual("http://foo.bar?snake_case=snake_case");
      expect(addStringQueryParam(`http://foo.bar?returnUrl=${encodedURL1}`, `returnUrl=${encodedURL2}` )).toEqual("http://foo.bar?returnUrl=http%3A%2F%2Fhello.world.com");
    });
    it("URL에 query param에 존재하는 값이 있을 경우, 새로운 query param의 값을 추가하여 반환한다.", () => {
      expect(addStringQueryParam("http://foo.bar?foo=2", "foo=1&bar=2")).toEqual("http://foo.bar?foo=1&bar=2");
      expect(addStringQueryParam("http://foo.bar?foo=2&bar=1", "foo=1&bar=2")).toEqual("http://foo.bar?foo=1&bar=2");
      expect(addStringQueryParam("http://foo.bar?foo=2&bar=1", "foo=1&bar=2&query=query")).toEqual("http://foo.bar?foo=1&bar=2&query=query");
    });
  });

  /**
   * @summary getQueryParam 헬퍼 함수
   * @param key: string;
   */
  describe("getQueryParam 헬퍼 함수에 대해서", () => {
    it("현재의 URL의 해당하는 Key에 해당하는 query params에 있는 값의 경우 정상적인 값을 반환한다.", () => {
      expect(getQueryParam("foo")).toEqual("1");
      expect(getQueryParam("bar")).toEqual("2");
    });
    it("현재의 URL의 해당하는 Key에 해당하는 query params이 없는 값의 경우 Null 값을 반환한다.", () => {
      expect(getQueryParam("query")).toEqual(null);
    });
  });

  /**
   * @summary encodingLocation 헬퍼 함수
   * @param url?: string;
   */
  describe("encodingLocation 헬퍼 함수에 대해서", () => {
    it("URL을 주입하면 URL을 인코딩하여 반환한다.", () => {
      expect(encodingLocation(window.location.href)).toEqual("https%3A%2F%2Fdelivery.tmon.co.kr%2Fm%2Fmytmon%2Forders%2Fpurchase%2Fall%3Ffoo%3D1%26bar%3D2");
      expect(encodingLocation("https://foo.bar")).toEqual("https%3A%2F%2Ffoo.bar");
    });
    it("주입된 URL이 없는 경우 현재의 URL을 인코딩하여 반환한다.", () => {
      expect(encodingLocation()).toEqual("https%3A%2F%2Fdelivery.tmon.co.kr%2Fm%2Fmytmon%2Forders%2Fpurchase%2Fall%3Ffoo%3D1%26bar%3D2");
    });
  });

  /**
   * @summary removeQueryParam 헬퍼 함수
   * @param key: string;
   */
  describe("removeQueryParam 헬퍼 함수에 대해서", () => {
    it("현재의 URL에 존재하는 query param의 Key값을 주입하는 경우 삭제한후 삭제된 URL을 반환한다.", () => {
      expect(removeQueryParam("bar")).toEqual("https://delivery.tmon.co.kr/m/mytmon/orders/purchase/all?foo=1");
      expect(removeQueryParam("foo")).toEqual("https://delivery.tmon.co.kr/m/mytmon/orders/purchase/all?bar=2");
    });
    it("현재의 URL에 존재하지 않는 query param의 Key값을 주입하는 경우 현재의 URL을 반환한다.", () => {
      expect(removeQueryParam("query")).toEqual("https://delivery.tmon.co.kr/m/mytmon/orders/purchase/all?foo=1&bar=2");
    });
  });
});
