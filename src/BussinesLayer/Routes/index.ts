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

flightsRoutes.get('/all', async (req: Request, res: Response) => {

    try {
        const bodyRequest = req.body;
        const airoportData = await Airoport.find(
            {
                Year: bodyRequest.year
            },
            null,
            {
                skip: (bodyRequest.page - 1) * 1000,
                limit: 1000
            }).exec();

        res.status(200).json({
            ok: true,
            airoportData
        })
    } catch (error) {
        res.status(500).json({
            ok: true,
            clases: []
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