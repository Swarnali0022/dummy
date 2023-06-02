import React from 'react';
import { useTable } from 'react-table';

interface Column {
  Header: string;
  accessor: string;
  Cell?: any; // Add this line to allow custom cell rendering
}

interface Data {
  [key: string]: any;
}

interface TableContainerProps {
  columns: Column[];
  data: Data[];
}

const TableContainer: React.FC<TableContainerProps> = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  });

  return (
    <table
      {...getTableProps()}
      className="w-full border-collapse mx-auto"
      style={{ maxWidth: "4xlxl" }}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            className="bg-gray-200 border-b"
          >
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                className="py-2 px-4 text-left"
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="border-b">
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()} className="py-2 px-4">
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableContainer;