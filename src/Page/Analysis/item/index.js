import React, {useCallback, useState, useEffect} from 'react';
import {Breadcrumb, Button, Tag} from "antd";
import TabBar from "../../../Components/TabBar";
import PerfectScrollbar from "react-perfect-scrollbar";
import FormData from "../FormData";
import Organization from "../Organization";
import Market from "../Market";
import ImportAndExport from "../ImportAndExport";
import { FiDownload } from "react-icons/fi";
import axios from "axios";

const AnalysisItem = () => {
  const [dollarExchangeRate, setDollarExchangeRate] = useState(null)



  const download = useCallback(() => {

  }, [])
  return (
    <>
      <TabBar className="min-h-40"/>
      <div className="pr-5 pl-5 pb-5 bg-color-light-grey flex-container hidden">
        <div className="pt-5 pb-5">
          <Breadcrumb>
            <Breadcrumb.Item>
              <a href="/tab">Главная</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Результат оценки проекта</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="bg-white pl-5 pt-5 pb-5 flex-container hidden">
          <PerfectScrollbar>
            <div className="pr-5">
              <div className="pb-5 border-bottom-grey">
                <FormData/>
              </div>
              <div className="pb-5 border-bottom-grey">
                <h2>Организация</h2>
                <Organization/>
              </div>
              <div className=" border-bottom-grey">
                <h2>Рынок</h2>
                <Market/>
              </div>
              <div className="">
                <h2>Импорт/Экспорт</h2>
                <ImportAndExport/>
              </div>
            </div>
          </PerfectScrollbar>
        </div>
        <div className="pt-5 flex ">
          <Button
            type="primary"
            onClick={download}
          >
            <span className="pr-1.5"><FiDownload/></span>
            Скачать
          </Button>
        </div>
      </div>
    </>
  );
};

export default AnalysisItem;
