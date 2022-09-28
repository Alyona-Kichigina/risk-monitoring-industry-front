import React, {useCallback, useState} from 'react';
import {Pie} from "@nivo/pie";
import {data} from "./PieData"
import getMillion from "../../Utils/FunctionsCall/getMillion"
import {Button, Modal} from "antd";
import Organization from "./Organization";
import { patternDotsDef, patternSquaresDef } from '@nivo/core'

const thisCompanyInTop10 = (array, val) => {
  const newArray = []
  array.sort((a, b) => b.value - a.value).slice(0, 10).forEach(({id}) => newArray.push(id))
  return newArray.includes(val)
}
const idCompany = "АО \"СМЕРФИТ КАППА РУС\""
const idOtherManufacturers = "Другие производители"

const Market = () => {
  const [open, setOpen] = useState(false);

  const openModal = useCallback((data) => {
    const {data: {id}} = data
    if (id !== idOtherManufacturers) {
      setOpen(true)
    }
  }, [])


  thisCompanyInTop10(data, idCompany)
  return (
    <>
      <Modal
        title=""
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        cancelText="Закрыть"
        width={1300}
      >
        <Organization/>
      </Modal>
      <div className="color-greyLite-2 pb-4">
        Объем рынка в РФ, в млн. руб. <span className="color-greyDarken-1 pl-4">{getMillion(14600948000)}</span>
      </div>
      <div className=" ">
        <div className="color-greyLite-2 ">Структура рынка в РФ по производителям в процентах:</div>
        <Pie
          width={650}
          height={400}
          data={data}
          margin={{
            top: 40,
            right: 80,
            bottom: 80,
            left: 80
          }}
          tooltip={({datum: {data: {label, id, value, color}}}) => (
            <div className="bg-white pr-5 pl-5 pt-5 pb-5 w-100 container-box-shadow">
              <div className="font-bold flex items-center">
                <div
                  style={{backgroundColor: color, width: "12px", height: "12px", marginRight: "5px"}}
                />
                {label}
              </div>
              <div className="">
                <span className="color-greyLite-2">Доля рынка:</span> {value}%
              </div>
              <div className="">
                <span className="color-greyLite-2"> Объем рынка:</span> 3 416,6 млн руб.
              </div>
            </div>
          )}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          colorBy="id"
          borderColor="inherit:darker(0.6)"
          radialLabelsSkipAngle={10}
          radialLabelsTextXOffset={6}
          radialLabelsTextColor="#333333"
          radialLabelsLinkOffset={0}
          radialLabelsLinkDiagonalLength={16}
          radialLabelsLinkHorizontalLength={24}
          radialLabelsLinkStrokeWidth={1}
          radialLabelsLinkColor="inherit"
          slicesLabelsSkipAngle={10}
          slicesLabelsTextColor="#333333"
          animate={true}
          motionStiffness={90}
          motionDamping={15}
          theme={{
            tooltip: {
              container: {
                fontSize: "13px"
              }
            },
            labels: {
              text: { color: "#555" }
            }
          }}
          fill={[
            { match: {
              id: thisCompanyInTop10(data, idCompany)
                ? idCompany
                : idOtherManufacturers
              }, id: 'dots' },
          ]}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          defs={[
            patternDotsDef('dots', {
              color: '#f1e15b',
              size: 2,
              padding: 1,
              stagger: true,
              "background": "#e8a838",

            }),
          ]}
          onClick={(e)=> {
            openModal(e)
          }}
        />
        <div className="pb-5">
          <Button
            type="primary"
          >
            Скачать данные структуры рынка
          </Button>
        </div>
      </div>
    </>
  );
};

export default Market;
