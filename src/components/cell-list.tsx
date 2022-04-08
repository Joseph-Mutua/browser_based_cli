import { Fragment } from "react";
import { useTypedSelector } from "../hooks/use-typed-selector";
import { Cell } from "../state";
import CellListItem from "./cell-list-item";
import AddCell from "./add-cell";

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { data, order } }) => {
    return order.map((id: string | number) => {
      return data[id];
    });
  });

  const renderedCells = cells.map((cell: any) => (
    <Fragment key={cell.id}>
      <AddCell nextCellId={cell.id} />
      <CellListItem cell={cell} />
    </Fragment>
  ));

  return (
    <div>
      {renderedCells}

      <AddCell forceVisible={cells.length === 0} nextCellId={null} />
    </div>
  );
};

export default CellList;
