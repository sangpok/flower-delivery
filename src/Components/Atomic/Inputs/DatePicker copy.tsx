import React, { useState, useMemo, useEffect } from "react";

import { ReactComponent as ArrowIcon } from "@Static/Icons/chevron-left.svg";
import { ReactComponent as CalenderIcon } from "@Static/Icons/calendar_month.svg";

/* #region 날짜 관련 유틸 메서드 */
const prevMonth = (month: number) => (month === 0 ? 11 : month - 1);
const nextMonth = (month: number) => (month === 11 ? 0 : month + 1);

const getFirstDayOfWeek = (year: number, month: number) =>
  new Date(`${year}-${(month + 1).toString().padStart(2, "0")}-01`).getDay();

const getLastDay = (year: number, month: number) => {
  const tmpDate = new Date(
    `${year}-${(nextMonth(month) + 1).toString().padStart(2, "0")}-01`,
  );

  return new Date(tmpDate.setDate(tmpDate.getDate() - 1)).getDate();
};

const getPrevDays = (firstDayOfWeek: number, prevMonthLastDay: number) =>
  Array(firstDayOfWeek)
    .fill(0)
    .map((_, index) => prevMonthLastDay - (firstDayOfWeek - 1) + index);

const getNextMonthDays = (currentDayCount: number) =>
  Array(42 - currentDayCount)
    .fill(0)
    .map((_, index) => index + 1);

const getThisDays = (lastDay: number) =>
  Array(lastDay)
    .fill(0)
    .map((_, index) => index + 1);
/* #endregion */

type CalenderComponentProp = {
  selectedDate: Date;
  onDaySelected: (date: Date) => void;
};

const CalenderComponent = ({
  selectedDate,
  onDaySelected,
}: CalenderComponentProp) => {
  // 저번 달의 마지막 날
  // 이번 달의 첫 요일, 마지막 날

  /**
   * 1. 이번 달의 첫 요일(ex. 2)을 알아낸다.
   * 2. 저번 달의 마지막 날(ex. 31)을 알아낸다.
   * 3. 요일 인덱스만큼 요일을 생성하는데, 저번 달의 마지막 날에서 요일 인덱스 - 1를 뺀 만큼부터 시작한다.
   *    (2개의 요일을 생성하고 (31 - 1) = 30일부터 시작해서 2개의 요일째인 31일까지 생성 [30, 31]
   * 4. 이번 달의 마지막 날(ex. 31)을 알아낸다.
   * 5. 저번 달의 요일 + 마지막 날까지 날을 생성한다.
   * 6. 생성된 날의 개수가 42개가 될 때까지 1부터 날을 추가한다.
   *
   *
   * 이때, Date 객체가 반환하는 month는 0부터 11이다.
   * 계산을 할 때는 0번째를 기준으로 하고, 반환할 땐 +1를 해주자.
   *  */

  const [year, setYear] = useState(selectedDate.getFullYear());
  const [month, setMonth] = useState(selectedDate.getMonth());
  const [day, setDay] = useState(selectedDate.getDate());

  const firstDayOfWeek = useMemo(
    () => getFirstDayOfWeek(year, month),
    [year, month],
  );
  const prevMonthLastDay = useMemo(
    () => getLastDay(year, prevMonth(month)),
    [year, month],
  );
  const lastDay = useMemo(() => getLastDay(year, month), [year, month]);

  const prevDays = useMemo(
    () => getPrevDays(firstDayOfWeek, prevMonthLastDay),
    [firstDayOfWeek, prevMonthLastDay],
  );
  const thisDays = useMemo(() => getThisDays(lastDay), [lastDay]);
  const restDays = useMemo(
    () => getNextMonthDays(prevDays.length + thisDays.length),
    [prevDays, thisDays],
  );

  useEffect(() => {
    setYear(selectedDate.getFullYear());
    setMonth(selectedDate.getMonth());
    setDay(selectedDate.getDate());

    console.log(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate(),
    );
  }, [selectedDate]);

  const handlePrevMonthClick = () => {
    if (month === 0) {
      setYear(year - 1);
    }

    setMonth(prevMonth(month));
  };

  const handleNextMonthClick = () => {
    if (month === 11) {
      setYear(year + 1);
    }

    setMonth(nextMonth(month));
  };

  return (
    <div className="h-full w-full space-y-m16 border p-m24 tablet:space-y-t16 tablet:p-t24 desktop:space-y-d16 desktop:p-d24">
      <div className="mx-auto flex w-full flex-row items-center justify-between ">
        <ArrowIcon
          className="h-m16 w-m16 tablet:h-t16 tablet:w-t16 desktop:h-d16 desktop:w-d16"
          onClick={() => handlePrevMonthClick()}
        />
        <h6 className="heading6">
          {year}년 {month + 1}월
        </h6>
        <ArrowIcon
          className="h-m16 w-m16 rotate-180 tablet:h-t16 tablet:w-t16 desktop:h-d16 desktop:w-d16"
          onClick={() => handleNextMonthClick()}
        />
      </div>
      <div className="mx-auto flex w-[90%] items-center justify-between">
        {["월", "화", "수", "목", "금", "토", "일"].map((month, index) => (
          <span key={index} className="caption-bold text-gray">
            {month}
          </span>
        ))}
      </div>
      <div className="grid h-full w-full grid-cols-7 grid-rows-6">
        {prevDays.map((day) => (
          <span
            key={day}
            className="caption-bold flex h-full w-full items-center justify-center  p-m14 text-gray hover:bg-lightgray tablet:p-t14 desktop:p-d14"
          >
            {day}
          </span>
        ))}
        {thisDays.map((day) => (
          <span
            key={day}
            className={`caption-bold flex h-full w-full items-center justify-center  p-m14 tablet:p-t14 desktop:p-d14 ${
              month === selectedDate.getMonth() &&
              day === selectedDate.getDate()
                ? "bg-black text-white "
                : "bg-white text-black hover:bg-lightgray "
            }`}
            onClick={() =>
              onDaySelected(
                new Date(
                  `${year}-${(month + 1).toString().padStart(2, "0")}-${day}`,
                ),
              )
            }
          >
            {day}
          </span>
        ))}
        {restDays.map((_, index) => (
          <span
            key={index}
            className="caption-bold flex h-full w-full items-center justify-center  p-m14 text-gray  hover:bg-lightgray tablet:p-t14 desktop:p-d14"
          >
            {index + 1}
          </span>
        ))}
      </div>
    </div>
  );
};

// TODO: Month Clamp 처리

type DatePickerProp = {
  onSelect: (date: Date) => void;
};

const DatePicker = ({ onSelect }: DatePickerProp) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="relative w-full">
      <div className="flex items-center justify-between border px-m16 py-m12 tablet:p-t16 desktop:p-d16">
        <span className="caption-bold">{`${selectedDate
          .getFullYear()
          .toString()
          .substring(2)}.${(selectedDate.getMonth() + 1)
          .toString()
          .padStart(2, "0")}.${selectedDate
          .getDate()
          .toString()
          .padStart(2, "0")}`}</span>
        <CalenderIcon className="h-m24 w-m24 tablet:h-t24 tablet:w-t24 desktop:h-d24 desktop:w-d24" />
      </div>

      <div className="absolute right-0 top-full mt-m8 w-fit tablet:mt-t8 desktop:mt-d8">
        <CalenderComponent
          selectedDate={selectedDate}
          onDaySelected={(date) => setSelectedDate(date)}
        />
      </div>
    </div>
  );
};

export default DatePicker;
