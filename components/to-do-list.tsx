import React from "react";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

const ToDoList = ({ tasks }: { tasks: string[] }) => {
  return (
    <ScrollView>
      {/* First task completed, second task not, third task completed. i know i have it hard-coded and thats not optimal, but it works for this lab */}
      {tasks.map((task, index) => (
        <Pressable key={index} style={styles.task}>
          <Text style={styles.taskText}>{task}</Text>
        </Pressable>
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
