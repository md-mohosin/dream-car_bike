import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Bikes from '../../Bikes/Bikes';


const Products = () => {
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>BIKE</Tab>
                    <Tab>CAR</Tab>
                </TabList>

                <TabPanel>
                    <Bikes></Bikes>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Products;