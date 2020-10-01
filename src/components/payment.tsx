import React, { useState } from 'react';

function Payment() {
    
    const [payText, setPayText] = useState('PAY')
    const [payClass, setPayClass] = useState('btn-pay')

    function pay(): void {
        setPayClass('btn-payed')
        setPayText('Payed');
    }

    return (
        <div className="payment">
            <div className="pay-time">
                <b><i className="fas fa-clock"></i> 11:00 - 13:00</b>
            </div>
    <button className={payClass} type="button" onClick={() => pay()}><i className="fas fa-money-bill"></i> {payText}</button>
        </div>
    )
}

export default Payment
