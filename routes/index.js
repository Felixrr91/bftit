import express from "express";
import * as db from "../db/index.js";
import * as Player from "../db/dao/player.js";

const router = express.Router();

const data = { projectName: "BFTIT" };

router.get( "/", ( req, res ) => {
    res.render( "index", data );
} );

router.get( "/player", async ( req, res ) => {
    await Player.create( "felix", "emperor.jpg" );

    const result = await Player.getAll();
    res.send( result?.rows );
} );

router.get( "/db", async ( req, res ) => {
    const result = await db.query( "SELECT table_name FROM information_schema.tables WHERE table_schema='public' AND table_type='BASE TABLE';" );

    res.send( result.rows.map( row => row.table_name ) );
} );

export default router;
