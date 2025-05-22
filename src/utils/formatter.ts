export class Formatter {
  static formdate(value: Date): string {
    const date = new Date(value);

    return Intl.DateTimeFormat("es-ED", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(date);
  }
}
