import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './Routers/Main';
import Detail from './Routers/Detail';

function Router() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/detail/:id" element={<Detail/>} />
        </Routes>
    </BrowserRouter>
    );
}

export default Router;