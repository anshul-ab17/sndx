import express, { json } from "express"

export function App() {

    const app=express();
    app.use(express.json());

    app.get('/health', (req,res)=>{
        res.send("OK")
    })


    app.listen(3000);
    return app;
}