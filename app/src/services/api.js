class Servicios {
    fetchData(callback) {
        const apiurl = 'app/json/platos.json'; // Ruta al archivo JSON
        
        fetch(apiurl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                callback(null, data);
            })
            .catch(error => {
                console.error('Error fetching filtered data:', error);
                callback(error, null); // Llamar al callback con el error
            });
    }
}

// Exportar la clase para poder importarla en otro archivo
export default Servicios;
