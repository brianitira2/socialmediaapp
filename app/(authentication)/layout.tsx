import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import '../globals.css';


export const metadata = {
    title: 'Social media application',
    description: 'A Full Stack Social Media Application With Next Js'
};

const font = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <head>
                    <title>{metadata.title}</title>
                    <meta name="description" content={metadata.description} />
                </head>
                <body className={`${font.className} bg-dark-1`}>
                    {children}
                </body>
            </html>
        </ClerkProvider>
    );
}
