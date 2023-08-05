import {NavBar} from '../components/NavBar';
import {useNavigate} from 'react-router-dom';
import React, { useState } from "react";

export const Formpage = () => {
    
    const navigate = useNavigate();
    const [imageFile, setImageFile] = useState();
    const [description, setDescription] = useState();

    const [outputImage, setOutputImage] = useState();
    const [outputDescription, setOutputDescription] = useState();

    const navLink = URL.createObjectURL(outputImage);

    function handleChange(e) {
        console.log(e.target.files);
        setImageFile(URL.createObjectURL(e.target.files[0]));
    }

    const handleDownload = (e) =>{
        if (outputImage != null)
        {
            // Replace 'your_image.jpg' with the path to the image file in your application
            const imageUrl = outputImage;

            // Fetch the image file from your application
            fetch(imageUrl)
            .then((response) => response.blob())
            .then((blob) => {
                // Convert the image file to a downloadable URL
                const url = URL.createObjectURL(blob);

                // Create an anchor element with the downloadable URL
                const link = document.createElement('a');
                link.href = url;
                link.download = 'downloaded_image.jpg'; // File name for the downloaded image

                // Programmatically click on the anchor element to initiate the download
                document.body.appendChild(link);
                link.click();

                // Clean up the URL object after the download is initiated
                URL.revokeObjectURL(url);
                document.body.removeChild(link);
            });
        }
    }

    const handleSubmit = async(e) => {
        let data = new FormData();
        e.preventDefault();
        data.append('description', description)
        data.append('image', imageFile)
        axios.post('http://localhost:5000/api/acts/pst', {
            
        })
        .then((response) => {
            console.log(response);
            setDescription('')
            setImageFile(null)
            setOutputDescription(response.description)
            setOutputImage(response.image)

        }, (error) => {
            console.log(error);
        });
    }

    return(
        <>
            <div className='form-render'>
                <form onSubmit={handleSubmit} method="post"> 
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" className="form-control" value={Num} onChange={(e) => setDescription(e.target.value)} id="textFormControlInput1" placeholder="Enter Activity Number: " required={true}></input>
                    </div>
                    <div className="form-group">
                        <label>Image</label>
                        <input type="file" onChange={handleChange} id="imageFormControlInput1" required={true}/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <br/>
            <div className='outputDisplay'>
                <div className="row">
                    <div className="col">
                        <p>Output:</p>
                    </div>
                    <div className="col">
                        <img src="outputImage" class="rounded float-right" alt="..."></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p>Description:</p>
                    </div>
                    <div className="col">
                        <p value={outputDescription} placeholder='None'></p>
                    </div>
                </div>
                <button type="download" className="btn btn-primary" onClick={handleDownload}>Download</button>
            </div>
        </>
    )
}

export default Formpage;