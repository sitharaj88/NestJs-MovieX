export default class ApiResponse {
  constructor(
    public data: any,
    public statusCode: number,
    public message: string,
  ) {}
}
