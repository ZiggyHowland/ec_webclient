import { object } from "yup/lib/locale";
import { getGlobalVariables } from "./environment.js"

class RestClient {
    //static baseUrl = getGlobalVariables().rest_base_url;
    static baseUrl = process.env.REACT_APP_REST_ENDPOINT;


    static getSummary() {
        return this.doGet_v4("/summary", "");
    }


    static getAllConfigurations() {
        const url = `${RestClient.baseUrl}/configurations`;        
        return this.doGet_v2(url, "")
    }

    static getAllConfigurationsFilteredByDate(modifiedDate) {
        var route = `/configurations?modifiedAfterDate=${modifiedDate}`;
        return this.doGet_v4(route, "");
    }

    static getConfigurationById(id) {
        const url = `${RestClient.baseUrl}/configurations/${id}`;
        return this.doGet_v2(url, "");
    }

    static createConfiguration(objectToInsert, environmentId, userId, token = "") {
        var route = `/configurations?environmentId=${environmentId}&userId=${userId}`;
        return this.doPost_v2(route, objectToInsert, token);
    }

    static updateConfiguration(id, objectToUpdate, token = "") {
        return this.doPut_v2(`/configurations/${id}`, objectToUpdate, token)
    }

    static deleteConfigurationById(id, token) {
        const route = `/configurations/${id}`;
        return this.doDelete_v2(route, token);
    }

    static getAllUsers() {
        const url = `${RestClient.baseUrl}/user/all`;
        return this.doGet_v2(url, "");
    }

    static getUserById(id) {
        const url = "http://localhost:8111/user/{id}";
        return this.doGet_v2(url, "");
    }



    //This has nothing to do with url i browser. This is url to get information from backend (ex Swagger)
    //Url for browser is defined in App.tsx as <Route>
    static getAllEnvironments() {
        const url = `${RestClient.baseUrl}/environments/all`;         
        return this.doGet_v2(url, "");
    }

    static getEnvironmentById(id) {
        const url = `${RestClient.baseUrl}/environments/${id}`;
        return this.doGet_v2(url, "");
    }
    
    static getConfigurationByEnvironmentId(environmentId) {
        const url = `${RestClient.baseUrl}/environments/${environmentId}/configurations`;
        return this.doGet_v2(url, "");
    }

    static deleteEnvironmentById(id, token) {
        //const url = `${RestClient.baseUrl}/environments/deleteEnvironment/${id}`;
        //return this.doDelete(url, "");
        return this.doDelete_v2(`/environments/deleteEnvironment/${id}`);
    }

    static updateEnvironmentDescription(id, environmentToUpdate, token) {
        const url = `${RestClient.baseUrl}/environments/updateEnvironmentDescription/${id}`;
        return this.doPut(url, environmentToUpdate, token);
    }

    static loginAdmin(username, password) {
        const url = `${RestClient.baseUrl}/user/login?user=${username}&password=${password}`;
        // http://localhost:8111/user/login?password=pass1&user=Salim
        return this.doPost(url, null, "");
    }

    static helloWorld(name, token) {
        const url = `${RestClient.baseUrl}/user/hello?name=${name}`;
        return this.doGet_v3(url, token, "text");
    }
    

    // ------- Default "runners" against server -------------------------------


    // READ/FIND/GET (cRud)

    static async doGet_v4(route, token, returnType) {
        const url = `${RestClient.baseUrl}${route}`;
        return this.doGet_v3(url, token, returnType);
    }

    static async doGet_v3(url, token, returnType = "json") {    
        const response = await fetch(
            url,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authentication': token,
                },
            }
        );
        switch (returnType) {
            case "text":
                return await response.text();
                break;  
            default:
                return await response.json();
        }
        
    }


    static async doGet_v2(url, token) {    
        const response = await fetch(
            url,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authentication': token,
                },
            }
        );
        return await response.json();
    }

    
    static doGet_v1(url) {
        const promise1 = fetch(url);
        const promise2 = promise1.then( response => {                 
            return response.json();
        });
        return promise2;
    }




    // CREATE/INSERT (Crud)
    static async doPost_v2(route, objectToInsert, token) {
        return this.doPost(`${RestClient.baseUrl}${route}`, objectToInsert, token)
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
    

    // UPDATE (crUd)
    static async doPut_v2(route, objectToUpdate, token) {
        const url = `${RestClient.baseUrl}${route}`;
        return this.doPut(url, objectToUpdate, token);
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


    // DELETE (cruD)
    static async doDelete_v2(route, token) {
        const url = `${RestClient.baseUrl}${route}`;
        return this.doDelete(url, token);
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
    




    
}



export default RestClient;
