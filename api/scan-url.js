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
    // Call VirusTotal API using your (secret) API key
    await fetch("https://kudosyauqi01234-proggithub-o7qsu9ld6-kudos-projects-08ed5d67.vercel.app//api/scan-url", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ url: urlToScan }),
});
    const data = await vtRes.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
