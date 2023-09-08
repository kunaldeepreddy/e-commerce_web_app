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
import SwipeableViews from 'react-swipeable-views';
import CardsPanel from "./CardsPanel.js";
const LatestProducts = (props) => {
    const theme = useTheme();
    const [productTypeValue, setProductTypeValue] = useState(0);
    var actualDataLength = 6;
    const handleChangeIndex = (index) => {
        setProductTypeValue(index);
      };
    return (
        <>
            <Tabs
                // indicatorColor="white"
                sx={{ '&.MuiButtonBase-root ': { outline: 'none' } }}
                textColor="primary"
                value={productTypeValue}
                onChange={(e, productTypeValue) => setProductTypeValue(productTypeValue)}
                centered
            >
                <Tab sx={{ fontSize: '0.7rem' }} label="New Arrival" >
                </Tab>
                <Tab sx={{ fontSize: '0.7rem' }} label="Best Seller" >
                </Tab>
                <Tab sx={{ fontSize: '0.7rem' }} label="Featured Products" >
                </Tab>
                <Tab sx={{ fontSize: '0.7rem' }} label="Special Offer"  >
                </Tab>
            </Tabs>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={productTypeValue}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={productTypeValue} index={0}>
                    <CardsPanel data={props.dataObject.data.LatestProducts.NewArrivalProducts} actualDataLength={actualDataLength} />
                </TabPanel>
                <TabPanel value={productTypeValue} index={1}>
                    <CardsPanel data={props.dataObject.data.LatestProducts.bestSellerProducts} actualDataLength={actualDataLength} />
                </TabPanel>
                <TabPanel value={productTypeValue} index={2}>
                    <CardsPanel data={props.dataObject.data.LatestProducts.FeaturedProducts} actualDataLength={actualDataLength} />
                </TabPanel>
                <TabPanel value={productTypeValue} index={3}>
                    <CardsPanel data={props.dataObject.data.LatestProducts.specialOfferProducts} actualDataLength={actualDataLength} />
                </TabPanel>
            </SwipeableViews>
        </>
    );
}
export default LatestProducts;