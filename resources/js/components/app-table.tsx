import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

interface AppTableProps{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[]
}

String.prototype.toCapitalize = function() {
  return this.replace(/^\w/, c => c.toUpperCase());
}

export function AppTable({data}: AppTableProps) {
    const columns = Object.keys(data[0]); // Assuming data is an array of objects
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    {columns.map((column) => (
                        <TableHead>{column.toCapitalize()}</TableHead>
                    ))}
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((row, index) => (
                    <TableRow key={index}>
                        {columns.map((column) => (
                            <TableCell key={column}>{row[column]}</TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
