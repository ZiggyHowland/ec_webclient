import { getGlobalVariables } from "./environment.js"

class RestClient {
    static baseUrl = getGlobalVariables().rest_base_url;


    static getAllExample() {
        const url = `${RestClient.baseUrl}/your-url`;
        return this.doGet_v2(url);
    }

    static getByIdExample(id) {
        const url = `${RestClient.baseUrl}/your-url/${id}`;
        return this.doGet_v2(url);
    }

    static addExample(id, newObject) {
        const url = `${RestClient.baseUrl}/your-url/${id}`;
        return this.doPost(url, newObject);
    }

    static loginAdmin(username, password) {
        const url = `${RestClient.baseUrl}/user/login?user=${username}&password=${password}`;
        return this.doPost(url, null, "");
    }
    
    static updateDescription(id, environmentToUpdate, token) {
        const url = `${RestClient.baseUrl}/environments/updateEnvironmentDescription/${id}`;
        return this.doPut(url, environmentToUpdate, token);
    }


    static deleteByIdExample(id) {
        const url = `${RestClient.baseUrl}/your-url/${id}`;
        return this.doDelete(url);
    }

    


    static async doDelete(url, token) {
        const requestOptions = {
            method: 'DELETE',   
            headers: {
                'Authentication': token,
            },         
        };   
        const response = await fetch(url, requestOptions);                    
        return response;
    }


    static async doPut(url, objectToUpdate, token) {
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authentication': token,
            },
            body: JSON.stringify(objectToUpdate),
            //mode: 'cors', // no-cors, *cors, same-origin
            // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            // credentials: 'same-origin', // include, *same-origin, omit
            // redirect: 'follow', // manual, *follow, error
            // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        };        
        const response = await fetch(url, requestOptions);                    
        return response;
    }


    static async doPost(url, objectToInsert, token) {
        const response = await fetch(
            url, 
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authentication': token,
                },
                body: JSON.stringify(objectToInsert),
                // mode: 'cors', // no-cors, *cors, same-origin
                // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                // credentials: 'same-origin', // include, *same-origin, omit
                // redirect: 'follow', // manual, *follow, error
                // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            }                
        );
        return await response.json();
    }


    static async doGet_v2(url) {    
        const response = await fetch(url);
        return await response.json();
    }

    
    static doGet_v1(url) {
        const promise1 = fetch(url);
        const promise2 = promise1.then( response => {                 
            return response.json();
        });
        return promise2;
    }
    
}



export default RestClient;
