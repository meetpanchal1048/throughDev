export async function getData() {
  const res = await fetch("https://script.google.com/macros/s/AKfycbxNVWRbQiDE0m6VpckaoShPa4yKdFwLVk75WZRa0VrGXrF_fjVPtPpEhVWfPy5MVbpqdA/exec");
  return res.json()
}

export async function getBlogData(){
  const blogRes = await fetch("https://script.google.com/macros/s/AKfycbwpdEE48c0JuI509BjRs7DxlXGG8nwAWuXfpFY3nSly3Fst9GDxVHDjl92mEnXeg9WDFQ/exec");
  return blogRes.json();
}


// Working Fetches Data EveryTime
// export default async function getData() {
//   const timestamp = new Date().getTime(); // Generate a timestamp or random number
//   const url = `https://script.google.com/macros/s/AKfycbxNVWRbQiDE0m6VpckaoShPa4yKdFwLVk75WZRa0VrGXrF_fjVPtPpEhVWfPy5MVbpqdA/exec?timestamp=${timestamp}`;
  
//   const res = await fetch(url, {
//       headers: {
//           'Cache-Control': 'no-cache, no-store, must-revalidate',
//           'Pragma': 'no-cache',
//           'Expires': '0'
//       }
//   });
//   return res.json();
// }

// SWR Library


// export default async function getData() {
//   const res = await fetch("https://script.google.com/macros/s/AKfycbxNVWRbQiDE0m6VpckaoShPa4yKdFwLVk75WZRa0VrGXrF_fjVPtPpEhVWfPy5MVbpqdA/exec")
//   return res.json()
// }