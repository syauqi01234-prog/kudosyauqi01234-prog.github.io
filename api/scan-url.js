export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Extract and validate URL from request body
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({ error: 'No URL provided' });
  }

  try {
    const vtRes = await fetch("https://www.virustotal.com/api/v3/urls", {
      method: "POST",
      headers: {
        "x-apikey": process.env.VT_API_KEY, // Your VirusTotal API key in Vercel Environment Variable
        "accept": "application/json",
        "content-type": "application/x-www-form-urlencoded",
      },
      body: `url=${encodeURIComponent(url)}`, // This is the format VirusTotal expects
    });

    const data = await vtRes.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
