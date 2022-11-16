export const APIURL = "52.79.144.243"

export async function fetchPlace(){
    const res = await fetch(`http://${APIURL}:8000/placeget/2`);
    const json = await res.json();
    console.log(json);
}