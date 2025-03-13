/* eslint-disable @typescript-eslint/no-explicit-any */
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart";

type SimpleBar = {
    [key: string]: any
}

export function DashboardChart({ data }:{ data: SimpleBar[] }) {
    const config: ChartConfig = {};
    return (
        <ChartContainer config={config}>
            <BarChart accessibilityLayer data={data}>
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="name"
                    tickLine={true}
                    tickMargin={10}
                    axisLine={true}
                    // tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent indicator="dashed" labelKey="name" nameKey="name" />} />
                <Bar fill="#82ca9d" dataKey="creadited" />
                <Bar fill="#8884d8" dataKey="leads" />
            </BarChart>
        </ChartContainer>
    );
}
