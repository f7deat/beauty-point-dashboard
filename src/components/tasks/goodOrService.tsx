import React, { useState } from 'react';
import GoodService from '../../interfaces/GoodServices';
import '../../style/good-service.scss';

interface PropsType {
    openService: boolean;
    setOpenService: React.Dispatch<React.SetStateAction<boolean>>;
    setInventory: React.Dispatch<React.SetStateAction<GoodService[]>>;
}

export default function GoodOrService(props: PropsType) {
    const listGoodService: GoodService[] = [
        {
            id: 1,
            price: "5$",
            name: "Hair spray"
        },
        {
            id: 2,
            price: "10$",
            name: "Hair Air Pay"
        }];
        const [keyword, setKeyword] = useState('');
    
    function addService(params: GoodService) {
        props.setOpenService(false);
        props.setInventory(x => [...x, params])
    }
    return (
        <div className={props.openService ? "service-wrapper d-block" : "service-wrapper d-none"}>
            <input type="text" className="service-search" onChange={(e) => setKeyword(e.target.value)}/>
            {
                listGoodService.filter(x=> x.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())).map(x => {
                    return (
                        <div className="service-item" key={x.id} onClick={() => addService(listGoodService.filter(y => y.id === x.id)[0])}>
                            <div className="flex-grow-1">{x.name}</div>
                            <b>{x.price}</b>
                        </div>
                    )
                })
            }
        </div>
    )
}
