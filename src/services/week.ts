import { BACKEND_URL } from "./constants";

export async function getWeek(): Promise<Date> {
  const data = await fetch(BACKEND_URL + "week/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return new Date(await data.json());
}

export function getWeekString(week: Date): string {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const formattedDate = week.toLocaleString('pt-BR', options);
  return formattedDate;
}