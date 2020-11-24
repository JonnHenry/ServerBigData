import { Schema, model} from 'mongoose';
import IAiroport from "../../Interfaces/Airoport";

const AiroportSchema = new Schema({
    Year: {
        type: String,
        required: [ true, 'El año es necesario para el registro.' ]
    },
    Month: {
        type: String,
        required: [ true, 'El mes es necesario.' ]
    },
    DayofMonth: {
        type: String,
        required: [ true, 'El dia del mes es necesario.' ]
    },
    DayOfWeek: {
        type: String,
        required: [ true, 'El dia de la semana es necesario' ]
    },
    DepTime: {
        type: String,
        required: [ true, 'Es necesario la hora real de la salida.' ]
    },
    CRSDepTime: {
        type: String,
        required: [ true, 'Es necesario la hora de salida programada.' ]
    },
    ArrTime: {
        type: String,
        required: [ true, 'Es necesarios la hora real de la llegada.' ]
    },
    CRSArrTime:  {
        type: String,
        required: [ true, 'Es necesarios la hora programada de la llegada.' ]
    },
    UniqueCarrier:  {
        type: String,
        required: [ true, 'Es necesario registrar el código de la aerolínea.' ]
    },
    FlightNum: {
        type: String,
        required: [ true, 'Es necesario registrar el número de vuelo.' ]
    },
    TailNum: {
        type: String,
        required: [ true, 'Es necesario registrar el número de la cola del avión.' ]
    },
    ActualElapsedTime: {
        type: String,
        required: [ true, 'Es necesario registrar el tiempo transcurrido.' ]
    },
    CRSElapsedTime: {
        type: String,
        required: [ true, 'Es necesario registrar el tiempo transcurrido desde la reserva.' ]
    },
    AirTime:  {
        type: String,
        required: [ true, 'Es necesario registrar el tiempo de vuelo.' ]
    },
    ArrDelay: {
        type: String,
        required: [ true, 'Tiempo de retraso en la llegada.' ]
    },
    DepDelay: {
        type: String,
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
        type: String,
        required: [ true, 'La distancia del vuelo en miles es necesaria.' ]
    },
    TaxiIn:{
        type: String,
        required: [ true, 'Tiempo en llegar el taxi.' ]
    },
    TaxiOut: {
        type: String,
        required: [ true, 'Tiempo de salida del taxi.' ]
    },
    Cancelled:  {
        type: String,
        default: '0'
    },
    CancellationCode:  {
        type: String,
        default: "",
    },
    Diverted:  {
        type: String,
        default: '0'
    },
    CarrierDelay: {
        type: String,
        default: '0'
    },
    WeatherDelay: {
        type: String,
        default: '0'
    },
    NASDelay: {
        type: String,
        default: '0'
    },
    SecurityDelay: {
        type: String,
        default: '0'
    },
    LateAircraftDelay: {
        type: String,
        default: '0'
    }
},{
    collection: 'years-data'
});
export const Airoport = model<IAiroport>('Airoport',AiroportSchema)