export async function getAddress (ip) {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_LYxCDGtuHSsDYJEJOXlCQ8Xe2LEJL&ipAddress=${ip}`)
    return await response.json();
}