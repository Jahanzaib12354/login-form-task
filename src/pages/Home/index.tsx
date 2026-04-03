

import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import { styles } from "./style";
import { getTasks } from "../../services/api";


const Home: React.FC = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      
    

    
      <div style={styles.container}>
        <h1>Hello</h1>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div style={styles.cardContainer}>
            {tasks.map((task, index) => (
              <Card
                key={index}
                title={task.title}
                image={task.url}
                backgroundColor="#fff"
                
                textStyle={styles.textstyle}
              />
            ))}
          </div>
        )}
      </div>

      
    </>
  );
};

export default Home;