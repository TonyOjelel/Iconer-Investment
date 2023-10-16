import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Account from "./components/Account.js";
import Personal from "./components/account/Personal";
import Security from "./components/account/Security";
import Wallet from "./components/account/Wallet";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Tasks from "./components/Tasks";
import Vip from "./components/Vip";
import WithdrawalsHistory from "./components/history/WithdrawHistory";
import RechargesHistory from "./components/history/RechargeHistory";
import TasksHistory from "./components/history/TasksHistory";
import ReferralList from "./components/history/TeamHistory";
import Withdraw from "./components/Withdraw";
import Recharge from "./components/Recharge";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<><Navbar /><Account /></>} />
        <Route path="/task" element={<><Navbar /><Tasks /></>} />
        <Route path="/vip" element={<><Navbar /><Vip /></>} />
        <Route path="/personal" element={<><Navbar /><Personal /></>} />
        <Route path="/wallet" element={<><Navbar /><Wallet /></>} />
        <Route path="/security" element={<><Navbar /><Security /></>} />
        <Route path="/team" element={<><Navbar /><ReferralList /></>} />
        <Route path="/withdraws/record" element={<><Navbar /><WithdrawalsHistory /></>} />
        <Route path="/recharges/record" element={<><Navbar /><RechargesHistory /></>} />
        <Route path="/tasks/record" element={<><Navbar /><TasksHistory /></>} />
        <Route path="/withdraw" element={<><Navbar /><Withdraw /></>} />
        <Route path="/recharge" element={<><Navbar /><Recharge /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
