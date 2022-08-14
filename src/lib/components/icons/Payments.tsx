import { createIcon } from "@chakra-ui/react";
import React from "react";

export const Payments = createIcon({
    displayName: "Payments",
    viewBox: "0 0 24 24",
    d: "M7.469 19.156V4.531m0 0l-3 3m3-3l3 3M17.156 4.531v14.625m0 0l-3-3m3 3l3-3",
    path: (
        <>
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7.469 19.156V4.531m0 0l-3 3m3-3l3 3M17.156 4.531v14.625m0 0l-3-3m3 3l3-3"
            />
        </>
    ),
});

// export default function Payments({ fill }: { fill?: string }) {
//     return (
//         <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//         >
//             <path
//                 d="M7.46875 19.1564L7.46875 4.53137M7.46875 4.53137L4.46875 7.53137M7.46875 4.53137L10.4687 7.53137"
//                 stroke={fill}
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//             />
//             <path
//                 d="M17.1562 4.53137V19.1564M17.1562 19.1564L14.1562 16.1564M17.1562 19.1564L20.1562 16.1564"
//                 stroke={fill}
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//             />
//         </svg>
//     );
// }
