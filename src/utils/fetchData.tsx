export async function fetchData() {
  try {
    const res = await fetch("https://api.pexels.com/v1/curated", {
      method: "GET",
      headers: {
        Authorization: process.env.REACT_APP_API_KEY || "defaultkey",
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP Error! Status${res.status}`);
    }
    const data = await res.json();

    return data;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
