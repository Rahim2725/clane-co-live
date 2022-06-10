import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardSidebar = ({ children }) => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content ">
                  {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-40 bg-base-100 text-base-content">
                    <li className='mt-3'>
                        <NavLink to="/dashboard/Add-service">Add Service</NavLink>
                    </li>
                    <li className='mt-3'>
                        <NavLink to="/dashboard/Add-admin"> Add Admin</NavLink>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default DashboardSidebar;