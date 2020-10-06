import React, { useState } from 'react';
import WorkDay from '../models/workDay';
import '../style/location.scss';
import 'react-calendar/dist/Calendar.css';
import '../style/time.scss';
import Calendar from 'react-calendar';

export default function () {

    function listDate(pageSize: number): WorkDay[] {
        let newDate = new Date();
        let date = newDate.getDate();
        let dayIndex = 0;
        let dayOfWeek = 0;
        let listDate: WorkDay[] = [];
        for (let index = 0; index < pageSize; index++) {
            const item = date + index;
            let day = 'Thứ 2';
            dayOfWeek = newDate.getDay() + dayIndex;
            if (dayOfWeek === 2) {
                day = 'Thứ 3'
            } else if (dayOfWeek === 3) {
                day = 'Thứ 4'
            } else if (dayOfWeek === 4) {
                day = 'Thứ 5'
            } else if (dayOfWeek === 5) {
                day = 'Thứ 6'
            } else if (dayOfWeek === 6) {
                day = 'Thứ 7'
            } else if (dayOfWeek === 7) {
                day = 'Chủ nhật'
            }
            if (dayOfWeek < 7) {
                dayIndex++;
            } else {
                dayIndex = 1 - newDate.getDay();
            }
            let work: WorkDay = {
                id: index,
                date: item,
                day: day
            };
            listDate.push(work);
        }
        return listDate;
    }
    const [classDisplayCalendar, setClassDisplayCalendar] = useState("d-none")
    return (
        <div className="shadow-sm bg-white justify-content-between time-panel rounded d-none d-md-flex">
            {
                listDate(7).map(value => {
                    return (
                        <div className="date" key={value.id}>
                            <div className="day">{value.day}</div>
                            {value.date}
                        </div>
                    )
                })
            }
            <div className="date" onClick={() => {
                if(classDisplayCalendar) {
                    setClassDisplayCalendar("")
                } else {
                    setClassDisplayCalendar("d-none")
                }
            }}>
                <i className="fas fa-calendar-alt"></i>
                <div style={{ position: 'absolute', zIndex: 3, right: 0, top: 40}} className={classDisplayCalendar}><Calendar /></div>
            </div>
        </div>
    )

}
