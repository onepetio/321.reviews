import { flexRender } from "@tanstack/react-table";
import type * as T from "@tanstack/react-table";
import Fa from "react-icons/fa/index";

const emptyText = "empty";

export {
  Header,
  HeaderRow as HeaderGroup,
  Cell,
  Row,
  renderTable as Table
}


function Header(header: T.Header<unknown, unknown>) {
  const { isPlaceholder, column } = header;
  return (
    <th
      style={{
        width: column.getSize(),
        cursor: column.getCanSort() ? "pointer" : "default",
      }}
      onClick={column.getToggleSortingHandler()}
    >
      {isPlaceholder ? null : flexRender(column.columnDef.header, header.getContext())}
      {column.getCanSort() &&
        {
          false: <Fa.FaSort />,
          asc: <Fa.FaSortUp />,
          desc: <Fa.FaSortDown />,
        }[column.getIsSorted().toString()]}
    </th>
  );
};

function HeaderRow(hGroup: T.HeaderGroup<unknown>) {
  return (
    <tr>{hGroup.headers.map((header) => Header(header))}</tr>
  );
}

function Cell(cell: T.Cell<unknown, unknown>) {
  return (
    <td>{flexRender(cell.column.columnDef.cell, cell.getContext()) ?? emptyText}</td>
  );
}

function Row(row: T.Row<unknown>) {
  return (
    <tr>{row.getVisibleCells().map((cell) => Cell(cell))}</tr>
  );
}


const renderTable: React.FC<T.Table<any>> = (table) => {
  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((hGroup) => HeaderRow(hGroup))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row, i) => Row(row))}
      </tbody>
    </table>
  );
};

export default renderTable;
