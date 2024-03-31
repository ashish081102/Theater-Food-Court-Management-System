import React, { useEffect, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./report.css";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { saveAs } from "file-saver";
// import { Worker } from "@react-pdf-viewer/core";
// Import the main component
// import { Worker, Viewer } from "@react-pdf-viewer/core";
// import "@react-pdf-viewer/core/lib/styles/index.css";

// import { pdfjs } from "react-pdf";
import DocViewer from "react-doc-viewer";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";
const Report = () => {
  const theme = useTheme();
  const [categoryValue, setcategoryValue] = useState();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState();
  const [startEnd, setEndDate] = useState();
  const [categories, setCategories] = useState([]);
  const [pdfData, setPdfData] = useState(null);
  // axios.defaults.withCredentials = true;
  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:8080/api/admin/checkAdmin")
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         navigate("/signIn");
  //       });
  //   }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/admin/getAllCategory")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const generatePDF = () => {
    console.log(categoryValue);
    axios
      .post(
        "http://localhost:8080/api/admin/getSpecificDatesOrder",
        {
          start: startDate,
          end: startEnd,
          category_name: categoryValue,
        },
        { responseType: "arraybuffer" }
      )
      .then((response) => {
        const pdfBlob = new Blob([response.data], { type: "application/pdf" });

        const url = URL.createObjectURL(pdfBlob);
        window.open(url);
        // setData(url);
        // console.log(url);
        // Convert the binary data to a Blob
        // console.log(response.data);
        // const pdfBlob = new Blob([response.data], { type: "application/pdf" });
        // console.log(pdfBlob);
        // Convert Blob to a data URL
        // const pdfDataUrl = URL.createObjectURL(pdfBlob);
        setPdfData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (event) => {
    setcategoryValue(event.target.value);
  };
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  function getStyles(category, categoryValue, theme) {
    return {
      fontWeight:
        categoryValue.indexOf(category) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  return (
    <div className="container">
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Category</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={categoryValue}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {categories.map((category) => (
            <MenuItem
              key={category.category_id}
              value={category.category_name}
              style={getStyles(category, category.category_name, theme)}
            >
              {category.category_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          onChange={(newValue) => {
            setStartDate(dayjs(newValue.$d).format("YYYY-MM-DD"));
          }}
        />
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          onChange={(newValue) => {
            setEndDate(dayjs(newValue.$d).format("YYYY-MM-DD"));
          }}
        />
      </LocalizationProvider>
      <Button variant="outlined" onClick={generatePDF}>
        Show
      </Button>
      <div>
        {pdfData && (
          <div>
            {/* <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}
            >
              <Viewer fileUrl={pdfData} />
            </Worker> */}
            <DocViewer documents={pdfData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Report;
