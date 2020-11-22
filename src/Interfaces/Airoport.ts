import { Document } from "mongoose";

export default interface IAiroport extends Document{
    Year: Number;
    Month: Number;
    DayofMonth: Number;
    DayofWeek: Number;
    DeepTime: Number;
    CRSDepTime: Number;
    ArrTime: Number;
    CRSArrTime: Number;
    UniqueCarrier: String;
    FlightNum: Number;
    TailNum: String;
    ActualElapsedTime: Number;
    CRSElapsedTime: Number;
    AirTime: Number;
    ArrDelay: Number;
    DepDelay: Number;
    Origin: String;
    Dest: String;
    Distance: Number;
    TaxiIn: Number;
    TaxiOut: Number;
    Cancelled: Number;
    CancellationCode: String;
    Diverted: Number;
    CarrierDelay: Number;
    WeatherDelay: Number;
    NASDelay: Number;
    SecurityDelay: Number;
    LateAircraftDelay: Number;
}