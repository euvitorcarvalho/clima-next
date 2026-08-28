import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get("location");

  if (!location) {
    return NextResponse.json(
      { error: "Informe uma localização" },
      { status: 400 },
    );
  }

  const apiKey = process.env.WEATHER_API_KEY;
  const geocodingURL = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=${6}&appid=${apiKey}`;

  try {
    const response = await fetch(geocodingURL);
    const data = await response.json();

    if (data.length === 0) {
      return NextResponse.json(
        { error: `Nenhuma localidade encontrada para: ${location}` },
        { status: 400 },
      );
    }

    interface LocationsType {
      name: string;
      country: string;
    }

    let locations = data.map((location: LocationsType) => {
      return `${location.name},${location.country}`;
    });

    return NextResponse.json({ locations: locations }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Falha na conexão." }, { status: 500 });
  }
}
