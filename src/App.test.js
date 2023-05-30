import { render, screen } from "@testing-library/react";
import Snack from "./SnacksList";

describe("App", () => {
    test("renders without crashing", () => {
        render(<Snack />);
        const text = screen.getByText("Grapes");
        expect(text).toBeInTheDocument();
    });
});
