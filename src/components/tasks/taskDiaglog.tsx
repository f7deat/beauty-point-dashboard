import React, { useState } from 'react';
import GoodOrService from './goodOrService';

export default function TaskDialog(props: any) {

    const [openService, setOpenService] = useState(false);

    return (
        <div className={props.isShow ? "modal fade show d-block" : "modal fade d-none"} tabIndex={1} aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered">
                <div className="modal-content border-0 bg-light shadow">
                    <div className="modal-body p-0">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="p-4 bg-white">
                                    <div className="h5 font-weight-bold mb-4">Client</div>
                                    <label>Name client</label>
                                    <input type="text" className="form-control mb-3" />
                                    <label>Telephone</label>
                                    <input type="text" className="form-control mb-3" />
                                    <button className="btn btn-block mb-3" type="button">CLIENT CARD</button>
                                    <label>Comments</label>
                                    <textarea className="form-control mb-4"></textarea>
                                    <div className="d-flex justify-content-around">
                                        <button className="btn btn-primary">
                                            Save
                                            </button>
                                        <button className="btn">
                                            Status
                                            </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="p-4">
                                    <button type="button" className="close" onClick={() => props.setShow(false)}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <div className="h5 font-weight-bold mb-4">Services</div>
                                    <div className="mb-4 d-flex align-items-center position-relative">
                                        <button onClick={() => setOpenService(true)} className="rounded-circle mr-2 d-flex align-items-center justify-content-center" style={{ border: '1px solid #d1d1d1', backgroundColor: '#fff', padding: 6, fontSize: 12 }}><i className="fas fa-plus"></i></button>
                                            Add goods or services
                                            <GoodOrService openService={openService}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
