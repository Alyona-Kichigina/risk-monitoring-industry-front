import React from 'react';
import Handsontable from 'handsontable';
import { HotTable, HotColumn } from "@handsontable/react";
import { data } from "./fieldMap";

import { registerAllModules } from 'handsontable/registry';

registerAllModules();
const hotData = [
  [1243, "Tesla", "Да", 2, 6.5, 6, 7, 8, 9, "yes", "comment"  ],
];

const ListСompanies = () => {
  return (
    <HotTable
      colHeaders={[
        "ИНН",
        "Название",
        "Банкротство/Ликвидация",
        "Кол-во негативных новостей",
        "Изменение энергопотребления",
        "Сальдо убывшего персонала",
        "Доля высвободившегося персонала",
        "Количество работников, предполагаемых к увольнению",
        "Группа риска",
        "Проверка риска",
        "Комментарий по риску"
      ]}
      licenseKey='non-commercial-and-evaluation'
      data={hotData}
      // rowHeaders={true}
      width="100%"
      height="300"
    />
  );
};

export default ListСompanies;
