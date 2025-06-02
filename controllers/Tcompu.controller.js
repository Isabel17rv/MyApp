import mongoose from "mongoose";
import TCompu from "../models/TCompu.models.js";

export const getAllTCompu = async (req, res) => {
    console.log('Obteniendo todas las computadoras');

    try {
        const computadoras = await TCompu.find({}, { __v: 0 });
        if (computadoras.length === 0) {
            return res.status(404).json({
                msg: 'No se han encontrado computadoras'
            });
        }

        return res.status(200).json({
            computadoras
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error al obtener las computadoras'
        });
    }
}

export const getTCompuById = async (req, res) => {
    console.log('Obteniendo computadora por ID');
    const id = req.params.id;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }

        const computadora = await TCompu.findById(id);
        if (!computadora) {
            return res.status(404).json({
                msg: 'No se ha encontrado la computadora'
            });
        }
        return res.status(200).json({
            computadora
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al obtener la computadora'
        });
    }
}


export const postTCompu = async (req, res) => {
    console.log('Subiendo datos a la base de datos');
    const body = req.body;
    const computadora = new TCompu(body);

    try {
        const validationError = computadora.validateSync();
        if (validationError) {
            const errorMessage = Object.values(validationError.errors).map(error => error.message);
            return res.status(400).json({
                msg: 'Error de validación',
                errors: errorMessage
            });
        }

        await computadora.save();
        return res.status(201).json({
            msg: 'Computadora creada correctamente',
            computadora
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al crear la computadora'
        });
    }
}

export const putTCompu = async (req, res) => {
    console.log('Actualizando datos de la computadora');
    const id = req.params.id;
    const body = req.body;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }

        const computadora = await TCompu.findByIdAndUpdate(id, body, { new: true });
        if (!computadora) {
            return res.status(404).json({
                msg: 'No se ha encontrado la computadora'
            });
        }

        return res.status(200).json({
            msg: 'Computadora actualizada correctamente',
            computadora
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al actualizar la computadora'
        });
    }
}


export const deleteTCompu = async (req, res) => {
    console.log('Eliminando computadora');
    const id = req.params.id;

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                msg: 'ID no válido'
            });
        }

        const computadora = await TCompu.findByIdAndDelete(id);
        if (!computadora) {
            return res.status(404).json({
                msg: 'No se ha encontrado la computadora'
            });
        }

        return res.status(200).json({
            msg: 'Computadora eliminada correctamente',
            computadora
        });
    } catch (error) {
        return res.status(500).json({
            msg: 'Error al eliminar la computadora'
        });
    }
}