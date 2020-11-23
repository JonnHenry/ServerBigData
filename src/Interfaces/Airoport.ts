import { Document } from "mongoose";

export default interface IAiroport extends Document{
    Year: String;
    Month: String;
    DayofMonth: String;
    DayOfWeek: String;
    DepTime: String;
    CRSDepTime: String;
    ArrTime: String;
    CRSArrTime: String;
    UniqueCarrier: String;
    FlightNum: String;
    TailNum: String;
    ActualElapsedTime: String;
    CRSElapsedTime: String;
    AirTime: String;
    ArrDelay: String;
    DepDelay: String;
    Origin: String;
    Dest: String;
    Distance: String;
    TaxiIn: String;
    TaxiOut: String;
    Cancelled: String;
    CancellationCode: String;
    Diverted: String;
    CarrierDelay: String;
    WeatherDelay: String;
    NASDelay: String;
    SecurityDelay: String;
    LateAircraftDelay: String;
}