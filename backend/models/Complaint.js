const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    Nome: {
        type: String,
        required: true
    },
    Descrição: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Complaint', complaintSchema);

