import { Fragment, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { tasksState } from "../../global-state/tasks-atom";
import "./drag-and-drop.css";

export const DragAndDrop = () => {
  const [tasks, setTasks] = useRecoilState(tasksState);
  const [dragItems, setDragItems] = useState<NodeList>(
    document.querySelectorAll(".dragItem")
  );
  const [listnerState, setListenerState] = useState<Boolean>(false);

  useEffect(() => {
    console.log("USE EFFECT");
    setDragItems(document.querySelectorAll(".dragItem"));
  }, [tasks, setDragItems]);

  //DRAG
  // attach the dragstart event handler
  dragItems?.forEach((item) => {
    item?.removeEventListener("dragstart", dragStart);
    item?.addEventListener("dragstart", dragStart);
  });

  // handle the dragstart
  function dragStart(e: any) {
    console.log("START");
    e.dataTransfer.setData("text/plain", e.target.id);
    e.target.classList.add("hide");
  }

  //DROP
  const dropBoxes = document.querySelectorAll(".dropBox");

  dropBoxes?.forEach((box) => {
    console.log("SHIGSHAG");
    box.removeEventListener("dragenter", dragEnter);
    box.removeEventListener("dragover", dragOver);
    box.removeEventListener("dragleave", dragLeave);
    box.removeEventListener("drop", drop);
    box.addEventListener("dragenter", dragEnter);
    box.addEventListener("dragover", dragOver);
    box.addEventListener("dragleave", dragLeave);
    box.addEventListener("drop", drop);
  });

  function dragEnter(e: any) {
    e.preventDefault();
    e.target.classList.add("drag-over");
  }

  function dragOver(e: any) {
    e.preventDefault();
    e.target.classList.add("drag-over");
  }

  function dragLeave(e: any) {
    e.target.classList.remove("drag-over");
  }

  function drop(e: any) {
    console.log("DROP");
    e.target.classList.remove("drag-over");

    // get the draggable element
    const id = e.dataTransfer.getData("text/plain");
    const dropId = Number(e.target.id.charAt(4));
    const dragId = Number(id.charAt(4));

    let task = tasks.find((task) => task.id === dragId);

    if (task) {
      const changeTasks = [...tasks].map((t) => {
        if (task && t.id === dragId) return { ...t, columnId: dropId };
        else return t;
      });

      console.log(changeTasks);

      const draggable = document.getElementById(id);
      console.log(draggable);

      // add it to item?.removeEventListener("dragstart", dragStart); the drop target
      //e.target.appendChild(draggable);
      setListenerState(true);

      setTasks(changeTasks);
    }
  }

  return <Fragment></Fragment>;
};
