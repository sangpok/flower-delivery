import React, { useState, useRef, useEffect, useCallback } from "react";

import { ReactComponent as ArrowIcon } from "@Static/Icons/chevron-left.svg";
import { ReactComponent as CalenderIcon } from "@Static/Icons/calendar_month.svg";

const MemoedArrowIcon = React.memo(ArrowIcon, (p, n) => p.width === n.width);
const MemoedCalenderIcon = React.memo(
  CalenderIcon,
  (p, n) => p.width === n.width,
);

const DAY_OF_WEEK_NAMES = ["일", "월", "화", "수", "목", "금", "토"];

/* #region 날짜 계산 관련 메소드 */
const getPrevDays = (currentDate: Date) => {
  const tmpDate = new Date(currentDate);
  tmpDate.setDate(1);

  const prevDays = Array(tmpDate.getDay()).fill(null);

  for (let index = prevDays.length; index--; ) {
    prevDays[index] = new Date(tmpDate.setDate(tmpDate.getDate() - 1));
  }

  return prevDays as Array<Date>;
};

const getThisDays = (currentDate: Date) => {
  const tmpDate = new Date(currentDate);
  tmpDate.setDate(1);

  const currentMonth = tmpDate.getMonth();
  const thisDays = [];

  while (tmpDate.getMonth() === currentMonth) {
    thisDays.push(new Date(tmpDate));
    tmpDate.setDate(tmpDate.getDate() + 1);
  }

  return thisDays as Array<Date>;
};

const getNextDays = (currentDate: Date, dayCount: number) => {
  const tmpDate = new Date(currentDate);
  tmpDate.setMonth(tmpDate.getMonth() + 1);
  tmpDate.setDate(1);

  const nextDays = [];

  while (nextDays.length < 42 - dayCount) {
    nextDays.push(new Date(tmpDate));
    tmpDate.setDate(tmpDate.getDate() + 1);
  }

  return nextDays as Array<Date>;
};

const calcuateCalenderDays = (date: Date) => {
  const prevDays = getPrevDays(date);
  const thisDays = getThisDays(date);
  const nextDays = getNextDays(date, prevDays.length + thisDays.length);

  return [...prevDays, ...thisDays, ...nextDays] as Array<Date>;
};
/* #endregion */

const DayOfWeekHeader = React.memo(() => {
  return DAY_OF_WEEK_NAMES.map((month) => (
    <span key={month} className="caption-bold text-gray">
      {month}
    </span>
  ));
});

type DayItemProp = {
  calcuatedDay: Date;
  calenderDate: Date;
  selectedDate: Date;
  onDaySelect: (date: Date) => void;
};

const DayItem = React.memo(
  ({ calcuatedDay, calenderDate, selectedDate, onDaySelect }: DayItemProp) => {
    const textColor =
      calcuatedDay.getMonth() !== calenderDate.getMonth()
        ? "text-gray "
        : calcuatedDay.toISOString() === selectedDate.toISOString()
        ? "bg-black text-white "
        : "bg-white text-black hover:bg-lightgray ";

    return (
      <span
        className={`caption-bold flex h-full w-full items-center justify-center  p-m14 tablet:p-t14 desktop:p-d14 ${textColor}`}
        onClick={() => onDaySelect(calcuatedDay)}
      >
        {calcuatedDay.getDate()}
      </span>
    );
  },
  (p, n) =>
    (p.calcuatedDay.toISOString() === p.selectedDate.toISOString()) ===
      (n.calcuatedDay.toISOString() === n.selectedDate.toISOString()) &&
    p.calcuatedDay.toISOString() === n.calcuatedDay.toISOString(),
);

type CalenderComponentProp = {
  selectedDate: Date;
  onDaySelected: (date: Date) => void;
};

const CalenderComponent = React.memo(
  ({ selectedDate, onDaySelected }: CalenderComponentProp) => {
    const lastCalenderMonth = useRef("");
    const [calenderDate, setCalenderDate] = useState(new Date(selectedDate));
    const [calcuatedDays, setCalcuatedDays] = useState(
      calcuateCalenderDays(calenderDate),
    );

    useEffect(() => {
      setCalenderDate(new Date(selectedDate));
    }, [selectedDate]);

    useEffect(() => {
      if (lastCalenderMonth.current === calenderDate.getMonth().toString()) {
        return;
      }

      lastCalenderMonth.current = calenderDate.getMonth().toString();
      setCalcuatedDays(calcuateCalenderDays(calenderDate));
    }, [calenderDate]);

    const handlePrevMonthClick = useCallback(() => {
      setCalenderDate(
        new Date(calenderDate.setMonth(calenderDate.getMonth() - 1)),
      );
    }, [calenderDate]);

    const handleNextMonthClick = useCallback(() => {
      setCalenderDate(
        new Date(calenderDate.setMonth(calenderDate.getMonth() + 1)),
      );
    }, [calenderDate]);

    return (
      <div className="h-full w-full select-none space-y-m16 border p-m24 tablet:space-y-t16 tablet:p-t24 desktop:space-y-d16 desktop:p-d24">
        <div className="mx-auto flex w-full flex-row items-center justify-between ">
          <MemoedArrowIcon
            className="h-m16 w-m16 tablet:h-t16 tablet:w-t16 desktop:h-d16 desktop:w-d16"
            onClick={() => handlePrevMonthClick()}
          />
          <h6 className="heading6">
            {calenderDate.getFullYear()}년 {calenderDate.getMonth() + 1}월
          </h6>
          <MemoedArrowIcon
            className="h-m16 w-m16 rotate-180 tablet:h-t16 tablet:w-t16 desktop:h-d16 desktop:w-d16"
            onClick={() => handleNextMonthClick()}
          />
        </div>
        <div className="mx-auto flex w-[90%] items-center justify-between">
          <DayOfWeekHeader />
        </div>
        <div className="grid h-full w-full grid-cols-7 grid-rows-6">
          {calcuatedDays.map((calcuatedDay) => (
            <DayItem
              key={`${calenderDate.toISOString()}-${calcuatedDay.toISOString()}`}
              calcuatedDay={calcuatedDay}
              calenderDate={calenderDate}
              selectedDate={selectedDate}
              onDaySelect={(date) => onDaySelected(date)}
            />
          ))}
        </div>
      </div>
    );
  },
  (prevProps, nextProps) =>
    prevProps.selectedDate.toISOString() ===
    nextProps.selectedDate.toISOString(),
);

type DatePickerProp = {
  onSelect: (date: Date) => void;
};

const DatePicker = ({ onSelect }: DatePickerProp) => {
  const wasSelected = useRef(false);
  const [isOpened, setIsOpened] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDaySelected = (date: Date) => {
    setSelectedDate(date);
    setIsOpened(false);

    if (!wasSelected.current) wasSelected.current = true;
  };

  return (
    <div className="relative w-full">
      <div
        className={
          "flex cursor-pointer select-none items-center justify-between border px-m16 py-m12 tablet:p-t16 desktop:p-d16 " +
          `${
            isOpened || wasSelected.current
              ? "border-black "
              : "border-lightgray"
          }`
        }
        onClick={() => setIsOpened(!isOpened)}
      >
        <span
          className={
            "caption-bold " +
            `${wasSelected.current ? "text-black " : "text-gray "}`
          }
        >{`${selectedDate.getFullYear().toString().substring(2)}.${(
          selectedDate.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}.${selectedDate
          .getDate()
          .toString()
          .padStart(2, "0")}`}</span>
        <MemoedCalenderIcon className="h-m24 w-m24 fill-gray tablet:h-t24 tablet:w-t24 desktop:h-d24 desktop:w-d24" />
      </div>

      {isOpened && (
        <div className="absolute right-0 top-full mt-m8 w-fit tablet:mt-t8 desktop:mt-d8">
          <CalenderComponent
            selectedDate={selectedDate}
            onDaySelected={(date) => handleDaySelected(date)}
          />
        </div>
      )}
    </div>
  );
};

export default DatePicker;
