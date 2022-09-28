import React from 'react';
import List from "../Main/Components/List"
import {useNavigate} from "react-router-dom";
import TabBar from "../../Components/TabBar";
import { Button, Space, Pagination } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import ListСompanies from "../ListСompanies";

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <TabBar/>
      <div className="pr-5 pl-5 pb-5 flex-container bg-color-light-grey">
        <ListСompanies/>
        {/*<div className="justify-center flex">*/}
        {/*  <Pagination defaultCurrent={1} total={3} />*/}
        {/*</div>*/}
      </div>
    </>
  );
};

export default Main;
