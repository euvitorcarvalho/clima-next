import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get("location"); // Salvador,BR

  if (!location) {
    return NextResponse.json(
      { error: "Localização necessária." },
      { status: 400 },
    );
  }

  const apiKey = process.env.WEATHER_API_KEY;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric&lang=en_us`;

  try {
    const response = await fetch(weatherUrl);
    const data = await response.json();

    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Falha na conexão" }, { status: 500 });
  }
}
