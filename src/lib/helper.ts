import dayjs from "dayjs";

export async function sleep(second: number) {
  return await new Promise(resolve => setTimeout(resolve, 1000 * second));
}

export async function formatDateTime(dt: Date) {
  return dt ? dayjs(dt).format('YYYY-MM-DD HH:mmA') : '';
}
