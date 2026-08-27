import { NextResponse } from "next/server";
// route.js
export async function GET(request: Request) {
  // try e catch
  try {
    // pego o nome da localização na url
    const { searchParams } = new URL(request.url);
    const location = searchParams.get("location");

    //retorna erro se não houver localização
    if (!location) {
      return NextResponse.json(
        { error: "Informe uma localização" },
        { status: 400 },
      );
    }

    // pega a chave da api no .env e coloca na url do geocodig
    const apiKey = process.env.WEATHER_API_KEY;
    const geocodingUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=${6}&appid=${apiKey}`;

    // fetch padrão
    const response = await fetch(geocodingUrl);
    const data = await response.json();

    // transforma o json data padrão em uma string para chamar a api de clima "Salvador,BR", por exemplo
    interface locationsType {
      name: string;
      country: string;
    }

    const locations = data.map((location: locationsType) => {
      return `${location.name},${location.country}`;
    });

    // retorna erro se nenhuma localização com aquele nome for encontrada
    if (data.length === 0) {
      return NextResponse.json(
        { error: "Nenhuma localização encontrada." },
        { status: 400 },
      );
    }

    // se sucesso, retorna os dados
    return NextResponse.json({ data: locations }, { status: 200 });

    // o catch retorna os erros de conexão com a api
  } catch (error) {
    return NextResponse.json({ error: "Falha de conexão." }, { status: 500 });
  }
}
