import ToDoForm from "@/components/to-do-form";
import ToDoList from "@/components/to-do-list";
import React, { use } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { useState } from "react";

export default function Index() {
  const [tasks, setTasks] = useState<string[]>([
    "Do laundry",
    "Go to gym",
    "Walk dog",
  ]);

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
