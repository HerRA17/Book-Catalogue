import React, { useState, useEffect} from "react";
import BackButton from "../componenets/BackButton";
import Spinner from "../componenets/spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditBook = () => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [subgenre, setSubgenre] = useState("");
    const [publishYear, setPublishYear] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { _id } = useParams();
    const { enqueueSnackbar } = useSnackbar();
    
    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/books/${_id}`)
        .then((response) => {
            setTitle(response.data.title);
            setSubgenre(response.data.subgenre);
            setAuthor(response.data.author);
            setPublishYear(response.data.publishYear);
            setLoading(false);
        }).catch((error) => {
            setLoading(false);
            alert("An error happened. Please Check console")
            console.log(error)
        })
    }, [_id, navigate])

    const handleEditbook = () => {
        const data = {
            title, 
            subgenre, 
            author,
            publishYear
        };
        setLoading(true);
        axios
        .put(`http://localhost:5555/books/${_id}`, data)
        .then(() => {
            setLoading(false);
            enqueueSnackbar("Book edited successfully", {variant : "success"});
            navigate("/");
        })
        .catch((error) => {
            setLoading(false);
            // alert("An error happened. Please check console")
            enqueueSnackbar("An error happened. Please check console", {variant : "error"})
            console.log(error)
        })
    };
    return (
        <div className="p-4">
            <BackButton />
            <h1 className="text-3xl my-4">Edit Book</h1>
            {loading ? <Spinner/> : "" }
            <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600] p-4 mx-auto">
                <div className="my-4">
                    <lable className="text-xl mr-4 text-gray-500 ">Title</lable>
                    <input
                        type="text"
                        value={title}
                        onChange={ (e) => setTitle(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <lable className="text-xl mr-4 text-gray-500 ">Subgenre</lable>
                    <input
                        type="text"
                        value={subgenre}
                        onChange={ (e) => setSubgenre(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <lable className="text-xl mr-4 text-gray-500 ">Author</lable>
                    <input
                        type="text"
                        value={author}
                        onChange={ (e) => setAuthor(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <div className="my-4">
                    <lable className="text-xl mr-4 text-gray-500 ">Publish Year</lable>
                    <input
                        type="number"
                        value={publishYear}
                        onChange={ (e) => setPublishYear(e.target.value)}
                        className="border-2 border-gray-500 px-4 py-2 w-full"
                    />
                </div>
                <button className="p-2 bg-sky-300 m-8" onClick={handleEditbook}>
                    Save
                </button>
            </div> 
        </div>
        )
    }
    
    export default EditBook