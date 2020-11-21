export interface Airoport {
    Year: Date;
    Month: number;
    DayofMonth: number;
    DayofWeek: string;
    DeepTime: number;
    CRSDepTime: number;
    ArrTime: number;
    CRSArrTime: number;
    UniqueCarrier: string;
    FlightNum: number;
    TailNum: string;
    ActualElapsedTime: number;
    CRSElapsedTime: number;
    AirTime: number;
    ArrDelay: number;
    DepDelay: number;
    Origin: string;
    Dest: string;
    Distance: number;
    TaxiIn: number;
    TaxiOut: number;
    Cancelled: number;
    CancellationCode: string;
    Diverted: number;
    CarrierDelay: number;
    WeatherDelay: number;
    NASDelay: number;
    SecurityDelay: number;
    LateAircraftDelay: number;
}

//TODO: I not defined the interface yet