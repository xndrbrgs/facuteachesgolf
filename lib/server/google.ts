'use server'

export async function getBusinessReviews() {
  const apiKey = process.env.GOOGLE_API_KEY!; // Store in .env
  const placeId = process.env.FACU_TEACHES_GOLF_PLACE_ID!;
  const endpoint = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`Google API error: ${response.statusText}`);
    }

    const data = await response.json();

    // Extract reviews
    const reviews = data.result?.reviews || [];
    return reviews;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return [];
  }
}
