export const APIURL = "172.20.10.3"

export async function fetchPlace(){
    const res = await fetch(`http://${APIURL}:8000/placeget/2`);
    const json = await res.json();
    console.log(json);
}