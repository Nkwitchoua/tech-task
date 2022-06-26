import { createContext, useReducer } from "react";
import { db } from "../firebaseConfig";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore"


const INIT_STATE = {
    documents: null,
    document: null,
    documentLoading: false
}

const REDUCER = (state, action) => {
    switch(action.type) {
        case "GET_ALL_DOCUMENTS":
            return {
                ...state,
                documents: action.payload
            }
        case "GET_DOCUMENT":
            return {
                ...state,
                document: action.payload,
                documentLoading: false
            }
        case "DOCUMENT_IS_LOADING":
            return {
                ...state,
                documentLoading: true
            }
        case "SET_NULL_DOC":
            return {
                ...state,
                document: null
            }
        default:
            return state
    }
}

export const documentsContext = createContext();

const DocumentsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(REDUCER, INIT_STATE);
    const documentsRef = (db, "documents");

    const getAllDocuments = async () => {
        console.log("NOOOOOOOOOOOOOOOOOOO");
        const q = await getDocs(collection(db, "documents"));
        let documents = [];
        q.forEach(document => {
            documents.push({
                id: document.id,
                ...document.data()
            })
        })

        dispatch({
            type: "GET_ALL_DOCUMENTS",
            payload: documents
        })
    }

    const getDocument = async(id) => {
        dispatch({type: "DOCUMENT_IS_LOADING"});
        const q = await getDoc(doc(db, "documents", id));
        let document = {
            id: q.id,
            ...q.data()
        }
        dispatch({
            type: "GET_DOCUMENT",
            payload: document
        })
    }

    const addDocument = async(document) => {
        const q = await addDoc(collection(db, "documents"), document)
    }

    const deleteDocument = async(id) => {
        const q = await deleteDoc(doc(db, "documents", id));
    }

    const setNullDoc = () => {
        dispatch({
            type: "DOCUMENT_IS_LOADING"
        })
        dispatch({
            type: "SET_NULL_DOC"
        })
    }

    const editDocument = async(id, form) => {
        const q = await updateDoc(doc(db, "documents", id), form);
    }

    return (
        <documentsContext.Provider value={{
                                    documents: state.documents,
                                    document: state.document,
                                    documentLoading: state.documentLoading,
                                    getAllDocuments,
                                    getDocument,
                                    addDocument,
                                    deleteDocument,
                                    setNullDoc,
                                    editDocument
                                }}>
            {children}
        </documentsContext.Provider>
    )
}

export default DocumentsContextProvider;