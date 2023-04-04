import Layout from '../../components/templates/Layout';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import ActiveLoans from "components/pages/loans/active";

export default function Loans() {

  return (
    <Layout>
      <div className="flex flex-col mt-10">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <Tabs>
                <TabList>
                  <Tab>Active</Tab>
                  <Tab>Paid</Tab>
                  <Tab>Defaulted</Tab>
                </TabList>

                <TabPanel>
                  <ActiveLoans />
                </TabPanel>
                <TabPanel>
                  <h2>Paid loans</h2>
                </TabPanel>
                <TabPanel>
                  <h2>Defaulted loans</h2>
                </TabPanel>
              </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  );
}
