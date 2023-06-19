import Sidebar from "./layouts/sidebar/Sidebar";
import Navbar from "./layouts/Navbar";
import styles from '../styles/Home.module.scss';
import UserRecordCount from "./cards/UserRecordCount";
import { GroupProfileIcon, TwoProfilesIcon, DocumentIcon, DatabaseIcon } from "./ui/Svgs";
import UsersTable from "./sections/UsersTable";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useUsersQuery } from "@/redux/services/users";
import { getLocalStorageItem } from "@/helpers/localStorage";

const Dashboard = () => {
    const { data } = useUsersQuery()
    const router = useRouter()
    const token = getLocalStorageItem('token');
    const userJson = getLocalStorageItem("user");
    const user = userJson ? JSON.parse(userJson) : null;

    useEffect(() => {
        if (!token) {
            router.push('/login',

                {
                    query: {
                        redirectTo: router.pathname

                    }
                })
        }

    }
        , [])

    const filteredArray = data
        ?.filter((item) => item.userStatus === 'active')

        const userWithLoans = data
        ?.filter((item) => item.hasLoan === true)

        const userWithSavings = data
        ?.filter((item) => item.hasSavings === true)

    const userRecords = [
        {
            icon: <TwoProfilesIcon />,
            text: "Users",
            values: `${data?.length}`,
            background: "#e018ff1c"

        },
        {
            icon: <GroupProfileIcon />,
            text: "Active Users",
            values: `${filteredArray?.length}`,
            background: "#5618ff25"
        },
        {
            icon: <DocumentIcon />,
            text: "Users with Loans",
            values: `${userWithLoans?.length}`,
            background: "#f55f4417"
        },
        {
            icon: <DatabaseIcon />,
            text: "Users with Savings",
            values: `${userWithSavings?.length}`,
            background: "#ff336617"
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
                            {filteredArray && userRecords.map((record, index) => {
                                return (
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