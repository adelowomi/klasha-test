import { createIcon } from "@chakra-ui/react";
import React from "react";

export const PieChart = createIcon({
    displayName: "PieChart",
    viewBox: "0 0 24 24",
    d: "M12 12V3M19.79 7.5l-15.58 9M3.15 13.65A8.71 8.71 0 013 12a8.99 8.99 0 016-8.484v6.75L3.15 13.65zM12 3a9 9 0 11-7.762 13.556",
    path: (
        <>
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 12V3M19.79 7.5l-15.58 9M3.15 13.65A8.71 8.71 0 013 12a8.99 8.99 0 016-8.484v6.75L3.15 13.65zM12 3a9 9 0 11-7.762 13.556"
            />
        </>
    ),
});

// export default function PieChart({ fill }: { fill?: string }): JSX.Element {
//     return (
//         <svg
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//         >
//             <path
//                 d="M12 12.0001V3.00012"
//                 stroke="black"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//             />
//             <path
//                 d="M19.7907 7.50012L4.20947 16.5001"
//                 stroke={fill}
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//             />
//             <path
//                 d="M3.15009 13.6501C3.04777 13.1061 2.99755 12.5536 3.00009 12.0001C2.99891 10.1388 3.57545 8.323 4.65016 6.80329C5.72487 5.28358 7.24476 4.13489 9.00009 3.51575V10.2657L3.15009 13.6501Z"
//                 stroke={fill}
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//             />
//             <path
//                 d="M12 3.00012C13.5771 3.0003 15.1264 3.41486 16.4928 4.20227C17.8591 4.98969 18.9946 6.12231 19.7855 7.4867C20.5764 8.85108 20.9948 10.3993 20.999 11.9764C21.0032 13.5534 20.5929 15.1038 19.8092 16.4724C19.0256 17.8409 17.8961 18.9795 16.5339 19.7741C15.1717 20.5687 13.6246 20.9915 12.0476 21C10.4706 21.0085 8.91903 20.6025 7.54833 19.8226C6.17763 19.0427 5.03592 17.9164 4.23755 16.5564"
//                 stroke={fill}
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//             />
//         </svg>
//     );
// }
