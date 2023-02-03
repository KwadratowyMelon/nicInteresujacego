import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UsersView from '../views/UsersView/UsersView';
import LogsView from '../views/LogsView/LogsView';
import BulletinChangesLogsView from '../views/BulletinChangesLogsView/BulletinChangesLogsView';
import BulletinAcceptView from '../views/BulletinAcceptView/BulletinAcceptView';
import FilesDetailsView from '../views/FilesDetailsView/FilesDetailsView';
import GroupsDetailsView from '../views/GroupsDetailsView/GroupsDetailsView';

const adminRoutes = () => (
  <Routes>
    <Route exact path="/LogsView" element={<LogsView/>}/>
    <Route exact path="/BulletinChangesLogsView" element={<BulletinChangesLogsView/>}/>
    <Route exact path="/UsersView" element={<UsersView/>}/>
    <Route exact path="/BulletinChangesLogsView/BulletinAcceptView" element={<BulletinAcceptView/>}/>
    <Route exact path="/GroupsDetailsView" element={<GroupsDetailsView/>}/>
    <Route exact path="/FilesDetailsView" element={<FilesDetailsView/>}/>
  </Routes>
);

export default adminRoutes;