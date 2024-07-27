const baseUrl = 'http://localhost:3030/jsonstore/users';


export const getAll = async () => {

    try {
        const response = await fetch(baseUrl);
        const result = await response.json();
        const userData = Object.values(result);

        return userData;

    } catch (error) {
        console.log(error);
    }
}