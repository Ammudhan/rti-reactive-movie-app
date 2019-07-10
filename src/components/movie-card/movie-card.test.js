import React from "react";
import { create } from "react-test-renderer";
import MovieCard from "./movie-card";

describe("Movie Card Component", () => {

    it("should define the state as expected", () => {
        const component = create(<MovieCard />);
        const instance = component.getInstance();
        expect(instance.state.error).toBe('');
    });

});