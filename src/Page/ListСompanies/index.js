import React from 'react';
import Handsontable from 'handsontable';
import { HotTable, HotColumn } from "@handsontable/react";
import { data } from "./fieldMap";

import { registerAllModules } from 'handsontable/registry';
import {Input} from "antd";

registerAllModules();
const hotData = [
  {
    inn_company: 123,
    name_company: "text",
    bankruptcy_liquidation: "text",
    number_negative_news: "number",
    changing_power_consumption: "number",
    balance_departed_personnel: "number",
    share_released_staff: "number",
    employee_layoffs_expected: "number",
    risk_group: "text",
    risk_check: "text",
    risk_comment: "text"
  }
];

const settings = {

}

const ListСompanies = () => {
  return (
    <div className="pt-5">
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
        columns={[
          {
            data: 'inn_company',
            width: 65
          },
          {
            data: 'name_company',
            type: 'text',
            width: 160,
            editor: <Input placeholder="Введите значение" />
          },
          {
            data: 'bankruptcy_liquidation',
            type: 'text',
            width: 100
          },
          {
            data: 'number_negative_news',
            type: 'text',
            width: 100
          },
          {
            data: 'changing_power_consumption',
            type: 'text',
            width: 120
          },
          {
            data: 'balance_departed_personnel',
            type: 'text',
            width: 120
          },
          {
            data: 'share_released_staff',
            type: 'text',
            width: 120
          },
          {
            data: 'employee_layoffs_expected',
            type: 'text',
            width: 120
          },
          {
            data: 'risk_group',
            type: 'text',
            width: 120
          },
          {
            data: 'risk_check',
            type: 'text',
            width: 100
          },
          {
            data: 'risk_comment',
            type: 'text',
            width: 120
          }
        ]}
        licenseKey='non-commercial-and-evaluation'
        data={hotData}
        // rowHeaders={true}
        width="100%"
        height="300"
      />
    </div>
  );
};

export default ListСompanies;
