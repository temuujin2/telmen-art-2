import imgBack_about from '../images/BGGGG.png'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';




export const About = () => {
    return (
        <div className="about_wrapper">
            <p style={{ color: "white" }}>ggg</p>


            <img className="back-img-totem" src={imgBack_about}></img>
            <Tabs>
                <TabList>
                  <Tab>Title 1</Tab>
                  <Tab>Title 2</Tab>
                </TabList>

                <TabPanel>
                  <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>

        </div>
    )
}