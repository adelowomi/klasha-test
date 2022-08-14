import { createIcon } from "@chakra-ui/react";
import React from "react";

export const Transactions = createIcon({
    displayName: "Transactions",
    viewBox: "0 0 24 24",
    d: "M5 7h14.625m0 0l-3-3m3 3l-3 3M19.625 16.688H5m0 0l3-3m-3 3l3 3",
    path: (
        <>
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 7h14.625m0 0l-3-3m3 3l-3 3M19.625 16.688H5m0 0l3-3m-3 3l3 3"
            />
        </>
    ),
});

// export default function Transactions({ fill }: { fill?: string }) {
//     return (
//         <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//         >
//             <path
//                 d="M5 7.00012L19.625 7.00012M19.625 7.00012L16.625 4.00012M19.625 7.00012L16.625 10.0001"
//                 stroke={fill}
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//             />
//             <path
//                 d="M19.625 16.6876L5 16.6876M5 16.6876L8 13.6876M5 16.6876L8 19.6876"
//                 stroke={fill}
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//             />
//         </svg>
//     );
// }
