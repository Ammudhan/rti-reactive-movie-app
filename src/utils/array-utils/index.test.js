import ArrayUtils from "./index";

describe("ArrayUtils", () => {

    it("should remove the duplicates and retain the order", () => {
        const arrayWithDuplicates = [
            { id: 1, name: "king" },
            { id: 2, name: "master" },
            { id: 3, name: "lisa" },
            { id: 3, name: "jim" },
            { id: 1, name: "jam" }
        ];
        const result = ArrayUtils.getUniqueObjects(arrayWithDuplicates, "id");
        expect(result).toEqual([
            { id: 1, name: "king" },
            { id: 2, name: "master" },
            { id: 3, name: "lisa" }
        ]);
    });

    it("should not change the object when no duplicates", () => {
        const arrayWithoutDuplicates = [
            { id: 1, name: "king" },
            { id: 2, name: "master" },
            { id: 3, name: "lisa" }
        ];
        const result = ArrayUtils.getUniqueObjects(arrayWithoutDuplicates, "id");
        expect(result).toEqual(arrayWithoutDuplicates);
    });

});