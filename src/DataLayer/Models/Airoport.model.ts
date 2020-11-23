import { Schema, model} from 'mongoose';
import IAiroport from "../../Interfaces/Airoport";

const AiroportSchema = new Schema({
    Year: {
        type: Number,
        required: [ true, 'El año es necesario para el registro.' ]
    },
    Month: {
        type: Number,
        required: [ true, 'El mes es necesario.' ]
    },
    DayofMonth: {
        type: Number,
        required: [ true, 'El dia del mes es necesario.' ]
    },
    DayOfWeek: {
        type: Number,
        required: [ true, 'El dia de la semana es necesario' ]
    },
    DepTime: {
        type: Number,
        required: [ true, 'Es necesario la hora real de la salida.' ]
    },
    CRSDepTime: {
        type: Number,
        required: [ true, 'Es necesario la hora de salida programada.' ]
    },
    ArrTime: {
        type: Number,
        required: [ true, 'Es necesarios la hora real de la llegada.' ]
    },
    CRSArrTime:  {
        type: Number,
        required: [ true, 'Es necesarios la hora programada de la llegada.' ]
    },
    UniqueCarrier:  {
        type: String,
        required: [ true, 'Es necesario registrar el código de la aerolínea.' ]
    },
    FlightNum: {
        type: Number,
        required: [ true, 'Es necesario registrar el número de vuelo.' ]
    },
    TailNum: {
        type: String,
        required: [ true, 'Es necesario registrar el número de la cola del avión.' ]
    },
    ActualElapsedTime: {
        type: Number,
        required: [ true, 'Es necesario registrar el tiempo transcurrido.' ]
    },
    CRSElapsedTime: {
        type: Number,
        required: [ true, 'Es necesario registrar el tiempo transcurrido desde la reserva.' ]
    },
    AirTime:  {
        type: Number,
        required: [ true, 'Es necesario registrar el tiempo de vuelo.' ]
    },
    ArrDelay: {
        type: Number,
        required: [ true, 'Tiempo de retraso en la llegada.' ]
    },
    DepDelay: {
        type: Number,
        required: [ true, 'Tiempo de retraso en la salida.' ]
    },
    Origin: {
        type: String,
        required: [ true, 'Es origen del vuelo es necesario.' ]
    },
    Dest: {
        type: String,
        required: [ true, 'Es destino del vuelo es necesario.' ]
    },
    Distance: {
        type: Number,
        required: [ true, 'La distancia del vuelo en miles es necesaria.' ]
    },
    TaxiIn:{
        type: Number,
        required: [ true, 'Tiempo en llegar el taxi.' ]
    },
    TaxiOut: {
        type: Number,
        required: [ true, 'Tiempo de salida del taxi.' ]
    },
    Cancelled:  {
        type: Number,
        default: 0
    },
    CancellationCode:  {
        type: String,
        default: "",
    },
    Diverted:  {
        type: Number,
        default: 0
    },
    CarrierDelay: {
        type: Number,
        default: 0
    },
    WeatherDelay: {
        type: Number,
        default: 0
    },
    NASDelay: {
        type: Number,
        default: 0
    },
    SecurityDelay: {
        type: Number,
        default: 0
    },
    LateAircraftDelay: {
        type: Number,
        default: 0
    }
},{
    collection: 'data'
});
export const Airoport = model<IAiroport>('Airoport',AiroportSchema)