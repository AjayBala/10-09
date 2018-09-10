import React from 'react';
import './Signup.scss';

export const TableInfo = () => (
    <div className="tablewrap">
        <table >
            <tbody>
                <tr>
                    <th />
                    <th style={{ backgroundColor: '#e6e6e6', textAlign: 'center' }}>Overstock</th>
                    <th
                        className="arrowColHead"
                        style={{
                            width: '100px', backgroundColor: '#034078', color: 'white', textAlign: 'center', borderBottomColor: '#034078  ',
                        }}>
Overstock Professional
                    </th>
                </tr>
                <tr>
                    <td style={{ paddingTop: '40px' }}>Free Shipping. Over $45</td>
                    <td className="tick" style={{ textAlign: 'center', paddingTop: '40px' }} />
                    <td className="tick1" style={{ textAlign: 'center', paddingTop: '40px' }} />

                </tr>
                <tr>
                    <td>New Sales, Every Day</td>
                    <td className="tick" style={{ textAlign: 'center' }} />
                    <td className="tick1" style={{ textAlign: 'center' }} />
                </tr>
                <tr>
                    <td>Business Exclusive Products</td>
                    <td className="cross" style={{ textAlign: 'center' }} />
                    <td className="tick1" style={{ textAlign: 'center' }} />
                </tr>
                <tr>
                    <td>Dedicated Concierge Account Services</td>
                    <td className="cross" style={{ textAlign: 'center' }} />
                    <td className="tick1" style={{ textAlign: 'center' }} />
                </tr>
                <tr>
                    <td>Approval Workflows</td>
                    <td className="cross" style={{ textAlign: 'center' }} />
                    <td className="tick1" style={{ textAlign: 'center' }} />
                </tr>
                <tr>
                    <td>Business Tools and Analytics</td>
                    <td className="cross" style={{ textAlign: 'center' }} />
                    <td className="tick1" style={{ textAlign: 'center' }} />
                </tr>
            </tbody>
        </table>
    </div>


);

export default TableInfo;
