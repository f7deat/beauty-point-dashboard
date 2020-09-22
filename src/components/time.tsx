import React from 'react';
import '../style/location.scss';

export default class TimePanel extends React.Component {

    listDate(pageSize: number): number[] {
        let newDate = new Date();
        let date = newDate.getDate();
        let listDate: number[] = [];
        for (let index = 0; index < pageSize; index++) {
            const item = date + index;
            listDate.push(item);
        }
        return listDate;
    }
    render() {
        return (
            <div className="p-2 shadow-sm bg-white d-flex justify-content-between">
                {
                    this.listDate(14).map(value => {
                        return (
                            <div className="date" key={value}>
                                {value}
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}
