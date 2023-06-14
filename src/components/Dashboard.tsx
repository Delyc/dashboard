


import Link from "next/link";
import Sidebar from "./layouts/sidebar/Sidebar";
import Navbar from "./layouts/Navbar";
import styles from '../styles/Home.module.scss';
import UserRecordCount from "./cards/UserRecordCount";
import { GroupProfileIcon, TwoProfilesIcon, DocumentIcon, DatabaseIcon } from "./ui/Svgs";
import UsersTable from "./sections/UsersTable";
const Dashboard = () => {

    const userRecords = [
        {
            icon: <TwoProfilesIcon />,
            text: "Users",
            values : 2453,
            background: "#DF18FF"

        },
        {
            icon: <GroupProfileIcon />,
            text: "Active Users",
            values : 2453,
            background: "#5718FF"


        },
        {
            icon: <DocumentIcon />,
            text: "Users with Loans",
            values : 2453,
            background: "#F55F44"


        },
        {
            icon: <DatabaseIcon />,
            text: "Users with Savings",
            values : 2453,
            background: "345, 100%, 60%"


        },
        
    ]

    return (
        <>
            <section className={styles.dashboard}>

             <Navbar />


                <div className={styles.container_wrapper}>
                <Sidebar />
                <div className={styles.users} >
                    <h1 className={styles.users__title}>Users</h1>
                    <div className={styles.users__records}>
                    {userRecords.map((record, index) => {
                        return(
                            <UserRecordCount key={index} background={record.background} icon={record.icon} text={record.text} count={record.values} />
                        )
                    })}
                    </div>


                    <UsersTable />
                    
                </div>
                </div>
            </section>
               </>
    );
}

export default Dashboard;