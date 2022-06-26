import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import Documents from "./pages/Documents";
import AddDocument from "./pages/AddDocument";
import Header from "./components/Header";
import DocumentsContextProvider from "./context/DocumentsContext";
import HomePage from "./pages/HomePage";
import EditDocument from "./pages/EditDocument";

function App() {
  return (
    <DocumentsContextProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route element={<Documents/>} path="/documents"/>
          <Route element={<AddDocument/>} path="/add-document"/>
          <Route element={<HomePage/>} path="/home"/>
          <Route element={<EditDocument/>} path="/edit-document/:docId"/>
        </Routes>
      </BrowserRouter>
    </DocumentsContextProvider>
  );
}

export default App;
