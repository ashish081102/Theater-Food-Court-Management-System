import React, { useEffect } from "react";
import "./Home.css";
import Graph from "../../Components/HomeComponents/Graph";
import { Box } from "@mui/material";
import InfoGrid from "../../Components/HomeComponents/InfoGrid";
import PieChartGraph from "../../Components/HomeComponents/PieChart";
import SellingItems from "../../Components/HomeComponents/SellingItems";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Home = () => {
  const navigate = useNavigate();
  const admin_id = JSON.parse(localStorage.getItem("admin_id"));
  useEffect(() => {
    async function verifyUser() {
      console.log("VVVVVVVVVVVVVVVVVERIFYING", admin_id);

      await axios
        .post("http://localhost:8080/api/admin/checkAdmin", {
          admin_id: admin_id,
        })
        .then((response) => {
          navigate("/");
        })
        .catch((err) => {
          toast.error("Please Log In to Continue!");
          navigate("/signIn");
          console.log(err);
        });
    }
    if (admin_id) {
      console.log("DDDDDDDDDOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOing");
      verifyUser();
    } else {
      navigate("/signIn");
    }
  }, []);

  return (
    <Box
      width={"100%"}
      height={"fit-content"}
      bgcolor={"#faf9f7"}
      p={"30px 33px"}
    >
      <Box width={"100%"} display={"flex"} gap={3}>
        <Box flex={1}>
          <Graph />
        </Box>
        <Box flex={1} display={"flex"} flexWrap={"wrap"}>
          <InfoGrid />
        </Box>
      </Box>
      <Box width={"100%"} display={"flex"} gap={4}>
        <Box flex={1}>
          <PieChartGraph />
        </Box>
        <Box flex={0.98}>
          <SellingItems />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
