import Layout from "../../components/dashboard/layout/Layout";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
const Dashboard: React.FC<{}> = () => {
  const userInfo = useContext(UserContext);
  return (
    <>
      <Layout>
        <main>
          <h5 className="dashboard-title">Dashboard</h5>
          <div className="data">
            <div className="content-data">
              <h3>Important Note:</h3>
              <div className="head">
                <p>Dear Engineer ! <br />
                  Hope you are doing well. This project was really interesting for me, but due to lack of time, I could not complete it on time. I have a full-time job, and I have a lot of tasks to do daily at the office. I decided to take a leave for at least 3 days, but my manager did not allow me to do so. I hope you understand that having a full-time job and doing another assignment takes a lot of time and is very difficult. As part of this assignment, getting articles by categories, sources, and authors was easy, as I have already done it in the frontend. For the dashboard, I decided to create a list and allow users to select their preferred items. For signed-in users, in the frontend the website should filter based on their preferred types.
               </p>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};
export default Dashboard;
