import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export default function AppCard({ title, subtitle, header, children, footer }: { title: string, subtitle?: string, header?: React.ReactNode, footer?: React.ReactNode, children: React.ReactNode }) {
    return (
        <Card className="h-full">
            <CardHeader>
                <div className="flex justify-between">
                    <div className="flex items-center">
                        <CardTitle>{title}</CardTitle>
                        {subtitle && <CardDescription>{subtitle}</CardDescription>}
                    </div>
                    {header && <div className="flex items-center mr-1">{header}</div>}
                </div>
            </CardHeader>
            <CardContent className="flex-1">
                {children}
            </CardContent>
            <CardFooter>{footer}</CardFooter>
        </Card>
    );
}
