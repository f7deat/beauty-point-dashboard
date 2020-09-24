import React from 'react';
import '../../style/good-service.scss';

export default function GoodOrService(props: any) {
    return (
        <div className={props.openService ? "service-wrapper d-block" : "service-wrapper d-none"}>
            
        </div>
    )
}
