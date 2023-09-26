import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  InputAdornment,
  IconButton,
  Grid,
  Icon,
} from "@mui/material";
import TabPanel from "../utils/TabPanel";
// import SwipeableViews from 'react-swipeable-views';
import SwipeableViews from "react-swipeable-views-react-18-fix";
import CardsPanel from "./CardsPanel.js";
const LatestProducts = ({ homePageProducts }) => {
  const theme = useTheme();
  const [productTypeValue, setProductTypeValue] = useState(0);
  var actualDataLength = 6;
  const handleChangeIndex = (index) => {
    setProductTypeValue(index);
  };

  const tabStyle = {
    minWidth: { xs: 50 },
    paddingLeft: { xs: '2%' },
    paddingRight: { xs: '2%' },
  };

  return (
    <>
      <Tabs
        // indicatorColor="white"
        sx={{ "&.MuiButtonBase-root ": { outline: "none" } }}
        textColor="primary"
        value={productTypeValue}
        onChange={(e, productTypeValue) =>
          setProductTypeValue(productTypeValue)
        }
        centered
      >
        <Tab sx={{ fontSize: "0.7rem", ...tabStyle }} label="New Arrival"></Tab>
        <Tab sx={{ fontSize: "0.7rem", ...tabStyle }} label="Best Seller"></Tab>
        <Tab sx={{ fontSize: "0.7rem", ...tabStyle }} label="Featured Products"></Tab>
        <Tab sx={{ fontSize: "0.7rem", ...tabStyle }} label="Special Offer"></Tab>
      </Tabs>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={productTypeValue}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={productTypeValue} index={0}>
          <CardsPanel
            data={homePageProducts.newArrivalProducts}
            actualDataLength={actualDataLength}
          />
        </TabPanel>
        <TabPanel value={productTypeValue} index={1}>
          <CardsPanel
            data={homePageProducts.bestSellerProducts}
            actualDataLength={actualDataLength}
          />
        </TabPanel>
        <TabPanel value={productTypeValue} index={2}>
          <CardsPanel
            data={homePageProducts.featuredProducts}
            actualDataLength={actualDataLength}
          />
        </TabPanel>
        <TabPanel value={productTypeValue} index={3}>
          <CardsPanel
            data={homePageProducts.specialOfferProducts}
            actualDataLength={actualDataLength}
          />
        </TabPanel>
      </SwipeableViews>
    </>
  );
};
export default LatestProducts;
