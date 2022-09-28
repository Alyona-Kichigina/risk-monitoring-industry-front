import React, {useCallback, useState} from 'react';
import TabBar from "../../Components/TabBar";
import {Button} from "antd";
import {useNavigate} from "react-router-dom";
import { Breadcrumb } from 'antd';
import { Input } from 'antd';
import { TreeSelect } from 'antd';
import {treeData, treeDataTH} from "./fieldMap"

const { SHOW_PARENT } = TreeSelect;

const CreateAnalysis = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(undefined);

  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };
  const tProps = {
    treeData,
    value,
    handleChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: 'Выберите значение',
    style: {
      width: '100%',
    },
  };

  const tPropsTH = {
    treeData: treeDataTH,
    value,
    handleChange,
    treeCheckable: true,
    showCheckedStrategy: SHOW_PARENT,
    placeholder: 'Выберите значение',
    style: {
      width: '100%',
    },
  }

  return (
    <>
      <TabBar/>
      <div className="pr-5 pl-5 pb-5 flex-container bg-color-light-grey">
        <div className="pt-5 pb-5">
          <Breadcrumb>
            <Breadcrumb.Item>
              <a href="/tab">Главная</a>
              </Breadcrumb.Item>
            <Breadcrumb.Item>Оценить новый проект</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="bg-white pl-5 pr-5 pt-5 pb-5">
          <div className="m-l-auto m-r-auto">
            <div className="pb-5">
              <div className="pb-1">ИНН заявителя проекта</div>
              <Input placeholder="Введите значение" />
            </div>
            <div className="pb-5">
              <div className="pb-1">ОКПД2 продукции производителя</div>
              <TreeSelect {...tProps} />
            </div>
            <div className="pb-5">
              <div className="pb-1">ТН ВЭД продукции производителя</div>
              <TreeSelect {...tPropsTH} />
            </div>
            <div className="flex justify-center">
              <Button
                type="primary"
                onClick={() => navigate("/tab/analysis")}
              >
                Оценить
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAnalysis;
