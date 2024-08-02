import mongoose from 'mongoose';


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://arbabkamal:N6OLky9iAYjLq2qU@cluster0.vn1mj2l.mongodb.net/tomato')
        .then(() => console.log(`Database working`))

}