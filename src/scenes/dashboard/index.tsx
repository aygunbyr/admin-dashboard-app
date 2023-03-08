import { Box, Button, IconButton, Typography } from "@mui/material";
import Header from "../../components/Header";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const Dashboard = () => {
  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              bgcolor: "#2962ff",
              color: "#f5f5f5",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          bgcolor="#eeeeee"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="5px"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress={0.75}
            increase="+14%"
            icon={<EmailIcon sx={{ color: "#43a047", fontSize: "26px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor="#eeeeee"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="5px"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress={0.5}
            increase="+21%"
            icon={
              <PointOfSaleIcon sx={{ color: "#43a047", fontSize: "26px" }} />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor="#eeeeee"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="5px"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress={0.3}
            increase="+5%"
            icon={<PersonAddIcon sx={{ color: "#43a047", fontSize: "26px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          bgcolor="#eeeeee"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="5px"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress={0.8}
            increase="+43%"
            icon={<TrafficIcon sx={{ color: "#43a047", fontSize: "26px" }} />}
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          bgcolor="#eeeeee"
          borderRadius="5px"
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                sx={{ fontSize: "16px" }}
                fontWeight="600"
                color="#141414"
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontSize: "24px" }}
                fontWeight="bold"
                color="#4caf50"
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: "#4caf50" }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor="#eeeeee"
          overflow="auto"
          borderRadius="5px"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid #eeeeee`}
            // colors="#141414"
            p="15px"
          >
            <Typography
              color="#141414"
              variant="h5"
              sx={{ fontSize: "16px" }}
              fontWeight="600"
            >
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid #eeeeee`}
              p="15px"
            >
              <Box>
                <Typography
                  color="#4caf50"
                  variant="h5"
                  sx={{ fontSize: "16px" }}
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color="#141414">{transaction.user}</Typography>
              </Box>
              <Box color="#141414">{transaction.date}</Box>
              <Box bgcolor="#4caf50" p="5px 10px" borderRadius="4px">
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor="#eeeeee"
          p="30px"
          borderRadius="5px"
        >
          <Typography variant="h5" sx={{ fontSize: "16px" }} fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size={125} />
            <Typography
              variant="h5"
              color="#4caf50"
              sx={{ mt: "15px", fontSize: "16px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor="#eeeeee"
          borderRadius="5px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px", fontSize: "16px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          bgcolor="#eeeeee"
          padding="30px"
          borderRadius="5px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px", fontSize: "16px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
