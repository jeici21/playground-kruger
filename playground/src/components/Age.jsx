import { useState } from "react";
import { TextField } from "@mui/material";
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const Age = () => {
    const [value, setValue] = useState();
    const [a, setA] = useState(0);
    const [m, setM] = useState(0);
    const [d, setD] = useState(0);

    const getEdad = (fechaNac) => {
        if (!fechaNac || isNaN(new Date(fechaNac))) return;
        const hoy = new Date();
        const dateNac = new Date(fechaNac);
        if (hoy - dateNac < 0) return;
        let dias = hoy.getUTCDate() - dateNac.getUTCDate();
        let meses = hoy.getUTCMonth() - dateNac.getUTCMonth();
        let years = hoy.getUTCFullYear() - dateNac.getUTCFullYear();
        if (dias < 0) {
            meses--;
            dias = 30 + dias;
        }
        if (meses < 0) {
            years--;
            meses = 12 + meses;
        }
        setA(years);
        setM(meses);
        setD(dias);
    };
    return (
        <div className="card-container">
            <div className="card-body">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker className="fecha"
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue.$d);
                            getEdad(newValue.$d);
                        }}
                        renderInput={(params) => <TextField sx={{ backgroundColor: 'transparent' }} {...params} />}
                    />
                </LocalizationProvider>
                <button className="calculate">
                    Calculate
                </button>
            </div>
            <div className="card-footer">
                <div className="card-item">
                    <p> {a}</p>
                    <p> Años</p>
                </div>
                <div className="card-item">
                    <p> {m}</p>
                    <p> Meses</p>
                </div>
                <div className="card-item">
                    <p> {d}</p>
                    <p> Días</p>
                </div>
            </div>
        </div>
    );
};

export default Age;
