import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {GridExport} from "./item/style";
import {Pie} from "@nivo/pie";
import {data3, data2} from "./PieData"
import {Button, Input, Tooltip} from 'antd';
import getMillion from "../../Utils/FunctionsCall/getMillion"
import axios from "axios";
import {FiDownload} from "react-icons/fi";

const formatNumber = (value) => new Intl.NumberFormat().format(value);

const NumericInput = (props) => {
  const { value, onChange } = props;

  const handleChange = (e) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;

    if (reg.test(inputValue) || inputValue === '' || inputValue === '-') {
      onChange(inputValue);
    }
  }; // '.' at the end or only '-' in the input box.

  const handleBlur = () => {
    let valueTemp = value;

    if (value.charAt(value.length - 1) === '.' || value === '-') {
      valueTemp = value.slice(0, -1);
    }

    onChange(valueTemp.replace(/0*(\d+)/, '$1'));
  };

  const title = value ? (
    <span className="numeric-input-title">{value !== '-' ? formatNumber(Number(value)) : '-'}</span>
  ) : (
    'Input a number'
  );
  return (
    <Tooltip trigger={['focus']} title={title} placement="topLeft" overlayClassName="numeric-input">
      <Input
        {...props}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Input a number"
        maxLength={25}
      />
    </Tooltip>
  );
};

const ImportAndExport = () => {
  const [importVolume, setImportVolume] = useState(1052126126)
  const [exportVolume, setExportVolume] = useState(13254616563)
  const [USD, setUSD] = useState(0)
  const [actualRate, setActualRate] = useState(0)

  useEffect(() => {
    try {
      (async () => {
        const {data: {Valute: {USD}}} = await axios.get(`https://www.cbr-xml-daily.ru/daily_json.js`)
        setActualRate(USD?.Value)
        setUSD(USD?.Value)
      })()
    } catch(e) {
      console.log(e)
    }
  }, [])

  // useEffect(() => {
  //   console.log(666)
  //   currencyConverter()
  // }, [USD]);

  const currencyConverter = (e) => {
    if (e) {
      setUSD(e)
      console.log(importVolumeRub, e)
      setImportVolume(importVolumeRub*e)
    }
  }

  const importVolumeRub = useMemo(() => {
    if (USD) {
      console.log(importVolume/USD)
      return importVolume/USD
    }
  }, [USD])
  // rub = importVolume/USD
  // usd = rub*USD

  const getActualRate = useCallback(() => {
    setUSD(actualRate)
  }, [])

  return (
    <>
      <div className="pb-5 flex items-center">
        <div className="color-greyLite-2 pr-4">Курс доллара</div>
        <NumericInput
          placeholder="Курс доллара"
          style={{
            width: 120,
          }}
          value={USD}
          onChange={ (e) => currencyConverter(e) }
        />
        {USD}
        <div
          className="link"
          onClick={getActualRate}
        >
          Применить актуальный курс
        </div>
      </div>
      <GridExport>
        <div>
          <div className="color-greyLite-2 pb-4">
            Объем импорта, в млн долл. <span className="color-greyDarken-1 pl-4">{getMillion(importVolume)}</span>
          </div>
          {importVolume}
          <div className="color-greyLite-2 pb-4">
            Объем импорта, в млн руб. <span className="color-greyDarken-1 pl-4">{getMillion(importVolumeRub)}</span>
          </div>
          {importVolume/USD}

          <div className="color-greyLite-2 ">
            Структура импорта по странам в процентах:
            <Pie
              width={650}
              height={400}
              data={data2}
              margin={{
                top: 40,
                right: 80,
                bottom: 80,
                left: 80
              }}
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
              onMouseMove={(e) => {
                console.log(e)
              }}
            />
          </div>
        </div>
        <div>
          <div className="color-greyLite-2 pb-4">
            Объем экспорта, в долл. <span className="color-greyDarken-1 pl-4">{getMillion(exportVolume)}</span>
          </div>
          <div className="color-greyLite-2 ">
            Структура экспорта в процентах:
            <Pie
              width={650}
              height={400}
              data={data3}
              margin={{
                top: 40,
                right: 80,
                bottom: 80,
                left: 80
              }}
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
            />
          </div>
        </div>
      </GridExport>
    </>
  );
};

export default ImportAndExport;
