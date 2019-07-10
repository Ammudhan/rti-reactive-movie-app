import DateUtils from "./index";

describe("DateUtils", () => {

    it("should return the year from the given date ", () => {
        const date = "2019-02-02";
        const result = DateUtils.getYear(date);
        expect(result).toEqual(2019);
    });

});