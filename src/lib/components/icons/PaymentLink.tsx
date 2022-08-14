import { createIcon } from "@chakra-ui/react";
export const PaymentLink = createIcon({
    displayName: "PaymentLink",
    viewBox: "0 0 32 32",
    path: (
        <>
            <path
                stroke={"currentColor"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                d="M15.288 8.925l2.475-2.475a5.512 5.512 0 017.788 7.788l-3.538 3.525a5.487 5.487 0 01-7.775 0"
            />
            <path
                stroke={"currentColor"}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                d="M16.713 23.073l-2.475 2.475a5.513 5.513 0 01-7.788-7.787l3.538-3.525a5.489 5.489 0 017.775 0"
            />
        </>
    ),
});
