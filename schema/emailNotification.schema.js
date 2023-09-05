const mongoose = require("mongoose");

const TemplteSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

const TemplteModel = mongoose.model("templte", TemplteSchema);
module.exports = TemplteModel;
