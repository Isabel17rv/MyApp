import mongoose from "mongoose";

const tienDaCompuSchema = new mongoose.Schema({
    marca: {
    type: String,
    required: true,
  },
  modelo: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
    min: 0,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  componentes: {
    type: [String], // Asumo que el array contiene strings (puedes ajustar si son objetos)
    required: true,
  },
  descripcion: {
    type: String,
  }
})

const TCompu = mongoose.model('TCompu', tienDaCompuSchema);
export default TCompu;