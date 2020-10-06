import React, { useState } from 'react';
import GoodService from '../interfaces/GoodServices';
import '../style/inventory.scss';

interface PropsType {
    inventories: GoodService[];
    setInventory: React.Dispatch<React.SetStateAction<GoodService[]>>;
}

interface PropsInventoryCount {
    item: GoodService;
    inventories: GoodService[];
    setInventory: React.Dispatch<React.SetStateAction<GoodService[]>>;
}

function InventoryCount(props: PropsInventoryCount) {

    const [count, setCount] = useState(1)

    return (
        <div className="d-flex">
            <div className="count-item mr-2">
                <i className="fas fa-angle-left" onClick={() => { setCount(count - 1) }}></i>
            </div>
            <div className="font-weight-bold mr-2" style={{ padding: 2 }}>
                {count}
            </div>
            <div className="count-item mr-2" onClick={() => { setCount(count + 1) }}>
                <i className="fas fa-angle-right"></i>
            </div>
            <div className="trash-icon" onClick={() => props.setInventory(props.inventories.filter(x => x.id !== props.item.id))}>
                <i className="fas fa-trash-alt"></i>
            </div>
        </div>
    )
}

function Inventory(props: PropsType) {

    return (
        <div className="inventory">
            {
                props.inventories.map(x => {
                    return (
                        <div className="inventory-item" key={x.id}>
                            <div className="flex-grow-1">
                                <div className="d-flex">
                                    <div className="inventory-item-icon"><i className="fas fa-cut"></i></div>
                                    <div className="inventory-name">
                                        {x.name}
                                    </div>
                                </div>
                            </div>
                            <InventoryCount item={x} inventories={props.inventories} setInventory={props.setInventory} />
                        </div>
                    )
                })
            }
        </div>

    )
}

export default Inventory
