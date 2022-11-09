import { Fragment, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { tasksState } from "../../global-state/tasks-atom";
import { TaskData } from "../../interfaces/task-data";
import "./drag-and-drop.css";

type DragAndDropProps = {
  taskData: TaskData;
};

export const DragAndDrop = ({ taskData }: DragAndDropProps) => {
  const [tasks, setTasks] = useRecoilState(tasksState);
  const dropBoxes = document.querySelectorAll(".dropBox");
  const [dragItems, setDragItems] = useState(
    document.querySelectorAll(".dragItem")
  );

  useEffect(() => {
    setDragItems(document.querySelectorAll(".dragItem"));
  }, [tasks]);

  //DRAG
  // attach the dragstart event handler
  dragItems?.forEach((item) => {
    if (Number(item.id.charAt(4)) === taskData.id) {
      item.addEventListener("dragstart", dragStart);
    }
  });

  // handle the dragstart
  function dragStart(e: any) {
    e.dataTransfer.setData("text/plain", e.target.id);

    dropBoxes?.forEach((box) => {
      box.addEventListener("dragenter", dragEnter);
      box.addEventListener("dragover", dragOver);
      box.addEventListener("dragleave", dragLeave);
      box.addEventListener("drop", drop);
    });
  }

  //DROP
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
    e.target.classList.remove("drag-over");

    dropBoxes?.forEach((box) => {
      box.removeEventListener("dragenter", dragEnter);
      box.removeEventListener("dragover", dragOver);
      box.removeEventListener("dragleave", dragLeave);
      box.removeEventListener("drop", drop);
    });

    // get the draggable element
    const taskDivId = e.dataTransfer.getData("text/plain");
    const dropId = Number(e.target.id.charAt(4));
    const dragId = Number(taskDivId.charAt(4));

    const changeTasks = [...tasks].map((t) => {
      if (t.id === dragId) return { ...t, columnId: dropId };
      else return t;
    });
    setTasks(changeTasks);
  }
  return <Fragment />;
};
