class TimeConverter {
  static hoursToMilliseconds(hours: number): number {
    return hours * 3600000; // 60 minutes/hour * 60 seconds/minute * 1000 milliseconds/second
  }

  static minutesToMilliseconds(minutes: number): number {
    return minutes * 60000; // 60 seconds/minute * 1000 milliseconds/second
  }

  static secondsToMilliseconds(seconds: number): number {
    return seconds * 1000; // 1000 milliseconds/second
  }
}

export default TimeConverter;
