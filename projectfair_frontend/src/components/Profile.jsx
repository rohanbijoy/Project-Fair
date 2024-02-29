import React from 'react'
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
function Profile() {
    const [open, setOpen] = useState(false);
    return (
        <div className='card shadow '>
            <div style={{ backgroundColor: '  rgb(18, 35, 52) ', padding: "10px" }} className="d-flex justify-content-between">
                <h3 style={{ color: 'white' }}   >Profile</h3>
                <button onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open} className='btn btn-outline-secondary text-light'><i class="fa-solid fa-angle-down"></i></button>
            </div>
            <Collapse in={open}>
                <div id="example-collapse-text">
                <div className="d-flex justify-content-center  flex-column">
                <label htmlFor='' style={{ margin: '5px' }}>
                    <input id='' type='file' style={{ display: 'none' }} />
                    <img height={200} width={200} className='rounded-circle' src='https://tse2.mm.bing.net/th?id=OIP.0ufZVBFzwkW8fV1ovsrxMgHaF3&pid=Api&P=0&h=180' />
                </label>
                <div style={{ margin: '7px' }}>
                    <input className='form-control w-100' placeholder='Github' />
                </div>
                <div style={{ margin: '7px' }}>
                    <input className='form-control w-100' placeholder='Linkedin' />
                </div>
                <div style={{ margin: '7px' }}>
                    <button className='btn w-100 btn-success'>Update</button>
                </div>

            </div>
                </div>
            </Collapse>
           
        </div>
    )
}

export default Profile