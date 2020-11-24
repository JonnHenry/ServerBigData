import { Router, Request, Response } from 'express';
import { Airoport } from '../../DataLayer/Models/Airoport.model';

const flightsRoutes = Router();

/*
Body of a request
{
    page:number;
    Year: number;
}
*/

flightsRoutes.get('/all/:page', async (req: Request, res: Response) => {


    //TODO: Cambiar el coolection count; 
    try {
        const page = Number(req.params.page);
        const airoportData = await Airoport.find(
            {},
            null,
            {
                skip: (page) * 500,
                limit: 500
            }).select('_id Month DayofMonth DayOfWeek FlightNum').exec();

        await Airoport.count({},function(err,count){
            if (!err){
                res.status(200).json({
                    ok: true,
                    airoportData,
                    numpages: Math.ceil(count/1000),
                    numData: count
                })
            }
        });

        
    } catch (error) {
        res.status(500).json({
            ok: false,
            clases: []
        })
    }
});


flightsRoutes.get('/data/:_id', async (req: Request, res: Response) => {

    try {
        const id = req.params._id;
        const fligthData = await Airoport.find(
            {_id: id},
            null,
            {
            }).exec();

            res.status(200).json({
                ok: true,
                fligthData,
                
            })

        
    } catch (error) {
        res.status(500).json({
            ok: false,
            fligthData: []
        })
    }
});









flightsRoutes.post('/create', (req: Request, res: Response) => {
    try {
        const airoportCreate = req.body;

        Airoport.create(airoportCreate).then(airoport => {

            res.status(200).json({
                ok: true,
                airoport,
                mensaje: 'El registro del vuelo se ha guardado exitosamente'
            })
        })

    } catch {
        res.status(200).json({
            ok: false,
            airoport: [],
            mensaje: 'Verifique la información ingresada'
        })

    }

})


//The structure of the object is used to update and thir _id 
flightsRoutes.put('/update/:_id', (req: Request, res: Response) => {
    try {
        const reqFligth = req.body;
        const _id = req.params._id;

        Airoport.update({_id: _id}, { reqFligth }).then(()=>{
            res.status(200).json({
                ok: true,
                mensaje: 'Se ha actualizado el registro exitosamente'
            })
        });
    } catch (error) {
        res.status(200).json({
            ok: false,
            error,
            mensaje: 'Verifique la información ingresada'
        })

    }
});





//The identifier is used to delete a element 
flightsRoutes.delete('/delete/:_id', async (req: Request, res: Response) => {
    try {
        const _id = req.params._id;
        await Airoport.deleteOne({ _id });
        res.status(200).json({
            ok: true,
            mensaje: 'Se ha eliminado el registro correctamente'
        })
    } catch (error) {
        res.status(200).json({
            ok: false,
            mensaje: 'Verifique la información ingresada'
        })

    }
});


export default flightsRoutes;