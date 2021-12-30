import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  level: LogLevel = LogLevel.All;
  logWithDate: boolean = true;

  constructor() { }

  public Info (caller: string,msg: string, params?: any[])
  {
    this.writeToLog(caller,msg,LogLevel.Info,params);
  }
  public Debug (caller: string,msg: string, params?: any[])
  {
    this.writeToLog(caller,msg,LogLevel.Debug,params);
  }
  public Warn (caller: string,msg: string, params?: any[])
  {
    this.writeToLog(caller,msg,LogLevel.Warn,params);
  }
  public Error (caller: string,msg: string, params?: any[])
  {
    this.writeToLog(caller,msg,LogLevel.Error,params);
  }
  public Fatal (caller: string,msg: string, params?: any[])
  {
    this.writeToLog(caller,msg,LogLevel.Fatal,params);
  }

  private writeToLog(caller: string,msg: string, level: LogLevel, params?: any[]) {
    if (this.shouldLog(level)) {
      let value: string = "";

      if (this.logWithDate) {
        value = new Date().toLocaleString() + " - ";
      }
      value += LogLevel[level] + " - ";
      value += caller + " -----> ";

      value += msg;
      if (params != undefined && params.length) {
        value += " - Extra Info: " + this.formatParams(params);
      }

      console.log("%c" + value,this.templateLevel(level));
    }
  }
  private shouldLog(level: LogLevel): boolean {
    let ret: boolean = false;
    if ((level >= this.level && level !== LogLevel.Off) || this.level === LogLevel.All) {
      ret = true;
    }
    return ret;
  }
  private formatParams(params: any[]): string {
    let ret: string = params.join(",");

    if (params.some(p => typeof p == "object")) {
      ret = "";

      for (let item of params) {
        ret += JSON.stringify(item) + ",";
      };
      ret = ret.slice(0,ret.length - 1);
    }
    return ret;
  }
  private templateLevel(level: LogLevel) : string{
    switch (level) {
      case LogLevel.Debug:
        return LogLeveltemplate.Debug;
      case LogLevel.Info:
        return LogLeveltemplate.Info;
      case LogLevel.Warn:
        return LogLeveltemplate.Warn;
      case LogLevel.Error:
        return LogLeveltemplate.Error;
      case LogLevel.Fatal:
        return LogLeveltemplate.Fatal;
      default:
        return "";
    }
  }
}
export enum LogLevel {
  All = 0,
  Debug = 1,
  Info = 2,
  Warn = 3,
  Error = 4,
  Fatal = 5,
  Off = 6
}
export enum LogLeveltemplate {
  Debug = "background: lightblue; color: black",
  Info = "background: lightgreen; color: black",
  Warn = "background: yellow; color: black",
  Error = "background: red; color: black",
  Fatal = "background: black; color: white",
}
