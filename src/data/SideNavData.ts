import { Chart } from "lib/components/icons/Chart";
import { PaymentLink } from "lib/components/icons/PaymentLink";
import { Payments } from "lib/components/icons/Payments";
import { PieChart } from "lib/components/icons/PieChart";
import { Radar } from "lib/components/icons/Radar";
import { ShoppingCart } from "lib/components/icons/ShoppingCart";
import { Swap } from "lib/components/icons/Swap";
import { Transactions } from "lib/components/icons/Transactions";
import { Wallet } from "lib/components/icons/Wallet";
import { IMenuItem } from "lib/components/sideNav";


export const menuItems: IMenuItem[] = [
    {
        name: "Dashboard",
        route: "",
        icon: PieChart,
    },
    {
        name: "Balances",
        route: "balances",
        icon: Wallet,
    },
    {
        name: "Transactions",
        route: "transactions",
        icon: Payments,
    },
    {
        name: "Analytics",
        route: "analytics",
        icon: Chart,
    },
    {
        name: "Marketing",
        route: "marketing",
        icon: Radar,
    },
    {
        name: "Exchange Rates",
        route: "exchange_rates",
        icon: Swap,
    },
];

export const menuItems2: IMenuItem[] = [
    {
        name: "KlashaCheckout",
        route: "klasha_checkout",
        icon: ShoppingCart,
    },
    {
        name: "Paymentc Links",
        route: "payment_links",
        icon: PaymentLink,
    },
];

export const menuItems3: IMenuItem[] = [
    {
        name: "KlashaWire",
        route: "klasha_wire",
        icon: Transactions,
    },
];
