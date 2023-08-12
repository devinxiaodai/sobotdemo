import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Goodlist from './pages/goodlist';
import Member from './pages/member';
import Orderlist from './pages/orderList';

import { DatePicker } from 'antd';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode> 
        <Member />
        <Orderlist/>
        <Goodlist />
    </StrictMode>
) 

// ReactDOM.Render(<Cardlist/>,document.getElementById('root'))