import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

const ToDoList = ({ tasks }: { tasks: string[] }) => {
  return (
    <ScrollView>
      {tasks.map((task, index) => (
        <li key={index} style={styles.task}>
          <Text style={styles.taskText}>{task}</Text>
        </li>
      ))}
    </ScrollView>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  completed: {
    backgroundColor: "#e0e0e0",
  },
  taskText: {
    fontSize: 16,
  },
});
