import { NextResponse } from "next/server";

export async function POST() {
  try {
    const APP_ID = process.env.ADZUNA_APP_ID;
    const APP_KEY = process.env.ADZUNA_APP_KEY;

    const url =
      `https://api.adzuna.com/v1/api/jobs/in/search/1` +
      `?app_id=${APP_ID}` +
      `&app_key=${APP_KEY}` +
      `&results_per_page=50` +
      `&what=software intern`;

    const response = await fetch(url);

    const data = await response.json();

    return NextResponse.json({
      success: true,
      jobs: data.results || [],
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}