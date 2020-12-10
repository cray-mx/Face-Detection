import React from 'react';
import './imagelinkform.css';

const ImageLinkForm = ({change, click}) => {
    return (
        <div>
            <p style={{fontSize: '35px', marginTop: '0'}}>
                This will detect faces in your picture. Give it a try!
            </p>
            <div className="center pb4">
                <div className="form center pa4 br3 shadow-5">
                    <input type="text" placeholder="Enter Image URL" className="f4 pa2 w-70 center bg-white" onChange={change} />
                    <button className="w-30 grow f3 link dib black bg-blue b" onClick={click}>Detect</button>
                </div>
            </div>      
        </div>
    )
}

export default ImageLinkForm;