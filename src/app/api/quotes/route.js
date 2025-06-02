export async function GET(request) {
  const url = "https://zenquotes.io/api/random";

  try {
    const res = await fetch(url);
    if (!res.ok) {
      return new Response("Failed to fetch quotes", { status: res.status });
    }
    const data = await res.json();
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Error fetching quotes", { status: 500 });
  }
}
