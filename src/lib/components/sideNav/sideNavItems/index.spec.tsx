import { render } from "@test";
import { SideNavItem } from "@components/sideNav/sideNavItems";
import { FiGrid } from "react-icons/fi";
import "@testing-library/jest-dom";

describe("SideNavItem", () => {
    it("should match snapshot", async () => {
        const currentRoute = "dashboard";
        const { asFragment } = render(
            <SideNavItem
                name="Dashboard"
                route="dashboard"
                currentRoute={currentRoute}
            >
                <FiGrid
                    color={`${
                        currentRoute == "dashboard" ? "#FFFFFF" : "#767171"
                    }`}
                    size={"24px"}
                />
            </SideNavItem>,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it("should render SideNavBar", async () => {
        const currentRoute = "dashboard";
        const sideNavBar = render(
            <SideNavItem
                name="Dashboard"
                route="dashboard"
                currentRoute={currentRoute}
            >
                <FiGrid
                    color={`${
                        currentRoute == "dashboard" ? "#FFFFFF" : "#767171"
                    }`}
                    size={"24px"}
                />
            </SideNavItem>,
        );
        expect(sideNavBar).toBeTruthy();
    });

    it("should have background color brand.200", async () => {
        const currentRoute = "dashboard";
        const { getByTestId, getByText } = render(
            <SideNavItem
                name="Dashboard"
                route="dashboard"
                currentRoute={currentRoute}
            >
                <FiGrid
                    color={`${
                        currentRoute == "dashboard" ? "#FFFFFF" : "#767171"
                    }`}
                    size={"24px"}
                />
            </SideNavItem>,
        );
        const item = getByTestId("side-nav-item-dashboard");
        // expect(item).toHaveTextContent("Dashboard");
        expect(getByText("Dashboard")).toBeInTheDocument();
        expect(item).toHaveStyle({ color: { r: 239, g: 44, b: 90 } });
    });
});
