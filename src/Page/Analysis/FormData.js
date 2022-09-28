import React from 'react';
import {Tag} from "antd";

const FormData = () => {
  return (
    <>
      <div className="color-greyLite-2 pb-4">
        ИНН заявителя проекта:
        <span className="color-greyDarken-1 pl-4">
                  14600948
                </span>
      </div>
      <div className="color-greyLite-2 pb-4">
        Заявитель проекта: <span className="color-greyDarken-1 pl-4"></span>
      </div>
      <div className="color-greyLite-2 pb-4">
        <span className="pr-4">ОКПД2 продукции производителя:</span>
        <Tag>16.1 Лесоматериалы, распиленные и строганые</Tag>
        <Tag>16.2 Изделия из дерева, пробки, соломки и материалов для плетения</Tag>
      </div>
      <div className="color-greyLite-2 pb-4">
        <span className="pr-4">ТН ВЭД продукции производителя:</span>
        <Tag>44 01 210000 хвойных пород</Tag>
        <Tag>44 01 301000 опилки</Tag>
      </div>
    </>
  );
};

export default FormData;
