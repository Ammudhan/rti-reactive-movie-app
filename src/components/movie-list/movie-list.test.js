import React from "react";
import { create } from "react-test-renderer";
import MovieList from "./movie-list";

describe("Movie List Component", () => {

    it("should define the state as expected", async () => {
        const component = create(<MovieList/>);
        const instance = component.getInstance();
        expect(instance.state.error).toBe('');
    });

});