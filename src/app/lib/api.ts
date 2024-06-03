const BASE_URL = 'https://cat-fact.herokuapp.com';

export const fetchCatFact = async () =>{
    const response = await fetch(`${BASE_URL}/facts`);
    if(!response.ok){
        throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
}