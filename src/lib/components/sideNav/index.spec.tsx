import { render } from "@test";
import "@testing-library/jest-dom";

describe("SideNav", () => {
    it("should match snapshot", () => {
        const { asFragment } = render(<SideNav currentRoute="dashboard" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("should render a sideNav", () => {
        const { asFragment } = render(<SideNav currentRoute="dashboard" />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("should have dashboard node with background color brand.200", () => {
        const { getByTestId, getByText } = render(
            <SideNav currentRoute="dashboard" />,
        );
        const dashboardItem = getByTestId("side-nav-item-dashboard");
        // expect(dashboardItem).toHaveTextContent("Dashboard");
        expect(getByText("Dashboard")).toBeInTheDocument();
        expect(dashboardItem).toHaveStyle({ color: { r: 239, g: 44, b: 90 } });

        expect(getByText("Balances")).toHaveStyle({
            backgroundColor: { r: 0, g: 0, b: 0 },
        });
        expect(getByText("Transactions")).toHaveStyle({
            backgroundColor: { r: 0, g: 0, b: 0 },
        });
        expect(getByText("Analytics")).toHaveStyle({
            backgroundColor: { r: 0, g: 0, b: 0 },
        });
        expect(getByText("Marketing")).toHaveStyle({
            backgroundColor: { r: 0, g: 0, b: 0 },
        });
    });

    it("should have transactions node with background color brand.100", () => {
        const { getByTestId, getByText } = render(
            <SideNav currentRoute="transactions" />,
        );
        const loadItem = getByTestId("side-nav-item-transactions");
        // expect(loadItem).toHaveTextContent("Loads");
        expect(loadItem).toHaveStyle({ color: { r: 239, g: 44, b: 90 } });

        expect(getByText("Balances")).toHaveStyle({
            backgroundColor: { r: 0, g: 0, b: 0 },
        });
        expect(getByText("Dashboard")).toHaveStyle({
            backgroundColor: { r: 0, g: 0, b: 0 },
        });
        expect(getByText("Analytics")).toHaveStyle({
            backgroundColor: { r: 0, g: 0, b: 0 },
        });
        expect(getByText("Marketing")).toHaveStyle({
            backgroundColor: { r: 0, g: 0, b: 0 },
        });
    });

    it("should have marketing node with background color brand.100", () => {
        const { getByTestId, getByText } = render(
            <SideNav currentRoute="marketing" />,
        );
        const trackItem = getByTestId("side-nav-item-marketing");
        // expect(trackItem).toHaveTextContent("Track Loads");
        expect(trackItem).toHaveStyle({ color: { r: 239, g: 44, b: 90 } });

        expect(getByText("Balances")).toHaveStyle({
            backgroundColor: { r: 0, g: 0, b: 0 },
        });
        expect(getByText("Transactions")).toHaveStyle({
            backgroundColor: { r: 0, g: 0, b: 0 },
        });
        expect(getByText("Analytics")).toHaveStyle({
            backgroundColor: { r: 0, g: 0, b: 0 },
        });
        expect(getByText("Dashboard")).toHaveStyle({
            backgroundColor: { r: 0, g: 0, b: 0 },
        });
    });

    it("should have balances node with background color brand.100", () => {
        const { getByTestId, getByText } = render(
            <SideNav currentRoute="balances" />,
        );
        const reportItem = getByTestId("side-nav-item-balances");
        // expect(reportItem).toHaveTextContent("Billing Report");
        expect(reportItem).toHaveStyle({ color: { r: 239, g: 44, b: 90 } });

        expect(getByText("Dashboard")).toHaveStyle({
            backgroundColor: { r: 0, g: 0, b: 0 },
        });
        expect(getByText("Transactions")).toHaveStyle({
            backgroundColor: { r: 0, g: 0, b: 0 },
        });
        expect(getByText("Analytics")).toHaveStyle({
            backgroundColor: { r: 0, g: 0, b: 0 },
        });
        expect(getByText("Marketing")).toHaveStyle({
            backgroundColor: { r: 0, g: 0, b: 0 },
        });
    });

    it("should have analytics node with background color brand.100", () => {
        const { getByTestId, getByText } = render(
            <SideNav currentRoute="analytics" />,
        );
        const reportItem = getByTestId("side-nav-item-analytics");
        // expect(reportItem).toHaveTextContent("My Users");
        expect(reportItem).toHaveStyle({ color: { r: 239, g: 44, b: 90 } });

        expect(getByText("Balances")).toHaveStyle({
            backgroundColor: { r: 0, g: 0, b: 0 },
        });
        expect(getByText("Transactions")).toHaveStyle({
            backgroundColor: { r: 0, g: 0, b: 0 },
        });
        expect(getByText("Dashboard")).toHaveStyle({
            backgroundColor: { r: 0, g: 0, b: 0 },
        });
        expect(getByText("Marketing")).toHaveStyle({
            backgroundColor: { r: 0, g: 0, b: 0 },
        });
    });
});
