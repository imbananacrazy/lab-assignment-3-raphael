import ToDoForm from "@/components/to-do-form";
import ToDoList from "@/components/to-do-list";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

export default function Index() {
  const tasks:string[] = ["Do laundry", "Go to gym", "Walk dog"];

  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
