


// import React, { useContext, useEffect, useState } from "react";
// import Card from "../../components/Card";
// import { styles } from "./style";
// import { getTasks } from "../../services/api";
// import { UserContext } from "../../context/UserContext";
// import TextInput from "../../components/TextInput";

// const Home: React.FC = () => {
//   const [tasks, setTasks] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");

//   const { user } = useContext(UserContext);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getTasks();
//         setTasks(data.slice(0, 6));
//       } catch (error) {
//         console.log("Error:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const filteredTasks = tasks.filter((task) =>
//     task.title.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div style={styles.container}>
//       {/* user show */}
//       <h1>Hello {user?.name || "Guest"}</h1>

//       {/* 🔹 Search Bar */}
//       <div style={styles.searchBox}>

//         <TextInput
//           type="text"
//           placeholder="Search services..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           style={styles.searchInput}
//         />
//       </div>

//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div style={styles.cardContainer}>
//           {filteredTasks.length > 0 ? (
//             filteredTasks.map((task, index) => (
//               <Card
//                 key={index}
//                 title={task.title}
//                 image={task.url}
//                 backgroundColor="#fff"
//                 textStyle={styles.textstyle}
//               />
//             ))
//           ) : (
//             <p>No results found</p> // ✅ extra UX
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Home;


// ...

import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/Card";
import { styles } from "./style";
import { getTasks } from "../../services/api";
import { UserContext } from "../../context/UserContext";
import TextInput from "../../components/TextInput";

// ✅ Redux import
import { useSelector } from "react-redux";

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const { user } = useContext(UserContext);

  // ✅ Redux user
  const reduxUser = useSelector((state: any) => state.user.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTasks();
        setTasks(data.slice(0, 6));
      } catch (error) {
        console.log("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={styles.container}>
      {/* ✅ Redux ko priority di */}
      <h1>Hello {reduxUser?.name || user?.name || "Guest"}</h1>

      {/* 🔹 Search Bar */}
      <div style={styles.searchBox}>
        <TextInput
          type="text"
          placeholder="Search services..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.searchInput}
        />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div style={styles.cardContainer}>
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task, index) => (
              <Card
                key={index}
                title={task.title}
                image={task.url}
                backgroundColor="#fff"
                textStyle={styles.textstyle}
              />
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;