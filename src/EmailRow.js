import React from 'react'
import './EmailRow.css'
import Checkbox from "@mui/material/Checkbox";
import { IconButton } from '@mui/material';
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import { useNavigate } from "react-router-dom";

function EmailRow({id, title, subject, description, time}) {
    const navigate = useNavigate();
  return (
    <div className='emailRow'>
        <div className="emailRow__options">
            <Checkbox />
            <IconButton>
                <StarBorderOutlinedIcon />
            </IconButton>
            <IconButton>
                <LabelImportantOutlinedIcon />
            </IconButton>
        </div>

        <h3 className="emailRow__title">
            {title}
        </h3>

        <div onClick={() => navigate("/mail")}  className="emailRow__message">
            <h4>{subject}{" "}
            <span className="emailRow__description">
                -{description}
            </span>
            </h4>
        </div>

        <p className="emailRow__time">{time}</p>
    </div>
  )
}

export default EmailRow