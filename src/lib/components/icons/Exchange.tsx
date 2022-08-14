import { createIcon } from "@chakra-ui/react";
import React from "react";

export const Exchange = createIcon({
    displayName: "Exchange",
    viewBox: "0 0 24 24",
    path: (
        <>
            <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </>
    ),
});

{
    /* export default function Exchange({ fill }: { fill?: string }) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_17058_14352)">
                <path
                    d="M4.125 12.7501V12.7501C4.125 8.40088 7.65076 4.87512 12 4.87512H19.875M19.875 4.87512L17.0956 1.50012M19.875 4.87512L17.0956 8.25012"
                    stroke={fill}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M19.875 11.2501V11.2501C19.875 15.5994 16.3492 19.1251 12 19.1251H4.125M4.125 19.1251L6.90441 22.5001M4.125 19.1251L6.90441 15.7501"
                    stroke={fill}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_17058_14352">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
} */
}
