
export const fileUpLoad = async(file) => {
    if(!file) throw new Error('No hay archivo.');

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dxogghbsv/upload?';

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal-_-'); 
    formData.append('file', file); 

    try {

        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });
        if(!resp.ok) throw new Error('No se puede subir la imagen.');
        const cloudResp = await resp.json();

        return cloudResp.secure_url; 
        
    } catch (error) {
        console.log(error);
        throw new Error(error.message);
    }
}

