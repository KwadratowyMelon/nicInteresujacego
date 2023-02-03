import './App.css';
import {Routes, Route} from 'react-router-dom';

import BulletinChangesView from './views/BulletinChangesView/BulletinChangesView';
import BulletinView from './views/BulletinView/BulletinView';
import FilesView from './views/FilesView/FilesView';
import LoginView from './views/LoginView/LoginView';
import GroupsView from './views/GroupsView/GroupsView';
import GroupCreateView from './views/GroupCreateView/GroupCreateView';
import AdminRoutes from './admin/AdminRoutes';

function App() {
  return (
    <Routes>
        <Route exact path="/" element={<LoginView/>}/>
        <Route exact path="/BulletinChangesView" element={<BulletinChangesView/>}/>
        <Route exact path="/BulletinView" element={<BulletinView/>}/>
        <Route exact path="/FilesView" element={<FilesView/>}/>
        <Route exact path="/GroupCreateView" element={<GroupCreateView/>}/>
        <Route exact path="/GroupsView" element={<GroupsView/>}/>  
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="*" element={<GroupsView/>}/>
      </Routes>
  );
}

export default App;
