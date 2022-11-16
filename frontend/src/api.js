export const APIURL = "10.80.7.86"
// ec2-52-78-33-221.ap-northeast-2.compute.amazonaws.com:8000

export async function fetchPlace(){
    const res = await fetch(`http://${APIURL}:8000/placeget/2`);
    const json = await res.json();
    console.log(json);
}