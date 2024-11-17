"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
const PORT = 8081;
app.use(express_1.default.json());
app.use('/', (0, routes_1.default)());
mongoose_1.default.connect("mongodb+srv://admin:admin@cluster0.duou8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
    console.log('Mongo DB Connected');
})
    .catch((error) => {
    console.error('Connection error', error);
});
app.listen(PORT, () => {
    console.log(`Server is working on PORT: ${PORT}`);
});
