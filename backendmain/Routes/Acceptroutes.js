import historyModel from "../Model/referralhistory.js";
import historyCounter from "../Model/historyCounter.js";
import {initCounter, getNextSequenceValue} from "../Model/historyCounter.js";
import express from "express";

const router = express.Router();
router.post("/init", async (req, res) => {
    try{
    initCounter("history");
    res.json({message: "init complete"});
    }catch(error){
        res.json({message: "Error while init in Counter"});
    }
});

router.post("/addition", async (req, res) => {
    try{
    const count = await getNextSequenceValue("history");
    res.json({message: count});
    }catch(error){
        res.json({message: "Error while incrementing in Counter"});
    }
});
export default router;