import React from 'react';
import WorkDay from '../models/workDay';
import '../style/location.scss';
import '../style/time.scss';

export default class TimePanel extends React.Component {

    listDate(pageSize: number): WorkDay[] {
        let newDate = new Date();
        let date = newDate.getDate();
        let listDate: WorkDay[] = [];
        for (let index = 0; index < pageSize; index++) {
            const item = date + index;
            let day = 'Thứ 2';
            let newDay = newDate.getDay() + index;
            if(newDay === 2) {
                day = 'Thứ 3'
            } else if(newDay === 3) {
                day = 'Thứ 4'
            } else if(newDay === 4) {
                day = 'Thứ 5'
            } else if(newDay === 5) {
                day = 'Thứ 6'
            } else if(newDay === 6) {
                day = 'Thứ 7'
            } else if(newDay === 7) {
                day = 'Chủ nhật'
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
    render() {
        return (
            <div className="shadow-sm bg-white d-flex justify-content-between time-panel">
                {
                    this.listDate(10).map(value => {
                        return (
                            <div className="date" key={value.id}>
                                <div className="day">{value.day}</div>
                                {value.date}
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}
