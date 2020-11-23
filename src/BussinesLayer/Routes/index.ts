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
        const bodyRequest = await req.body;

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
            airoportData,
            mensaje: 'Todos los datos'
        })
    } catch (error) {
        res.status(500).json({
            ok: true,
            clases: [],
            mensaje: 'Error al ejecutar la consulta'
        })
    }
});



flightsRoutes.post('/create', (req: Request, res: Response) => {
    const airoportCreate = req.body;
    console.log(airoportCreate)

    Airoport.create(airoportCreate).then(airoport => {

        res.status(200).json({
            ok: true,
            airoport,
            mensaje: 'El vuelo se ha registrado correctamente'
        })
    })

        .catch(err => {
            res.status(200).json({
                ok: false,
                clase: err,
                mensaje: 'Verifique la información ingresada'
            })
        })
})









/*

//Se envia el id de la clase que igual es el orden de cada clase
claseRoutes.get('/clase/:id', async (req: Request, res: Response) => {
    const idClase = req.params.id;
    try {
        const clase = await Clase.find({ id: idClase })
            .populate('comentarios.usuario', '-password -email -celular -sexo -habilitado')
            .exec()

        res.status(200).json({
            ok: true,
            clase: clase[0],
            mensaje: ''
        })
    } catch (error) {
        res.status(500).json({
            ok: true,
            clase: {},
            mensaje: 'Error al ejecutar la consulta'
        })
    }
})

//Se debe de ingresar para esta llamada la siguiente informacion
//{
//  _id: id //Id del usuario
//  comentario: comentario
//  calificacion: calificacion Number !!Es la califcacion que el usuario ha dado    
//}

//Enviar un comentario al servidor para que los analise
claseRoutes.post('/:idClase/comentario', verificaToken, (req: any, res: Response) => {
    const body = req.body;
    const idClase = req.params.idClase;
    
    const usuarioComentario = {
        usuario: req.usuario._id,
        comentario: body.comentario,
    }
    
    Clase.findOne({ id: idClase }, (err, claseDB) => {
        if (err || !claseDB) {
            return res.status(200).json({
                ok: false,
                mensaje: 'El clase no se encuentra registrado, verifique los datos'
            });
        }
        const calificacionActual = (claseDB.calificacion + body.calificacion) / 2
        claseDB.calificacion = calificacionActual || claseDB.calificacion;
        claseDB.comentarios.push(usuarioComentario);
        claseDB.save()
            .then(() => {
                res.status(200).json({
                    ok: true,
                    mensaje: 'El comentario se ha registrado correctamente'
                })
            })

            .catch(() => {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'Verifique los datos ingresados'
                });
            })

    });

})



claseRoutes.post('/create', (req: Request, res: Response) => {
    const body = req.body;
    const clase = {
        id: body.id,
        titulo: body.titulo,
        descripcion: body.descripcion,
        nombreVideo: body.nombreVideo,
        comentarios: []
    };
    console.log(clase)

    Clase.create(clase).then(clase => {

        res.status(200).json({
            ok: true,
            clase,
            mensaje: 'La clase se ha registrado correctamente'
        })
    })

        .catch(err => {
            res.status(200).json({
                ok: false,
                clase: {},
                mensaje: 'Verifique la información ingresada'
            })
        })
})

claseRoutes.get('/get/video/:video', (req: Request, res: any) => {
    try {
        const paramVideo = req.params.video;
        const path = fileSystem.getVideoClase(paramVideo);
        var start: any = 0;
        var end: any = 0;

        if (path != '') {
            const stat = fs.statSync(path)
            const fileSize = stat.size
            const range = req.headers.range
            if (range) {
                const parts = range.replace(/bytes=/, "").split("-")
                start = parseInt(parts[0], 10)
                end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1

                if (start >= fileSize) {
                    res.status(416).send('Requested range not satisfiable\n' + start + ' >= ' + fileSize);
                    return
                }

                const chunksize = (end - start) + 1
                const file = fs.createReadStream(path, { start, end })
                const head = {
                    'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                    'Accept-Ranges': 'bytes',
                    'Content-Length': chunksize,
                    'Content-Type': 'video/mp4',
                }
                res.writeHead(206, head)
                file.pipe(res)
            } else {
                const head = {
                    'Content-Length': fileSize,
                    'Content-Type': 'video/mp4',
                }
                res.writeHead(200, head)
                var stream = fs.createReadStream(path)
                    .on("open", function () {
                        stream.pipe(res);
                    }).on("error", function (err) {
                        res.status(404).end(err);
                    });
            }
        } else {
            res.status(404).end();
        }
    } catch (error) {
        res.status(404).end(error);
    }

})

*/
export default flightsRoutes;