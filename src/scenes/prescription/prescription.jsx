// import React, {Fragment ,useRef,useState} from "react";
// import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
// import CanvasDraw from "react-canvas-draw";
// import UndoIcon from "@material-ui/icons/Undo";
// import DeleteIcon from "@material-ui/icons/Delete";
// // import localClasses from "./prescription.module.css";
// import { ChromePicker } from 'react-color';
// import ColorLensIcon from '@material-ui/icons/ColorLens';

import { React } from 'react';
import { Stage, Layer, Line } from 'react-konva';
import { useEffect, useState, useRef } from 'react';

const Prescription = ({onClearLines, clearLines}) => {

    const [lines, setLines] = useState([]);
    const isDrawing = useRef(false);

    useEffect(() => {
        //loadImage();
    }, [clearLines])
    
    const handleMouseDown = (e) => {
        isDrawing.current = true;
        const pos = e.target.getStage().getPointerPosition();
        setLines([...lines, { points: [pos.x, pos.y] }]);
    };
    
    const handleMouseMove = (e) => {
        // no drawing - skipping
        if (!isDrawing.current) {
          return;
        }
        const stage = e.target.getStage();
        const point = stage.getPointerPosition();
    
        // To draw line
        let lastLine = lines[lines.length - 1];
        
        if(lastLine) {
            // add point
            lastLine.points = lastLine.points.concat([point.x, point.y]);
                
            // replace last
            lines.splice(lines.length - 1, 1, lastLine);
            setLines(lines.concat());
        }
        
    };
    
    const handleMouseUp = () => {
        isDrawing.current = false;
    };

    return (
        <div className=" text-center text-dark hola">
            <Stage
                width={340}
                height={600}
                background={"ghostwhite"}
                onMouseDown={handleMouseDown}
                onMousemove={handleMouseMove}
                onMouseup={handleMouseUp}
                className="canvas-stage "
            >
                <Layer>
                    {lines.map((line, i) => (
                        <Line
                        key={i}
                        points={line.points}
                        stroke="#df4b26"
                        strokeWidth={2}
                        tension={0.5}
                        lineCap="round"
                        globalCompositeOperation={
                            line.tool === 'eraser' ? 'destination-out' : 'source-over'
                        }
                        />
                    ))}
                </Layer>
            </Stage>
        </div>
    )
}

export default Prescription;